import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'isonIndicatorPa';
const args = { color: CssVars.ColorIsonIndicator };

export class IsonIndicatorPa extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
