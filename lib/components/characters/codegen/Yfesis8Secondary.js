import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'yfesis8Secondary';
const args = { color: CssVars.ColorAccidental };

export class Yfesis8Secondary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
