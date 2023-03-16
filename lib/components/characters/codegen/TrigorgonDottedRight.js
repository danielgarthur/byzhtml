import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'trigorgonDottedRight';
const args = { color: CssVars.ColorGorgon };

export class TrigorgonDottedRight extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
