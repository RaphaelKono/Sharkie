let canvas;
let world;
let fps = 60;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);

    console.log('My character is', world.character);
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