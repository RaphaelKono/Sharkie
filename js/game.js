let canvas;
let character = new MovableObject();
let ctx;


function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    console.log('My character is', character);
}

window.addEventListener('keydown', (event) => {
    if (event.keyCode == 39 || event.keyCode == 68) {
        keyboard.RIGHT = true;
    }
    if (event.keyCode == 37 || event.keyCode == 65) {
        keyboard.LEFT = true;
    }
    if (event.keyCode == 38 || event.keyCode == 87) {
        keyboard.UP = true;
    }
    if (event.keyCode == 40 || event.keyCode == 83) {
        keyboard.DOWN = true;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = true;
    }
});

window.addEventListener('keyup', (event) => {
    if (event.keyCode == 39 || event.keyCode == 68) {
        keyboard.RIGHT = false;
    }
    if (event.keyCode == 37 || event.keyCode == 65) {
        keyboard.LEFT = false;
    }
    if (event.keyCode == 38 || event.keyCode == 87) {
        keyboard.UP = false;
    }
    if (event.keyCode == 40 || event.keyCode == 83) {
        keyboard.DOWN = false;
    }
    if (event.keyCode == 32) {
        keyboard.SPACE = false;
    }
});