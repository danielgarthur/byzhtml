import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'yfesis6';
const args = { color: CssVars.ColorAccidental };

export class Yfesis6 extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
