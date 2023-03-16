import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaAlphaDottedAbove';
const args = { color: CssVars.ColorMartyria };

export class MartyriaAlphaDottedAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
