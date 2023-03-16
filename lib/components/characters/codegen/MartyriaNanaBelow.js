import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaNanaBelow';
const args = { color: CssVars.ColorMartyria };

export class MartyriaNanaBelow extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
