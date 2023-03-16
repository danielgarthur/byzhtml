import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaNoteGaLow';
const args = { color: CssVars.ColorMartyria };

export class MartyriaNoteGaLow extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
