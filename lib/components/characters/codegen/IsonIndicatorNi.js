import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'isonIndicatorNi';
const args = { color: CssVars.ColorIsonIndicator };

export class IsonIndicatorNi extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
