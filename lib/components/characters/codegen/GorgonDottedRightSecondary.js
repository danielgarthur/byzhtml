import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'gorgonDottedRightSecondary';
const args = { color: CssVars.ColorGorgon };

export class GorgonDottedRightSecondary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
