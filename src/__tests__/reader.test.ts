import { FakeLineReader } from "../FakeLineReader";
import { Reader } from "../reader";
import { GameMap } from "../models/GameMap";
import { GameSettings } from "../models/GameSettings";
import { CellType } from "../models/CellType";
import { State } from "../models/State";
import { Explorer } from "../models/Explorer";
import { SpawningMinion } from "../models/SpawningMinion";
import { Wanderer } from "../models/Wanderer";

test("Reader reads initial data", () => {
  const lineReader = FakeLineReader.fromLines([
    "4",
    "3",
    "####",
    "#.w#",
    "####",
    "1 2 3 20"
  ]);

  const reader = new Reader(lineReader);

  reader.readInitData();
});

test("readInitData returns map", () => {
  const lineReader = FakeLineReader.fromLines([
    "4",
    "3",
    "####",
    "#.w#",
    "####",
    "1 2 3 20"
  ]);

  const reader = new Reader(lineReader);

  const { map } = reader.readInitData();

  expect(map).toBeInstanceOf(GameMap);
  expect(map.width).toBe(4);
  expect(map.height).toBe(3);
  expect(map.cells).toEqual([
    [CellType.Wall, CellType.Wall, CellType.Wall, CellType.Wall],
    [CellType.Wall, CellType.Empty, CellType.Spawn, CellType.Wall],
    [CellType.Wall, CellType.Wall, CellType.Wall, CellType.Wall]
  ]);
});

test("readInitData returns settings", () => {
  const lineReader = FakeLineReader.fromLines([
    "4",
    "3",
    "####",
    "#.w#",
    "####",
    "1 2 3 20"
  ]);

  const reader = new Reader(lineReader);

  const { settings } = reader.readInitData();

  expect(settings).toBeInstanceOf(GameSettings);
  expect(settings.sanityLossLonely).toBe(1);
  expect(settings.sanityLossGroup).toBe(2);
  expect(settings.wandererSpawnTime).toBe(3);
  expect(settings.wandererLifeTime).toBe(20);
});

test("readState reads state", () => {
  const map = new GameMap(1, 1, [[CellType.Wall]]);
  const settings = new GameSettings(1, 2, 3, 4);

  const lineReader = FakeLineReader.fromLines([
    "4",
    "EXPLORER 1 1 1 100 123 123",
    "EXPLORER 2 1 2 80 123 123",
    "WANDERER 2 1 2 2 0 -1",
    "WANDERER 2 1 2 18 1 1"
  ]);

  const reader = new Reader(lineReader);

  reader.readState(map, settings);
});

test("readState returns state", () => {
  const map = new GameMap(1, 1, [[CellType.Wall]]);
  const settings = new GameSettings(1, 2, 3, 4);

  const lineReader = FakeLineReader.fromLines([
    "4",
    "EXPLORER 1 1 1 100 123 123",
    "EXPLORER 2 1 2 80 123 123",
    "WANDERER 3 1 2 2 0 -1",
    "WANDERER 4 1 2 18 1 1"
  ]);

  const reader = new Reader(lineReader);

  const state = reader.readState(map, settings);
  expect(state).toBeInstanceOf(State);
  expect(state.player).toEqual(new Explorer(1, 1, 1, 100, 123, 123));
  expect(state.explorers).toEqual([new Explorer(2, 1, 2, 80, 123, 123)]);
  expect(state.spawningMinions).toEqual([new SpawningMinion(3, 1, 2, 2)]);
  expect(state.wanderers).toEqual([new Wanderer(4, 1, 2, 18, 1)]);
});
