import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'measureNumber2';
const args = { color: CssVars.ColorMeasureNumber };

export class MeasureNumber2 extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
