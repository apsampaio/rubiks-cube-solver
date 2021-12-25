import { Cube } from "./Cube";
import { Robot } from "./Robot";
import { Window } from "./Window";

enum Moves {
  R, // ↑
  Ri, // ↓
  L, // ↑
  Li, // ↓
  B,
  Bi,
  D, // ->
  Di, // <-
  F, // ->
  Fi, // <-
  U, // <-
  Ui, // ->
  RotateRight, // ->
  RotateLeft, // <-
}

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
      this.robot.moveCursorTo(this.cube.middle.x - xOffset, this.cube.middle.y);
      this.robot.dragCursorTo(
        this.cube.middle.x - xOffset,
        this.cube.middle.y - yOffset
      );
      await this.sleep(this.delay);
    },
    Li: async () => {
      const xOffset = 150;
      const yOffset = 35;
      this.robot.moveCursorTo(
        this.cube.middle.x - xOffset,
        this.cube.middle.y - yOffset
      );
      this.robot.dragCursorTo(this.cube.middle.x - xOffset, this.cube.middle.y);
      await this.sleep(this.delay);
    },
    F: async () => {
      const xOffset = 35;
      const yOffset = 35;
      this.robot.moveCursorTo(
        this.cube.middle.x + xOffset,
        this.cube.middle.y - yOffset
      );
      this.robot.dragCursorTo(this.cube.middle.x + xOffset, this.cube.middle.y);
      await this.sleep(this.delay);
    },
    Fi: async () => {
      const xOffset = 35;
      const yOffset = 35;
      this.robot.moveCursorTo(this.cube.middle.x + xOffset, this.cube.middle.y);
      this.robot.dragCursorTo(
        this.cube.middle.x + xOffset,
        this.cube.middle.y - yOffset
      );
      await this.sleep(this.delay);
    },
    RotateLeft: async () => {
      const yOffset = 250;
      const xOffset = 70;
      this.robot.moveCursorTo(
        this.cube.middle.x + xOffset,
        this.cube.middle.y + yOffset
      );
      this.robot.dragCursorTo(this.cube.middle.x, this.cube.middle.y + yOffset);
      await this.sleep(this.delay);
    },
    RotateRight: async () => {
      const yOffset = 250;
      const xOffset = 70;
      this.robot.moveCursorTo(
        this.cube.middle.x - xOffset,
        this.cube.middle.y + yOffset
      );
      this.robot.dragCursorTo(this.cube.middle.x, this.cube.middle.y + yOffset);
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
}

export { Controller, Moves };
