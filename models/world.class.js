class World extends DrawWorld {
    keyboard;
    camera_x = 0;
    character = new Character();
    level;
    levelFn;
    healthBar = new HealthBar(10, 0, 158 / 3.5, 595 / 3.5, true);
    poisonBar = new PoisonBar();
    poisonImprovement = new PoisonInPoisonBar();
    coinBar = new CoinBar();
    bossBar = new HealthBar(250, 10, 158 / 2.5, 595 / 2.5, false);
    bossImgInBar = new BossInBossBar();
    bubbles = [];
    endbossIntroduced = false;



    constructor(canvas, keyboard, levelFn) {
        super().ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.level = levelFn();
        this.levelFn = levelFn;
        this.draw();
        this.setWorld();
        this.run();
    }



    run() {
        let self = this;
        setCustomInterval(() => setNewPausableFn(self, this.updateWorld), 1000 / 30);
    }

    updateWorld(self) {
        self.checkCollisions();
        self.checkBubbleAttack();
        self.checkFinSlap();
        self.checkPoisonBubbleActivation();
    }

    checkCollisions() {
        this.checkEnemiesCollisions();
        this.checkBubblesOutOfMap();
        this.checkCollectibleObjectCollision();
        this.healthBar.setPercentage(this.character.health, this.healthBar.IMAGES_HEALTH_BAR);
    }

    checkEnemiesCollisions() {
        this.level.enemies.forEach((enemy, i) => {
            if (this.isCharacterCloseToEnemy(enemy))
                this.setCloseEnemy(enemy)
            else if (enemy instanceof Endboss)
                enemy.isAttacking = false;
            if (this.isCollisionValid(enemy))
                this.enemyCollision(enemy);
            if (this.isEnemyOutOfMap(enemy))
                this.removeEnemy(enemy, i);
            this.checkEnemyCollisionWithBubble(enemy);
        });
    }

    checkBubblesOutOfMap() {
        this.bubbles.forEach((bubble, k) => {
            if (bubble.y + bubble.height * 3 / 4 <= 0)
                this.bubbles.splice(k, 1);
            this.level.barriers.forEach((barrier) => {
                if (bubble.isColliding(barrier))
                    this.bubbles.splice(k, 1);
            })
        });
    }

    checkCollectibleObjectCollision() {
        this.checkPoisonCollision();
        this.checkCoinCollision();
        this.checkHeartCollision();
    }

    checkPoisonCollision() {
        this.level.poisons.forEach((poison, k) => {
            if (this.character.isColliding(poison))
                this.collectPoison(k);
        });
    }

    collectPoison(k) {
        this.poisonBar.collectedPoisons++;
        this.character.collectPoison_sound.currentTime = 0;
        this.character.playAudio(this.character.collectPoison_sound);
        if (this.poisonBar.isPoisonous)
            this.poisonBar.setPercentage((this.poisonBar.collectedPoisons / this.poisonBar.maxPoisons) * 100, this.poisonBar.IMAGES_POISON_BAR_ACTIVATED);
        else
            this.poisonBar.setPercentage((this.poisonBar.collectedPoisons / this.poisonBar.maxPoisons) * 100, this.poisonBar.IMAGES_POISON_BAR);
        this.level.poisons.splice(k, 1);
    }

    checkCoinCollision() {
        this.level.coins.forEach((coin, k) => {
            if (this.character.isColliding(coin))
                this.collectCoin(k);
        });
    }

    collectCoin(k) {
        this.coinBar.collectedCoins++;
        this.character.collectCoin_sound.currentTime = 0;
        this.character.playAudio(this.character.collectCoin_sound);
        this.coinBar.setPercentage((this.coinBar.collectedCoins / this.coinBar.maxCoins) * 100, this.coinBar.IMAGES_COIN_BAR);
        this.level.coins.splice(k, 1);
    }

    checkHeartCollision() {
        this.level.hearts.forEach((heart, k) => {
            if (this.character.isColliding(heart))
                this.collectHeart(k);
        });
    }

    collectHeart(k) {
        this.character.health = 100;
        this.character.playAudio(this.character.health_sound);
        this.level.hearts.splice(k, 1);
    }

    isCollisionValid(enemy) {
        return this.character.isColliding(enemy) && !this.character.isHurt() && !this.character.hasNoHealth() && enemy.isAlive && !this.character.godMode;
    }

    setCloseEnemy(enemy) {
        if (enemy instanceof Pufferfish)
            this.pufferfishBlowUp(enemy);
        if (enemy instanceof Endboss)
            enemy.isAttacking = true;
    }

    enemyCollision(enemy) {
        this.addDamageToCharacter(enemy);
        if (this.isCharacterSlappingPufferfish(enemy)) {
            this.addDamageToEnemy(enemy);
        }
    }

    removeEnemy(enemy, i) {
        if (enemy instanceof Pufferfish && !enemy.isAlive) {
            this.dropLoot(enemy.x, enemy.y);
        }
        this.level.enemies.splice(i, 1);
    }

    isEnemyOutOfMap(enemy) {
        return enemy.y + enemy.height * 3 / 4 <= 0 || enemy.x <= -720 || !enemy.isAboveGround();
    }

    pufferfishBlowUp(enemy) {
        if (!enemy.isBlowingUp && !enemy.isBlownUp) {
            enemy.isBlowingUp = true;
            enemy.offsetTopNearby = 0;
            enemy.offsetBottomNearby = 0;
            enemy.offsetRightNearby = 10;
            enemy.offsetLeftNearby = 0;
            enemy.offsetTop = 5;
            enemy.offsetBottom = 10;
            enemy.offsetRight = 20;
            enemy.offsetLeft = 5;
        }
    }

    checkEnemyCollisionWithBubble(enemy) {
        this.bubbles.forEach((bubble, j) => {
            if (enemy.isColliding(bubble)) {
                if (enemy instanceof Jellyfish) {
                    this.addDamageToEnemy(enemy);
                }
                if (enemy instanceof Endboss && this.poisonBar.isPoisonous && !enemy.isHurt() && enemy.isAlive)
                    this.addDamageToEnemy(enemy);
                this.bubbles.splice(j, 1);
            }
        });
    }

    checkBubbleAttack() {
        if (this.keyboard.SPACE) {
            if (this.character.isSlapping) {
                this.stopSlapping();
            }
            this.character.isCreatingBubbleBool = true;
        }
    }

    stopSlapping() {
        this.character.isSlapping = false;
        this.character.currentImage = 0;
    }

    checkFinSlap() {
        if (this.keyboard.SHIFT && !this.character.isShocked && !this.character.isPoisoned) {
            if (this.character.isCreatingBubbleBool) {
                this.stopBubbling();
            }
            this.character.isSlapping = true;
            this.character.isCreatingBubbleBool = false;
        }
    }

    stopBubbling() {
        this.character.isCreatingBubbleBool = false;
        this.character.currentImage = 0;
    }

    checkPoisonBubbleActivation() {
        if (this.keyboard.ENTER && this.coinBar.percentage >= 100 && !this.isPoisonActivationCooldown()) {
            this.togglePoison();
        }
    }

    togglePoison() {
        this.character.poisonIsActivated = !this.character.poisonIsActivated;
        if (this.character.poisonIsActivated)
            this.activatePoison();
        else
            this.deactivatePoison();
        this.poisonActivationCooldown = Date.now();
    }

    activatePoison() {
        this.character.playAudio(this.character.activate_poison_sound);
        this.poisonBar.isPoisonous = true;
        this.poisonBar.setPercentage((this.poisonBar.collectedPoisons / this.poisonBar.maxPoisons) * 100, this.poisonBar.IMAGES_POISON_BAR_ACTIVATED);
    }

    deactivatePoison() {
        this.character.playAudio(this.character.collectPoison_sound);
        this.poisonBar.isPoisonous = false;
        this.poisonBar.setPercentage((this.poisonBar.collectedPoisons / this.poisonBar.maxPoisons) * 100, this.poisonBar.IMAGES_POISON_BAR);
    }


    isPoisonActivationCooldown() {
        let timePassed = Date.now() - this.poisonActivationCooldown;
        timePassed = timePassed / 1000;
        return timePassed < 3.5;
    }

    addDamageToCharacter(enemy) {
        if (enemy instanceof Jellyfish)
            this.jellyfishDMGToCharacter(enemy.attack);
        else if (enemy instanceof Pufferfish)
            this.pufferfishDMGToCharacter(enemy.attack);
        else if (enemy instanceof Endboss)
            this.endbossDMGToCharacter(enemy.attack);
    }

    addDamageToEnemy(enemy) {
        switch (true) {
            case enemy instanceof Jellyfish:
                this.hitJellyfish(enemy);
                break;
            case enemy instanceof Pufferfish:
                enemy.isAlive = false;
                break;
            case enemy instanceof Endboss:
                this.hitEndboss(enemy);
                break;
        }
    }

    hitJellyfish(enemy) {
        this.character.bubble_hit_sound.volume = 0.2;
        this.character.playAudio(this.character.bubble_hit_sound);
        enemy.isAlive = false;
    }

    hitEndboss(enemy) {
        enemy.hit(20);
        if (enemy.health <= 0) {
            enemy.isAlive = false;
            this.winGame(enemy)
        }
        this.character.playAudio(this.character.endboss_damage_sound);
        this.bossBar.setPercentage(enemy.health, this.bossBar.IMAGES_BOSS_HEALTH_BAR);
    }

    dropLoot(xPos, yPos) {
        let poison = new Poison(xPos, yPos, true);
        this.level.poisons.push(poison);
    }

    isCharacterCloseToEnemy(enemy) {
        return (enemy instanceof Pufferfish || enemy instanceof Endboss) && this.character.isNearby(enemy);
    }

    isCharacterSlappingPufferfish(enemy) {
        return this.character.isSlapping && enemy instanceof Pufferfish && this.character.currentImage == 5;
    }

    jellyfishDMGToCharacter(enemyATT) {
        this.character.electro_zap_sound.currentTime = 0;
        this.character.hit(enemyATT);
        this.character.isShocked = true;
        if (this.character.health <= 0) {
            this.character.DeadByShock = true;
            this.loseGame();
        }
        this.character.isSlapping = false;
    }

    pufferfishDMGToCharacter(enemyATT) {
        if (!this.character.isSlapping) {
            this.character.hit(enemyATT);
            this.character.isPoisoned = true;
            this.character.playAudio(this.character.ouch_sound);
            this.checkCharacterHealth();
        }
    }

    endbossDMGToCharacter(enemyATT) {
        this.character.hit(enemyATT);
        this.character.isPoisoned = true;
        this.character.playAudio(this.character.ouch_sound);
        this.character.isSlapping = false;
        this.checkCharacterHealth();
    }

    checkCharacterHealth() {
        if (this.character.health <= 0) {
            this.character.speedY = -0.1 / fps;
            this.character.acceleration = -0.001;
            this.character.DeadByPoison = true;
            this.loseGame();
        }
    }

    winGame() {
        this.character.godMode = true;
        availableLevel++;
        setTimeout(() => this.stopLvl(this.character.win_sound, 'win-screen'), 3000);
    }

    loseGame() {
        this.character.godMode = true;
        setTimeout(() => this.stopLvl(this.character.lose_sound, 'lose-screen'), 3000);
    }

    stopLvl(soundObj, className) {
        this.stopLvlMusic();
        intervalIds.forEach(clearInterval);
        intervalIds = [];
        gameHasStarted = false;
        this.character.playAudio(soundObj);
        this.renderEndScreen(className);
    }

    stopLvlMusic() {
        this.character.sleeping_sound.pause();
        ambience_audio.pause();
        level_music.pause();
        this.character.endboss_music_sound.pause();
    }

    renderEndScreen(className) {
        inGameScreen.classList.add('d-none');
        canvasContainer.classList.add(className);
        document.getElementById('endScreen').classList.remove('d-none');
        if (className === 'win-screen')
            document.getElementById('endScreenBtnPanel').innerHTML = this.templateWinScreen();
        if (className === 'lose-screen' || className === 'win-screen' && this.levelFn == level2)
            document.getElementById('endScreenBtnPanel').innerHTML = this.templateLoseScreen();
    }

    templateWinScreen() {
        return `
        <button onclick="restartLevel(${this.levelFn})" class="choose-btn">
            <div class="d-flex justify-content-center align-items-center">Restart Level</div>
        </button>
        <button onclick="startNextLevel()" class="choose-btn">
            <div class="d-flex justify-content-center align-items-center">Continue</div>
        </button>
        `;
    }

    templateLoseScreen() {
        return `
        <button onclick="restartLevel(${this.levelFn})" class="choose-btn">
            <div class="d-flex justify-content-center align-items-center">Restart Level</div>
        </button>
        <button onclick="renderStartScreen()" class="choose-btn">
            <div class="d-flex justify-content-center align-items-center">Start Screen</div>
        </button>
        `;
    }


}