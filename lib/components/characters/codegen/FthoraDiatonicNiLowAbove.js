import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraDiatonicNiLowAbove';
const args = { color: CssVars.ColorFthora };

export class FthoraDiatonicNiLowAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
