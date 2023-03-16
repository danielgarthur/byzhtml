import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'diesisGenikiBelow';
const args = { color: CssVars.ColorAccidental };

export class DiesisGenikiBelow extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
