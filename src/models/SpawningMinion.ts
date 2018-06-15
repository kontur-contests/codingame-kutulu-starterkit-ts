import { Entity } from "./Entity";

export class SpawningMinion extends Entity {
  public timeBeforeSpawn: number;

  public constructor(
    id: number,
    x: number,
    y: number,
    timeBeforeSpawn: number
  ) {
    super(id, x, y);

    this.timeBeforeSpawn = timeBeforeSpawn;
  }
}
