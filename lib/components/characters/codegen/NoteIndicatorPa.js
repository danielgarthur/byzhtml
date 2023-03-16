import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'noteIndicatorPa';
const args = { color: CssVars.ColorNoteIndicator };

export class NoteIndicatorPa extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
