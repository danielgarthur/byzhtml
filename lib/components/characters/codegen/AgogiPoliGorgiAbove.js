import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'agogiPoliGorgiAbove';
const args = { color: CssVars.ColorAgogi };

export class AgogiPoliGorgiAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
