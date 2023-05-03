import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'yfesis4Secondary';
const args = { color: CssVars.ColorAccidental };

export class Yfesis4Secondary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
