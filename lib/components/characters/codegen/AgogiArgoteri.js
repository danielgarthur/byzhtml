import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'agogiArgoteri';
const args = { color: CssVars.ColorAgogi };

export class AgogiArgoteri extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
