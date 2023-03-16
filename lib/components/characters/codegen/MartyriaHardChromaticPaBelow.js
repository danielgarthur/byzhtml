import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaHardChromaticPaBelow';
const args = { color: CssVars.ColorMartyria };

export class MartyriaHardChromaticPaBelow extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
