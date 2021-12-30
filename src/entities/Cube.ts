import { AppError } from "../errors/AppError";

type Coordinate = {
  x: number;
  y: number;
};

// 10 Hue Range
enum Colors {
  R = 0, // Red 1 - 10
  O = 1, // Orange 30 - 40
  Y = 2, // Yellow 50 - 60
  G = 3, // Green 85 - 95
  B = 4, // Blue 190 - 200
  W = 5, // White 295 - 305
}

type Points = {
  [key: string]: Coordinate;
};

type Faces = {
  [name: string]: Colors[];
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
    0: { x: 90, y: 490 },
    1: { x: 160, y: 540 },
    2: { x: 230, y: 580 },
    3: { x: 90, y: 580 },
    4: { x: 160, y: 620 },
    5: { x: 230, y: 660 },
    6: { x: 90, y: 660 },
    7: { x: 160, y: 700 },
    8: { x: 230, y: 740 },
  };

  public readonly rightPoints: Points = {
    0: { x: 290, y: 580 },
    1: { x: 360, y: 540 },
    2: { x: 430, y: 490 },
    3: { x: 290, y: 660 },
    4: { x: 360, y: 620 },
    5: { x: 430, y: 580 },
    6: { x: 290, y: 740 },
    7: { x: 360, y: 700 },
    8: { x: 430, y: 660 },
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

  setFace(face: FaceNames, newFace: Colors[]) {
    this.faces[face] = newFace;
  }

  clockwise(face: FaceNames): Colors[] {
    const newFace = Array(9);

    newFace[0] = this.faces[face][6];
    newFace[1] = this.faces[face][3];
    newFace[2] = this.faces[face][0];

    newFace[3] = this.faces[face][7];
    newFace[4] = this.faces[face][4];
    newFace[5] = this.faces[face][1];

    newFace[6] = this.faces[face][8];
    newFace[7] = this.faces[face][5];
    newFace[8] = this.faces[face][2];

    this.setFace(face, newFace);

    return this.faces[face];
  }

  counterClockwise(face: FaceNames) {
    const newFace = Array(9);

    newFace[0] = this.faces[face][2];
    newFace[1] = this.faces[face][5];
    newFace[2] = this.faces[face][8];

    newFace[3] = this.faces[face][1];
    newFace[4] = this.faces[face][4];
    newFace[5] = this.faces[face][7];

    newFace[6] = this.faces[face][0];
    newFace[7] = this.faces[face][3];
    newFace[8] = this.faces[face][6];

    this.setFace(face, newFace);

    return this.faces[face];
  }

  // fix edges after a face move
  fixEdges(face: FaceNames, direction: "CW" | "CCW") {
    let temp = new Array(3);

    if (face === "U") {
      if (direction === "CW") {
        temp[0] = this.faces.F[0];
        temp[1] = this.faces.F[1];
        temp[2] = this.faces.F[2];

        this.faces.F[0] = this.faces.R[0];
        this.faces.F[1] = this.faces.R[0];
        this.faces.F[2] = this.faces.R[0];

        this.faces.R[0] = this.faces.B[0];
        this.faces.R[1] = this.faces.B[0];
        this.faces.R[2] = this.faces.B[0];

        this.faces.B[0] = this.faces.L[0];
        this.faces.B[1] = this.faces.L[0];
        this.faces.B[2] = this.faces.L[0];

        this.faces.L[0] = temp[0];
        this.faces.L[1] = temp[0];
        this.faces.L[2] = temp[0];
      }
    }
  }
}

export { Cube, Colors, Faces };
