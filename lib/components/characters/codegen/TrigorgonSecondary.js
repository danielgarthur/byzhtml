import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'trigorgonSecondary';
const args = { color: CssVars.ColorGorgon };

export class TrigorgonSecondary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
