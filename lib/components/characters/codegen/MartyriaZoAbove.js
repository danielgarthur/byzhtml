import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaZoAbove';
const args = { color: CssVars.ColorMartyria };

export class MartyriaZoAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
