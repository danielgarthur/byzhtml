import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'isonIndicatorDiLow';
const args = { color: CssVars.ColorIsonIndicator };

export class IsonIndicatorDiLow extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
