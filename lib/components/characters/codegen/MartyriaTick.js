import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaTick';
const args = { color: CssVars.ColorMartyria };

export class MartyriaTick extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
