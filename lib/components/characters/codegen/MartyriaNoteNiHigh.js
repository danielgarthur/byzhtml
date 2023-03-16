import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaNoteNiHigh';
const args = { color: CssVars.ColorMartyria };

export class MartyriaNoteNiHigh extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
