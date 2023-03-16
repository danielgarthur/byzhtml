import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraDiatonicGaBelow';
const args = { color: CssVars.ColorFthora };

export class FthoraDiatonicGaBelow extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
