import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaNoteDiLow';
const args = { color: CssVars.ColorMartyria };

export class MartyriaNoteDiLow extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
