import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraDiatonicPaBelow';
const args = { color: CssVars.ColorFthora };

export class FthoraDiatonicPaBelow extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
