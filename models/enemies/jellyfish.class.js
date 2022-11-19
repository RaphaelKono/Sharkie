class Jellyfish extends MovableObject {
    x = 680 - Math.random() * 180;
    y = Math.random() * (420 - 30);
    height = 300 / 5;
    width = 211 / 5;
    offsetTop = 7;
    offsetBottom = 20;
    offsetRight = 10;
    offsetLeft = 5;
    isAlive = true;
    speedG = -1;
    acceleration = -0.01;
    speed = 1;
    attack = 20;


    animate() {
        let self = this;
        setCustomInterval(() => setNewPausableFn(self, this.setJellyfishAnimation), 200);
        setCustomInterval(() => setNewPausableFn(self, this.setJellyfishTranslation), 1000 / fps);
    }

    setJellyfishAnimation(self) {
        switch (true) {
            case !self.isAlive:
                self.playAnimation(self.IMAGES_TRAP);
                break;
            case self.isAlive:
                self.playAnimation(self.IMAGES_SWIM);
                break;
        }
    }

    setJellyfishTranslation(self) {
        if (self.isAlive) {
            self.enemyMovement();
            // self.x -= self.speed;
        } else {
            self.applyGravity();
        }
    }
}