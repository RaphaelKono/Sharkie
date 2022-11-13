class HealthBar extends StatusBar {
    percentage = 100;

    IMAGES_HEALTH_BAR = [
        'img/4. Marcadores/orange/0_  copia.png',
        'img/4. Marcadores/orange/20_  copia.png',
        'img/4. Marcadores/orange/40_  copia.png',
        'img/4. Marcadores/orange/60_  copia.png',
        'img/4. Marcadores/orange/80_  copia.png',
        'img/4. Marcadores/orange/100_  copia.png',
    ];

    IMAGES_BOSS_HEALTH_BAR = [
        'img/4. Marcadores/Purple/0_ .png',
        'img/4. Marcadores/Purple/20__1.png',
        'img/4. Marcadores/Purple/40_ .png',
        'img/4. Marcadores/Purple/60_ .png',
        'img/4. Marcadores/Purple/80_ .png',
        'img/4. Marcadores/Purple/100_ .png'
    ];


    constructor(x, y, height, width, isCharacter) {
        if (isCharacter) {
            super().loadImage('img/4. Marcadores/orange/100_  copia.png');
            this.loadBar(this.IMAGES_HEALTH_BAR);
        } else {
            super().loadImage('img/4. Marcadores/Purple/100_ .png');
            this.loadBar(this.IMAGES_BOSS_HEALTH_BAR);
        }
        this.setProperties(x, y, height, width);
    }

    loadBar(imgs) {
        this.loadImages(imgs);
        this.setPercentage(100, imgs);
    }

    setProperties(x, y, height, width) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }
}