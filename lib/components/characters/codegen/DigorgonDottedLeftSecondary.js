import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'digorgonDottedLeftSecondary';
const args = { color: CssVars.ColorGorgon };

export class DigorgonDottedLeftSecondary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
