import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'barlineDouble';
const args = { color: CssVars.ColorBarline };

export class BarlineDouble extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
