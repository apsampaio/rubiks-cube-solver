import { AppError } from "../errors/AppError";

type Coordinate = {
  x: number;
  y: number;
};

// 10 Hue Range
enum Colors {
  R, // Red 1 - 10
  O, // Orange 30 - 40
  Y, // Yellow 50 - 60
  G, // Green 85 - 95
  B, // Blue 190 - 200
  W, // White 295 - 305
}

type Points = {
  [key: string]: Coordinate;
};

type Faces = {
  [name: string]: Colors[][];
};

type FaceNames = "F" | "R" | "L" | "U" | "D" | "B";

class Cube {
  public readonly gameWidth: number;
  public readonly gameHeight: number;

  public readonly middle: Coordinate;

  public faces: Faces = {
    F: [], // FRONT
    R: [], // RIGHT
    L: [], // LEFT
    U: [], // UP
    D: [], // DOWN
    B: [], // BACK
  };

  // FIXME base on cube center
  public readonly facePoints: Points = {
    1: { x: 90, y: 490 },
    2: { x: 160, y: 540 },
    3: { x: 230, y: 580 },
    4: { x: 90, y: 580 },
    5: { x: 160, y: 620 },
    6: { x: 230, y: 660 },
    7: { x: 90, y: 660 },
    8: { x: 160, y: 700 },
    9: { x: 230, y: 740 },
  };

  public readonly rightPoints: Points = {
    1: { x: 290, y: 580 },
    2: { x: 360, y: 540 },
    3: { x: 430, y: 490 },
    4: { x: 290, y: 660 },
    5: { x: 360, y: 620 },
    6: { x: 430, y: 580 },
    7: { x: 290, y: 740 },
    8: { x: 360, y: 700 },
    9: { x: 430, y: 660 },
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

  setFace(face: FaceNames, newFace: Colors[][]) {
    this.faces[face] = newFace;
  }
}

export { Cube, Colors };
