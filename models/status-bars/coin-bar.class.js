class CoinBar extends StatusBar {
    x = 10;
    y = 70;
    collectedCoins = 0;
    maxCoins;
    percentage = 0;

    IMAGES_COIN_BAR = [
        'img/4. Marcadores/Purple/0_ _1.png',
        'img/4. Marcadores/Purple/20_ .png',
        'img/4. Marcadores/Purple/40_ _1.png',
        'img/4. Marcadores/Purple/60_ _1.png',
        'img/4. Marcadores/Purple/80_ _1.png',
        'img/4. Marcadores/Purple/100__1.png'
    ];


    constructor() {
        super().loadImage('img/4. Marcadores/Purple/0_ _1.png');
        this.loadImages(this.IMAGES_COIN_BAR);
        this.setPercentage(this.percentage, this.IMAGES_COIN_BAR);
    }
}