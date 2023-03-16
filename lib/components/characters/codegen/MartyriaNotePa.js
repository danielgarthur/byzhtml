import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaNotePa';
const args = { color: CssVars.ColorMartyria };

export class MartyriaNotePa extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
