class LevelObject {
    enemies;
    lights;
    backgroundObjects;
    level_end_x;
    poisons = [];
    coins = [];

    constructor(enemies, lights, backgroundObjects, colPoisons, coins, level_end_x) {
        this.enemies = enemies;
        this.lights = lights;
        this.backgroundObjects = backgroundObjects;
        this.level_end_x = level_end_x;
        colPoisons.forEach(poison => this.poisons.push(poison));
        coins.forEach(coin => this.coins.push(coin));
    }
}