class DrawableObject {
    img;
    imageCache = {};
    x;
    y;
    height;
    width;
    currentLoopImage = 0;

    offsetTop = 0;
    offsetLeft = 0;
    offsetRight = 0;
    offsetBottom = 0;

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
        if (this.isObjectToGetBorderRed())
            this.drawRedRects(ctx);
    }

    isObjectToGetBorderRed() {
        return this instanceof Character ||
            this instanceof Jellyfish ||
            this instanceof Endboss ||
            this instanceof Pufferfish ||
            this instanceof CollectibleObject ||
            this instanceof Barrier;
    }

    drawRedRects(ctx) {
        ctx.beginPath();
        ctx.lineWidth = '1';
        ctx.strokeStyle = 'red';
        ctx.rect(this.x + this.offsetLeft, this.y + this.offsetTop, this.width - this.offsetRight, this.height - this.offsetBottom);
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }

    playAnimation(imgs) {
        let i = this.currentLoopImage % imgs.length;
        let path = imgs[i];
        this.img = this.imageCache[path];
        this.currentLoopImage++;
    }

    isColliding(obj) {
        return (this.x + this.offsetLeft + this.width - this.offsetRight) >= obj.x + obj.offsetLeft && this.x + this.offsetLeft <= (obj.x + obj.offsetLeft + obj.width - obj.offsetRight) &&
            (this.y + this.offsetTop + this.height - this.offsetBottom) >= obj.y + obj.offsetTop &&
            (this.y + this.offsetTop) <= (obj.y + obj.offsetTop + obj.height - obj.offsetBottom);
    }
}