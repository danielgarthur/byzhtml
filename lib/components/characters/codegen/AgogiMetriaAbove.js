import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'agogiMetriaAbove';
const args = { color: CssVars.ColorAgogi };

export class AgogiMetriaAbove extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
