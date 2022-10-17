let canvas;
let world;
let fps = 60;
let keyboard;
let soundIsOn = false;
let ambience_audio = new Audio('audio/ambience.mp3');
ambience_audio.loop = true;
ambience_audio.volume = 0.4;
let level_music = new Audio('audio/levelMusic.mp3');
level_music.loop = true;
level_music.volume = 0.25;


function init() {
    canvas = document.getElementById('canvas');
    keyboard = new Keyboard();
    world = new World(canvas, keyboard);
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        document.getElementById('swipe').classList.remove('d-none');
        document.getElementById('bottomPanel').classList.remove('d-none');
    }
    btnSpeaker();
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

function btnSpeaker() {
    document.getElementById('speaker').addEventListener('mousedown', (e) => {
        e.preventDefault();
        soundIsOn = !soundIsOn;
        if (soundIsOn) {
            playBackground();
        } else {
            level_music.pause();
            ambience_audio.pause();
        }
        document.getElementById('speaker').classList.toggle('toggleSpeaker');
    });
    document.getElementById('speaker').addEventListener('touchstart', (e) => {
        e.preventDefault();
        soundIsOn = !soundIsOn;
        if (soundIsOn) {
            playBackground();
        } else {
            level_music.pause();
            ambience_audio.pause();
        }
        document.getElementById('speaker').classList.toggle('toggleSpeaker');
    });
}

function playBackground() {
    if (soundIsOn) {
        ambience_audio.play();
        level_music.play();
    } else {
        ambience_audio.pause();
        level_music.pause();
    }
}