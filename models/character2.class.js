class Character2 extends MovableObject {
    x = 48;
    y = 140;
    height = 1000 / 6;
    width = 815 / 6;
    world;
    speed = 0;

    acceleration = 0.001;
    wentIdle;
    requiredSleepTime = 5000;
    currentImage = 0;
    offsetTop = 80;
    offsetBottom = 120;
    offsetRight = 55;
    offsetLeft = 28;
    driftbreak = 0.01;
    verticalSwimTimerOn = false;
    swamVertical = this.y;

    isShocked = false;
    isCreatingBubbleBool = false;
    longSleep = false;
    sleepTimerIsOn = false;
    isPoisoned = false;
    isSlapping = false;
    poisonIsActivated = false;
    leftDirection = false;
    rightDirection = false;
    upDirection = false;
    downDirection = false;
    DeadByPoison = false;
    DeadByShock = false;

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
    bubble_hit_sound = new Audio('audio/bubbleHits.mp3');
    ouch_sound = new Audio('audio/ouch.mp3');
    slap_sound = new Audio('audio/finSlap.mp3');
    collectPoison_sound = new Audio('audio/collectPoison.mp3');
    collectCoin_sound = new Audio('audio/collectCoin.mp3');
    activate_poison_sound = new Audio('audio/activatePoison.mp3');
    endboss_damage_sound = new Audio('audio/endbossDmg.mp3');
    win_sound = new Audio('audio/win.mp3');
    lose_sound = new Audio('audio/lose.mp3');


    constructor() {
        super().loadImage('img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SLEEP);
        this.loadImages(this.IMAGES_LONG_SLEEP);
        this.loadImages(this.IMAGES_ELECTRIC_SHOCK);
        this.loadImages(this.IMAGES_DEAD_BY_ELECTRO_SHOCK);
        this.loadImages(this.IMAGES_BUBBLE_ATTACK);
        this.loadImages(this.IMAGES_BUBBLE_ATTACK_POISON);
        this.loadImages(this.IMAGES_POISONED);
        this.loadImages(this.IMAGES_DEAD_BY_POISON);
        this.loadImages(this.IMAGES_FIN_SLAP);
        this.animate();
    }


    animate() {
        let self = this;
        setCustomInterval(() => setNewPausableFn(self, self.setSwimTranslation), 1000 / fps);
        setCustomInterval(() => setNewPausableFn(self, self.setImageAnimation), 150);
        setCustomInterval(() => setNewPausableFn(self, self.setAttackAnimation), 100);
    }

    setSwimTranslation(self) {
        if (self.isSwimming())
            self.swim();
        else if (self.isAboveGround() && self.isLongIdle())
            self.applyGravity();
        else if (self.hasNoHealth())
            self.applyGravity();
        else if (!self.isSwimming() && !self.isLongIdle() && !self.hasChangedDirection())
            self.drift();
        if (self.x < 2250) {
            world.camera_x = -self.x + 100;
        }

    }

    setImageAnimation(self) {
        switch (true) {
            case self.hasNoHealth():
                self.noHealthAnimation();
                break;
            case self.isSlapping:
                break;
            case self.isPoisoned:
                self.poisonedAnimation();
                break;
            case self.isShocked:
                self.shockedAnimation();
                break;
            case self.isCreatingBubbleBool:
                break;
            case self.isSwimming():
                self.swimAnimation();
                break;
            case self.isLongIdle():
                self.sleepAnimation();
                break;
            case !self.isSwimming():
                self.idleAnimation();
                break;
        }
    }

    setAttackAnimation(self) {
        switch (true) {
            case self.hasNoHealth():
                break;
            case self.isSlapping:
                self.slappingAnimation();
                break;
            case self.isPoisoned:
                break;
            case self.isShocked:
                break;
            case self.isCreatingBubbleBool:
                self.bubbleAnimation();
                break;
            case self.isSwimming():
                break;
            case self.isLongIdle():
                break;
            case !self.isSwimming():
                break;
        }
    }

    swim() {
        this.playAudio(this.swimming_sound);
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

    drift() {
        if (this.leftDirection)
            this.driftLeft();
        if (this.rightDirection)
            this.driftRight();
        // if (this.upDirection)
        //     this.driftUp();
        // if (this.downDirection)
        //     this.driftDown();
    }

    hasChangedDirection() {
        return this.hasChangedxDirection() || this.hasChangedyDirection();
    }

    hasChangedxDirection() {
        return this.world.keyboard.lastTwoActions[0] == 68 && this.world.keyboard.lastTwoActions[1] == 65 ||
            this.world.keyboard.lastTwoActions[0] == 65 && this.world.keyboard.lastTwoActions[1] == 68;
    }

    hasChangedyDirection() {
        return this.world.keyboard.lastTwoActions[0] == 83 && this.world.keyboard.lastTwoActions[1] == 87 ||
            this.world.keyboard.lastTwoActions[0] == 87 && this.world.keyboard.lastTwoActions[1] == 83;
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
        return this.x < 2750;
    }

    // 2250

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
        this.rightDirection = true;
        this.upDirection = false;
        this.downDirection = false;
        this.accelerate();
    }

    driftRight() {
        this.x += this.speed;
        this.slowDown();
    }

    swimLeft() {
        this.x -= this.speed;
        this.leftDirection = true;
        this.rightDirection = false;
        this.upDirection = false;
        this.downDirection = false;
        this.accelerate();
    }

    driftLeft() {
        this.x -= this.speed;
        this.slowDown();
    }

    swimUp() {
        this.y -= this.speed;
        if (!this.world.keyboard.LEFT) {
            this.leftDirection = false;
        }
        this.rightDirection = false;
        this.upDirection = true;
        this.downDirection = false;
        this.accelerate();
    }

    swimDown() {
        this.y += this.speed;
        if (!this.world.keyboard.LEFT) {
            this.leftDirection = false;
        }

        this.rightDirection = false;
        this.upDirection = false;
        this.downDirection = true;
        this.accelerate();
    }


    accelerate() {
        if (this.speed <= 3) {
            this.speed = this.speed + (0.2 + this.driftbreak);
        }
        if (this.speed >= 3)
            this.speed = 3;
    }

    slowDown() {
        if (this.speed >= 0) {
            this.speed = this.speed - (0.05 - this.driftbreak);
        }
        if (this.speed <= 0)
            this.speed = 0;
    }

    accelerateY() {
        if (this.speedY <= 3) {
            this.speedY = this.speedY + (0.2 + this.driftbreak);
        }
        if (this.speedY >= 3)
            this.speedY = 3;
    }

    slowDownY() {
        if (this.speedY >= 0) {
            this.speedY = this.speedY - (0.05 - this.driftbreak);
        }
        if (this.speedY <= 0)
            this.speedY = 0;
    }


    noHealthAnimation() {
        if (this.DeadByShock)
            this.playAnimationOnce(this.IMAGES_DEAD_BY_ELECTRO_SHOCK);
        if (this.DeadByPoison) {
            this.playAnimationOnce(this.IMAGES_DEAD_BY_POISON);
        }
    }

    slappingAnimation() {
        this.playAnimationOnce(this.IMAGES_FIN_SLAP);
        this.resetIdleAndSleepParameters();
    }

    poisonedAnimation() {
        this.playAnimationOnce(this.IMAGES_POISONED);
        this.resetIdleAndSleepParameters();
    }

    shockedAnimation() {
        let shockSound = this.electro_zap_sound;
        shockSound.volume = 0.1;
        this.playAudio(shockSound);
        this.playAnimationOnce(this.IMAGES_ELECTRIC_SHOCK);
        this.resetIdleAndSleepParameters();
    }

    bubbleAnimation() {
        if (!this.poisonIsActivated)
            this.playAnimationOnce(this.IMAGES_BUBBLE_ATTACK);
        else
            this.playAnimationOnce(this.IMAGES_BUBBLE_ATTACK_POISON);
        this.resetIdleAndSleepParameters();
    }

    swimAnimation() {
        this.playAnimation(this.IMAGES_SWIM);
        this.resetIdleAndSleepParameters();
    }

    sleepAnimation() {
        this.dozeOffAndSleep();
        this.sleeping_sound.volume = 0.6;
        this.playAudio(this.sleeping_sound);
    }

    idleAnimation() {
        this.playAnimation(this.IMAGES_IDLE);
        if (this.sleepTimerIsOn == false && !this.hasNoHealth()) {
            this.setSleepTimer();
        }
        this.swimming_sound.pause();
    }

    resetIdleAndSleepParameters() {
        this.wentIdle = Date.now();
        this.sleepTimerIsOn = false;
        this.longSleep = false;
        this.offsetTop = 80;
        this.sleeping_sound.pause();
    }

    setSleepTimer() {
        this.wentIdle = Date.now();
        this.sleepTimerIsOn = true;
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

    playAudio(audio_obj) {
        if (soundIsOn)
            audio_obj.play();
        else
            audio_obj.pause();
    }
}