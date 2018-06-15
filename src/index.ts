import { readInitData, readState } from "./reader";
import { getNextAction } from "./ai";

const { map, settings } = readInitData();

while (true) {
  const state = readState(map, settings);
  const action = getNextAction(state);

  printErr("Meh... don't say anything");

  print(action);
}
