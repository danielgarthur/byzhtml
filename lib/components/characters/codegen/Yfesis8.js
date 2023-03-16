import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'yfesis8';
const args = { color: CssVars.ColorAccidental };

export class Yfesis8 extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
