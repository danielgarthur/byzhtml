import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'yfesis6Secondary';
const args = { color: CssVars.ColorAccidental };

export class Yfesis6Secondary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
