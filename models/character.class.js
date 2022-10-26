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
    currentImage = 0;
    offsetTop = 80;
    offsetBottom = 120;
    offsetRight = 55;
    offsetLeft = 28;

    isShocked = false;
    isCreatingBubbleBool = false;
    longSleep = false;
    timerIsOn = false;
    isPoisoned = false;

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
    IMAGES_BUBBLE_ATTACK_POISON = [
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png'
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
    IMAGES_ELECTRIC_SHOCK = [
        'img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/3.png'
    ];

    IMAGES_DEAD_BY_ELECTRO_SHOCK = [
        'img/1.Sharkie/6.dead/2.Electro_shock/1.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/2.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/3.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/4.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/5.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/6.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/7.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/8.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/9.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/10.png'
    ];

    IMAGES_POISONED = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/5.png'
    ];

    IMAGES_DEAD_BY_POISON = [
        'img/1.Sharkie/6.dead/1.Poisoned/1.png',
        'img/1.Sharkie/6.dead/1.Poisoned/2.png',
        'img/1.Sharkie/6.dead/1.Poisoned/3.png',
        'img/1.Sharkie/6.dead/1.Poisoned/4.png',
        'img/1.Sharkie/6.dead/1.Poisoned/5.png',
        'img/1.Sharkie/6.dead/1.Poisoned/6.png',
        'img/1.Sharkie/6.dead/1.Poisoned/7.png',
        'img/1.Sharkie/6.dead/1.Poisoned/8.png',
        'img/1.Sharkie/6.dead/1.Poisoned/9.png',
        'img/1.Sharkie/6.dead/1.Poisoned/10.png',
        'img/1.Sharkie/6.dead/1.Poisoned/11.png',
        'img/1.Sharkie/6.dead/1.Poisoned/12.png'
    ];

    swimming_sound = new Audio('audio/swimming.mp3');
    electro_zap_sound = new Audio('audio/electro_zap.mp3');
    sleeping_sound = new Audio('audio/snoring.mp3');
    bubble_create_sound = new Audio('audio/bubbleCreated.mp3');


    constructor() {
        super().loadImage('img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SLEEP);
        this.loadImages(this.IMAGES_LONG_SLEEP);
        this.loadImages(this.IMAGES_ELECTRIC_SHOCK);
        this.loadImages(this.IMAGES_DEAD_BY_ELECTRO_SHOCK);
        this.loadImages(this.IMAGES_BUBBLE_ATTACK);
        this.loadImages(this.IMAGES_POISONED);
        this.loadImages(this.IMAGES_DEAD_BY_POISON);
        this.animate();
    }

    animate() {
        setInterval(() => this.setSwimTranslation(), 1000 / fps);
        setInterval(() => this.setImageAnimation(), 200);
    }

    setSwimTranslation() {
        if (this.isSwimming())
            this.swim();
        else if (this.isAboveGround() && this.isLongIdle())
            this.applyGravity();
        else if (this.hasNoHealth())
            this.applyGravity();
        this.world.camera_x = -this.x + 100;
    }

    setImageAnimation() {
        switch (true) {
            case this.hasNoHealth():
                if (this.DeadByShock)
                    this.playAnimationOnce(this.IMAGES_DEAD_BY_ELECTRO_SHOCK);
                if (this.DeadByPoison) {
                    this.playAnimationOnce(this.IMAGES_DEAD_BY_POISON);
                }
                break;
            case this.isPoisoned:
                this.playAnimationOnce(this.IMAGES_POISONED);
                this.resetIdleAndSleepParameters();
                break;
            case this.isShocked:
                let shockSound = this.electro_zap_sound;
                shockSound.volume = 0.1;
                if (soundIsOn)
                    shockSound.play();
                this.playAnimationOnce(this.IMAGES_ELECTRIC_SHOCK);
                this.resetIdleAndSleepParameters();
                break;
            case this.isCreatingBubbleBool:
                this.playAnimationOnce(this.IMAGES_BUBBLE_ATTACK);
                this.resetIdleAndSleepParameters();
                break;
            case this.isSwimming():
                this.playAnimation(this.IMAGES_SWIM);
                this.resetIdleAndSleepParameters();
                break;
            case this.isLongIdle():
                this.dozeOffAndSleep();
                this.sleeping_sound.volume = 0.6;
                if (soundIsOn)
                    this.sleeping_sound.play();
                else
                    this.sleeping_sound.pause();
                break;
            case !this.isSwimming():
                this.playAnimation(this.IMAGES_IDLE);
                if (this.timerIsOn == false && !this.hasNoHealth()) {
                    this.setTimer();
                }
                this.swimming_sound.pause();
                break;
        }
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

    isSwimming() {
        return (this.isSwimmingRight() || this.isSwimmingLeft() || this.isSwimmingUp() || this.isSwimmingDown()) && !this.hasNoHealth();
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

    isLongIdle() {
        return (this.wentIdle + this.requiredSleepTime < Date.now() && !this.hasNoHealth());
    }

    isFallingAsleep() {
        return this.currentImage < 14 && this.longSleep == false;
    }

    isCreatingBubble() {
        return this.world.keyboard.SPACE;
    }

    swimRight() {
        this.x += this.speed;
        this.leftDirection = false;
    }

    swimLeft() {
        this.x -= this.speed;
        this.leftDirection = true;
    }

    swimUp() {
        this.y -= this.speed;
        // this.upDirection = true;
    }

    swimDown() {
        this.y += this.speed;
    }


    playSwimmingSound() {
        if (soundIsOn)
            this.swimming_sound.play();
    }

    resetIdleAndSleepParameters() {
        this.wentIdle = Date.now();
        this.timerIsOn = false;
        this.longSleep = false;
        this.offsetTop = 80;
        this.sleeping_sound.pause();
    }

    setTimer() {
        this.wentIdle = Date.now();
        this.timerIsOn = true;
    }

    dozeOffAndSleep() {
        if (this.isFallingAsleep())
            this.playAnimationOnce(this.IMAGES_SLEEP);
        else {
            this.playAnimation(this.IMAGES_LONG_SLEEP);
            if (this.health < 100) {
                this.health += 0.05;
            }
        }
    }
}