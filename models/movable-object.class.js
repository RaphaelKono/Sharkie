class MovableObject {
    x;
    y;
    height;
    width;
    img;
    imageCache = [];
    currentImage = 0;
    speed;
    leftDirection = false;
    // upDirection = false;

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

    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / fps);
    }

    playAnimation(imgs) {
        let i = this.currentImage % imgs.length;
        let path = imgs[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}