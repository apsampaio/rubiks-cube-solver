import { AppError } from "../errors/AppError";

type Coordinate = {
  x: number;
  y: number;
};

class Cube {
  public readonly gameWidth: number;
  public readonly gameHeight: number;

  public readonly middle: Coordinate;

  // FIXME Find cube size using opencv
  public readonly cubeWidth = 300;
  public readonly cubeHeight = 300;

  constructor(gameWidth = 500, gameHeight = 900) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    // FIXME Find padding number
    const magicPaddingNumber = 125;

    this.middle = {
      x: gameWidth / 2,
      y: gameHeight / 2 + magicPaddingNumber,
    };
  }
}

export { Cube };
