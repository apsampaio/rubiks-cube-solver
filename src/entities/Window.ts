import { windowManager } from "node-window-manager";
import { AppError } from "../errors/AppError";

class Window {
  public readonly monitorWidth: number;
  public readonly monitorHeight: number;

  public readonly gameWidth: number;
  public readonly gameHeight: number;

  constructor(gameWidth = 500, gameHeight = 900) {
    const window = windowManager.getPrimaryMonitor();
    const { height, width } = window.getBounds();

    this.monitorWidth = width!;
    this.monitorHeight = height!;

    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  public showGameWindow() {
    const windows = windowManager.getWindows();

    const gameHash = "dlabgdldanmcjlmnifgogbnffionmfki";

    const [gameWindow] = windows.filter((item) =>
      item.getTitle().includes(gameHash)
    );

    if (!gameWindow) {
      throw new AppError("Window game not found");
    }

    gameWindow.setBounds({
      height: this.gameHeight,
      width: this.gameWidth,
      x: 0,
      y: 0,
    });

    gameWindow.show();
    gameWindow.bringToTop();
  }
}

export { Window };
