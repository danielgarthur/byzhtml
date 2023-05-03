import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraSoftChromaticKeTertiary';
const args = { color: CssVars.ColorFthora };

export class FthoraSoftChromaticKeTertiary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
