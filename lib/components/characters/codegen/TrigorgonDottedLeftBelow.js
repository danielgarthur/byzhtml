import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'trigorgonDottedLeftBelow';
const args = { color: CssVars.ColorGorgon };

export class TrigorgonDottedLeftBelow extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
