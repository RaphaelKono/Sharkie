class World {
    ctx;
    canvas;
    keyboard;

    character = new Character();
    enemies = [
        new Jellyfish(),
        new Jellyfish(),
        new Jellyfish(),
    ];
    lights = [new Light()];
    backgroundObjects = [
        new BackgroundObject('img/3. Background/Legacy/Layers/5. Water/D1.png'),
        new BackgroundObject('img/3. Background/Legacy/Layers/4.Fondo 2/D1.png'),
        new BackgroundObject('img/3. Background/Legacy/Layers/3.Fondo 1/D1.png'),
        new BackgroundObject('img/3. Background/Legacy/Layers/2. Floor/D1.png')
    ];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    draw() {
        this.clearPriorFrame();
        this.addToMap();
        this.drawNewFrame();
    }

    setWorld() {
        this.character.world = this;
    }

    clearPriorFrame() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    addToMap() {
        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.lights);
        this.addObjectToMap(this.character);
        this.addObjectsToMap(this.enemies);
    }

    addObjectsToMap(obj) {
        obj.forEach(o => {
            this.addObjectToMap(o);
        });
    }

    addObjectToMap(mo) {
        if (mo.leftDirection) {
            this.flipImage(mo);
        }
        if (mo.upDirection) {
            this.ctx.save();
            this.ctx.translate(mo.x * 2.2, mo.y * 1.7);
            this.ctx.rotate(270 * Math.PI / 180);
            this.ctx.drawImage(mo.img, -mo.width / 2, -mo.height / 2, mo.width, mo.height);
        }
        if (!mo.upDirection) {
            this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        }
        if (mo.leftDirection) {
            this.restoreContext(mo);
        }
        if (mo.upDirection) {
            this.ctx.restore();
        }
    }

    drawNewFrame() {
        self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = -mo.x;
    }

    restoreContext(mo) {
        mo.x = -mo.x;
        this.ctx.restore();
    }
}