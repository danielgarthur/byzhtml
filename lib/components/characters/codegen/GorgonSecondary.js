import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'gorgonSecondary';
const args = { color: CssVars.ColorGorgon };

export class GorgonSecondary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
