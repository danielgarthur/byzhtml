import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraDiatonicNiHighTertiary';
const args = { color: CssVars.ColorFthora };

export class FthoraDiatonicNiHighTertiary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
