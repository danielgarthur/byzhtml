import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraDiatonicNiLowTertiary';
const args = { color: CssVars.ColorFthora };

export class FthoraDiatonicNiLowTertiary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
