import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaNoteDiHigh';
const args = { color: CssVars.ColorMartyria };

export class MartyriaNoteDiHigh extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
