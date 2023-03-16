import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'digorgon';
const args = { color: CssVars.ColorGorgon };

export class Digorgon extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
