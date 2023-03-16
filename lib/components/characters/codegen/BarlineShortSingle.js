import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'barlineShortSingle';
const args = { color: CssVars.ColorBarline };

export class BarlineShortSingle extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
