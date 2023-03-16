import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraDiatonicVouBelow';
const args = { color: CssVars.ColorFthora };

export class FthoraDiatonicVouBelow extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
