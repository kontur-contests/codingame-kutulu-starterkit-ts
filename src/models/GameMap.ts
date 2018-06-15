import { CellType } from "./CellType";

export class GameMap {
  public constructor(
    public width: number,
    public height: number,
    public cells: CellType[][]
  ) {}
}
