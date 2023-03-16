import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraDiatonicZoBelow';
const args = { color: CssVars.ColorFthora };

export class FthoraDiatonicZoBelow extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
