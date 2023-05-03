import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraDiatonicKeSecondary';
const args = { color: CssVars.ColorFthora };

export class FthoraDiatonicKeSecondary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
