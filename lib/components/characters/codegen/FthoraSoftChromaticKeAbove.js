import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraSoftChromaticKeAbove';
const args = { color: CssVars.ColorFthora };

export class FthoraSoftChromaticKeAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
