import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'chroaKlitonAbove';
const args = { color: CssVars.ColorFthora };

export class ChroaKlitonAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
