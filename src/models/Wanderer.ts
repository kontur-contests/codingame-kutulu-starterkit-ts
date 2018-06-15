import { Entity } from "./Entity";

export class Wanderer extends Entity {
  public timeBeforeRecall: number;

  public targetId: number;

  public constructor(
    id: number,
    x: number,
    y: number,
    timeBeforeRecall: number,
    targetId: number
  ) {
    super(id, x, y);

    this.timeBeforeRecall = timeBeforeRecall;
    this.targetId = targetId;
  }
}
