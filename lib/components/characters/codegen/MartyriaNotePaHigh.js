import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaNotePaHigh';
const args = { color: CssVars.ColorMartyria };

export class MartyriaNotePaHigh extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
