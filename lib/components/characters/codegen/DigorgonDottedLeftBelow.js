import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'digorgonDottedLeftBelow';
const args = { color: CssVars.ColorGorgon };

export class DigorgonDottedLeftBelow extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
