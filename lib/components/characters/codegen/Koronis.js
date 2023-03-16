import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'koronis';
const args = { color: CssVars.ColorKoronis };

export class Koronis extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
