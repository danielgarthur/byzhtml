import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraDiatonicZoTertiary';
const args = { color: CssVars.ColorFthora };

export class FthoraDiatonicZoTertiary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
