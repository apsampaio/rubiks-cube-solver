import { Window } from "./entities/Window";
import { Robot } from "./entities/Robot";
import { Cube } from "./entities/Cube";
import { Controller } from "./entities/Controller";
import { UI } from "./entities/UI";

import { AppError } from "./errors/AppError";

(async () => {
  try {
    const window = new Window();
    const robot = new Robot();
    const cube = new Cube();

    const controller = new Controller(robot, cube, window);

    window.showGameWindow();
    await controller.sleep(1000);
    robot.startGame();
    await controller.sleep(6000);

    const result = await controller.getCubeColors();
    console.log(result);

    await controller.moves.U();

    const faces = await controller.getCubeColors();
    console.log(faces);
  } catch (error) {
    if (error instanceof AppError) console.log(error.message);
    else console.log(error);
  }
})();
