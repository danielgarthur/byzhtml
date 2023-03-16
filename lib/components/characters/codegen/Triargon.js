import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'triargon';
const args = { color: CssVars.ColorGorgon };

export class Triargon extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
