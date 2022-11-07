let canvas;
let world;
let fps = 60;
let keyboard;
let soundIsOn = false;
let ambience_audio = new Audio('audio/ambience.mp3');
ambience_audio.loop = true;
ambience_audio.volume = 0.05;
let level_music = new Audio('audio/levelMusic.mp3');
level_music.loop = true;
level_music.volume = 0.05;
let intervalIds = [];

function init() {
    initListeners();
}

function startGame() {
    canvas = document.getElementById('canvas');
    document.getElementById('canvasContainerStart').classList.remove('startscreen');
    document.getElementById('midPanel').classList.add('d-none');
    document.getElementById('speaker').classList.remove('d-none');
    document.getElementById('fullscreen').classList.remove('d-none');
    keyboard = new Keyboard();
    world = new World(canvas, keyboard);
    checkMobile();
    // console.log('My character is', world.character);
}

function checkMobile() {
    if (isOnMobile()) {
        document.getElementById('swipe').classList.remove('d-none');
        document.getElementById('bottomPanel').classList.remove('d-none');
        document.getElementById('rotation').classList.remove('d-none');
        document.getElementById('rotation').classList.add('please-rotate-screen');
    }
}

function initListeners() {
    btnSpeaker();
    btnFullscreen();
    // btnStartGame();
}

function btnFullscreen() {
    document.getElementById('fullscreen').addEventListener('mousedown', (e) => {
        e.preventDefault();
        toggleFullScreen();
    });
    document.getElementById('fullscreen').addEventListener('touchend', (e) => {
        e.preventDefault();
        toggleFullScreen();
    });
}


function toggleFullScreen() {
    let element = document.getElementById('canvasFrameID');
    if (isNotOnFullscreen(element)) { // current working methods
        openFullscreen(element);
    } else {
        closeFullscreen();
    }
}

function openFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
}

function closeFullscreen() {
    if (document.cancelFullScreen) {
        document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    }
}

function isNotOnFullscreen(element) {
    return !document.fullscreenElement && !element.mozFullScreenElement && !element.webkitFullscreenElement;
}

window.addEventListener('fullscreenchange', (e) => {
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
        toggleSound();
    });
    document.getElementById('speaker').addEventListener('touchend', (e) => {
        e.preventDefault();
        toggleSound();
    });
}

function toggleSound() {
    soundIsOn = !soundIsOn;
    if (soundIsOn) {
        playBackground();
    } else {
        level_music.pause();
        ambience_audio.pause();
    }
    document.getElementById('speaker').classList.toggle('toggleSpeaker');
}

/**
 * I need to double check since otherwise it is toggling wrong.
 */
function playBackground() {
    if (soundIsOn) {
        ambience_audio.play();
        level_music.play();
    } else {
        level_music.pause();
        ambience_audio.pause();
    }
}

function isOnMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

function btnStartGame() {
    document.getElementById('startGame').addEventListener('mousedown', (e) => {
        e.preventDefault();
        startGame();
    });
    document.getElementById('startGame').addEventListener('touchend', (e) => {
        e.preventDefault();
        startGame();
    });
}