import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'agogiGorgiAbove';
const args = { color: CssVars.ColorAgogi };

export class AgogiGorgiAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
