class Keyboard {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    SHIFT = false;
    ENTER = false;
    touchstartX = 0;
    touchendX = 0;

    constructor() {
        this.bindKeyPressEvents();
        this.bindBtnPressEvents();
        this.swipeEvents();
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
        this.eventSHIFT(bool, key);
        this.eventENTER(bool, key);
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

    eventSHIFT(bool, key) {
        if (this.eventIsSHIFT(key)) {
            this.SHIFT = bool;
        }
    }

    eventENTER(bool, key) {
        if (this.eventIsENTER(key)) {
            this.ENTER = bool;
        }
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

    eventIsSHIFT(key) {
        return key == 16;
    }

    eventIsENTER(key) {
        return key == 13;
    }

    bindBtnPressEvents() {
        this.btnLeft();
        this.btnRight();
        this.btnUp();
        this.btnDown();
        this.activatePoison();
    }

    btnLeft() {
        document.getElementById('arrowLeft').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.LEFT = true;
        });
        document.getElementById('arrowLeft').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.LEFT = false;
        });
    }

    btnRight() {
        document.getElementById('arrowRight').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.RIGHT = true;
        });
        document.getElementById('arrowRight').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.RIGHT = false;
        });
    }

    btnUp() {
        document.getElementById('arrowUp').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.UP = true;
        });
        document.getElementById('arrowUp').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.UP = false;
        });
    }

    btnDown() {
        document.getElementById('arrowDown').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.DOWN = true;
        });
        document.getElementById('arrowDown').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.DOWN = false;
        });
    }

    activatePoison() {
        document.getElementById('activatePoison').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.ENTER = !this.ENTER;
        });
        document.getElementById('activatePoison').addEventListener('touchend', (e) => {
            e.preventDefault();
        });
    }


    swipeEvents() {
        document.getElementById('swipe').addEventListener('touchstart', e => {
            this.touchstartX = e.changedTouches[0].screenX;
        });
        document.getElementById('swipe').addEventListener('touchend', e => {
            this.touchendX = e.changedTouches[0].screenX;
            this.checkDirection();
        });
        document.getElementById('swipe').addEventListener('touchstart', e => {
            this.touchstartX = e.changedTouches[0].screenX;
        });
        document.getElementById('swipe').addEventListener('touchend', e => {
            this.touchendX = e.changedTouches[0].screenX;
            this.checkDirection();
        });
    }

    checkDirection() {
        if (this.touchendX < this.touchstartX) {
            this.SHIFT = true;
        }
        if (this.touchendX > this.touchstartX) {
            this.SPACE = true;
        }
        setTimeout(() => this.SPACE = false, 500);
    }
}