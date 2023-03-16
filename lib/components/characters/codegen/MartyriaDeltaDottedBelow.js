import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaDeltaDottedBelow';
const args = { color: CssVars.ColorMartyria };

export class MartyriaDeltaDottedBelow extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
