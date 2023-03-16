import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'heteron';
const args = { color: CssVars.ColorHeteron };

export class Heteron extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
