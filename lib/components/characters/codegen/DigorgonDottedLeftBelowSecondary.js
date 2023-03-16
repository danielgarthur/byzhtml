import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'digorgonDottedLeftBelowSecondary';
const args = { color: CssVars.ColorGorgon };

export class DigorgonDottedLeftBelowSecondary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
