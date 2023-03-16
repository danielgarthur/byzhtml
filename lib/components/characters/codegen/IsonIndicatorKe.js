import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'isonIndicatorKe';
const args = { color: CssVars.ColorIsonIndicator };

export class IsonIndicatorKe extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
