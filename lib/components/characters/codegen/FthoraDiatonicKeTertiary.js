import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraDiatonicKeTertiary';
const args = { color: CssVars.ColorFthora };

export class FthoraDiatonicKeTertiary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
