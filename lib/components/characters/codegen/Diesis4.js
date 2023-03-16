import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'diesis4';
const args = { color: CssVars.ColorAccidental };

export class Diesis4 extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
