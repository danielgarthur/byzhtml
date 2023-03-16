import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaHardChromaticPaAbove';
const args = { color: CssVars.ColorMartyria };

export class MartyriaHardChromaticPaAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
