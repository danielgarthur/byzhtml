import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'yfesis2Tertiary';
const args = { color: CssVars.ColorAccidental };

export class Yfesis2Tertiary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
