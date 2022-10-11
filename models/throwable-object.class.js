class ThrowableObject extends MovableObject {
    height = 25;
    width = 25;
    speed = 3.5;
    speedY = -0.2;
    acceleration = -0.008;
    x;
    y;

    IMAGE_BUBBLE = ['img/1.Sharkie/4.Attack/Bubble trap/Bubble.png'];

    constructor(x, y) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = x;
        this.y = y;
        if (world.character.leftDirection) {
            this.speed = -3.5;
            this.x = x - 100;
        }
        this.bubble();
    }

    bubble() {
        setInterval(() => {
            this.x += this.speed;
            this.applyGravity();
        }, 1000 / fps)
    }
}