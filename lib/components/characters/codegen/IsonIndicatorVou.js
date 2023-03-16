import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'isonIndicatorVou';
const args = { color: CssVars.ColorIsonIndicator };

export class IsonIndicatorVou extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
