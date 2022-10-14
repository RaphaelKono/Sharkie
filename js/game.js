let canvas;
let world;
let fps = 60;
let keyboard;
let soundIsOn = false;



function init() {
    canvas = document.getElementById('canvas');
    keyboard = new Keyboard();
    world = new World(canvas, keyboard);
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        document.getElementById('swipe').classList.remove('d-none');
        document.getElementById('bottomPanel').classList.remove('d-none');
    }
    // console.log('My character is', world.character);
}

addEventListener('fullscreenchange', (event) => {
    document.getElementById('frameImg').classList.toggle('d-none');
    document.getElementById('canvasFrameID').classList.toggle('toggleFullscreen');
    if (window.innerHeight > window.innerWidth) {
        document.getElementById('canvas').classList.toggle('w-100');
    } else {
        document.getElementById('canvas').classList.toggle('h-100');
    }
});