import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'diesis2';
const args = { color: CssVars.ColorAccidental };

export class Diesis2 extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
