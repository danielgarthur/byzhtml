import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaNoteVou';
const args = { color: CssVars.ColorMartyria };

export class MartyriaNoteVou extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
