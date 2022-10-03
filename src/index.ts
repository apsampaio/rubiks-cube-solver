import p5 from "p5";
window.p5 = p5; // add P5 to window for easycam
import "p5.easycam";

import { Cube } from "./Models/Cube";

const canvasSize = 800;
const dim = 3;
const len = 50;

let cube: Cube;

const sketch = (s: p5) => {
  s.setup = () => {
    s.background(51);

    const renderer = s.createCanvas(canvasSize, canvasSize, "webgl");
    cube = new Cube(dim, len, s);

    // @ts-ignore
    p5.prototype.createEasyCam(renderer, {
      distance: 400,
    });
  };

  s.draw = () => {
    s.background(51);
    cube.draw();
  };
};

new p5(sketch);
