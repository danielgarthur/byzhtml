import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraDiatonicZoAbove';
const args = { color: CssVars.ColorFthora };

export class FthoraDiatonicZoAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
