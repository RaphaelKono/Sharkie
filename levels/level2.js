function level2() {
    const level2 = new LevelObject(
        [
            new PurpleJellyfish(400, 130, true, false, 200),
            new PurpleJellyfish(200, 230, true, false, -200),
            new PurpleJellyfish(400, 330, true, false, 200),
            new YellowJellyfish(640, 250, true, false, -200),
            new YellowJellyfish(840, 150, true, false, 200),
            new YellowJellyfish(640, 50, true, false, -200),
            new GreenJellyfish(1000, 220, false, true, 0, -150),
            new GreenJellyfish(1125, 200, false, true, 0, -150),
            new GreenJellyfish(1250, 180, false, true, 0, -150),
            new PinkJellyfish(1075, 30, false, true, 0, 150),
            new PinkJellyfish(1200, 20, false, true, 0, 150),
            new PinkJellyfish(1325, 10, false, true, 0, 150),
            new Pufferfish(400, 400, true, false, -100),
            new Pufferfish(675, 400, true, false, 100),
            new Pufferfish(1550, 125, true, true, 100, 100),
            new Endboss(2250, -150, true, true, 400, 340)
        ], [
            new Light('img/3. Background/Layers/1. Light/2.png', -720),
            new Light('img/3. Background/Layers/1. Light/1.png', 0),
            new Light('img/3. Background/Layers/1. Light/2.png', 719),
            new Light('img/3. Background/Layers/1. Light/1.png', 719 * 2),
            new Light('img/3. Background/Layers/1. Light/2.png', 719 * 3)
        ], [
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
            new BackgroundObject('img/3. Background/Layers/5. Water/D2.png', -720, 0, 720, 480, 4),
            new BackgroundObject('img/3. Background/Layers/4.Fondo 2/D2.png', -720, 0, 720, 480, 3),
            new BackgroundObject('img/3. Background/Layers/3.Fondo 1/D2.png', -720, 0, 720, 480, 2),
            new BackgroundObject('img/3. Background/Layers/2. Floor/D2.png', -720, 0, 720, 480, 1),
            new BackgroundObject('img/3. Background/Barrier/1.png', -720, 0, 720, 480, 1),
            new BackgroundObject('img/3. Background/Barrier/2.png', 1000, 240, 360, 240, 1),
            new BackgroundObject('img/3. Background/Barrier/3.png', -760, 0, 120, 480, 1),
            new BackgroundObject('img/3. Background/Barrier/3.png', 480, 0, 120, 360, 1),
            new BackgroundObject('img/3. Background/Barrier/1.png', 2519, 0, 720, 480, 1),
            new BackgroundObject('img/3. Background/Barrier/3.png', 1730, 0, 120, 360, 1)
        ], [
            // new Barrier('img/3. Background/Barrier/1.png', 720, 480, -720, 0, 380, 0, 30, 0),
            new Barrier(720, 480, -720, 0, 410, 40, 75, 0),
            new Barrier(720, 480, -720, 0, 400, 60, 100, 0),
            new Barrier(720, 480, -720, 0, 390, 90, 145, 0),
            new Barrier(720, 480, -720, 0, 380, 130, 200, 0),
            new Barrier(720, 480, -720, 0, 370, 190, 285, 0),
            new Barrier(720, 480, -720, 0, 425, 18, 45, 0),
            new Barrier(720, 480, -720, 0, 440, 5, 20, 0),
            new Barrier(720, 480, -720, 0, 360, 250, 395, 0),
            new Barrier(720, 480, -720, 0, 355, 350, 640, 0),

            new Barrier(720, 480, -720, 0, 0, 15, 30, 380),
            new Barrier(720, 480, -720, 0, 0, 40, 615, 360),
            new Barrier(720, 480, -720, 0, 0, 275, 660, 360),
            new Barrier(720, 480, -720, 0, 0, 465, 520, 350),
            new Barrier(720, 480, -720, 0, 0, 495, 640, 325),

            new Barrier(360, 240, 1000, 240, 120, 20, 35, 0),
            new Barrier(360, 240, 1000, 240, 100, 70, 90, 200),
            new Barrier(360, 240, 1000, 240, 55, 90, 155, 0),
            new Barrier(360, 240, 1000, 240, 15, 165, 245, 0),

            new Barrier(120, 480, -760, 0, 25, 35, 65, 53),
            new Barrier(120, 480, -760, 0, 70, 17, 65, 170),
            new Barrier(120, 480, -760, 0, 120, 50, 70, 130),
            new Barrier(120, 480, -760, 0, 360, 65, 75, 380),
            new Barrier(120, 480, -760, 0, 10, 55, 75, 440),

            new Barrier(120, 360, 480, 0, 25 * 3 / 4, 35, 65, 3 / 4 * 53),
            new Barrier(120, 360, 480, 0, 70 * 3 / 4, 17, 65, 3 / 4 * 170),
            new Barrier(120, 360, 480, 0, 120 * 3 / 4, 50, 70, 3 / 4 * 130),
            new Barrier(120, 360, 480, 0, 360 * 3 / 4, 65, 75, 3 / 4 * 380),
            new Barrier(120, 360, 480, 0, 10 * 3 / 4, 55, 75, 3 / 4 * 440),

            new Barrier(720, 480, 2519, 0, 410, 40, 75, 0),
            new Barrier(720, 480, 2519, 0, 400, 60, 100, 0),
            new Barrier(720, 480, 2519, 0, 390, 90, 145, 0),
            new Barrier(720, 480, 2519, 0, 380, 130, 200, 0),
            new Barrier(720, 480, 2519, 0, 370, 190, 285, 0),
            new Barrier(720, 480, 2519, 0, 425, 18, 45, 0),
            new Barrier(720, 480, 2519, 0, 440, 5, 20, 0),
            new Barrier(720, 480, 2519, 0, 360, 250, 395, 0),
            new Barrier(720, 480, 2519, 0, 355, 350, 640, 0),

            new Barrier(120, 360, 1730, 0, 25 * 3 / 4, 35, 65, 3 / 4 * 53),
            new Barrier(120, 360, 1730, 0, 70 * 3 / 4, 17, 65, 3 / 4 * 170),
            new Barrier(120, 360, 1730, 0, 120 * 3 / 4, 50, 70, 3 / 4 * 130),
            new Barrier(120, 360, 1730, 0, 360 * 3 / 4, 65, 75, 3 / 4 * 380),
            new Barrier(120, 360, 1730, 0, 10 * 3 / 4, 55, 75, 3 / 4 * 440)
        ], [
            new Poison(-250, 330, false),
            new Poison(150, 390, false),
            new Poison(245, 363, false),
            new Poison(930, 370, false),
            new Poison(1622, 385, false)
        ], [
            new Coin(-620, 270),
            new Coin(-500, 150),
            new Coin(-350, 200),
            new Coin(-200, 250),
            new Coin(100, 50),
            new Coin(300, 50),
            new Coin(650, 205),
            new Coin(650, 105),
            new Coin(1500, 385)
        ], [
            new Heart(1775, 370)
        ]
    );
    return level2;
}