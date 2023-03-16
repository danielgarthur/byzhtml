import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaDeltaDottedAbove';
const args = { color: CssVars.ColorMartyria };

export class MartyriaDeltaDottedAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
