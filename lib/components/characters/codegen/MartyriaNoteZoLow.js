import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaNoteZoLow';
const args = { color: CssVars.ColorMartyria };

export class MartyriaNoteZoLow extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
