import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraDiatonicPaSecondary';
const args = { color: CssVars.ColorFthora };

export class FthoraDiatonicPaSecondary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
