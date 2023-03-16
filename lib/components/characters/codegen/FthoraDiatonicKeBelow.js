import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraDiatonicKeBelow';
const args = { color: CssVars.ColorFthora };

export class FthoraDiatonicKeBelow extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
