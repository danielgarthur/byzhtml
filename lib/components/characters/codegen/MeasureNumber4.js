import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'measureNumber4';
const args = { color: CssVars.ColorMeasureNumber };

export class MeasureNumber4 extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
