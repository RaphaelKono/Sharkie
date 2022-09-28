class Character extends MovableObject {
    x = 48;
    y = 140;
    height = 1000 / 6;
    width = 815 / 6;
    world;
    speed = 3;
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
    swimming_sound = new Audio('audio/swimming.mp3');


    constructor() {
        super().loadImage('img/1.Sharkie/3.Swim/1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.swimming_sound.pause();
            this.setSwimTranslation();
        }, 1000 / fps);
        setInterval(() => {
            if (this.isSwimming()) {
                this.playAnimation(this.IMAGES_SWIM);
            }
        }, 200);
    }

    setSwimTranslation() {
        if (this.isSwimmingRight())
            this.swimRight();
        if (this.isSwimmingLeft())
            this.swimLeft();
        if (this.isSwimmingUp())
            this.swimUp();
        if (this.isSwimmingDown())
            this.swimDown();
        if (!this.isSwimming() && this.isInDownBorder())
            this.swimDownDefault(2 / fps);
        else
            this.playSwimmingSound();
        this.world.camera_x = -this.x + 100;
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
        return this.world.keyboard.DOWN && this.isInDownBorder();
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

    isInDownBorder() {
        return this.y < 340;
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

    swimDownDefault(speed) {
        this.y += speed;
    }

    playSwimmingSound() {
        this.swimming_sound.play();
    }
}