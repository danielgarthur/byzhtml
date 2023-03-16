import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'gorgonDottedLeftSecondary';
const args = { color: CssVars.ColorGorgon };

export class GorgonDottedLeftSecondary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
