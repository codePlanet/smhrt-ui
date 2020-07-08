import { RgbColor } from 'polished/lib/types/color';

export const hexToRgb = (hex: string): RgbColor => {
  const hexWithoutHash = hex.replace('#', '');
  const r = hexWithoutHash[0] + hexWithoutHash[1];
  const g = hexWithoutHash[2] + hexWithoutHash[3];
  const b = hexWithoutHash[4] + hexWithoutHash[5];

  return {
    red: parseInt(r, 16),
    green: parseInt(g, 16),
    blue: parseInt(b, 16)
  };
};

export const rgbToHex = ({ red, green, blue }: RgbColor): string =>
  `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;

export const contrastRatio = ({ red, green, blue }: RgbColor): number =>
  1 - (0.299 * red + 0.587 * green + 0.114 * blue) / 255;
