import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'yfesis2';
const args = { color: CssVars.ColorAccidental };

export class Yfesis2 extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
