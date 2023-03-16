import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'trigorgonDottedLeftAbove';
const args = { color: CssVars.ColorGorgon };

export class TrigorgonDottedLeftAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
