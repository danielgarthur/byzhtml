import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaZygosAbove';
const args = { color: CssVars.ColorMartyria };

export class MartyriaZygosAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
