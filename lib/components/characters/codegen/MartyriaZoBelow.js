import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaZoBelow';
const args = { color: CssVars.ColorMartyria };

export class MartyriaZoBelow extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
