// Hex to  HSL converter from from https://css-tricks.com/converting-color-spaces-in-javascript/

import { AppError } from "../errors/AppError";
import { Colors } from "../entities/Cube";

const hexToHueToColor = (H: string) => {
  // Convert hex to RGB first
  let r: any = 0;
  let g: any = 0;
  let b: any = 0;

  r = "0x" + H[0] + H[1];
  g = "0x" + H[2] + H[3];
  b = "0x" + H[4] + H[5];

  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  console.log("h: " + h);

  // Get color enum
  if (h >= 1 && h <= 10) return Colors.Red;
  else if (h >= 30 && h <= 40) return Colors.Orange;
  else if (h >= 50 && h <= 60) return Colors.Yellow;
  else if (h >= 85 && h <= 95) return Colors.Green;
  else if (h >= 190 && h <= 200) return Colors.Blue;
  else if (h >= 295 && h <= 305) return Colors.White;

  throw new AppError("No color match");
};

export { hexToHueToColor };
