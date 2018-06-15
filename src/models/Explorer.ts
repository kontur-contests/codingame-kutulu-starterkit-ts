import { Entity } from "./Entity";

export class Explorer extends Entity {
  public sanity: number;

  public constructor(
    id: number,
    x: number,
    y: number,
    sanity: number,
    param1: number,
    param2: number
  ) {
    super(id, x, y);

    this.sanity = sanity;
  }
}
