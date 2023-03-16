import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'agogiArgi';
const args = { color: CssVars.ColorAgogi };

export class AgogiArgi extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
