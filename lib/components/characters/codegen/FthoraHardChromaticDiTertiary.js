import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraHardChromaticDiTertiary';
const args = { color: CssVars.ColorFthora };

export class FthoraHardChromaticDiTertiary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
