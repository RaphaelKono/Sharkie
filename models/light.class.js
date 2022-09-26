class Light extends MovableObject {
    height = 480;
    width = 720 / 2;
    x = 0;
    y = 0;
    speed = 5 / fps;

    constructor() {
        super().loadImage('img/3. Background/Legacy/Layers/1. Light/1.png');

        this.animate();
    }

    animate() {
        this.moveLeft();
    }
}