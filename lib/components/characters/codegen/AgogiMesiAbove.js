import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'agogiMesiAbove';
const args = { color: CssVars.ColorAgogi };

export class AgogiMesiAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
