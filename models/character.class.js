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
    ]

    swimming_sound = new Audio('audio/swimming.mp3');


    constructor() {
        super().loadImage('img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SLEEP);
        this.loadImages(this.IMAGES_LONG_SLEEP);
        this.loadImages(this.IMAGES_ELECTRIC_SHOCK);
        this.loadImages(this.IMAGES_DEAD_BY_ELECTRO_SHOCK);
        this.loadImages(this.IMAGES_BUBBLE_ATTACK);
        this.animate();
    }

    animate() {
        setInterval(() => this.setSwimTranslation(), 1000 / fps);
        setInterval(() => this.setImageAnimation(), 200);
    }

    setSwimTranslation() {
        this.swimming_sound.pause();
        if (this.isSwimming())
            this.swim();
        else if (this.isAboveGround() && this.isLongIdle())
            this.applyGravity();
        this.world.camera_x = -this.x + 100;
    }

    setImageAnimation() {
        switch (true) {
            case this.hasNoHealth():
                if (this.hadDied)
                    this.playAnimationOnce(this.IMAGES_DEAD_BY_ELECTRO_SHOCK);
                break;
            case this.isShocked:
                this.playAnimationOnce(this.IMAGES_ELECTRIC_SHOCK);
                this.resetIdleAndSleepParameters();
                break;
            case this.isCreatingBubble():
                this.playAnimationOnce(this.IMAGES_BUBBLE_ATTACK);
                this.resetIdleAndSleepParameters();
                break;
            case this.isSwimming():
                this.playAnimation(this.IMAGES_SWIM);
                this.resetIdleAndSleepParameters();
                break;
            case this.isLongIdle():
                this.dozeOffAndSleep();
                break;
            case !this.isSwimming():
                this.playAnimation(this.IMAGES_IDLE);
                if (this.timerIsOn == false) {
                    this.setTimer();
                }
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
        return (this.wentIdle + this.requiredSleepTime < Date.now());
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
        this.swimming_sound.play();
    }

    resetIdleAndSleepParameters() {
        this.wentIdle = Date.now();
        this.timerIsOn = false;
        this.longSleep = false;
        this.offsetTop = 80;
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