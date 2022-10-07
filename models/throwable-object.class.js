class ThrowableObject extends MovableObject {
    height = 25;
    width = 25;
    speed = 2;
    speedY = -0.1;
    acceleration = -0.005;
    x = 100;
    y = 300;

    IMAGE_BUBBLE = ['img/1.Sharkie/4.Attack/Bubble trap/Bubble.png'];

    constructor() {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.bubble();
    }

    bubble() {
        setInterval(() => {
            this.x += this.speed;
            this.applyGravity();
        }, 1000 / fps)
    }
}