import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaNoteKeLow';
const args = { color: CssVars.ColorMartyria };

export class MartyriaNoteKeLow extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
