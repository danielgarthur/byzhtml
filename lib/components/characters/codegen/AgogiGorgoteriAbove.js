import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'agogiGorgoteriAbove';
const args = { color: CssVars.ColorAgogi };

export class AgogiGorgoteriAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
