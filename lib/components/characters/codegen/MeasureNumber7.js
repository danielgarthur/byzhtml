import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'measureNumber7';
const args = { color: CssVars.ColorMeasureNumber };

export class MeasureNumber7 extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
