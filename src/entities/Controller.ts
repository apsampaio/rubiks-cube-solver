import { Cube, Colors, Faces } from "./Cube";
import { Robot } from "./Robot";
import { Window } from "./Window";

class Controller {
  private readonly robot: Robot;
  private readonly cube: Cube;
  private readonly window: Window;

  private delay = 100;

  public moves = {
    U: async () => {
      const xOffset = 35;
      this.robot.moveCursorTo(this.cube.middle.x + xOffset, this.cube.middle.y);
      this.robot.dragCursorTo(this.cube.middle.x, this.cube.middle.y);
      await this.sleep(this.delay);

      this.cube.clockwise("U");
      this.cube.fixEdges("U", "CW");
    },
    Ui: async () => {
      const xOffset = 35;
      this.robot.moveCursorTo(this.cube.middle.x, this.cube.middle.y);
      this.robot.dragCursorTo(this.cube.middle.x + xOffset, this.cube.middle.y);
      await this.sleep(this.delay);
    },
    D: async () => {
      const xOffset = 35;
      const yOffset = 150;
      this.robot.moveCursorTo(this.cube.middle.x, this.cube.middle.y + yOffset);
      this.robot.dragCursorTo(
        this.cube.middle.x + xOffset,
        this.cube.middle.y + yOffset
      );
      await this.sleep(this.delay);
    },
    Di: async () => {
      const xOffset = 35;
      const yOffset = 150;
      this.robot.moveCursorTo(
        this.cube.middle.x + xOffset,
        this.cube.middle.y + yOffset
      );
      this.robot.dragCursorTo(this.cube.middle.x, this.cube.middle.y + yOffset);
      await this.sleep(this.delay);
    },
    R: async () => {
      const xOffset = 20;
      const yOffset = 35;
      this.robot.moveCursorTo(this.cube.middle.x - xOffset, this.cube.middle.y);
      this.robot.dragCursorTo(
        this.cube.middle.x - xOffset,
        this.cube.middle.y - yOffset
      );
      await this.sleep(this.delay);
    },
    Ri: async () => {
      const xOffset = 20;
      const yOffset = 35;
      this.robot.moveCursorTo(
        this.cube.middle.x - xOffset,
        this.cube.middle.y - yOffset
      );
      this.robot.dragCursorTo(this.cube.middle.x - xOffset, this.cube.middle.y);
      await this.sleep(this.delay);
    },
    L: async () => {
      const xOffset = 150;
      const yOffset = 35;
      this.robot.moveCursorTo(
        this.cube.middle.x - xOffset,
        this.cube.middle.y - yOffset
      );
      this.robot.dragCursorTo(this.cube.middle.x - xOffset, this.cube.middle.y);
      await this.sleep(this.delay);
    },
    Li: async () => {
      const xOffset = 150;
      const yOffset = 35;
      this.robot.moveCursorTo(this.cube.middle.x - xOffset, this.cube.middle.y);
      this.robot.dragCursorTo(
        this.cube.middle.x - xOffset,
        this.cube.middle.y - yOffset
      );
      await this.sleep(this.delay);
    },
    F: async () => {
      const xOffset = 50;
      const yOffset = 35;
      this.robot.moveCursorTo(
        this.cube.middle.x + xOffset,
        this.cube.middle.y - yOffset
      );
      this.robot.dragCursorTo(this.cube.middle.x + xOffset, this.cube.middle.y);
      await this.sleep(this.delay);

      this.cube.clockwise("F");
    },
    Fi: async () => {
      const xOffset = 50;
      const yOffset = 35;
      this.robot.moveCursorTo(this.cube.middle.x + xOffset, this.cube.middle.y);
      this.robot.dragCursorTo(
        this.cube.middle.x + xOffset,
        this.cube.middle.y - yOffset
      );
      await this.sleep(this.delay);
    },
    B: async () => {
      const xOffset = 185;
      const yOffset = 35;
      this.robot.moveCursorTo(this.cube.middle.x + xOffset, this.cube.middle.y);
      this.robot.dragCursorTo(
        this.cube.middle.x + xOffset,
        this.cube.middle.y - yOffset
      );
      await this.sleep(this.delay);
    },
    Bi: async () => {
      const xOffset = 185;
      const yOffset = 35;
      this.robot.moveCursorTo(
        this.cube.middle.x + xOffset,
        this.cube.middle.y - yOffset
      );
      this.robot.dragCursorTo(this.cube.middle.x + xOffset, this.cube.middle.y);
      await this.sleep(this.delay);
    },
    RotateLeft: async () => {
      const yOffset = 250;
      const xOffset = 35;
      this.robot.moveCursorTo(
        this.cube.middle.x + xOffset,
        this.cube.middle.y + yOffset
      );
      this.robot.dragCursorTo(this.cube.middle.x, this.cube.middle.y + yOffset);
      await this.sleep(this.delay);
    },
    RotateRight: async () => {
      const yOffset = 250;
      const xOffset = 35;
      this.robot.moveCursorTo(
        this.cube.middle.x - xOffset,
        this.cube.middle.y + yOffset
      );
      this.robot.dragCursorTo(this.cube.middle.x, this.cube.middle.y + yOffset);
      await this.sleep(this.delay);
    },
    RotateUp: async () => {
      const yOffset = 250;
      const xOffset = 100;
      this.robot.moveCursorTo(
        this.cube.middle.x - xOffset,
        this.cube.middle.y + yOffset
      );
      this.robot.dragCursorTo(
        this.cube.middle.x - xOffset,
        this.cube.middle.y + (yOffset - 30)
      );
      await this.sleep(this.delay);
    },
    RotateDown: async () => {
      const yOffset = 250;
      const xOffset = 100;
      this.robot.moveCursorTo(
        this.cube.middle.x - xOffset,
        this.cube.middle.y + (yOffset - 30)
      );
      this.robot.dragCursorTo(
        this.cube.middle.x - xOffset,
        this.cube.middle.y + yOffset
      );
      await this.sleep(this.delay);
    },
  };

