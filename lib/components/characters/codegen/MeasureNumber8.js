import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'measureNumber8';
const args = { color: CssVars.ColorMeasureNumber };

export class MeasureNumber8 extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
