function keyEvents(bool) {
    eventRight(bool);
    eventLeft(bool);
    eventUp(bool);
    eventDown(bool);
    eventSpace(bool);
}

function eventRight(bool) {
    if (eventIsRight())
        keyboard.RIGHT = bool;
}

function eventLeft(bool) {
    if (eventIsLeft())
        keyboard.LEFT = bool;
}

function eventUp(bool) {
    if (eventIsUp())
        keyboard.UP = bool;
}

function eventDown(bool) {
    if (eventIsDown())
        keyboard.DOWN = bool;
}

function eventSpace(bool) {
    if (eventIsSpace())
        keyboard.SPACE = bool;
}


function eventDown(bool) {
    if (eventIsDown())
        keyboard.DOWN = bool;
}

function eventIsRight() {
    return keyCodeIsArrowRight() || keyCodeIsD();
}

function keyCodeIsArrowRight() {
    return event.keyCode == 39;
}

function keyCodeIsD() {
    return event.keyCode == 68;
}


function eventIsLeft() {
    return keyCodeIsArrowLeft() || keyCodeIsA();
}

function keyCodeIsArrowLeft() {
    return event.keyCode == 37;
}

function keyCodeIsA() {
    return event.keyCode == 65;
}


function eventIsUp() {
    return keyCodeIsArrowUp() || keyCodeIsW();
}

function keyCodeIsArrowUp() {
    return event.keyCode == 38;
}

function keyCodeIsW() {
    return event.keyCode == 87;
}


function eventIsDown() {
    return keyCodeIsArrowDown() || keyCodeIsS();
}

function keyCodeIsArrowDown() {
    return event.keyCode == 40;
}

function keyCodeIsS() {
    return event.keyCode == 83;
}


function eventIsSpace() {
    return keyCodeIsSpace();
}

function keyCodeIsSpace() {
    return event.keyCode == 32;
}