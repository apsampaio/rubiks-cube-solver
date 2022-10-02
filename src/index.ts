import p5 from "p5";
window.p5 = p5; // add P5 to window for easycam
import "p5.easycam";

import { Box } from "./Models/Box";
import { Cube } from "./Models/Cube";

const canvasSize = 800;
const dim = 3;
const len = 50;

const cube = new Cube(dim);

const sketch = (s: p5) => {
  s.setup = () => {
    const renderer = s.createCanvas(canvasSize, canvasSize, "webgl");
    s.background(51);

    // @ts-ignore
    p5.prototype.createEasyCam(renderer, {
      distance: 800,
    });

    for (let i = 0; i < dim; i++) {
      for (let j = 0; j < dim; j++) {
        for (let k = 0; k < dim; k++) {
          const x = len * i;
          const y = len * j;
          const z = len * k;

          cube.faces[i][j][k] = new Box(x, y, z, len, s);
        }
      }
    }
  };

  s.draw = () => {
    s.background(51);

    for (let i = 0; i < dim; i++) {
      for (let j = 0; j < dim; j++) {
        for (let k = 0; k < dim; k++) {
          cube.faces[i][j][k].show();
        }
      }
    }
  };
};

new p5(sketch);
