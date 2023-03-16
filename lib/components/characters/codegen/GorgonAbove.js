import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'gorgonAbove';
const args = { color: CssVars.ColorGorgon };

export class GorgonAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
