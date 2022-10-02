import { Box } from "./Box";

class Cube {
  public faces: Box[][][];

  constructor(dim: number) {
    this.faces = this.generate(dim);
  }

  private generate(dim: number) {
    return [...new Array(dim)].map(() =>
      [...new Array(dim)].map(() => [...new Array(dim)])
    );
  }
}

export { Cube };
