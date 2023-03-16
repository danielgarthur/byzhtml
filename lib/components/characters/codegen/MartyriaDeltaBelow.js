import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'martyriaDeltaBelow';
const args = { color: CssVars.ColorMartyria };

export class MartyriaDeltaBelow extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
