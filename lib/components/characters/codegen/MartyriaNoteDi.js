import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaNoteDi';
const args = { color: CssVars.ColorMartyria };

export class MartyriaNoteDi extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
