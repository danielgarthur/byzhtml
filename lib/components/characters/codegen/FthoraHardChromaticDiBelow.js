import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraHardChromaticDiBelow';
const args = { color: CssVars.ColorFthora };

export class FthoraHardChromaticDiBelow extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
