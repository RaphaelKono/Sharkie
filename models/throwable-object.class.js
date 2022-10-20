class ThrowableObject extends MovableObject {
    height = 25;
    width = 25;
    speed = 3.5;
    speedY = -0.2;
    acceleration = -0.008;
    x;
    y;

    IMAGE_BUBBLE = ['img/1.Sharkie/4.Attack/Bubble trap/Bubble.png'];

    // bubble_create_sound = new Audio('audio/bubbleCreated.mp3');

    constructor(x, y) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = x;
        this.y = y;
        if (world.character.leftDirection) {
            this.speed = -3.5;
            this.x = x - 100;
        }
        world.character.bubble_create_sound.volume = 0.3;
        world.character.bubble_create_sound.currentTime = 0;
        if (soundIsOn)
            world.character.bubble_create_sound.play();
        this.bubble();
    }

    bubble() {
        setInterval(() => {
            this.x += this.speed;
            this.applyGravity();
        }, 1000 / fps)
    }
}