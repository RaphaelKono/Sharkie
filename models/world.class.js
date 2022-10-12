class World {
    ctx;
    canvas;
    keyboard;
    camera_x = 0;
    character = new Character();
    level = level1;
    statusBar = new StatusBar();
    bubbles = [];

    ambience_audio = new Audio('audio/ambience.mp3');


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
            setTimeout(() => {
                let ambience = this.ambience_audio;
                ambience.volume = 0.4;
                ambience.play();
            }, 3000);
        }, 1000 / 30);
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isHurt() && !this.character.hasNoHealth()) {
                this.addDamage(enemy);
            }
        })
        this.statusBar.setPercentage(this.character.health);
    }

    checkBubbleAttack() {
        if (this.keyboard.SPACE) {
            this.character.isCreatingBubbleBool = true;
        }
    }

    addDamage(enemy) {
        switch (true) {
            case this instanceof Character:

                break;
            case enemy instanceof Jellyfish:
                enemy.electro_zap_sound.pause();
                this.character.hit(20);
                this.character.isShocked = true;
                if (this.character.health <= 0) {
                    this.character.hadDied = true;
                }
                let shockSound = enemy.electro_zap_sound;
                shockSound.volume = 0.5;
                shockSound.currentTime = 0;
                shockSound.play();
                break;
            case enemy instanceof Endboss:
                this.character.hit(40);
                break;
        }
    }
}