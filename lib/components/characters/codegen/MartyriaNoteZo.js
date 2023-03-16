import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaNoteZo';
const args = { color: CssVars.ColorMartyria };

export class MartyriaNoteZo extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
