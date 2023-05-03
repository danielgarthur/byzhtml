import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraDiatonicVouSecondary';
const args = { color: CssVars.ColorFthora };

export class FthoraDiatonicVouSecondary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
