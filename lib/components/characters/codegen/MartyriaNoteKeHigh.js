import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaNoteKeHigh';
const args = { color: CssVars.ColorMartyria };

export class MartyriaNoteKeHigh extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
