import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaHardChromaticDiBelow';
const args = { color: CssVars.ColorMartyria };

export class MartyriaHardChromaticDiBelow extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
