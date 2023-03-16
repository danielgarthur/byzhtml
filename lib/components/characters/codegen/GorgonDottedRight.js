import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'gorgonDottedRight';
const args = { color: CssVars.ColorGorgon };

export class GorgonDottedRight extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
