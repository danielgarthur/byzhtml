import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'diesis8';
const args = { color: CssVars.ColorAccidental };

export class Diesis8 extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
