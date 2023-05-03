import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraDiatonicDiSecondary';
const args = { color: CssVars.ColorFthora };

export class FthoraDiatonicDiSecondary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
