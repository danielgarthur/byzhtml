import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'diesisGenikiAbove';
const args = { color: CssVars.ColorAccidental };

export class DiesisGenikiAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
