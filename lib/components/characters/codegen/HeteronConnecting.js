import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'heteronConnecting';
const args = { color: CssVars.ColorHeteron };

export class HeteronConnecting extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
