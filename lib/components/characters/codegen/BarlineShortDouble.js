import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'barlineShortDouble';
const args = { color: CssVars.ColorBarline };

export class BarlineShortDouble extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
