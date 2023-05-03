import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraDiatonicZoSecondary';
const args = { color: CssVars.ColorFthora };

export class FthoraDiatonicZoSecondary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
