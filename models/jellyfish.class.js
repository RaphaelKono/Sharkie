class Jellyfish extends MovableObject {
    x = 680 - Math.random() * 180;
    y = Math.random() * 480 - 30;
    height = 300 / 5;
    width = 211 / 5;
    offsetTop = 7;
    offsetBottom = 15;
    offsetRight = 2;
    offsetLeft = 0;
    IMAGES_SWIM = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
    ];
    speed = (Math.random() * 60) / fps;

    electro_zap_sound = new Audio('audio/electro_zap.mp3');


    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIM);
        }, 200);

        this.moveLeft();
    }
}