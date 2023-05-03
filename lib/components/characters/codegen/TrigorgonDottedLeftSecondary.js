import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'trigorgonDottedLeftSecondary';
const args = { color: CssVars.ColorGorgon };

export class TrigorgonDottedLeftSecondary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
