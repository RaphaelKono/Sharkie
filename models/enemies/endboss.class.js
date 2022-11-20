class Endboss extends MovableObject {
    x = 2200;
    y = 0;
    height = 1216 / 4;
    width = 1041 / 4;
    offsetTop = 145;
    offsetBottom = 200;
    offsetRight = 40;
    offsetLeft = 15;
    attack = 40;
    isAlive = true;
    currentImage = 0;
    firstContact = false;
    hasDied = false;
    isAttacking = false;

    IMAGES_SWIM = [
        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png'
    ];

    IMAGES_HURT = [
        'img/2.Enemy/3 Final Enemy/Hurt/1.png',
        'img/2.Enemy/3 Final Enemy/Hurt/2.png',
        'img/2.Enemy/3 Final Enemy/Hurt/3.png',
        'img/2.Enemy/3 Final Enemy/Hurt/4.png'
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png'
    ];

    IMAGES_INTRO = [
        'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/10.png'
    ];

    IMAGES_ATTACK = [
        'img/2.Enemy/3 Final Enemy/Attack/1.png',
        'img/2.Enemy/3 Final Enemy/Attack/1.png',
        'img/2.Enemy/3 Final Enemy/Attack/1.png',
        'img/2.Enemy/3 Final Enemy/Attack/1.png',
        'img/2.Enemy/3 Final Enemy/Attack/1.png',
        'img/2.Enemy/3 Final Enemy/Attack/6.png'
    ];

    constructor() {
        super().loadImage('img/2.Enemy/3 Final Enemy/1.Introduce/1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_INTRO);
        this.loadImages(this.IMAGES_ATTACK);
        this.animate();
    }

    animate() {
        let self = this;
        setCustomInterval(() => setNewPausableFn(self, this.setAnimation), 200);
    }

    setAnimation(self) {
        if (!self.firstContact && world.character.x >= 1895)
            self.firstContact = true;
        self.setCases();
    }

    setCases() {
        switch (true) {
            case this.firstEncounter():
                this.playEndbossAnimationOnce(this.IMAGES_INTRO);
                break;
            case this.isAttacking:
                this.playEndbossAnimationOnce(this.IMAGES_ATTACK);
                break;
            case this.hasNoHealth():
                this.playEndbossAnimationOnce(this.IMAGES_DEAD);
                break;
            case this.isHurt():
                this.playAnimation(this.IMAGES_HURT);
                break;
            case !this.isHurt():
                this.setBossSwimAnimation();
                break;
        }
    }

    playEndbossAnimationOnce(imgs) {
        if (this.firstEncounter())
            this.setFirstEncounterImgs(imgs);
        else if (this.hasNoHealth())
            this.setDeadImgs(imgs);
    }

    firstEncounter() {
        if (this.firstContact && !world.endbossIntroduced)
            return true;
        else
            return false;
    }

    setFirstEncounterImgs(imgs) {
        this.setCurrentImage(imgs);
        if (this.currentImage == imgs.length) {
            world.endbossIntroduced = true;
            this.currentImage = 0;
        }
    }

    setDeadImgs(imgs) {
        if (this.currentImage <= 4)
            this.setCurrentImage(imgs);
    }

    setBossSwimAnimation() {
        if (world.endbossIntroduced)
            this.playAnimation(this.IMAGES_SWIM);
    }
}