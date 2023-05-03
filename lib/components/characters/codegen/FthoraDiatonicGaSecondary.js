import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraDiatonicGaSecondary';
const args = { color: CssVars.ColorFthora };

export class FthoraDiatonicGaSecondary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
