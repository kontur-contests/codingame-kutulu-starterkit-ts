import { Reader } from "./reader";
import { getNextAction } from "./ai";

const reader = new Reader(readline);
const { map, settings } = reader.readInitData();

while (true) {
  const state = reader.readState(map, settings);
  const action = getNextAction(state);

  printErr("Meh... don't say anything");

  print(action);
}
