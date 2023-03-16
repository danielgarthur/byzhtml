import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'trigorgon';
const args = { color: CssVars.ColorGorgon };

export class Trigorgon extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
