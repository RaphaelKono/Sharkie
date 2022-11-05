class ThrowableObject extends MovableObject {
    height = 25;
    width = 25;
    speed = 3.5;
    speedY = -0.2;
    acceleration = -0.008;
    x;
    y;

    IMAGE_BUBBLE = ['img/1.Sharkie/4.Attack/Bubble trap/Bubble.png'];

    // bubble_create_sound = new Audio('audio/bubbleCreated.mp3'); For some reason it is necessary for iPhone to have the audio-object in character.class.js

    constructor(x, y) {
        if (!world.character.poisonIsActivated)
            super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        else
            super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
        this.setProperties(x, y);
        this.setBubbleSound();
        this.bubble();
    }

    setProperties(x, y) {
        this.x = x;
        this.y = y;
        if (world.character.leftDirection) {
            this.speed = -3.5;
            this.x = x - 100;
        }
    }

    setBubbleSound() {
        if (soundIsOn) {
            world.character.bubble_create_sound.volume = 0.3;
            world.character.bubble_create_sound.currentTime = 0;
            world.character.bubble_create_sound.play();
        }
    }

    bubble() {
        setInterval(() => {
            this.x += this.speed;
            this.applyGravity();
        }, 1000 / fps)
    }
}