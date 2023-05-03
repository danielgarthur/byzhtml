import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'yfesisGenikiTertiary';
const args = { color: CssVars.ColorAccidental };

export class YfesisGenikiTertiary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
