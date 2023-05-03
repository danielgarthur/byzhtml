import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraSoftChromaticDiTertiary';
const args = { color: CssVars.ColorFthora };

export class FthoraSoftChromaticDiTertiary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
