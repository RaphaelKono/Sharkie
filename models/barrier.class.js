class Barrier extends DrawableObject {
    x;
    y;
    width;
    height;

    offsetTop = 0;
    offsetLeft = 0;
    offsetRight = 0;
    offsetBottom = 0;


    constructor(width, height, x, y, offsetTop, offsetLeft, offsetRight, offsetBottom) {
        super().loadImage('img/bg.png');
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.offsetTop = offsetTop;
        this.offsetLeft = offsetLeft;
        this.offsetRight = offsetRight;
        this.offsetBottom = offsetBottom;
        this.calcProperties();
    }

    calcProperties() {
        this.halfWidth = (this.width - this.offsetRight) / 2;
        this.halfHeight = (this.height - this.offsetBottom) / 2;
    }
}