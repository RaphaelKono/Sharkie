class Light extends MovableObject {
    height = 480;
    width = 720;
    x = 0;
    y = 0;
    speed = 2.5 / fps;

    constructor(path, x) {
        super().loadImage(path, x);
        this.x = x;
        this.animate();
    }

    animate() {
        this.moveLeft();
    }
}