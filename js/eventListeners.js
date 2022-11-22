function addListeners() {
    listenBtnSpeaker();
    listenBtnFullscreen();
    listenBtnTutorial();
    listenBtnsCloseSettings();
    listenBtnHitbox();
    stopPropagationsInMenu();
}

function listenBtnSettings() {
    document.getElementById('settings').addEventListener('mousedown', (e) => {
        e.preventDefault();
        openSettings();
    });
    document.getElementById('settings').addEventListener('touchend', (e) => {
        e.preventDefault();
        openSettings();
    });
}

function listenBtnFullscreen() {
    document.getElementById('fullscreen').addEventListener('mousedown', (e) => {
        e.preventDefault();
        toggleFullScreen();
    });
    document.getElementById('fullscreen').addEventListener('touchend', (e) => {
        e.preventDefault();
        toggleFullScreen();
    });
}

function listenFullScreenchange() {
    window.addEventListener('fullscreenchange', (e) => {
        document.getElementById('frameImg').classList.toggle('d-none');
        document.getElementById('canvasFrameID').classList.toggle('toggleFullscreen');
        if (window.innerHeight > window.innerWidth) {
            document.getElementById('canvas').classList.toggle('w-100');
        } else {
            document.getElementById('canvas').classList.toggle('h-100');
        }
    });
}

function listenBtnSpeaker() {
    document.getElementById('speaker').addEventListener('mousedown', (e) => {
        e.preventDefault();
        toggleSound();
    });
    document.getElementById('speaker').addEventListener('touchend', (e) => {
        e.preventDefault();
        toggleSound();
    });
}

function listenBtnHitbox() {
    document.getElementById('hitbox').addEventListener('mousedown', (e) => {
        e.preventDefault();
        toggleHitbox();
    });
    document.getElementById('hitbox').addEventListener('touchend', (e) => {
        e.preventDefault();
        toggleHitbox();
    });
}

function listenBtnTutorial() {
    document.getElementById('help').addEventListener('mousedown', (e) => {
        e.preventDefault();
        renderIntro1();
    });
    document.getElementById('help').addEventListener('touchend', (e) => {
        e.preventDefault();
        renderIntro1();
    });
}

function listenBtnsCloseSettings() {
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
}

function addNextLvlListener() {
    document.getElementById('lvl2').addEventListener('mousedown', (e) => {
        e.preventDefault();
        startGame(level2);
    });
    document.getElementById('lvl2').addEventListener('touchend', (e) => {
        e.preventDefault();
        startGame(level2);
    });
}