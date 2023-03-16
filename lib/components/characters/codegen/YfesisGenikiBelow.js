import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'yfesisGenikiBelow';
const args = { color: CssVars.ColorAccidental };

export class YfesisGenikiBelow extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
