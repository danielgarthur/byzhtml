import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraHardChromaticPaSecondary';
const args = { color: CssVars.ColorFthora };

export class FthoraHardChromaticPaSecondary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
