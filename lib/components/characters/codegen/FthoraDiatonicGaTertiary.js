import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraDiatonicGaTertiary';
const args = { color: CssVars.ColorFthora };

export class FthoraDiatonicGaTertiary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
