import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'fthoraDiatonicKeAbove';
const args = { color: CssVars.ColorFthora };

export class FthoraDiatonicKeAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
