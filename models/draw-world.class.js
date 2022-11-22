class DrawWorld {
    ctx;
    canvas;


    draw() {
        this.clearPriorFrame();
        this.ctx.translate(this.camera_x, 0);
        this.addToMap();
        this.drawNewFrame();
        this.ctx.translate(-this.camera_x, 0);
    }

    setWorld() {
        this.character.world = this;
        this.coinBar.maxCoins = this.level.coins.length;
    }

    clearPriorFrame() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    addToMap() {
        this.addUnfixedObjects();
        this.addFixedObjects();
    }

    addUnfixedObjects() {
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.lights);
        this.addObjectsToMap(this.level.barriers);
        this.addObjectToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.bubbles);
        this.addObjectsToMap(this.level.poisons);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.hearts);
    }

    addFixedObjects() {
        this.ctx.translate(-this.camera_x, 0);
        // Space for fixed Objects:
        this.addObjectToMap(this.healthBar);
        this.addObjectToMap(this.poisonBar);
        this.addObjectToMap(this.poisonImprovement);
        this.addObjectToMap(this.coinBar);
        if (this.endbossIntroduced) {
            this.addObjectToMap(this.bossBar);
            this.addObjectToMap(this.bossImgInBar);
        }
        // space end
        this.ctx.translate(this.camera_x, 0);
    }

    addObjectsToMap(obj) {
        obj.forEach(o => {
            this.addObjectToMap(o);
        });
    }

    addObjectToMap(mo) {
        this.changeCtx(mo);
        mo.draw(this.ctx);
        mo.drawRect(this.ctx);
        this.rechangeCtx(mo);
    }

    changeCtx(mo) {
        if (mo instanceof BackgroundObject)
            this.translateBgCtx(mo.layer);
        if (mo.reversedDirection)
            this.flipImage(mo);
        if (mo.reversedYDirection)
            this.flipImageY(mo);
    }

    rechangeCtx(mo) {
        if (mo.reversedDirection)
            this.restoreContext(mo);
        if (mo instanceof BackgroundObject)
            this.translateBgCtxBack(mo.layer);
        if (mo.reversedYDirection)
            this.restoreContextY(mo);
    }

    translateBgCtx(layer) {
        this.ctx.translate(-this.camera_x, 0);
        this.ctx.translate(this.camera_x / layer, 0);
    }

    translateBgCtxBack(layer) {
        this.ctx.translate(-this.camera_x / layer, 0);
        this.ctx.translate(this.camera_x, 0);
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

    flipImageY(mo) {
        this.ctx.save();
        this.ctx.translate(0, mo.height);
        this.ctx.scale(1, -1);
        mo.y = -mo.y;
    }

    restoreContextY(mo) {
        mo.y = -mo.y;
        this.ctx.restore();
    }
}