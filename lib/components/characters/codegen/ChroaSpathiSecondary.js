import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'chroaSpathiSecondary';
const args = { color: CssVars.ColorFthora };

export class ChroaSpathiSecondary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
