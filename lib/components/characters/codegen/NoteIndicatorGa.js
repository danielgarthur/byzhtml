import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'noteIndicatorGa';
const args = { color: CssVars.ColorNoteIndicator };

export class NoteIndicatorGa extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
