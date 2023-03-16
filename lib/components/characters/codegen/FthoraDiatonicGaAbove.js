import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraDiatonicGaAbove';
const args = { color: CssVars.ColorFthora };

export class FthoraDiatonicGaAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
