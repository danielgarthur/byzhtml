import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'measureNumber5';
const args = { color: CssVars.ColorMeasureNumber };

export class MeasureNumber5 extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
