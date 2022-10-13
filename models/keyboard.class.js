class Keyboard {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;

    constructor() {
        this.bindKeyPressEvents();
        this.bindBtnPressEvents();
    }

    bindKeyPressEvents() {
        window.addEventListener('keydown', (event) => {
            this.keyEvents(true);
        });

        window.addEventListener('keyup', (event) => {
            this.keyEvents(false);
        });
    }

    keyEvents(bool) {
        this.eventRight(bool);
        this.eventLeft(bool);
        this.eventUp(bool);
        this.eventDown(bool);
        this.eventSpace(bool);
    }

    eventRight(bool) {
        if (this.eventIsRight())
            this.RIGHT = bool;
    }

    eventLeft(bool) {
        if (this.eventIsLeft())
            this.LEFT = bool;
    }

    eventUp(bool) {
        if (this.eventIsUp())
            this.UP = bool;
    }

    eventDown(bool) {
        if (this.eventIsDown())
            this.DOWN = bool;
    }

    eventSpace(bool) {
        if (this.eventIsSpace())
            this.SPACE = bool;
    }


    eventDown(bool) {
        if (this.eventIsDown())
            this.DOWN = bool;
    }

    eventIsRight() {
        return this.keyCodeIsArrowRight() || this.keyCodeIsD();
    }

    keyCodeIsArrowRight() {
        return event.keyCode == 39;
    }

    keyCodeIsD() {
        return event.keyCode == 68;
    }


    eventIsLeft() {
        return this.keyCodeIsArrowLeft() || this.keyCodeIsA();
    }

    keyCodeIsArrowLeft() {
        return event.keyCode == 37;
    }

    keyCodeIsA() {
        return event.keyCode == 65;
    }


    eventIsUp() {
        return this.keyCodeIsArrowUp() || this.keyCodeIsW();
    }

    keyCodeIsArrowUp() {
        return event.keyCode == 38;
    }

    keyCodeIsW() {
        return event.keyCode == 87;
    }


    eventIsDown() {
        return this.keyCodeIsArrowDown() || this.keyCodeIsS();
    }

    keyCodeIsArrowDown() {
        return event.keyCode == 40;
    }

    keyCodeIsS() {
        return event.keyCode == 83;
    }


    eventIsSpace() {
        return this.keyCodeIsSpace();
    }

    keyCodeIsSpace() {
        return event.keyCode == 32;
    }

    bindBtnPressEvents() {
        document.getElementById('arrowLeft').addEventListener('touchstart', (event) => {
            event.preventDefault();
            debugger;
            this.LEFT = true;
        });
        document.getElementById('arrowLeft').addEventListener('touchend', (event) => {
            event.preventDefault();
            this.LEFT = false;
        });
    }
}