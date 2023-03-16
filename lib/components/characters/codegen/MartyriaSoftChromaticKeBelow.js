import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaSoftChromaticKeBelow';
const args = { color: CssVars.ColorMartyria };

export class MartyriaSoftChromaticKeBelow extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
