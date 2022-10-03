import p5 from "p5";

class Box {
  private pos: p5.Vector;
  private _len: number;

  // UP , DOWN, RIGHT, LEFT, FRONT, BACK
  private colors: string[] = [
    "#FFFFFF",
    "#FFFF00",
    "#FF0000",
    "#FFA500",
    "#00FF00",
    "#0000FF",
  ];

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

    this.sketch.stroke(0);
    this.sketch.strokeWeight(8);

    this.sketch.translate(this.pos.x, this.pos.y, this.pos.z);

    const r = this._len / 2;

    this.sketch.beginShape();
    // Z
    this.sketch.fill(this.colors[0]);
    this.sketch.vertex(-r, -r, -r);
    this.sketch.vertex(r, -r, -r);
    this.sketch.vertex(r, r, -r);
    this.sketch.vertex(-r, r, -r);

    this.sketch.fill(this.colors[1]);
    this.sketch.vertex(-r, -r, r);
    this.sketch.vertex(r, -r, r);
    this.sketch.vertex(r, r, r);
    this.sketch.vertex(-r, r, r);

    // Y
    this.sketch.fill(this.colors[2]);
    this.sketch.vertex(-r, -r, -r);
    this.sketch.vertex(r, -r, -r);
    this.sketch.vertex(r, -r, r);
    this.sketch.vertex(-r, -r, r);

    this.sketch.fill(this.colors[3]);
    this.sketch.vertex(-r, r, -r);
    this.sketch.vertex(r, r, -r);
    this.sketch.vertex(r, r, r);
    this.sketch.vertex(-r, r, r);

    // // X
    this.sketch.fill(this.colors[4]);
    this.sketch.vertex(-r, -r, r);
    this.sketch.vertex(-r, -r, r);
    this.sketch.vertex(-r, r, r);
    this.sketch.vertex(-r, r, r);

    this.sketch.fill(this.colors[5]);
    this.sketch.vertex(r, -r, r);
    this.sketch.vertex(r, -r, r);
    this.sketch.vertex(r, r, r);
    this.sketch.vertex(r, r, r);

    this.sketch.endShape();

    this.sketch.pop();
  }
}

export { Box };
