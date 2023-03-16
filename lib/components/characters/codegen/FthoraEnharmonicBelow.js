import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraEnharmonicBelow';
const args = { color: CssVars.ColorFthora };

export class FthoraEnharmonicBelow extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
