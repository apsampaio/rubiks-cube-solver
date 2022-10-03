import p5 from "p5";
import { Box } from "./Box";

class Cube {
  public faces: Box[][][];
  public offset: number;

  constructor(public dim: number, public len: number, private sketch: p5) {
    this.offset = ((dim - 1) * len) / 2;
    this.faces = this.generate();
  }

  private generate() {
    const faces = [...new Array(this.dim)].map(() =>
      [...new Array(this.dim)].map(() => [...new Array(this.dim)])
    );

    for (let i = 0; i < this.dim; i++) {
      for (let j = 0; j < this.dim; j++) {
        for (let k = 0; k < this.dim; k++) {
          const x = this.len * i - this.offset;
          const y = this.len * j - this.offset;
          const z = this.len * k - this.offset;
          faces[i][j][k] = new Box(x, y, z, this.len, this.sketch);
        }
      }
    }

    return faces;
  }

  public draw() {
    for (let i = 0; i < this.dim; i++) {
      for (let j = 0; j < this.dim; j++) {
        for (let k = 0; k < this.dim; k++) {
          this.faces[i][j][k].show();
        }
      }
    }
  }
}

export { Cube };
