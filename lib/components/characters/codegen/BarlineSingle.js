import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'barlineSingle';
const args = { color: CssVars.ColorBarline };

export class BarlineSingle extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
