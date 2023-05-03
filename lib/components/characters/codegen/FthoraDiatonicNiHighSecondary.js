import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraDiatonicNiHighSecondary';
const args = { color: CssVars.ColorFthora };

export class FthoraDiatonicNiHighSecondary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
