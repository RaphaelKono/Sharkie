class DrawableObject {
    img;
    imageCache = {};
    x;
    y;
    height;
    width;
    health = 100;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawRect(ctx) {
        if (this instanceof Character || this instanceof Jellyfish || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + this.offsetLeft, this.y + this.offsetTop, this.width - this.offsetRight, this.height - this.offsetBottom);
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }
}