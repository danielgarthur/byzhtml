import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraHardChromaticDiAbove';
const args = { color: CssVars.ColorFthora };

export class FthoraHardChromaticDiAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
