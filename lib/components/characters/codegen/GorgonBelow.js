import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'gorgonBelow';
const args = { color: CssVars.ColorGorgon };

export class GorgonBelow extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
