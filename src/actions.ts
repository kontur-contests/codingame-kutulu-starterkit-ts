export class Actions {
  public static wait(message?: string) {
    let command = `WAIT`;
    if (message) {
      command += ` ${message}`;
    }
    return command;
  }

  public static move(x: number, y: number, message?: string) {
    let command = `MOVE ${x} ${y}`;
    if (message) {
      command += ` ${message}`;
    }
    return command;
  }
}
