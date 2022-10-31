class World {
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    character = new Character();
    level = level1;
    statusBar = new StatusBar();
    bubbles = [];
    poisons = [];


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
        this.addObjectsToMap(this.poisons);
        this.ctx.translate(-this.camera_x, 0);
        // Space for fixed Objects:
        this.addObjectToMap(this.statusBar);
        // space end
        this.ctx.translate(this.camera_x, 0);
    }

    addObjectsToMap(obj) {
        obj.forEach(o => {
            this.addObjectToMap(o);
        });
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
        setInterval(() => {
            this.checkCollisions();
            this.checkBubbleAttack();
            this.checkFinSlap();
        }, 1000 / 30);
    }

    checkCollisions() {
        this.checkEnemiesCollision();
        this.checkBubblesOutOfMap();

        this.statusBar.setPercentage(this.character.health);
    }

    checkEnemiesCollision() {
        this.level.enemies.forEach((enemy, i) => {
            if ((enemy instanceof Pufferfish) && this.character.isNearby(enemy))
                this.pufferfishBlowUp(enemy);
            if (this.isCollisionValid(enemy)) {
                this.addDamageToCharacter(enemy);
                if (this.character.isSlapping && enemy instanceof Pufferfish) {
                    this.addDamageToEnemy(enemy);
                }
            }
            if (this.isEnemyOutOfMap(enemy)) {
                if (enemy instanceof Pufferfish && !enemy.isAlive) {
                    this.dropLoot(enemy.x, enemy.y);
                }
                this.level.enemies.splice(i, 1);
            }
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

    isCollisionValid(enemy) {
        return this.character.isColliding(enemy) && !this.character.isHurt() && !this.character.hasNoHealth() && enemy.isAlive;
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
                this.bubbles.splice(j, 1);
            }
        });
    }

    checkBubbleAttack() {
        if (this.keyboard.SPACE) {
            if (this.character.isSlapping) {
                this.character.isSlapping = false;
                this.character.currentImage = 0;
            }
            this.character.isCreatingBubbleBool = true;
        }
    }

    checkFinSlap() {
        if (this.keyboard.SHIFT && !this.character.isShocked && !this.character.isPoisoned) {
            if (this.character.isCreatingBubbleBool) {
                this.character.isCreatingBubbleBool = false;
                this.character.currentImage = 0;
            }
            this.character.isSlapping = true;
            this.character.isCreatingBubbleBool = false;
        }
    }

    addDamageToCharacter(enemy) {
        switch (true) {
            case enemy instanceof Jellyfish:
                this.character.electro_zap_sound.currentTime = 0;
                this.character.hit(enemy.attack);
                this.character.isShocked = true;
                if (this.character.health <= 0) {
                    this.character.DeadByShock = true;
                }
                this.character.isSlapping = false;
                break;
            case enemy instanceof Pufferfish:
                if (!this.character.isSlapping) {
                    this.character.hit(enemy.attack);
                    this.character.isPoisoned = true;
                    if (this.character.health <= 0) {
                        this.character.speedY = -0.1 / fps;
                        this.character.acceleration = -0.001;
                        this.character.DeadByPoison = true;
                    }
                }
                break;
            case enemy instanceof Endboss:
                this.character.hit(40);
                this.character.isPoisoned = true;
                this.character.isSlapping = false;
                if (this.character.health <= 0) {
                    this.character.speedY = -0.1 / fps;
                    this.character.acceleration = -0.001;
                    this.character.DeadByPoison = true;
                }
                break;
        }
    }

    addDamageToEnemy(enemy) {
        switch (true) {
            case enemy instanceof Jellyfish:
                enemy.isAlive = false;
                break;
            case enemy instanceof Pufferfish:
                enemy.isAlive = false;
                break;
            default:
                break;
        }
    }

    dropLoot(xPos, yPos) {
        let poison = new Poison(xPos, yPos);
        this.poisons.push(poison);
        console.log('dropped poison');
    }
}