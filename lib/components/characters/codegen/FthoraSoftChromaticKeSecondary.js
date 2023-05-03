import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraSoftChromaticKeSecondary';
const args = { color: CssVars.ColorFthora };

export class FthoraSoftChromaticKeSecondary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
