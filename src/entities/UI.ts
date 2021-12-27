import blessed, { screen } from "blessed";
import { Colors, Faces } from "../entities/Cube";

class UI {
  private readonly screen: blessed.Widgets.Screen;
  private readonly blessed = blessed;
  private readonly container: blessed.Widgets.BoxElement;

  private readonly cubeWidthPx = 2;
  private readonly cubeHeightPx = 1;

  private readonly cubeTotalWidthPx = 6;
  private readonly cubeTotalHeightPx = 3;

  private readonly colors = {
    [Colors.R]: "red",
    [Colors.O]: "#881798",
    [Colors.Y]: "yellow",
    [Colors.W]: "white",
    [Colors.B]: "blue",
    [Colors.G]: "green",
  };

  constructor() {
    this.screen = blessed.screen({
      smartCSR: true,
    });

    this.container = blessed.box({
      parent: this.screen,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      style: {
        fg: "black",
        bg: "black",
      },
    });
  }

  public draw(faces: Faces) {
    this.drawUp(faces.U);
    this.drawLeft(faces.L);
    this.drawFront(faces.F);
    this.drawRight(faces.R);
    this.drawBack(faces.B);
    this.drawDown(faces.D);

    this.render();
  }

  public drawUp(face: Colors[][]) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this.blessed.box({
          parent: this.container,
          top: i,
          left: j * this.cubeWidthPx + this.cubeTotalWidthPx,
          width: this.cubeWidthPx,
          height: this.cubeHeightPx,
          style: {
            fg: this.colors[face[i][j]],
            bg: this.colors[face[i][j]],
          },
        });
      }
    }
  }

  public drawLeft(face: Colors[][]) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this.blessed.box({
          parent: this.container,
          top: i + this.cubeTotalHeightPx,
          left: j * this.cubeWidthPx,
          width: this.cubeWidthPx,
          height: this.cubeHeightPx,
          style: {
            fg: this.colors[face[i][j]],
            bg: this.colors[face[i][j]],
          },
        });
      }
    }
  }

  public drawFront(face: Colors[][]) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this.blessed.box({
          parent: this.container,
          top: i + this.cubeTotalHeightPx,
          left: j * this.cubeWidthPx + this.cubeTotalWidthPx,
          width: this.cubeWidthPx,
          height: this.cubeHeightPx,
          style: {
            fg: this.colors[face[i][j]],
            bg: this.colors[face[i][j]],
          },
        });
      }
    }
  }

  public drawRight(face: Colors[][]) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this.blessed.box({
          parent: this.container,
          top: i + this.cubeTotalHeightPx,
          left: j * this.cubeWidthPx + this.cubeTotalWidthPx * 2,
          width: this.cubeWidthPx,
          height: this.cubeHeightPx,
          style: {
            fg: this.colors[face[i][j]],
            bg: this.colors[face[i][j]],
          },
        });
      }
    }
  }

  public drawBack(face: Colors[][]) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this.blessed.box({
          parent: this.container,
          top: i + this.cubeTotalHeightPx,
          left: j * this.cubeWidthPx + this.cubeTotalWidthPx * 3,
          width: this.cubeWidthPx,
          height: this.cubeHeightPx,
          style: {
            fg: this.colors[face[i][j]],
            bg: this.colors[face[i][j]],
          },
        });
      }
    }
  }

  public drawDown(face: Colors[][]) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this.blessed.box({
          parent: this.container,
          top: i + this.cubeTotalHeightPx * 2,
          left: j * this.cubeWidthPx + this.cubeTotalWidthPx,
          width: this.cubeWidthPx,
          height: this.cubeHeightPx,
          style: {
            fg: this.colors[face[i][j]],
            bg: this.colors[face[i][j]],
          },
        });
      }
    }
  }

  private render() {
    this.screen.render();
  }
}

export { UI };
