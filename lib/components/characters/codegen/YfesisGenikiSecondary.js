import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'yfesisGenikiSecondary';
const args = { color: CssVars.ColorAccidental };

export class YfesisGenikiSecondary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
