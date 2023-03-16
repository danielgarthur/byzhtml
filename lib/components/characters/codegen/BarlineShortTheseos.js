import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'barlineShortTheseos';
const args = { color: CssVars.ColorBarline };

export class BarlineShortTheseos extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
