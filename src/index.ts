import * as robot from "robotjs";
import { Window } from "./entities/Window";
import { AppError } from "./errors/AppError";

const width = 500;
const height = 900;

const startGame = () => {
  const x = width / 2;
  const y = height / 2;

  robot.moveMouse(x, y);
};

(() => {
  try {
    const window = new Window();
    window.showGameWindow();
    startGame();
  } catch (error) {
    if (error instanceof AppError) console.log(error.message);
    else console.log(error);
  }
})();
