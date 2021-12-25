import * as robot from "robotjs";

import { AppError } from "../errors/AppError";

class Robot {
  public readonly gameWidth: number;
  public readonly gameHeight: number;

  constructor(gameWidth = 500, gameHeight = 900) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  public startGame() {
    const x = this.gameWidth / 2;
    const y = this.gameHeight / 2;

    robot.moveMouse(x, y);
    robot.mouseClick("left", true);
  }

  public restart(after = 0) {
    setTimeout(() => robot.keyTap("f5"), after);
  }

  public moveCursorTo(x: number, y: number) {
    robot.moveMouse(x, y);
    robot.mouseClick();
  }

  public dragCursorTo(x: number, y: number) {
    robot.mouseToggle("down", "left");
    robot.moveMouseSmooth(x, y, 2);
    robot.mouseToggle("up", "left");
  }
}

export { Robot };
