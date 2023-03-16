import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaNoteKe';
const args = { color: CssVars.ColorMartyria };

export class MartyriaNoteKe extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
