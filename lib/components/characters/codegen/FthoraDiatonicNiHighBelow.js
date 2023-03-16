import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraDiatonicNiHighBelow';
const args = { color: CssVars.ColorFthora };

export class FthoraDiatonicNiHighBelow extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
