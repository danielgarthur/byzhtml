import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'barlineTheseos';
const args = { color: CssVars.ColorBarline };

export class BarlineTheseos extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
