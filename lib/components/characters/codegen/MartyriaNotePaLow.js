import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaNotePaLow';
const args = { color: CssVars.ColorMartyria };

export class MartyriaNotePaLow extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
