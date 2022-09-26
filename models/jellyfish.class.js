class Jellyfish extends MovableObject {
    x = 680;
    y = Math.random() * 480 - 30;
    height = 300 / 6;
    width = 211 / 6;

    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
    }


    // height = 300 / 10;
    // width = 211 / 10;
    // y = 480 - this.height - 40;

    // IMAGES_SWIMMING = [
    //     'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
    //     'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
    //     'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
    //     'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
    // ];

    // currentImage = 0;

    // constructor() {
    //     super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
    //     this.loadImages(this.IMAGES_SWIMMING);
    //     this.x = 720 - Math.random() * 200;
    //     this.animate();
    //     this.speed = 5 / 50 + Math.random() * 0.25;
    // }

    // animate() {
    //     setInterval(() => {
    //         this.moveLeft();
    //     }, 1000 / 60);

    //     setInterval(() => {
    //         this.playAnimation(this.IMAGES_WALKING);
    //     }, 1000 / 5);
    // }
}