import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'agogiMesi';
const args = { color: CssVars.ColorAgogi };

export class AgogiMesi extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
