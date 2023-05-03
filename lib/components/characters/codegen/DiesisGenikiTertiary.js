import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'diesisGenikiTertiary';
const args = { color: CssVars.ColorAccidental };

export class DiesisGenikiTertiary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
