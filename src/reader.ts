import { MapConsts } from "./models/MapConsts";
import { CellType } from "./models/CellType";
import { GameMap } from "./models/GameMap";
import { GameSettings } from "./models/GameSettings";
import { State } from "./models/State";
import { Entity } from "./models/Entity";
import { EntityType } from "./models/EntityType";
import { Explorer } from "./models/Explorer";
import { SpawningMinion } from "./models/SpawningMinion";
import { Wanderer } from "./models/Wanderer";

function initMap(width: number, height: number, rows: string[]) {
  const cells = rows.map(row =>
    row.split("").map(cellTypeChar => {
      switch (cellTypeChar) {
        case MapConsts.Wall:
          return CellType.Wall;
        case MapConsts.Spawn:
          return CellType.Spawn;
        case MapConsts.Empty:
          return CellType.Empty;
        default:
          throw new TypeError("Unknown cell type char: " + cellTypeChar);
      }
    })
  );
  return new GameMap(width, height, cells);
}

function initEntity(
  entityType: EntityType,
  id: number,
  x: number,
  y: number,
  param0: number,
  param1: number,
  param2: number
): Entity {
  if (entityType === "EXPLORER") {
    return new Explorer(id, x, y, param0, param1, param2);
  }
  if (param1 === 0) {
    return new SpawningMinion(id, x, y, param0);
  }
  return new Wanderer(id, x, y, param0, param2);
}

export function readInitData() {
  const width = parseInt(readline());
  const height = parseInt(readline());
  const rows = [];
  for (let i = 0; i < height; i++) {
    const line = readline();
    rows.push(line);
  }

  const map = initMap(width, height, rows);

  const inputs = readline().split(" ");
  const sanityLossLonely = parseInt(inputs[0]); // how much sanity you lose every turn when alone, always 3 until wood 1
  const sanityLossGroup = parseInt(inputs[1]); // how much sanity you lose every turn when near another player, always 1 until wood 1
  const wandererSpawnTime = parseInt(inputs[2]); // how many turns the wanderer take to spawn, always 3 until wood 1
  const wandererLifeTime = parseInt(inputs[3]); // how many turns the wanderer is on map after spawning, always 40 until wood 1

  const settings = new GameSettings(
    sanityLossLonely,
    sanityLossGroup,
    wandererSpawnTime,
    wandererLifeTime
  );

  return { map, settings };
}

export function readState(map: GameMap, settings: GameSettings) {
  const entityCount = parseInt(readline()); // the first given entity corresponds to your explorer

  let player!: Explorer;
  const spawningMinions: SpawningMinion[] = [];
  const explorers: Explorer[] = [];
  const wanderers: Wanderer[] = [];

  for (let i = 0; i < entityCount; i++) {
    const inputs = readline().split(" ");
    const entityType = inputs[0] as EntityType;
    const id = parseInt(inputs[1]);
    const x = parseInt(inputs[2]);
    const y = parseInt(inputs[3]);
    const param0 = parseInt(inputs[4]);
    const param1 = parseInt(inputs[5]);
    const param2 = parseInt(inputs[6]);

    const entity = initEntity(entityType, id, x, y, param0, param1, param2);

    if (i === 0 && entity instanceof Explorer) {
      player = entity;
    } else {
      if (entity instanceof Explorer) {
        explorers.push(entity);
      }
      if (entity instanceof Wanderer) {
        wanderers.push(entity);
      }
      if (entity instanceof SpawningMinion) {
        spawningMinions.push(entity);
      }
    }
  }

  return new State(
    map,
    settings,
    player,
    explorers,
    wanderers,
    spawningMinions
  );
}
