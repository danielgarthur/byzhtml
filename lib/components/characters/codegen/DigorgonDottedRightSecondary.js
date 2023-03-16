import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'digorgonDottedRightSecondary';
const args = { color: CssVars.ColorGorgon };

export class DigorgonDottedRightSecondary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
