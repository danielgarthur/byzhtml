import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'diargon';
const args = { color: CssVars.ColorGorgon };

export class Diargon extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
