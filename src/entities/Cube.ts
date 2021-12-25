import { AppError } from "../errors/AppError";

type Coordinate = {
  x: number;
  y: number;
};

// 10 Hue Range
enum Colors {
  Red, //  1 - 10
  Orange, //  30 - 40
  Yellow, //  50 - 60
  Green, //   85 - 95
  Blue, //  190 - 200
  White, //  295 - 305
}

type Points = {
  [key: string]: Coordinate;
};

class Cube {
  public readonly gameWidth: number;
  public readonly gameHeight: number;

  public readonly middle: Coordinate;

  public readonly points: Points = {
    F1: { x: 90, y: 490 },
    F2: { x: 160, y: 540 },
    F3: { x: 230, y: 580 },
    F4: { x: 90, y: 580 },
    F5: { x: 160, y: 620 },
    F6: { x: 230, y: 660 },
    F7: { x: 90, y: 660 },
    F8: { x: 160, y: 700 },
    F9: { x: 230, y: 740 },

    R1: { x: 290, y: 580 },
    R2: { x: 360, y: 540 },
    R3: { x: 430, y: 490 },
    R4: { x: 290, y: 660 },
    R5: { x: 360, y: 620 },
    R6: { x: 430, y: 580 },
    R7: { x: 290, y: 740 },
    R8: { x: 360, y: 700 },
    R9: { x: 430, y: 660 },
  };

  // FIXME Find out cube size
  public readonly cubeWidth = 300;
  public readonly cubeHeight = 300;

  constructor(gameWidth = 500, gameHeight = 900) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    // FIXME Find padding number from chrome
    const magicPaddingNumber = 125;

    this.middle = {
      x: gameWidth / 2,
      y: gameHeight / 2 + magicPaddingNumber,
    };
  }
}

export { Cube, Colors };
