import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaZygosBelow';
const args = { color: CssVars.ColorMartyria };

export class MartyriaZygosBelow extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
