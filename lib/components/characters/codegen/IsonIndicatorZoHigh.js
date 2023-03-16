import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'isonIndicatorZoHigh';
const args = { color: CssVars.ColorIsonIndicator };

export class IsonIndicatorZoHigh extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
