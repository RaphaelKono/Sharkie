class Endboss extends MovableObject {
    x;
    y;
    height = 1216 / 4;
    width = 1041 / 4;
    offsetTop = 145;
    offsetBottom = 200;
    offsetRight = 40;
    offsetLeft = 15;
    offsetTopNearby = 80;
    offsetBottomNearby = 100;
    offsetRightNearby = 0;
    offsetLeftNearby = -30;
    attack = 40;
    speed = 1.5;
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
        'img/2.Enemy/3 Final Enemy/Attack/2.png',
        'img/2.Enemy/3 Final Enemy/Attack/3.png',
        'img/2.Enemy/3 Final Enemy/Attack/4.png',
        'img/2.Enemy/3 Final Enemy/Attack/5.png',
        'img/2.Enemy/3 Final Enemy/Attack/6.png'
    ];

    constructor(x0, y0, horizontalBool, verticalBool, distanceX, distanceY) {
        super().loadImage('img/2.Enemy/3 Final Enemy/1.Introduce/1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_INTRO);
        this.loadImages(this.IMAGES_ATTACK);
        this.setEnemyProperties(x0, y0, horizontalBool, verticalBool, distanceX, distanceY);
        this.animate();
    }

    animate() {
        let self = this;
        setCustomInterval(() => setNewPausableFn(self, this.setAnimation), 200);
        setCustomInterval(() => setNewPausableFn(self, this.setEndbossTranslation), 1000 / fps);
    }

    setAnimation(self) {
        if (!self.firstContact && world.character.x >= 1895)
            self.firstContact = true;
        if (self.firstContact) {
            self.changeBackgroundMusic();
            self.setCases();
        }
    }

    setEndbossTranslation(self) {
        if (self.isAlive && self.firstContact)
            self.enemyMovement();
    }

    setCases() {

        switch (true) {
            case this.firstEncounter():
                this.playEndbossAnimationOnce(this.IMAGES_INTRO);
                break;
            case this.isAttackingValid():
                this.playAnimation(this.IMAGES_ATTACK);
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

    isAttackingValid() {
        return this.isAttacking && !this.isHurt() && this.isAlive;
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

    changeBackgroundMusic() {
        level_music.pause();
        world.character.endboss_music_sound.play();
        world.character.endboss_music_sound.volume = 0.4;
        if (world.character.endboss_music_sound.currentTime >= 27) {
            world.character.endboss_music_sound.currentTime = 12.8;
        }
    }
}