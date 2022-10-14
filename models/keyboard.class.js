class Keyboard {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    STRG = false;
    touchstartX = 0;
    touchendX = 0;

    constructor() {
        this.bindKeyPressEvents();
        this.bindBtnPressEvents();
    }

    bindKeyPressEvents() {
        window.addEventListener('keydown', (event) => {
            this.keyEvents(true, event.keyCode);
        });

        window.addEventListener('keyup', (event) => {
            this.keyEvents(false, event.keyCode);
        });
    }

    keyEvents(bool, key) {
        this.eventRight(bool, key);
        this.eventLeft(bool, key);
        this.eventUp(bool, key);
        this.eventDown(bool, key);
        this.eventSpace(bool, key);
    }

    eventRight(bool, key) {
        if (this.eventIsRight(key))
            this.RIGHT = bool;
    }

    eventLeft(bool, key) {
        if (this.eventIsLeft(key))
            this.LEFT = bool;
    }

    eventUp(bool, key) {
        if (this.eventIsUp(key))
            this.UP = bool;
    }

    eventDown(bool, key) {
        if (this.eventIsDown(key))
            this.DOWN = bool;
    }

    eventSpace(bool, key) {
        if (this.eventIsSpace(key))
            this.SPACE = bool;
    }


    eventDown(bool, key) {
        if (this.eventIsDown(key))
            this.DOWN = bool;
    }

    eventIsRight(key) {
        return this.keyCodeIsArrowRight(key) || this.keyCodeIsD(key);
    }

    keyCodeIsArrowRight(key) {
        return key == 39;
    }

    keyCodeIsD(key) {
        return key == 68;
    }


    eventIsLeft(key) {
        return this.keyCodeIsArrowLeft(key) || this.keyCodeIsA(key);
    }

    keyCodeIsArrowLeft(key) {
        return key == 37;
    }

    keyCodeIsA(key) {
        return key == 65;
    }


    eventIsUp(key) {
        return this.keyCodeIsArrowUp(key) || this.keyCodeIsW(key);
    }

    keyCodeIsArrowUp(key) {
        return key == 38;
    }

    keyCodeIsW(key) {
        return key == 87;
    }


    eventIsDown(key) {
        return this.keyCodeIsArrowDown(key) || this.keyCodeIsS(key);
    }

    keyCodeIsArrowDown(key) {
        return key == 40;
    }

    keyCodeIsS(key) {
        return key == 83;
    }


    eventIsSpace(key) {
        return this.keyCodeIsSpace(key);
    }

    keyCodeIsSpace(key) {
        return key == 32;
    }

    bindBtnPressEvents() {
        document.getElementById('arrowLeft').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.LEFT = true;
        });
        document.getElementById('arrowLeft').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.LEFT = false;
        });
        document.getElementById('arrowRight').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.RIGHT = true;
        });
        document.getElementById('arrowRight').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.RIGHT = false;
        });
        document.getElementById('arrowUp').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.UP = true;
        });
        document.getElementById('arrowUp').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.UP = false;
        });
        document.getElementById('arrowDown').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.DOWN = true;
        });
        document.getElementById('arrowDown').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.DOWN = false;
        });
        document.getElementById('finSlap').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.STRG = true;
        });
        document.getElementById('finSlap').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.STRG = false;
        });
        document.getElementById('bubble').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.SPACE = true;
        });
        document.getElementById('bubble').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.SPACE = false;
        });
        document.getElementById('fullscreen').addEventListener('onclick', (e) => {
            e.preventDefault();
        });
        document.getElementById('speaker').addEventListener('touchstart', (e) => {
            e.preventDefault();
            soundIsOn = !soundIsOn;
            document.getElementById('speaker').classList.toggle('toggleSpeaker');
        });


        if (!this.LEFT || !this.RIGHT || !this.UP || !this.DOWN || !this.SPACE) {
            document.addEventListener('touchstart', e => {
                this.touchstartX = e.changedTouches[0].screenX;
            });

            document.addEventListener('touchend', e => {
                this.touchendX = e.changedTouches[0].screenX;
                this.checkDirection();
            });
        }


        // document.addEventListener('touchstart', this.handleTouchStart, false);
        // document.addEventListener('touchmove', this.handleTouchMove, false);
    }

    checkDirection() {
        if (this.touchendX < this.touchstartX) {
            this.SPACE = true;
        }
        if (this.touchendX > this.touchstartX) {
            this.SPACE = true;
        }
        setTimeout(() => {
            this.SPACE = false;
        }, 500);
    }


    // getTouches(evt) {
    //     return evt.touches || // browser API
    //         evt.originalEvent.touches; // jQuery
    // }

    // handleTouchStart(evt) {
    //     const firstTouch = this.getTouches(evt)[0];
    //     this.xDown = firstTouch.clientX;
    //     this.yDown = firstTouch.clientY;
    // };

    // handleTouchMove(evt) {
    //     if (!this.xDown || !this.yDown) {
    //         return;
    //     }

    //     let xUp = evt.touches[0].clientX;
    //     let yUp = evt.touches[0].clientY;

    //     let xDiff = this.xDown - xUp;
    //     let yDiff = this.yDown - yUp;

    //     if (Math.abs(xDiff) > Math.abs(yDiff)) { /*most significant*/
    //         if (xDiff > 0) {
    //             /* right swipe */
    //         } else {
    //             this.SPACE = true;
    //         }
    //     } else {
    //         if (yDiff > 0) {
    //             /* down swipe */
    //         } else {
    //             /* up swipe */
    //         }
    //     }
    //     /* reset values */
    //     this.xDown = null;
    //     this.yDown = null;
    // };
}