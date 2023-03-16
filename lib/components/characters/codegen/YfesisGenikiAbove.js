import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'yfesisGenikiAbove';
const args = { color: CssVars.ColorAccidental };

export class YfesisGenikiAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
