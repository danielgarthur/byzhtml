import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'yfesis4Tertiary';
const args = { color: CssVars.ColorAccidental };

export class Yfesis4Tertiary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
