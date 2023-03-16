import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'digorgonDottedRight';
const args = { color: CssVars.ColorGorgon };

export class DigorgonDottedRight extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
