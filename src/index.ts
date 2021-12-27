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
    const ui = new UI();
    const controller = new Controller(robot, cube, window);

    window.showGameWindow();
    await controller.sleep(1000);
    robot.startGame();

    // const faces = await controller.getCubeColors();

    // ui.draw(faces);

    // await controller.sleep(6000);

    // while (true) {
    //   const keys = Object.keys(controller.moves);
    //   const key = keys[
    //     Math.floor(Math.random() * keys.length)
    //   ] as keyof typeof controller.moves;

    //   console.log(key);
    //   await controller.moves[key]();
    // }
  } catch (error) {
    if (error instanceof AppError) console.log(error.message);
    else console.log(error);
  }
})();
