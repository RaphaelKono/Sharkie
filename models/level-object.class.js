class LevelObject {
    enemies;
    lights;
    backgroundObjects;
    level_end_x;
    poisons = [];

    constructor(enemies, lights, backgroundObjects, colPoisons, level_end_x) {
        this.enemies = enemies;
        this.lights = lights;
        this.backgroundObjects = backgroundObjects;
        this.level_end_x = level_end_x;
        colPoisons.forEach(poison => {
            this.poisons.push(poison);
        });
    }
}