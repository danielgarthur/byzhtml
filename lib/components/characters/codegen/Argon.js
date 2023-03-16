import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'argon';
const args = { color: CssVars.ColorGorgon };

export class Argon extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
