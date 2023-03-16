import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaSoftChromaticKeAbove';
const args = { color: CssVars.ColorMartyria };

export class MartyriaSoftChromaticKeAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
