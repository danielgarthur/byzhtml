import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'isonIndicatorGa';
const args = { color: CssVars.ColorIsonIndicator };

export class IsonIndicatorGa extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
