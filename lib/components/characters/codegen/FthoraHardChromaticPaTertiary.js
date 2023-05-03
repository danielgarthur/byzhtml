import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraHardChromaticPaTertiary';
const args = { color: CssVars.ColorFthora };

export class FthoraHardChromaticPaTertiary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
