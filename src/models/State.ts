import { GameSettings } from "./GameSettings";
import { GameMap } from "./GameMap";
import { Explorer } from "./Explorer";
import { Wanderer } from "./Wanderer";
import { SpawningMinion } from "./SpawningMinion";

export class State {
  public constructor(
    public map: GameMap,
    public settings: GameSettings,
    public player: Explorer,
    public explorers: Explorer[],
    public wanderers: Wanderer[],
    public spawningMinions: SpawningMinion[]
  ) {}
}
