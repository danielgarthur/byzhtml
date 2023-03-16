import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'agogiMetria';
const args = { color: CssVars.ColorAgogi };

export class AgogiMetria extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
