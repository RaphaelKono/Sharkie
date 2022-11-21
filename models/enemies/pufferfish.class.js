class Pufferfish extends MovableObject {
    x = 250;
    y = 400;
    height = 198 / 4;
    width = 241 / 4;
    offsetTop = 0;
    offsetBottom = 13;
    offsetRight = 7;
    offsetLeft = 0;
    offsetTopNearby = -100;
    offsetBottomNearby = -200;
    offsetRightNearby = -300;
    offsetLeftNearby = -150;
    isAlive = true;
    speedG = 3;
    speed = 1;
    attack = 20;
    isBlownUp = false;
    isBlowingUp = false;
    currentImage = 0;

    IMAGES_SWIM = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ];

    IMAGES_TRANSITION = [
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png'
    ];

    IMAGES_BUBBLESWIM = [
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png'
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 2 (can animate by going down to the floor after the Fin Slap attack).png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 3 (can animate by going down to the floor after the Fin Slap attack).png'
    ];



    constructor(x0, y0, horizontalBool, verticalBool, distanceX, distanceY) {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_TRANSITION);
        this.loadImages(this.IMAGES_BUBBLESWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.setEnemyProperties(x0, y0, horizontalBool, verticalBool, distanceX, distanceY);
        this.animate();
    }

    animate() {
        let self = this;
        setCustomInterval(() => setNewPausableFn(self, this.setPufferfishAnimation), 200);
        setCustomInterval(() => setNewPausableFn(self, this.setPufferfishTranslation), 1000 / fps);
    }

    setPufferfishAnimation(self) {
        switch (true) {
            case !self.isAlive:
                self.singleAnimationOfPufferfish(self.IMAGES_DEAD);
                break;
            case self.isBlowingUp:
                self.singleAnimationOfPufferfish(self.IMAGES_TRANSITION);
                break;
            case self.isBlownUp:
                self.playAnimation(self.IMAGES_BUBBLESWIM);
                break;
            case self.isAlive:
                self.playAnimation(self.IMAGES_SWIM);
                break;
        }
    }

    singleAnimationOfPufferfish(imgs) {
        if (this.currentImage >= imgs.length) {
            this.currentImage = 0;
        }
        this.setCurrentImage(imgs);
        if (this.isAtLastElement(imgs.length)) {
            this.isBlownUp = true;
            this.isBlowingUp = false;
            if (!this.isAlive) {
                this.currentImage = 2;
            }
        }
    }

    setPufferfishTranslation(self) {
        if (self.isAlive) {
            self.enemyMovement();
        } else {
            self.deathSlap();
        }
    }

    deathSlap() {
        if (this.isAboveGround()) {
            this.y += this.speedG;
            this.x -= 2;
        }
    }
}