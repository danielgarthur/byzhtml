import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaSoftChromaticDiBelow';
const args = { color: CssVars.ColorMartyria };

export class MartyriaSoftChromaticDiBelow extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
