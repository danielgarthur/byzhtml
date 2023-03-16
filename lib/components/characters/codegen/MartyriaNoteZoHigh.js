import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaNoteZoHigh';
const args = { color: CssVars.ColorMartyria };

export class MartyriaNoteZoHigh extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
