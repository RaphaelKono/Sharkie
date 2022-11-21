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

    halfHeight;
    halfWidth;

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
        if (this.isObjectToGetBorderRed() && !hitboxesHidden)
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
        if (this instanceof Endboss) {
            ctx.rect(this.x + this.offsetLeftNearby, this.y + this.offsetTopNearby, this.width - this.offsetRightNearby, this.height - this.offsetBottomNearby);
        }
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

    centerX() {
        return this.x + this.halfWidth + this.offsetLeft;
    }

    centerY() {
        return this.y + this.halfHeight + this.offsetTop;
    }

    handleCollision(obj) {
        if (this.isColliding(obj)) {
            // Calculate the distance between centers
            let diffX = this.centerX() - obj.centerX(),
                diffY = this.centerY() - obj.centerY();
            // Calculate the minimum distance to separate along X and Y
            let minDistX = this.halfWidth + obj.halfWidth,
                minDistY = this.halfHeight + obj.halfHeight;
            // Calculate the depth of collision for both the X and Y axis
            let depthX = diffX > 0 ? minDistX - diffX : -minDistX - diffX,
                depthY = diffY > 0 ? minDistY - diffY : -minDistY - diffY;

            // having the depth, pick the smaller depth and move along that axis
            if (depthX != 0 && depthY != 0) {
                // Collision along the X-axis...
                if (Math.abs(depthX) < Math.abs(depthY)) {
                    if (depthX > 0) return 'left';
                    return 'right';
                    // Collision along the Y-axis...    
                } else {
                    if (depthY > 0) return 'top';
                    return 'bottom';
                }
            }
        } else {
            return null;
        }
    }
}