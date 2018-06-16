import { LineReader } from "./StateReader";

export class FakeLineReader {
  static fromLines(lines: string[]): LineReader {
    const _lines = [...lines];
    return () => _lines.shift() || "";
  }

  /**
   * Tag template function
   * Trims each line
   * @example
   * ```ts
   * FakeLineReader.input`
   *  4
   *  3
   *  ####
   *  #.w#
   *  ####
   *  1 2 3 20
   * `
   * ```
   */
  static input(
    strings: TemplateStringsArray,
    ...values: Array<string | number>
  ): LineReader {
    const text = strings.reduce((acc, stringPart, index) => {
      return acc + stringPart + (values[index] || "");
    }, "");

    const lines = text
      .trim()
      .split("\n")
      .map(x => x.trim());

    return FakeLineReader.fromLines(lines);
  }
}
