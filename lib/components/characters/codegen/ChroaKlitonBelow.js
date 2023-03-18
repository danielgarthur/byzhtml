import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'chroaKlitonBelow';
const args = { color: CssVars.ColorFthora };

export class ChroaKlitonBelow extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
