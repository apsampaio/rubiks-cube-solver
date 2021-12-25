import { windowManager } from "node-window-manager";
import { AppError } from "../errors/AppError";

class Window {
  public readonly monitorWidth: number;
  public readonly monitorHeight: number;

  public readonly windowWidth: number;
  public readonly windowHeight: number;

  constructor(windowWidth = 500, windowHeight = 900) {
    const window = windowManager.getPrimaryMonitor();
    const { height, width } = window.getBounds();

    this.monitorWidth = width!;
    this.monitorHeight = height!;

    this.windowWidth = windowWidth;
    this.windowHeight = windowHeight;
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
      height: this.windowHeight,
      width: this.windowWidth,
      x: 0,
      y: 0,
    });

    gameWindow.show();
    gameWindow.bringToTop();
  }
}

export { Window };
