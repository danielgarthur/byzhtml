import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'chroaZygosSecondary';
const args = { color: CssVars.ColorFthora };

export class ChroaZygosSecondary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
