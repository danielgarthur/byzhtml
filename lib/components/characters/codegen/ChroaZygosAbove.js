import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'chroaZygosAbove';
const args = { color: CssVars.ColorFthora };

export class ChroaZygosAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
