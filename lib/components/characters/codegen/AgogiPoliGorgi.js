import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'agogiPoliGorgi';
const args = { color: CssVars.ColorAgogi };

export class AgogiPoliGorgi extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
