import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraDiatonicNiLowBelow';
const args = { color: CssVars.ColorFthora };

export class FthoraDiatonicNiLowBelow extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
