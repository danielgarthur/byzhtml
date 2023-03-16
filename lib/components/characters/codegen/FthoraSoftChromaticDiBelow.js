import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraSoftChromaticDiBelow';
const args = { color: CssVars.ColorFthora };

export class FthoraSoftChromaticDiBelow extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
