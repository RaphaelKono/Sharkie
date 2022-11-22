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