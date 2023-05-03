import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraDiatonicDiTertiary';
const args = { color: CssVars.ColorFthora };

export class FthoraDiatonicDiTertiary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
