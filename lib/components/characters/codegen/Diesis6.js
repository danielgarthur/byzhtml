import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'diesis6';
const args = { color: CssVars.ColorAccidental };

export class Diesis6 extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
