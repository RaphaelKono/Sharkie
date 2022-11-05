class Poison extends CollectibleObject {
    width = 178 / 4;
    height = 243 / 4;

    IMAGES_LOOT = [
        'img/4. Marcadores/Posión/Animada/1.png',
        'img/4. Marcadores/Posión/Animada/2.png',
        'img/4. Marcadores/Posión/Animada/3.png',
        'img/4. Marcadores/Posión/Animada/4.png',
        'img/4. Marcadores/Posión/Animada/5.png',
        'img/4. Marcadores/Posión/Animada/6.png',
        'img/4. Marcadores/Posión/Animada/7.png',
        'img/4. Marcadores/Posión/Animada/8.png'
    ];

    IMAGES_LEVEL = [
        'img/4. Marcadores/Posión/Dark - Right.png'
    ];


    constructor(x, y, isDropLoot) {
        if (isDropLoot) {
            super().loadImage('img/4. Marcadores/Posión/Animada/1.png');
            this.loadImages(this.IMAGES_LOOT);
            this.x = x;
            this.y = y;
            this.animate();
        } else {
            super().loadImage('img/4. Marcadores/Posión/Dark - Right.png');
            this.x = x;
            this.y = y;
        }
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_LOOT);
        }, 150);
    }
}