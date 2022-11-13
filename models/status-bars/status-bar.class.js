class StatusBar extends DrawableObject {
    height = 158 / 3.5;
    width = 595 / 3.5;
    x;
    y;

    setPercentage(percentage, imgs) {
        this.percentage = percentage;
        let i = this.percentageDecision(percentage);
        let path = imgs[i];
        this.img = this.imageCache[path];
    }

    percentageDecision(perc) {
        let index;
        switch (true) {
            case this.isApprox100(perc):
                index = 5;
                break;
            case this.isApprox80(perc):
                index = 4;
                break;
            case this.isApprox60(perc):
                index = 3;
                break;
            case this.isApprox40(perc):
                index = 2;
                break;
            case this.isApprox20(perc):
                index = 1;
                break;
            case this.isApprox0(perc):
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