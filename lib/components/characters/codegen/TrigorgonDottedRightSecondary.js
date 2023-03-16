import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'trigorgonDottedRightSecondary';
const args = { color: CssVars.ColorGorgon };

export class TrigorgonDottedRightSecondary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
