class MovableObject extends DrawableObject {
    speed;
    speedY;
    acceleration;
    health = 100;

    leftDirection = false;
    DeadByPoison = false;
    DeadByShock = false;
    // upDirection = false;


    applyGravity() {
        this.y += this.speedY;
        this.speedY += this.acceleration;
        if (!this.isAboveGround())
            this.resetGravity();
    }

    isAboveGround() {
        return this.y + this.offsetTop + this.height - this.offsetBottom < 450;
    }

    resetGravity() {
        this.speedY = 0.1 / fps;
        this.acceleration = 0.001;
    }

    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {
        let self = this;
        setCustomInterval(() => setNewPausableFn(self, this.setXPos), 1000 / fps);
    }

    setXPos(self) {
        self.x -= self.speed;
    }

    playAnimationOnce(imgs) {
        this.resetForCorrectAnimation(imgs.length);
        this.setCurrentImage(imgs);
        if (this.isFallingAsleep())
            this.offsetTop += 1.4;
        if (this.DeadByPoison)
            this.offsetTop -= 4;
        if (this.isSlapping && this.currentImage == imgs.length - 3) {
            this.slap_sound.volume = 0.2;
            this.playAudio(this.slap_sound);
        }
        if (this.isAtLastElement(imgs.length)) {
            this.setParametersDoStopLoop(imgs.length);
        }
    }

    // There is a bug when Sharkie gets shocked while being in the once animated falling-asleep animation. It becomes possible that currentImage is bigger than the array of the electro shock animation.
    resetForCorrectAnimation(arr_length) {
        if ((this.currentImage > 2 && this.isShocked == true || this.currentImage > 5 && this.isPoisoned || this.currentImage > 7 && this.isCreatingBubbleBool == true || this.currentImage >= arr_length) && !this.DeadByShock && !this.DeadByPoison)
            this.currentImage = 0;
    }

    setCurrentImage(imgs) {
        let i = this.currentImage;
        let path = imgs[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    isAtLastElement(arr_length) {
        return this.currentImage == (arr_length);
    }

    setParametersDoStopLoop(IMG_length) {
        this.longSleep = true;
        this.currentImage = 0;
        if (this.isCreatingBubbleBool && !this.isShocked && !this.isPoisoned)
            this.bubbleCreationAtLastElement();
        this.isCreatingBubbleBool = false;
        this.isShocked = false;
        this.isPoisoned = false;
        this.isSlapping = false;
        if (this.hasNoHealth()) {
            this.DeadByShock = false;
            this.DeadByPoison = false;
            this.currentImage = IMG_length;
        }
    }


    isNearby(obj) {
        return (this.x + this.offsetLeft + this.width - this.offsetRight) >= obj.x + obj.offsetLeftNearby && this.x + this.offsetLeft <= (obj.x + obj.offsetLeftNearby + obj.width - obj.offsetRightNearby) &&
            (this.y + this.offsetTop + this.height - this.offsetBottom) >= obj.y + obj.offsetTopNearby &&
            (this.y + this.offsetTop) <= (obj.y + obj.offsetTopNearby + obj.height - obj.offsetBottomNearby);
    }

    hit(dmg) {
        if (this.health > 0)
            this.health -= dmg;
        this.lastHit = Date.now();
    }

    hasNoHealth() {
        return this.health <= 0;
    }

    isHurt() {
        let timePassed = Date.now() - this.lastHit;
        timePassed = timePassed / 1100;
        return timePassed < 1;
    }

    bubbleCreationAtLastElement() {
        // Sharkie shall not create poisonous bubbles when no poison is collected. Bubble-creation then interrupted.
        if (world.poisonBar.isPoisonous && world.poisonBar.percentage <= 0) {
            return;
        }
        let bubble = new ThrowableObject(this.bubbleX(), this.bubbleY());
        this.world.bubbles.push(bubble);
    }

    bubbleX() {
        return this.x + this.width + this.offsetLeft - this.offsetRight;
    }
    bubbleY() {
        return this.y + this.height / 2 + 5;
    }
}