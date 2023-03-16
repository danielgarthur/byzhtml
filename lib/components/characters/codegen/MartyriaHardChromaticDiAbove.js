import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaHardChromaticDiAbove';
const args = { color: CssVars.ColorMartyria };

export class MartyriaHardChromaticDiAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
