import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'agogiArgiAbove';
const args = { color: CssVars.ColorAgogi };

export class AgogiArgiAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
