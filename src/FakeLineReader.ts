export class FakeLineReader {
  static fromLines(lines: string[]) {
    const _lines = [...lines];
    return () => _lines.shift() || "";
  }

  static fromString(input: string) {
    const lines = input.split("\n").map(x => x.trim());
    return this.fromLines(lines);
  }
}
