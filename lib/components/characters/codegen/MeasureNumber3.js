import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'measureNumber3';
const args = { color: CssVars.ColorMeasureNumber };

export class MeasureNumber3 extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
