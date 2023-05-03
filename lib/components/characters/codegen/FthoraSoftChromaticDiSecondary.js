import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraSoftChromaticDiSecondary';
const args = { color: CssVars.ColorFthora };

export class FthoraSoftChromaticDiSecondary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
