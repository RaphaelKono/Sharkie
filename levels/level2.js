function level2() {
    const level2 = new LevelObject(
        createLevel2Enemies(),
        createLevel2Lights(),
        createLevel2Backgrounds(),
        createLevel2Barriers(),
        createLevel2Poisons(),
        createLevel2Coins(),
        createLevel2Hearts(),
        3400
    );

    function createLevel2Enemies() {
        return [
            new GreenPufferfish(-670, 190, true, false, -400),
            new GreenPufferfish(-670, 280, true, false, -400),
            new GreenJellyfish(200, 310, false, true, 0, -60),
            new GreenJellyfish(260, 310, false, true, 0, -60),
            new GreenJellyfish(320, 310, false, true, 0, -60),
            new PinkJellyfish(200, 125, false, true, 0, 60),
            new PinkJellyfish(260, 125, false, true, 0, 60),
            new PinkJellyfish(320, 125, false, true, 0, 60),
            new PinkJellyfish(600, 150, false, true, 0, 130),
            new PinkJellyfish(660, 150, false, true, 0, 130),
            new PinkJellyfish(720, 150, false, true, 0, 130),
            new OrangePufferfish(1100, 240, true, false, 150),
            new RedPufferfish(1600, 75, true, true, 200, 200),
            new GreenPufferfish(1630, 240, true, false, -320),
            new PurpleJellyfish(2000, 180, false, true, 0, -50),
            new PurpleJellyfish(2100, 180, false, true, 0, -50),
            new PurpleJellyfish(2200, 180, false, true, 0, -50),
            new YellowJellyfish(2000, 10, false, true, 0, 50),
            new YellowJellyfish(2100, 10, false, true, 0, 50),
            new YellowJellyfish(2200, 10, false, true, 0, 50),
            new OrangePufferfish(2160, 260, true, false, -270),
            new RedPufferfish(2650, 125, true, true, 100, -100),
            new RedPufferfish(2850, 240, true, true, 200, -200),
            new RedPufferfish(3030, 340, true, true, 300, -300),
            new Endboss(3600, -150, true, true, 400, 340)
        ];
    }

    function createLevel2Lights() {
        return [
            new Light('img/3. Background/Layers/1. Light/2.png', -720),
            new Light('img/3. Background/Layers/1. Light/1.png', 0),
            new Light('img/3. Background/Layers/1. Light/2.png', 719),
            new Light('img/3. Background/Layers/1. Light/1.png', 719 * 2),
            new Light('img/3. Background/Layers/1. Light/2.png', 719 * 3),
            new Light('img/3. Background/Layers/1. Light/2.png', 719 * 4),
            new Light('img/3. Background/Layers/1. Light/2.png', 719 * 5)
        ];
    }

    function createLevel2Backgrounds() {
        return [
            new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 0, 0, 720, 480, 4),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 0, 0, 720, 480, 3),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 0, 0, 720, 480, 2),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 0, 0, 720, 480, 1),
            new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 719, 0, 720, 480, 4),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 719, 0, 720, 480, 3),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 719, 0, 720, 480, 2),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 719, 0, 720, 480, 1),
            new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 719 * 2, 0, 720, 480, 4),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 719 * 2, 0, 720, 480, 3),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 719 * 2, 0, 720, 480, 2),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 719 * 2, 0, 720, 480, 1),
            new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 719 * 3, 0, 720, 480, 4),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 719 * 3, 0, 720, 480, 3),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 719 * 3, 0, 720, 480, 2),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 719 * 3, 0, 720, 480, 1),
            new BackgroundObject('img/3. Background/Layers/5. Water/D1.png', 719 * 4, 0, 720, 480, 4),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D1.png', 719 * 4, 0, 720, 480, 3),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D1.png', 719 * 4, 0, 720, 480, 2),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D1.png', 719 * 4, 0, 720, 480, 1),
            new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', 719 * 5, 0, 720, 480, 4),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', 719 * 5, 0, 720, 480, 3),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', 719 * 5, 0, 720, 480, 2),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', 719 * 5, 0, 720, 480, 1),
            new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', -720, 0, 720, 480, 4),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', -720, 0, 720, 480, 3),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', -720, 0, 720, 480, 2),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', -720, 0, 720, 480, 1),
            new BackgroundObject('img/3. Background/Barrier/1.png', -1000, 0, 720, 480, 1),
            new BackgroundObject('img/3. Background/Barrier/1.png', -400, 0, 720, 480, 1),
            new BackgroundObject('img/3. Background/Barrier/1.png', 200, 0, 720, 480, 1),
            new BackgroundObject('img/3. Background/Barrier/1.png', 800, 0, 720, 480, 1),
            new BackgroundObject('img/3. Background/Barrier/3.png', 1500, 240, 120, 360, 1),
            new BackgroundObject('img/3. Background/Barrier/2.png', 1850, 240, 360, 240, 1),
            new BackgroundObject('img/3. Background/Barrier/3.png', 2500, 120, 120, 360, 1),
            new BackgroundObject('img/3. Background/Barrier/3.png', 3050, 0, 120, 360, 1),
            new BackgroundObject('img/3. Background/Barrier/3.png', 3920, 0, 120, 480, 1)
        ];
    }

    function createLevel2Barriers() {
        return [
            new Barrier(720, 480, -1000, 0, 410, 40, 75, 0),
            new Barrier(720, 480, -1000, 0, 400, 60, 100, 0),
            new Barrier(720, 480, -1000, 0, 390, 90, 145, 0),
            new Barrier(720, 480, -1000, 0, 380, 130, 200, 0),
            new Barrier(720, 480, -1000, 0, 370, 190, 285, 0),
            new Barrier(720, 480, -1000, 0, 425, 18, 45, 0),
            new Barrier(720, 480, -1000, 0, 440, 5, 20, 0),
            new Barrier(720, 480, -1000, 0, 360, 250, 395, 0),
            new Barrier(720, 480, -1000, 0, 355, 350, 640, 0),

            new Barrier(720, 480, -400, 0, 410, 40, 75, 0),
            new Barrier(720, 480, -400, 0, 400, 60, 100, 0),
            new Barrier(720, 480, -400, 0, 390, 90, 145, 0),
            new Barrier(720, 480, -400, 0, 380, 130, 200, 0),
            new Barrier(720, 480, -400, 0, 370, 190, 285, 0),
            new Barrier(720, 480, -400, 0, 425, 18, 45, 0),
            new Barrier(720, 480, -400, 0, 440, 5, 20, 0),
            new Barrier(720, 480, -400, 0, 360, 250, 395, 0),
            new Barrier(720, 480, -400, 0, 355, 350, 640, 0),

            new Barrier(720, 480, 200, 0, 410, 40, 75, 0),
            new Barrier(720, 480, 200, 0, 400, 60, 100, 0),
            new Barrier(720, 480, 200, 0, 390, 90, 145, 0),
            new Barrier(720, 480, 200, 0, 380, 130, 200, 0),
            new Barrier(720, 480, 200, 0, 370, 190, 285, 0),
            new Barrier(720, 480, 200, 0, 425, 18, 45, 0),
            new Barrier(720, 480, 200, 0, 440, 5, 20, 0),
            new Barrier(720, 480, 200, 0, 360, 250, 395, 0),
            new Barrier(720, 480, 200, 0, 355, 350, 640, 0),

            new Barrier(720, 480, 800, 0, 410, 40, 75, 0),
            new Barrier(720, 480, 800, 0, 400, 60, 100, 0),
            new Barrier(720, 480, 800, 0, 390, 90, 145, 0),
            new Barrier(720, 480, 800, 0, 380, 130, 200, 0),
            new Barrier(720, 480, 800, 0, 370, 190, 285, 0),
            new Barrier(720, 480, 800, 0, 425, 18, 45, 0),
            new Barrier(720, 480, 800, 0, 440, 5, 20, 0),
            new Barrier(720, 480, 800, 0, 360, 250, 395, 0),
            new Barrier(720, 480, 800, 0, 355, 350, 640, 0),

            new Barrier(720, 480, -1000, 0, 0, 15, 30, 380),
            new Barrier(720, 480, -1000, 0, 0, 40, 615, 360),
            new Barrier(720, 480, -1000, 0, 0, 275, 660, 360),
            new Barrier(720, 480, -1000, 0, 0, 465, 520, 350),
            new Barrier(720, 480, -1000, 0, 0, 495, 640, 325),

            new Barrier(720, 480, -400, 0, 0, 15, 30, 380),
            new Barrier(720, 480, -400, 0, 0, 40, 615, 360),
            new Barrier(720, 480, -400, 0, 0, 275, 660, 360),
            new Barrier(720, 480, -400, 0, 0, 465, 520, 350),
            new Barrier(720, 480, -400, 0, 0, 495, 640, 325),

            new Barrier(720, 480, 200, 0, 0, 15, 30, 380),
            new Barrier(720, 480, 200, 0, 0, 40, 615, 360),
            new Barrier(720, 480, 200, 0, 0, 275, 660, 360),
            new Barrier(720, 480, 200, 0, 0, 465, 520, 350),
            new Barrier(720, 480, 200, 0, 0, 495, 640, 325),

            new Barrier(720, 480, 800, 0, 0, 15, 30, 380),
            new Barrier(720, 480, 800, 0, 0, 40, 615, 360),
            new Barrier(720, 480, 800, 0, 0, 275, 660, 360),
            new Barrier(720, 480, 800, 0, 0, 465, 520, 350),
            new Barrier(720, 480, 800, 0, 0, 495, 640, 325),

            new Barrier(120, 360, 1500, 240, 25 * 3 / 4, 35, 65, 3 / 4 * 53),
            new Barrier(120, 360, 1500, 240, 70 * 3 / 4, 17, 65, 3 / 4 * 170),
            new Barrier(120, 360, 1500, 240, 120 * 3 / 4, 50, 70, 3 / 4 * 130),
            new Barrier(120, 360, 1500, 240, 360 * 3 / 4, 65, 75, 3 / 4 * 380),
            new Barrier(120, 360, 1500, 240, 10 * 3 / 4, 55, 75, 3 / 4 * 440),

            new Barrier(360, 240, 1850, 240, 120, 20, 35, 0),
            new Barrier(360, 240, 1850, 240, 100, 70, 90, 200),
            new Barrier(360, 240, 1850, 240, 55, 90, 155, 0),
            new Barrier(360, 240, 1850, 240, 15, 165, 245, 0),

            new Barrier(120, 360, 2500, 120, 25 * 3 / 4, 35, 65, 3 / 4 * 53),
            new Barrier(120, 360, 2500, 120, 70 * 3 / 4, 17, 65, 3 / 4 * 170),
            new Barrier(120, 360, 2500, 120, 120 * 3 / 4, 50, 70, 3 / 4 * 130),
            new Barrier(120, 360, 2500, 120, 360 * 3 / 4, 65, 75, 3 / 4 * 380),
            new Barrier(120, 360, 2500, 120, 10 * 3 / 4, 55, 75, 3 / 4 * 440),

            new Barrier(120, 360, 3050, 0, 25 * 3 / 4, 35, 65, 3 / 4 * 53),
            new Barrier(120, 360, 3050, 0, 70 * 3 / 4, 17, 65, 3 / 4 * 170),
            new Barrier(120, 360, 3050, 0, 120 * 3 / 4, 50, 70, 3 / 4 * 130),
            new Barrier(120, 360, 3050, 0, 360 * 3 / 4, 65, 75, 3 / 4 * 380),
            new Barrier(120, 360, 3050, 0, 10 * 3 / 4, 55, 75, 3 / 4 * 440),

            new Barrier(120, 480, 3920, 0, 25, 35, 65, 53),
            new Barrier(120, 480, 3920, 0, 70, 17, 65, 170),
            new Barrier(120, 480, 3920, 0, 120, 50, 70, 130),
            new Barrier(120, 480, 3920, 0, 360, 65, 75, 380),
            new Barrier(120, 480, 3920, 0, 10, 55, 75, 440)
        ];
    }

    function createLevel2Poisons() {
        return [
            new Poison(465, 330, false),
            new Poison(1870, 330, false),
            new Poison(2400, 380, false),
            new Poison(2555, 75, false),
            new Poison(2750, 390, false)
        ];
    }

    function createLevel2Coins() {
        return [
            new Coin(-660, 270),
            new Coin(150, 240),
            new Coin(1700, 380),
            new Coin(2280, 360),
            new Coin(2950, 50)
        ];
    }

    function createLevel2Hearts() {
        return [
            new Heart(3095, 370)
        ];
    }

    return level2;
}