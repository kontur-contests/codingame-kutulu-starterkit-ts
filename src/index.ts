import { StateReader } from "./StateReader";
import { getNextAction } from "./ai";

const reader = new StateReader(readline);
const { map, settings } = reader.readInitData();

while (true) {
  const state = reader.readState(map, settings);
  const action = getNextAction(state);

  printErr("Meh... don't say anything");

  print(action);
}
