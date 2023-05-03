import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraDiatonicVouTertiary';
const args = { color: CssVars.ColorFthora };

export class FthoraDiatonicVouTertiary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
