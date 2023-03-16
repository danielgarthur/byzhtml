import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'trigorgonDottedLeftBelowSecondary';
const args = { color: CssVars.ColorGorgon };

export class TrigorgonDottedLeftBelowSecondary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
