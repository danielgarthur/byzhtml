import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaNoteNi';
const args = { color: CssVars.ColorMartyria };

export class MartyriaNoteNi extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
