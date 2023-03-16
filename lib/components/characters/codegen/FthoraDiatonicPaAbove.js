import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraDiatonicPaAbove';
const args = { color: CssVars.ColorFthora };

export class FthoraDiatonicPaAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
