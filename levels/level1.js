const level1 = new LevelObject(
    [
        // new PurpleJellyfish(),
        // new PurpleJellyfish(),
        // new PurpleJellyfish(),
        // new YellowJellyfish(),
        // new GreenJellyfish(),
        // new PinkJellyfish(),
        // new Pufferfish(),
        new Endboss()
    ], [
        new Light('img/3. Background/Layers/1. Light/2.png', -720),
        new Light('img/3. Background/Layers/1. Light/1.png', 0),
        new Light('img/3. Background/Layers/1. Light/2.png', 719),
        new Light('img/3. Background/Layers/1. Light/1.png', 719 * 2),
        new Light('img/3. Background/Layers/1. Light/2.png', 719 * 3)
    ], [
        // new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', -720, 4),
        // new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', -720, 3),
        // new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', -720, 2),
        // new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', -720, 1),
        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 0, 4, 720, 480, 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 0, 3, 720, 480, 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 0, 2, 720, 480, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 0, 1, 720, 480, 0),
        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 719, 4, 720, 480, 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 719, 3, 720, 480, 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 719, 2, 720, 480, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 719, 1, 720, 480, 0),
        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 719 * 2, 4, 720, 480, 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 719 * 2, 3, 720, 480, 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 719 * 2, 2, 720, 480, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 719 * 2, 1, 720, 480, 0),
        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 719 * 3, 4, 720, 480, 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 719 * 3, 3, 720, 480, 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 719 * 3, 2, 720, 480, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 719 * 3, 1, 720, 480, 0),
        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', -720, 4, 720, 480, 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', -720, 3, 720, 480, 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', -720, 2, 720, 480, 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', -720, 1, 720, 480, 0),
        new BackgroundObject('img/3. Background/Barrier/1.png', 0, 1, 720, 480, 0)
    ], [
        // new Barrier('img/3. Background/Barrier/1.png', 720, 480, -720, 0, 380, 0, 30, 0),
        new Barrier(720, 480, 0, 0, 440, 0, 10, 0),
        new Barrier(720, 480, 0, 0, 425, 13, 30, 0),
        new Barrier(720, 480, 0, 0, 410, 30, 60, 0),
        new Barrier(720, 480, 0, 0, 400, 50, 85, 0),
        new Barrier(720, 480, 0, 0, 390, 80, 130, 0),
        new Barrier(720, 480, 0, 0, 380, 120, 185, 0),
        new Barrier(720, 480, 0, 0, 370, 180, 270, 0),
        new Barrier(720, 480, 0, 0, 360, 240, 380, 0),
        new Barrier(720, 480, 0, 0, 350, 320, 600, 0)
        // new Barrier('img/3. Background/Barrier/2.png', 360, 240, 400, 240),
        // new Barrier('img/3. Background/Barrier/3.png', 120, 480, -760, 0)
    ], [
        new Poison(-100, 403, false),
        new Poison(100, 403, false),
        new Poison(50, 403, false),
        new Poison(300, 403, false)
    ], [
        new Coin(-100, 100),
        new Coin(-50, 150),
        new Coin(0, 200),
        new Coin(50, 150),
        new Coin(100, 200)
    ]
);