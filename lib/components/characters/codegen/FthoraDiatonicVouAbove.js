import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraDiatonicVouAbove';
const args = { color: CssVars.ColorFthora };

export class FthoraDiatonicVouAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
