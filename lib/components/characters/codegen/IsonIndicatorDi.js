import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'isonIndicatorDi';
const args = { color: CssVars.ColorIsonIndicator };

export class IsonIndicatorDi extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
