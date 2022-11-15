class LevelObject {
    enemies;
    lights;
    backgroundObjects;
    barriers;
    level_end_x;
    poisons = [];
    coins = [];

    constructor(enemies, lights, backgroundObjects, barriers, poisons, coins, level_end_x) {
        this.enemies = enemies;
        this.lights = lights;
        this.backgroundObjects = backgroundObjects;
        this.barriers = barriers;
        this.level_end_x = level_end_x;
        this.poisons = poisons;
        this.coins = coins;
    }
}