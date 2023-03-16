import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'agogiPoliArgi';
const args = { color: CssVars.ColorAgogi };

export class AgogiPoliArgi extends BaseBody {
  constructor() {
    super(glyphname, args);
  }
}
