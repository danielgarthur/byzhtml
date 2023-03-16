import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaLegetosBelow';
const args = { color: CssVars.ColorMartyria };

export class MartyriaLegetosBelow extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
