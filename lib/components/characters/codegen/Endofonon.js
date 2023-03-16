import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'endofonon';
const args = { color: CssVars.ColorHeteron };

export class Endofonon extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
