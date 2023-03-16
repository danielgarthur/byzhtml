import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'isonIndicatorKeLow';
const args = { color: CssVars.ColorIsonIndicator };

export class IsonIndicatorKeLow extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
