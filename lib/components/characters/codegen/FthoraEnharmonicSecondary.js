import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraEnharmonicSecondary';
const args = { color: CssVars.ColorFthora };

export class FthoraEnharmonicSecondary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
