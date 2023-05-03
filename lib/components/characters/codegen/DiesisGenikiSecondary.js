import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'diesisGenikiSecondary';
const args = { color: CssVars.ColorAccidental };

export class DiesisGenikiSecondary extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
