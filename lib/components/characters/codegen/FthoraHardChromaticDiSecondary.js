import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraHardChromaticDiSecondary';
const args = { color: CssVars.ColorFthora };

export class FthoraHardChromaticDiSecondary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
