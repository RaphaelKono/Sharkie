const level2 = new LevelObject(
    [
        new PurpleJellyfish(),
        new PurpleJellyfish(),
        new PurpleJellyfish(),
        new PurpleJellyfish(),
        new PurpleJellyfish(),
        new YellowJellyfish(),
        new YellowJellyfish(),
        new YellowJellyfish(),
        new YellowJellyfish(),
        new GreenJellyfish(),
        new GreenJellyfish(),
        new GreenJellyfish(),
        new GreenJellyfish(),
        new PinkJellyfish(),
        new PinkJellyfish(),
        new PinkJellyfish(),
        new PinkJellyfish(),
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish(),
        new Endboss()
    ], [
        new Light('img/3. Background/Layers/1. Light/2.png', -720),
        new Light('img/3. Background/Layers/1. Light/1.png', 0),
        new Light('img/3. Background/Layers/1. Light/2.png', 719),
        new Light('img/3. Background/Layers/1. Light/1.png', 719 * 2),
        new Light('img/3. Background/Layers/1. Light/2.png', 719 * 3)
    ], [
        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', -720),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', -720),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', -720),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', -720),
        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 0),
        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 719),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 719),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 719),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 719),
        new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 719 * 2),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 719 * 2),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 719 * 2),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 719 * 2),
        new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 719 * 3),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 719 * 3),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 719 * 3),
        new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 719 * 3)
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