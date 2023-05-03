import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'yfesis6Tertiary';
const args = { color: CssVars.ColorAccidental };

export class Yfesis6Tertiary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
