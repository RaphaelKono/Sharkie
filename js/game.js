let canvas;
let world;
let startScreen;
let inGameScreen;
let canvasContainer;
let fps = 60;
let keyboard;
let intervalIds = [];
let soundIsOn = false;
let gameIsPaused = true;
let gameHasStarted = false;
let settingsNeverOpened = true;
let hitboxesHidden = true;
let renderFromMenu = false;
let availableLevel = 1;
let mobileApple = [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
]

let ambience_audio = new Audio('audio/ambience.mp3');
ambience_audio.loop = true;
ambience_audio.volume = 0.2;

let level_music = new Audio('audio/levelMusic.mp3');
level_music.loop = true;
level_music.volume = 0.2;


function init() {
    canvas = document.getElementById('canvas');
    canvasContainer = document.getElementById('canvasContainer');
    startScreen = document.getElementById('startScreen');
    inGameScreen = document.getElementById('inGameScreen');
    initListeners();
}

function startGame(levelFn) {
    gameHasStarted = true;
    canvasContainer.classList.remove('startscreen');
    document.getElementById('levelScreen').classList.add('d-none');
    inGameScreen.classList.remove('d-none');
    keyboard = new Keyboard();
    world = new World(canvas, keyboard, levelFn);
    checkMobile();
    gameIsPaused = false;
}

function restartLevel(levelFn) {
    removeEndScreen();
    inGameScreen.classList.remove('d-none');
    gameHasStarted = true;
    playBackground();
    world = new World(canvas, keyboard, levelFn);
    if (isOnMobile()) {
        addMobilePanels();
    }
}

function renderLvlScreen() {
    startScreen.classList.add('d-none');
    document.getElementById('levelScreen').classList.remove('d-none');
}

function renderStartScreen() {
    removeEndScreen();
    startScreen.classList.remove('d-none');
    canvasContainer.classList.add('startscreen');
    playBackground();
}

function removeEndScreen() {
    canvasContainer.classList.remove('win-screen');
    canvasContainer.classList.remove('lose-screen');
    document.getElementById('endScreen').classList.add('d-none');
}

function startNextLevel() {
    canvasContainer.classList.remove('win-screen');
    canvasContainer.classList.add('startscreen');
    document.getElementById('endScreen').classList.add('d-none');
    document.getElementById('levelScreen').classList.remove('d-none');
    document.getElementById('lvl2').classList.remove('gray-lvl-btn');
    addNextLvlListener();
}

function renderIntro1() {
    removeNonIntro1();
    canvasContainer.classList.add('startscreen');
    document.getElementById('introscreen1').classList.remove('d-none');
}

function removeNonIntro1() {
    if (renderFromMenu) {
        closeSettings();
        gameIsPaused = true;
        if (gameHasStarted)
            inGameScreen.classList.add('d-none');
    }
    if (isOnMobile())
        addRotationScreen();
    startScreen.classList.add('d-none');
}

function removeMobilePanels() {
    document.getElementById('bottomPanel').classList.add('d-none');
    document.getElementById('swipe').classList.add('d-none');
}

function addMobilePanels() {
    document.getElementById('bottomPanel').classList.remove('d-none');
    document.getElementById('swipe').classList.remove('d-none');
}

function addRotationScreen() {
    document.getElementById('rotation').classList.remove('d-none');
    document.getElementById('rotation').classList.add('please-rotate-screen');
}

function removeRotationScreen() {
    document.getElementById('rotation').classList.add('d-none');
    document.getElementById('rotation').classList.remove('please-rotate-screen');
}

function renderIntro2() {
    document.getElementById('introscreen1').classList.add('d-none');
    document.getElementById('introscreen2').classList.remove('d-none');
}

function templateButtonBackToGame() {
    return `<button onclick="unrenderStartScreen()" class="key back-key"><img src="img/undo-4-48.png"></button>`;
}

function renderIntro3() {
    document.getElementById('introscreen2').classList.add('d-none');
    document.getElementById('introscreen3').classList.remove('d-none');
}

function removeIntro3() {
    if (isOnMobile())
        removeRotationScreen();
    if (!gameHasStarted)
        startScreen.classList.remove('d-none');
    else {
        inGameScreen.classList.remove('d-none');
        canvasContainer.classList.remove('startscreen');
    }

    document.getElementById('introscreen3').classList.add('d-none');
    gameIsPaused = false;
}

function checkMobile() {
    if (isOnMobile()) {
        addMobilePanels();
        addRotationScreen();
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

function initListeners() {
    listenBtnSettings();
    listenFullScreenchange();
}

function openSettings() {
    gameIsPaused = true;
    renderFromMenu = true;
    removeNonSettings();
    if (settingsNeverOpened) {
        addListeners();
        settingsNeverOpened = false;
    }
    document.getElementById('settingsScreen').classList.remove('d-none');
}

function removeNonSettings() {
    if (!gameHasStarted)
        startScreen.classList.add('d-none');
    else
        inGameScreen.classList.add('d-none');
}

function closeSettings() {
    if (!gameHasStarted)
        startScreen.classList.remove('d-none');
    else
        inGameScreen.classList.remove('d-none');
    document.getElementById('settingsScreen').classList.add('d-none');
    gameIsPaused = false;
    renderFromMenu = false;
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

function toggleSound() {
    soundIsOn = !soundIsOn;
    if (soundIsOn) {
        playBackground();
        document.getElementById('speaker').innerHTML = `<img class="fullscreen-img" src="img/speaker-64.png"><span>Toggle Sound</span>`;
    } else {
        level_music.pause();
        ambience_audio.pause();
        document.getElementById('speaker').innerHTML = `<img class="fullscreen-img" src="img/mute-64.png"><span>Toggle Sound</span>`;
    }
}

function toggleHitbox() {
    hitboxesHidden = !hitboxesHidden;
    if (hitboxesHidden) {
        document.getElementById('hitbox').innerHTML = `<div class="checkbox"><img class="fullscreen-img hidden" src="img/check-mark-6-64.png"></div>
        <span>Show Hitboxes</span>`;
    } else
        document.getElementById('hitbox').innerHTML = `<div class="checkbox"><img class="fullscreen-img" src="img/check-mark-6-64.png"></div>
            <span>Show Hitboxes</span>`;
}

/**
 * I need to double check. Otherwise it is toggling wrong.
 */
function playBackground() {
    if (soundIsOn) {
        level_music.play();
        ambience_audio.play();
    } else {
        level_music.pause();
        ambience_audio.pause();
    }
}

function isOnMobile() {
    return /Mobi|Android/i.test(navigator.userAgent) ||
        mobileApple.includes(navigator.platform) ||
        (navigator.userAgent.includes("Mac") && "ontouchend" in document);
}

function setCustomInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
}

function setNewPausableFn(self, fn) {
    if (!gameIsPaused)
        fn(self);
}