import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'measureNumber6';
const args = { color: CssVars.ColorMeasureNumber };

export class MeasureNumber6 extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
