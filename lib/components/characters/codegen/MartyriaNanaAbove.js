import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaNanaAbove';
const args = { color: CssVars.ColorMartyria };

export class MartyriaNanaAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
