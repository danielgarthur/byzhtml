import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'chroaKlitonSecondary';
const args = { color: CssVars.ColorFthora };

export class ChroaKlitonSecondary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
