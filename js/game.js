let canvas;
let world;
let fps = 60;
let keyboard;
let intervalIds = [];
let soundIsOn = false;
let ambience_audio = new Audio('audio/ambience.mp3');
ambience_audio.loop = true;
ambience_audio.volume = 0.05;
let level_music = new Audio('audio/levelMusic.mp3');
level_music.loop = true;
level_music.volume = 0.05;
gameIsPaused = false;


function init() {
    initListeners();
}

function startGame() {
    canvas = document.getElementById('canvas');
    document.getElementById('canvasContainer').classList.remove('startscreen');
    document.getElementById('startBtnPanel').classList.add('d-none');
    document.getElementById('speaker').classList.remove('d-none');
    document.getElementById('fullscreen').classList.remove('d-none');
    keyboard = new Keyboard();
    world = new World(canvas, keyboard);
    checkMobile();
}

function renderIntro1() {
    if (isOnMobile()) {
        document.getElementById('rotation').classList.remove('d-none');
        document.getElementById('rotation').classList.add('please-rotate-screen');
    }
    document.getElementById('startBtnPanel').classList.add('d-none');
    document.getElementById('canvasContainer').classList.remove('justify-content-between');
    document.getElementById('introscreen1').classList.remove('d-none');
}

function renderInstruction(isInGame) {
    if (isInGame)
        document.getElementById('unrenderInstructionBtn').innerHTML = templateButtonBackToGame();
    else
        document.getElementById('unrenderInstructionBtn').innerHTML = templateButtonNext();
    document.getElementById('startBtnPanel').classList.add('d-none');
    document.getElementById('introscreen1').classList.add('d-none');
    document.getElementById('canvasContainer').classList.remove('justify-content-between');
    document.getElementById('introscreen2').classList.remove('d-none');
}

function templateButtonNext() {
    return `<button onclick="renderIntro3()" class="key back-key"><img src="img/next-64.png"></button>`;
}

function templateButtonBackToGame() {
    return `<button onclick="unrenderStartScreen()" class="key back-key"><img src="img/undo-4-48.png"></button>`;
}

function renderIntro3() {
    document.getElementById('introscreen2').classList.add('d-none');
    document.getElementById('introscreen3').classList.remove('d-none');
}

function renderBackStartScreen() {
    if (isOnMobile()) {
        document.getElementById('rotation').classList.add('d-none');
        document.getElementById('rotation').classList.remove('please-rotate-screen');
    }
    document.getElementById('startBtnPanel').classList.remove('d-none');
    document.getElementById('canvasContainer').classList.add('justify-content-between');
    document.getElementById('canvasContainer').classList.remove('intro-filter');
    document.getElementById('introscreen3').classList.add('d-none');
}

function checkMobile() {
    if (isOnMobile()) {
        document.getElementById('swipe').classList.remove('d-none');
        document.getElementById('bottomPanel').classList.remove('d-none');
        document.getElementById('rotation').classList.remove('d-none');
        document.getElementById('rotation').classList.add('please-rotate-screen');
        pauseGame();
        checkScreenOrientation();
    }
}

function checkScreenOrientation() {
    window.addEventListener('resize', () => pauseGame());
}

function pauseGame() {
    if (window.innerWidth < window.innerHeight)
        renderNonLandscape();
    else
        renderLandscape();
}

function initListeners() {
    btnSpeaker();
    btnFullscreen();
}

function renderNonLandscape() {
    gameIsPaused = true;
    document.getElementById('h1').classList.add('d-none');
    if (!document.getElementById('canvasFrameID').className.includes('d-none'))
        document.getElementById('canvasFrameID').classList.add('d-none');
}

function renderLandscape() {
    gameIsPaused = false;
    document.getElementById('h1').classList.remove('d-none');
    document.getElementById('canvasFrameID').classList.remove('d-none');
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
 * I need to double check. Otherwise it is toggling wrong.
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

function setCustomInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
}

function setNewPausableFn(self, fn) {
    if (!gameIsPaused)
        fn(self);
}