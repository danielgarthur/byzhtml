import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaNoteVouHigh';
const args = { color: CssVars.ColorMartyria };

export class MartyriaNoteVouHigh extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
