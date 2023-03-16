import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraDiatonicNiHighAbove';
const args = { color: CssVars.ColorFthora };

export class FthoraDiatonicNiHighAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
