export default class HSLA {
  public constructor(
    public h: number = 0,
    public s: number = 0,
    public l: number = 0,
    public a: number = 0,
  ) {}

  public toString(): string {
    const { h, s, l, a } = this;
    return `hsla(${h}, ${s * 100}%, ${l * 100}%, ${a})`;
  }
}
