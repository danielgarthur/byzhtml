import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraHardChromaticPaAbove';
const args = { color: CssVars.ColorFthora };

export class FthoraHardChromaticPaAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
