import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaSoftChromaticDiAbove';
const args = { color: CssVars.ColorMartyria };

export class MartyriaSoftChromaticDiAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
