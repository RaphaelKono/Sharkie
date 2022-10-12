let canvas;
let world;
let fps = 60;
let keyboard = new Keyboard();
let pause = false;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

    console.log('My character is', world.character);
}

window.addEventListener('keydown', (event) => {
    keyEvents(true);
});

window.addEventListener('keyup', (event) => {
    keyEvents(false);
});

window.addEventListener('focusout', (event) => {
    pause = true;
})