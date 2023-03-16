import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaAlphaBelow';
const args = { color: CssVars.ColorMartyria };

export class MartyriaAlphaBelow extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
