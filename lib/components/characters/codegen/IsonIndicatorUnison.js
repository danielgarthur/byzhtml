import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'isonIndicatorUnison';
const args = { color: CssVars.ColorIsonIndicator };

export class IsonIndicatorUnison extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
