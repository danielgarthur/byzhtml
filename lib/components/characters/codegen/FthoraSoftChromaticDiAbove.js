import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraSoftChromaticDiAbove';
const args = { color: CssVars.ColorFthora };

export class FthoraSoftChromaticDiAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
