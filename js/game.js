let canvas;
let world;
let fps = 60;
let keyboard;
let intervalIds = [];
let soundIsOn = false;
let gameIsPaused = false;
let gameHasStarted = false;
let settingsNeverOpened = true;
let hitboxesHidden = true;
let renderFromMenu = false;

let ambience_audio = new Audio('audio/ambience.mp3');
ambience_audio.loop = true;
ambience_audio.volume = 0.05;

let level_music = new Audio('audio/levelMusic.mp3');
level_music.loop = true;
level_music.volume = 0.05;


function init() {
    initListeners();
}

function startGame() {
    gameHasStarted = true;
    canvas = document.getElementById('canvas');
    document.getElementById('canvasContainer').classList.remove('startscreen');
    document.getElementById('startBtnPanel').classList.add('d-none');
    // document.getElementById('speaker').classList.remove('d-none');
    // document.getElementById('fullscreen').classList.remove('d-none');
    keyboard = new Keyboard();
    world = new World(canvas, keyboard);
    checkMobile();
}

function renderIntro1() {
    if (renderFromMenu) {
        closeSettings();
        gameIsPaused = true;
        if (gameHasStarted) {
            document.getElementById('bottomPanel').classList.add('d-none');
            document.getElementById('swipe').classList.add('d-none');
        }
    }
    if (isOnMobile()) {
        document.getElementById('rotation').classList.remove('d-none');
        document.getElementById('rotation').classList.add('please-rotate-screen');
    }
    document.getElementById('settings').classList.add('hidden');
    document.getElementById('startBtnPanel').classList.add('d-none');
    document.getElementById('canvasContainer').classList.remove('justify-content-between');
    document.getElementById('introscreen1').classList.remove('d-none');
}

function renderInstruction() {
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
    if (!gameHasStarted)
        document.getElementById('startBtnPanel').classList.remove('d-none');
    else {
        document.getElementById('bottomPanel').classList.remove('d-none');
        document.getElementById('swipe').classList.remove('d-none');
    }
    document.getElementById('canvasContainer').classList.add('justify-content-between');
    document.getElementById('canvasContainer').classList.remove('intro-filter');
    document.getElementById('introscreen3').classList.add('d-none');
    document.getElementById('settings').classList.remove('hidden');
    gameIsPaused = false;
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
    btnSettings();
    // btnSpeaker();
    // btnFullscreen();
}

function btnSettings() {
    document.getElementById('settings').addEventListener('mousedown', (e) => {
        e.preventDefault();
        openSettings();
    });
    document.getElementById('settings').addEventListener('touchend', (e) => {
        e.preventDefault();
        openSettings();
    });
}

function openSettings() {
    gameIsPaused = true;
    renderFromMenu = true;
    if (!gameHasStarted) {
        document.getElementById('startBtnPanel').classList.add('d-none');
        document.getElementById('canvasContainer').classList.remove('justify-content-between');
    } else {
        document.getElementById('bottomPanel').classList.add('d-none');
        document.getElementById('swipe').classList.add('d-none');
    }
    if (settingsNeverOpened) {
        btnSpeaker();
        btnFullscreen();
        btnTutorial();
        btnsCloseSettings();
        btnHitbox();
        stopPropagationsInMenu();
        settingsNeverOpened = false;
    }
    document.getElementById('topPanel').classList.add('d-none');
    document.getElementById('settingsScreen').classList.remove('d-none');
}

function closeSettings() {
    if (!gameHasStarted) {
        document.getElementById('startBtnPanel').classList.remove('d-none');
        document.getElementById('canvasContainer').classList.add('justify-content-between');
    } else {
        document.getElementById('bottomPanel').classList.remove('d-none');
        document.getElementById('swipe').classList.remove('d-none');
    }
    document.getElementById('settingsScreen').classList.add('d-none');
    document.getElementById('topPanel').classList.remove('d-none');

    gameIsPaused = false;
    renderFromMenu = false;
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

function btnsCloseSettings() {
    document.getElementById('closeSettings').addEventListener('mousedown', (e) => preventDefaultAndCloseSettings(e));
    document.getElementById('closeSettings').addEventListener('touchend', (e) => preventDefaultAndCloseSettings(e));
    document.getElementById('closeSettingsX').addEventListener('mousedown', (e) => preventDefaultAndCloseSettings(e));
    document.getElementById('closeSettingsX').addEventListener('touchend', (e) => preventDefaultAndCloseSettings(e));
    document.getElementById('settingsScreen').addEventListener('mousedown', (e) => preventDefaultAndCloseSettings(e));
    document.getElementById('settingsScreen').addEventListener('touchend', (e) => preventDefaultAndCloseSettings(e));
}

function preventDefaultAndCloseSettings(e) {
    e.preventDefault();
    closeSettings();
}

function stopPropagationsInMenu() {
    document.getElementById('gameMenu').addEventListener('mousedown', (e) => e.stopPropagation());
    document.getElementById('gameMenu').addEventListener('touchend', (e) => e.stopPropagation());
    document.getElementById('privacyStatement').addEventListener('mousedown', (e) => e.stopPropagation());
    document.getElementById('privacyStatement').addEventListener('touchend', (e) => e.stopPropagation());
    document.getElementById('imprint').addEventListener('mousedown', (e) => e.stopPropagation());
    document.getElementById('imprint').addEventListener('touchend', (e) => e.stopPropagation());
    document.getElementById('attributions').addEventListener('mousedown', (e) => e.stopPropagation());
    document.getElementById('attributions').addEventListener('touchend', (e) => e.stopPropagation());
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
        document.getElementById('speaker').innerHTML = `<img class="fullscreen-img" src="img/speaker-64.png"><span>Toggle Sound</span>`;
    } else {
        level_music.pause();
        ambience_audio.pause();
        document.getElementById('speaker').innerHTML = `<img class="fullscreen-img" src="img/mute-64.png"><span>Toggle Sound</span>`;
    }
    // document.getElementById('speaker').classList.toggle('toggleSpeaker');
}

function btnHitbox() {
    document.getElementById('hitbox').addEventListener('mousedown', (e) => {
        e.preventDefault();
        toggleHitbox();
    });
    document.getElementById('hitbox').addEventListener('touchend', (e) => {
        e.preventDefault();
        toggleHitbox();
    });
}

function toggleHitbox() {
    console.log('toggling Hitbox');
    hitboxesHidden = !hitboxesHidden;
    if (hitboxesHidden) {
        document.getElementById('hitbox').innerHTML = `<div class="checkbox"><img class="fullscreen-img hidden" src="img/check-mark-6-64.png"></div>
        <span>Show Hitboxes</span>`;
    } else
        document.getElementById('hitbox').innerHTML = `<div class="checkbox"><img class="fullscreen-img" src="img/check-mark-6-64.png"></div>
            <span>Show Hitboxes</span>`;
}

function btnTutorial() {
    document.getElementById('help').addEventListener('mousedown', (e) => {
        e.preventDefault();
        renderIntro1();
    });
    document.getElementById('help').addEventListener('touchend', (e) => {
        e.preventDefault();
        renderIntro1();
    });
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