import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'chroaKlitonTertiary';
const args = { color: CssVars.ColorFthora };

export class ChroaKlitonTertiary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
