let canvas;
let world;
let fps = 60;
let keyboard;
let soundIsOn = false;


function init() {
    canvas = document.getElementById('canvas');
    keyboard = new Keyboard();
    world = new World(canvas, keyboard);
    console.log('My character is', world.character);
}