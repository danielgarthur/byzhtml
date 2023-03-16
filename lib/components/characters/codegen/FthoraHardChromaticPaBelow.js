import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraHardChromaticPaBelow';
const args = { color: CssVars.ColorFthora };

export class FthoraHardChromaticPaBelow extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
