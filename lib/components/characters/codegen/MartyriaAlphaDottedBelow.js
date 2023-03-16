import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaAlphaDottedBelow';
const args = { color: CssVars.ColorMartyria };

export class MartyriaAlphaDottedBelow extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
