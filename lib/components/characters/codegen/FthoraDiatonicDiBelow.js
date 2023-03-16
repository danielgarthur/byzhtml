import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraDiatonicDiBelow';
const args = { color: CssVars.ColorFthora };

export class FthoraDiatonicDiBelow extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
