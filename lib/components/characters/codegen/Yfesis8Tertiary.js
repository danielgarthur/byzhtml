import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'yfesis8Tertiary';
const args = { color: CssVars.ColorAccidental };

export class Yfesis8Tertiary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
