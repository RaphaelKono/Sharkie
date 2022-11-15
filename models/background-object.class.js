class BackgroundObject extends MovableObject {
    x = 0;
    y = 0;
    width = 720;
    height = 480;
    layer = 1;
    constructor(path, x, layer, width, height, y) {
        super().loadImage(path);
        this.x = x;
        this.layer = layer;
        this.width = width;
        this.height = height;
        this.y = y;
    }
}