import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraDiatonicPaTertiary';
const args = { color: CssVars.ColorFthora };

export class FthoraDiatonicPaTertiary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
