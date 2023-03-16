import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaLegetosAbove';
const args = { color: CssVars.ColorMartyria };

export class MartyriaLegetosAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
