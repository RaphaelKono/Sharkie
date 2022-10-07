class MovableObject extends DrawableObject {
    currentLoopImage = 0;
    speed;
    speedY;
    leftDirection = false;
    offsetTop = 0;
    offsetBottom = 0;
    offsetRight = 0;
    offsetLeft = 0;
    lastHit = 0;
    hadDied = false;
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
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / fps);
    }

    playAnimation(imgs) {
        let i = this.currentLoopImage % imgs.length;
        let path = imgs[i];
        this.img = this.imageCache[path];
        this.currentLoopImage++;
    }

    playAnimationOnce(imgs) {
        this.resetForCorrectAnimation();
        this.setCurrentImage(imgs);
        if (this.isFallingAsleep())
            this.offsetTop += 1.4;
        if (this.isAtLastElement(imgs.length)) {
            this.setParametersDoStopLoop();
        }
    }

    // There is a bug when Sharkie falls asleep (and it not asleep) and gets shocked that currentImage is bigger than the array of the electro shock animation
    resetForCorrectAnimation() {
        if ((this.currentImage > 2 && this.isShocked == true || this.currentImage > 7 && this.isCreatingBubbleBool == true) && !this.hadDied)
            this.currentImage = 0;
    }

    setCurrentImage(imgs) {
        let i = this.currentImage;
        let path = imgs[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    isAtLastElement(arr_length) {
        return this.currentImage == (arr_length - 1);
    }

    setParametersDoStopLoop() {
        this.longSleep = true;
        this.currentImage = 0;
        this.isShocked = false;
        this.isCreatingBubbleBool = false;
        if (this.hasNoHealth()) {
            this.hadDied = false;
            this.currentImage = 9;
        }
    }

    isColliding(obj) {
        return (this.x + this.offsetLeft + this.width - this.offsetRight) >= obj.x + obj.offsetLeft && this.x + this.offsetLeft <= (obj.x + obj.offsetLeft + obj.width - obj.offsetRight) &&
            (this.y + this.offsetTop + this.height - this.offsetBottom) >= obj.y + obj.offsetTop &&
            (this.y + this.offsetTop) <= (obj.y + obj.offsetTop + obj.height - obj.offsetBottom); // Optional &&
        // obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
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
        timePassed = timePassed / 1000;
        return timePassed < 1;
    }
}