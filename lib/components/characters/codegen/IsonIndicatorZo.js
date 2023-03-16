import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'isonIndicatorZo';
const args = { color: CssVars.ColorIsonIndicator };

export class IsonIndicatorZo extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
