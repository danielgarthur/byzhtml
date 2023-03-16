import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraSoftChromaticKeBelow';
const args = { color: CssVars.ColorFthora };

export class FthoraSoftChromaticKeBelow extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
