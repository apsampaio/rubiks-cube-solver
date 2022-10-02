import p5 from "p5";

class Box {
  private pos: p5.Vector;
  private _len: number;

  constructor(
    public x: number,
    public y: number,
    public z: number,
    public len: number,
    private sketch: p5
  ) {
    this.pos = new p5.Vector(x, y, z);
    this._len = len;
  }

  public show() {
    this.sketch.push();

    this.sketch.fill(255);
    this.sketch.stroke(0);
    this.sketch.strokeWeight(8);

    this.sketch.translate(this.pos.x, this.pos.y, this.pos.z);
    this.sketch.box(this._len);

    this.sketch.pop();
  }
}

export { Box };
