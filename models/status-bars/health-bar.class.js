class HealthBar extends StatusBar {
    height = 158 / 3.5;
    width = 595 / 3.5;
    x = 10;
    y = 0;
    percentage = 100;

    IMAGES_HEALTH_BAR = [
        'img/4. Marcadores/orange/0_  copia.png',
        'img/4. Marcadores/orange/20_  copia.png',
        'img/4. Marcadores/orange/40_  copia.png',
        'img/4. Marcadores/orange/60_  copia.png',
        'img/4. Marcadores/orange/80_  copia.png',
        'img/4. Marcadores/orange/100_  copia.png',
    ];

    constructor() {
        super().loadImage('img/4. Marcadores/orange/100_  copia.png');
        this.loadImages(this.IMAGES_HEALTH_BAR);
        this.setPercentage(100, this.IMAGES_HEALTH_BAR);
    }
}