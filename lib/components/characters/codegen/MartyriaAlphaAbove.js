import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaAlphaAbove';
const args = { color: CssVars.ColorMartyria };

export class MartyriaAlphaAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
