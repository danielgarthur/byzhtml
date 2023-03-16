import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'digorgonSecondary';
const args = { color: CssVars.ColorGorgon };

export class DigorgonSecondary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
