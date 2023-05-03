import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'chroaSpathiTertiary';
const args = { color: CssVars.ColorFthora };

export class ChroaSpathiTertiary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
