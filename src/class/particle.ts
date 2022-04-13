import HSLA from "./hsla";

export default class Particle {
  public $x; // past X
  public $y; // past Y

  public constructor(
    public x: number = 0,
    public y: number = 0,
    public color: HSLA = new HSLA(),
  ) {
    this.$x = this.x;
    this.$y = this.y;
  }
}
