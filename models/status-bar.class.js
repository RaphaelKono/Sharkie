class StatusBar extends DrawableObject {
    height = 480;
    width = 720;
    x = 0;
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

    constructor(path, x) {
        super().loadImage(path, x);
        this.loadImages(this.IMAGES_HEALTH_BAR);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let i = this.percentageDecision(percentage);
        let path = this.IMAGES_HEALTH_BAR(i);
        this.img = this.imageCache[path];
    }

    percentageDecision(perc) {
        let index;
        switch (true) {
            case isApprox100(perc):
                index = 5;
                break;
            case isApprox80(perc):
                index = 4;
                break;
            case isApprox60(perc):
                index = 3;
                break;
            case isApprox40(perc):
                index = 2;
                break;
            case isApprox20(perc):
                index = 1;
                break;
            case isApprox0(perc):
                index = 0;
                break;

        }
        return index;
    }

    isApprox100(perc) {
        return perc >= 90;
    }
    isApprox80(perc) {
        return perc >= 70 && perc < 90;
    }
    isApprox60(perc) {
        return perc >= 50 && perc < 70;
    }
    isApprox40(perc) {
        return perc >= 30 && perc < 50;
    }
    isApprox20(perc) {
        return perc >= 10 && perc < 30;
    }
    isApprox0(perc) {
        return perc < 10;
    }
}