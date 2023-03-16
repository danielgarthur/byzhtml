import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'yfesis4';
const args = { color: CssVars.ColorAccidental };

export class Yfesis4 extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
