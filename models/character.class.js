class Character extends MovableObject {
    x = 48;
    y = 140;
    height = 1000 / 6;
    width = 815 / 6;
    world;
    speed = 3;
    speedY = 0.1 / fps;
    acceleration = 0.001;
    wentIdle;
    requiredSleepTime = 5000;
    currentSleepImage = 0;
    longSleep = false;
    timerIsOn = false;
    IMAGES_IDLE = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png'
    ];
    IMAGES_SWIM = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png'
    ];
    IMAGES_BUBBLE_ATTACK = [
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png'
    ];
    IMAGES_FIN_SLAP = [
        'img/1.Sharkie/4.Attack/Fin slap/1.png',
        'img/1.Sharkie/4.Attack/Fin slap/2.png',
        'img/1.Sharkie/4.Attack/Fin slap/3.png',
        'img/1.Sharkie/4.Attack/Fin slap/4.png',
        'img/1.Sharkie/4.Attack/Fin slap/5.png',
        'img/1.Sharkie/4.Attack/Fin slap/6.png',
        'img/1.Sharkie/4.Attack/Fin slap/7.png',
        'img/1.Sharkie/4.Attack/Fin slap/8.png'
    ];
    IMAGES_SLEEP = [
        'img/1.Sharkie/2.Long_IDLE/I1.png',
        'img/1.Sharkie/2.Long_IDLE/I2.png',
        'img/1.Sharkie/2.Long_IDLE/I3.png',
        'img/1.Sharkie/2.Long_IDLE/I4.png',
        'img/1.Sharkie/2.Long_IDLE/I5.png',
        'img/1.Sharkie/2.Long_IDLE/I6.png',
        'img/1.Sharkie/2.Long_IDLE/I7.png',
        'img/1.Sharkie/2.Long_IDLE/I8.png',
        'img/1.Sharkie/2.Long_IDLE/I9.png',
        'img/1.Sharkie/2.Long_IDLE/I10.png',
        'img/1.Sharkie/2.Long_IDLE/I11.png',
        'img/1.Sharkie/2.Long_IDLE/I12.png',
        'img/1.Sharkie/2.Long_IDLE/I13.png',
        'img/1.Sharkie/2.Long_IDLE/I14.png'
    ];
    IMAGES_LONG_SLEEP = [
        'img/1.Sharkie/2.Long_IDLE/I11.png',
        'img/1.Sharkie/2.Long_IDLE/I12.png',
        'img/1.Sharkie/2.Long_IDLE/I13.png',
        'img/1.Sharkie/2.Long_IDLE/I14.png'
    ];
    swimming_sound = new Audio('audio/swimming.mp3');


    constructor() {
        super().loadImage('img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SLEEP);
        this.loadImages(this.IMAGES_LONG_SLEEP);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.swimming_sound.pause();
            this.setSwimTranslation();
        }, 1000 / fps);
        setInterval(() => {
            this.setImageAnimation();
        }, 200);
    }

    setSwimTranslation() {
        if (this.isSwimming())
            this.swim();
        else if (this.isAboveGround() && this.isLongIdle())
            this.applyGravity();
        this.world.camera_x = -this.x + 100;
    }

    setImageAnimation() {
        switch (true) {
            case this.isSwimming():
                this.playAnimation(this.IMAGES_SWIM);
                this.resetIdleAndSleepParameters();
                break;
            case this.isLongIdle():
                if (this.fellAsleep())
                    this.playFallAsleepAnimation(this.IMAGES_SLEEP);
                else
                    this.playAnimation(this.IMAGES_LONG_SLEEP);
                break;
            case !this.isSwimming():
                this.playAnimation(this.IMAGES_IDLE);
                if (this.timerIsOn == false) {
                    this.setTimer();
                }
                break;
        }
    }

    isSwimming() {
        return this.isSwimmingRight() || this.isSwimmingLeft() || this.isSwimmingUp() || this.isSwimmingDown();
    }

    isSwimmingRight() {
        return this.world.keyboard.RIGHT && this.isInRightBorder();
    }

    isSwimmingLeft() {
        return this.world.keyboard.LEFT && this.isInLeftBorder();
    }

    isSwimmingUp() {
        return this.world.keyboard.UP && this.isInTopBorder();
    }

    isSwimmingDown() {
        return this.world.keyboard.DOWN && this.isAboveGround();
    }

    isInRightBorder() {
        return this.x < 2250;
    }

    isInLeftBorder() {
        return this.x > -618;
    }

    isInTopBorder() {
        return this.y > -65;
    }

    isAboveGround() {
        return this.y < 320;
    }

    isLongIdle() {
        return (this.wentIdle + this.requiredSleepTime < Date.now());
    }

    fellAsleep() {
        return this.currentSleepImage < 14 && this.longSleep == false;
    }

    swim() {
        this.playSwimmingSound();
        this.resetGravity();
        if (this.isSwimmingRight())
            this.swimRight();
        if (this.isSwimmingLeft())
            this.swimLeft();
        if (this.isSwimmingUp())
            this.swimUp();
        if (this.isSwimmingDown())
            this.swimDown();
    }

    swimRight() {
        this.x += this.speed;
        this.leftDirection = false;
        this.resetGravity();
    }

    swimLeft() {
        this.x -= this.speed;
        this.leftDirection = true;
        this.resetGravity();
    }

    swimUp() {
        this.y -= this.speed;
        this.resetGravity();
        // this.upDirection = true;
    }

    swimDown() {
        this.resetGravity();
        this.y += this.speed;
    }


    playSwimmingSound() {
        this.swimming_sound.play();
    }

    applyGravity() {
        this.y += this.speedY;
        this.speedY += this.acceleration;
        if (!this.isAboveGround())
            this.resetGravity();
    }

    resetGravity() {
        this.speedY = 0.1 / fps;
        this.acceleration = 0.001;
    }

    playFallAsleepAnimation(imgs) {
        let i = this.currentSleepImage;
        let path = imgs[i];
        this.img = this.imageCache[path];
        this.currentSleepImage++;
        if (this.currentSleepImage == 13) {
            this.longSleep = true;
        }
    }

    resetIdleAndSleepParameters() {
        this.wentIdle = Date.now();
        this.timerIsOn = false;
        this.longSleep = false;
        this.currentSleepImage = 0;
    }

    setTimer() {
        this.wentIdle = Date.now();
        this.timerIsOn = true;
    }
}