  constructor(robot: Robot, cube: Cube, window: Window) {
    this.robot = robot;
    this.cube = cube;
    this.window = window;
  }

  public sleep(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  private make2DArray = (cols: number, rows: number) =>
    [...new Array(cols)].map(() => [...new Array(rows)].map(() => 0));

  public readFrontFace(): Colors[] {
    const face = [];

    for (let point = 0; point < 9; point++) {
      const color = this.robot.getColorFromPixel(
        this.cube.facePoints[point].x,
        this.cube.facePoints[point].y
      );
      face.push(color);
    }

    return face;
  }

  private readRightFace(): Colors[] {
    const face = [];

    for (let point = 0; point < 9; point++) {
      const color = this.robot.getColorFromPixel(
        this.cube.rightPoints[point].x,
        this.cube.rightPoints[point].y
      );
      face.push(color);
    }

    return face;
  }

  public async getCubeColors(): Promise<Faces> {
    // FRONT
    this.cube.setFace("F", this.readFrontFace());
    // RIGHT
    this.cube.setFace("R", this.readRightFace());
    // BACK
    await this.moves.RotateLeft();
    this.cube.setFace("B", this.readRightFace());
    await this.moves.RotateRight();
    // LEFT
    await this.moves.RotateRight();
    this.cube.setFace("L", this.readFrontFace());
    await this.moves.RotateLeft();
    // UP
    await this.moves.RotateDown();
    this.cube.setFace("U", this.readFrontFace());
    await this.moves.RotateUp();
    // DOWN
    await this.moves.RotateUp();
    this.cube.setFace("D", this.readFrontFace());
    await this.moves.RotateDown();

    return this.cube.faces;
  }
}

export { Controller };
