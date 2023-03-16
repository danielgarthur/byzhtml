import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaNoteGa';
const args = { color: CssVars.ColorMartyria };

export class MartyriaNoteGa extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
