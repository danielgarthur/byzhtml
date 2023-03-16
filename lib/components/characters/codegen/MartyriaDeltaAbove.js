import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaDeltaAbove';
const args = { color: CssVars.ColorMartyria };

export class MartyriaDeltaAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
