import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraDiatonicNiLowSecondary';
const args = { color: CssVars.ColorFthora };

export class FthoraDiatonicNiLowSecondary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
