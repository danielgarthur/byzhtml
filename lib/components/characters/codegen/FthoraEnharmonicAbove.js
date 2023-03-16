import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraEnharmonicAbove';
const args = { color: CssVars.ColorFthora };

export class FthoraEnharmonicAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
