import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'agogiArgoteriAbove';
const args = { color: CssVars.ColorAgogi };

export class AgogiArgoteriAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
