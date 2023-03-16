import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'digorgonDottedLeftAbove';
const args = { color: CssVars.ColorGorgon };

export class DigorgonDottedLeftAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
