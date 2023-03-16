import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'agogiPoliArgiAbove';
const args = { color: CssVars.ColorAgogi };

export class AgogiPoliArgiAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
