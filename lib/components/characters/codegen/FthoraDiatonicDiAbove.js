import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraDiatonicDiAbove';
const args = { color: CssVars.ColorFthora };

export class FthoraDiatonicDiAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
