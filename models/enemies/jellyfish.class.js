class Jellyfish extends MovableObject {
    x = 680 - Math.random() * 180;
    y = Math.random() * (420 - 30);
    height = 300 / 5;
    width = 211 / 5;
    offsetTop = 7;
    offsetBottom = 15;
    offsetRight = 2;
    offsetLeft = 0;
    isAlive = true;
    speedY = -1;
    acceleration = -0.01;
    speed = (Math.random() * 60) / fps;
    attack = 20;


    animate() {
        setInterval(() => this.setJellyfishAnimation(), 200);
        setInterval(() => this.setJellyfishTranslation(), 1000 / fps);
    }

    setJellyfishAnimation() {
        switch (true) {
            case !this.isAlive:
                this.playAnimation(this.IMAGES_TRAP);
                break;
            case this.isAlive:
                this.playAnimation(this.IMAGES_SWIM);
                break;
        }

    }

    setJellyfishTranslation() {
        if (this.isAlive) {
            this.x -= this.speed;
        } else {
            this.applyGravity();
        }
    }
}