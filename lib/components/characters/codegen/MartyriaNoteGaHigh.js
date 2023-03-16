import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaNoteGaHigh';
const args = { color: CssVars.ColorMartyria };

export class MartyriaNoteGaHigh extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
