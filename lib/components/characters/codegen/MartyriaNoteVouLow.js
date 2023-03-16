import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaNoteVouLow';
const args = { color: CssVars.ColorMartyria };

export class MartyriaNoteVouLow extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
