import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraEnharmonicTertiary';
const args = { color: CssVars.ColorFthora };

export class FthoraEnharmonicTertiary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
