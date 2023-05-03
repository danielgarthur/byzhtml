import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'yfesis2Secondary';
const args = { color: CssVars.ColorAccidental };

export class Yfesis2Secondary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
