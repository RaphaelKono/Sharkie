class Jellyfish extends MovableObject {
    x = 680 - Math.random() * 180;
    y = Math.random() * 480 - 30;
    height = 300 / 5;
    width = 211 / 5;
    offsetTop = 7;
    offsetBottom = 15;
    offsetRight = 2;
    offsetLeft = 0;
    isAlive = true;
    speedY = -1;
    acceleration = -0.01;

    IMAGES_SWIM = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
    ];
    IMAGES_TRAP = [
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png'
    ]
    speed = (Math.random() * 60) / fps;

    // electro_zap_sound = new Audio('audio/electro_zap.mp3');


    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_TRAP);
        this.animate();
    }

    animate() {
        setInterval(() => this.setJellyfishAnimation(), 200);
        setInterval(() => this.setJellyfishTranslation(), 1000 / fps);
    }

    setJellyfishAnimation() {
        switch (true) {
            case !this.isAlive:
                this.playAnimation(this.IMAGES_TRAP);
                break;
            case this.isAlive:
                this.playAnimation(this.IMAGES_SWIM);
                break;

            default:
                break;
        }

    }

    setJellyfishTranslation() {
        if (this.isAlive) {
            this.x -= this.speed;
        } else {
            this.applyGravity();
        }
    }
}