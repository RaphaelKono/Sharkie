class World {
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    character = new Character();
    level = level1;
    healthBar = new HealthBar();
    poisonBar = new PoisonBar();
    coinBar = new CoinBar();
    bubbles = [];
    poisonImprovement = new PoisonInPoisonBar();


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    draw() {
        this.clearPriorFrame();
        this.ctx.translate(this.camera_x, 0);
        this.addToMap();
        this.drawNewFrame();
        this.ctx.translate(-this.camera_x, 0);
    }

    setWorld() {
        this.character.world = this;
    }

    clearPriorFrame() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    addToMap() {
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.lights);
        this.addObjectToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.bubbles);
        this.addObjectsToMap(this.level.poisons);
        this.addObjectsToMap(this.level.coins);
        this.addFixedObjects();
    }

    addObjectsToMap(obj) {
        obj.forEach(o => {
            this.addObjectToMap(o);
        });
    }

    addFixedObjects() {
        this.ctx.translate(-this.camera_x, 0);
        // Space for fixed Objects:
        this.addObjectToMap(this.healthBar);
        this.addObjectToMap(this.poisonBar);
        this.addObjectToMap(this.poisonImprovement);
        this.addObjectToMap(this.coinBar);
        // space end
        this.ctx.translate(this.camera_x, 0);
    }

    addObjectToMap(mo) {
        if (mo.leftDirection) {
            this.flipImage(mo);
        }
        // if (mo.upDirection) {
        //     this.ctx.save();
        //     this.ctx.translate(mo.x + (mo.width / 2), mo.y + (mo.height / 2));
        //     mo.x = -mo.width / 2;
        //     mo.y = -mo.height / 2;
        //     this.ctx.rotate(270 * Math.PI / 180);
        // }
        mo.draw(this.ctx);
        mo.drawRect(this.ctx);
        if (mo.leftDirection) {
            this.restoreContext(mo);
        }
        // if (mo.upDirection) {
        //     mo.x = -(mo.x + mo.height / 2);
        //     mo.y = -(mo.y + mo.width / 2);
        //     this.ctx.restore();
        // }
    }

    drawNewFrame() {
        self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = -mo.x;
    }

    restoreContext(mo) {
        mo.x = -mo.x;
        this.ctx.restore();
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
            if (this.isCharacterCloseToPufferfish(enemy))
                this.pufferfishBlowUp(enemy);
            if (this.isCollisionValid(enemy))
                this.enemyCollision(enemy);
            if (this.isEnemyOutOfMap(enemy))
                this.removeEnemy(enemy, i);
            this.checkEnemyCollisionWithBubble(enemy);
        });
    }

    checkBubblesOutOfMap() {
        this.bubbles.forEach((bubble, k) => {
            if (bubble.y + bubble.height * 3 / 4 <= 0) {
                this.bubbles.splice(k, 1);
            }
        });
    }

    checkCollectibleObjectCollision() {
        this.checkPoisonCollision();
        this.checkCoinCollision();
    }

    checkPoisonCollision() {
        this.level.poisons.forEach((poison, k) => {
            if (this.character.isColliding(poison))
                this.collectPoison(k);
        });
    }

    collectPoison(k) {
        this.poisonBar.collectedPoisons++;
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
        this.character.playAudio(this.character.collectPoison_sound);
        this.coinBar.setPercentage((this.coinBar.collectedCoins / this.coinBar.maxCoins) * 100, this.coinBar.IMAGES_COIN_BAR);
        this.level.coins.splice(k, 1);
    }

    isCollisionValid(enemy) {
        return this.character.isColliding(enemy) && !this.character.isHurt() && !this.character.hasNoHealth() && enemy.isAlive;
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
            enemy.offsetTop = 0;
            enemy.offsetBottom = 0;
            enemy.offsetRight = 10;
            enemy.offsetLeft = 0;
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
    }

    dropLoot(xPos, yPos) {
        let poison = new Poison(xPos, yPos, true);
        this.level.poisons.push(poison);
    }

    isCharacterCloseToPufferfish(enemy) {
        return (enemy instanceof Pufferfish) && this.character.isNearby(enemy);
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
        setTimeout(() => {
            ambience_audio.pause();
            level_music.pause();
            this.character.playAudio(this.character.win_sound);
            document.getElementById('canvasContainer').classList.add('win-screen');
            intervalIds.forEach(clearInterval);
        }, 3000);
    }

    loseGame() {
        setTimeout(() => {
            ambience_audio.pause();
            level_music.pause();
            this.character.playAudio(this.character.lose_sound);
            document.getElementById('canvasContainer').classList.add('lose-screen');
            intervalIds.forEach(clearInterval);
        }, 3000);
    }
}