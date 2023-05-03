import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'chroaZygosTertiary';
const args = { color: CssVars.ColorFthora };

export class ChroaZygosTertiary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
