import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'agogiGorgi';
const args = { color: CssVars.ColorAgogi };

export class AgogiGorgi extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
