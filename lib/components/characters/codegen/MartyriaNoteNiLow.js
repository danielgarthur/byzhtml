import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaNoteNiLow';
const args = { color: CssVars.ColorMartyria };

export class MartyriaNoteNiLow extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
