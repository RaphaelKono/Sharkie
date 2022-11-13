class PoisonBar extends StatusBar {
    x = 10;
    y = 35;
    collectedPoisons = 0;
    maxPoisons = 5;
    percentage = 0;
    isPoisonous = false;

    IMAGES_POISON_BAR = [
        'img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/20_ copia 3.png',
        'img/4. Marcadores/green/poisoned bubbles/40_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/60_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/80_ copia 2.png',
        'img/4. Marcadores/green/poisoned bubbles/100_ copia 3.png',
    ];

    IMAGES_POISON_BAR_ACTIVATED = [
        'img/4. Marcadores/Purple/0_.png',
        'img/4. Marcadores/Purple/20_.png',
        'img/4. Marcadores/Purple/40_.png',
        'img/4. Marcadores/Purple/60_.png',
        'img/4. Marcadores/Purple/80_.png',
        'img/4. Marcadores/Purple/100_.png'
    ];

    constructor() {
        super().loadImage('img/4. Marcadores/green/poisoned bubbles/0_ copia 2.png');
        this.loadImages(this.IMAGES_POISON_BAR);
        this.loadImages(this.IMAGES_POISON_BAR_ACTIVATED);
        this.setPercentage(this.percentage, this.IMAGES_POISON_BAR);
    }
}