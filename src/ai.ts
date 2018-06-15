import { State } from "./models/State";
import { Actions } from "./actions";

export function getNextAction(state: State): string {
  return Actions.wait("keep calm and go to bed");
}
