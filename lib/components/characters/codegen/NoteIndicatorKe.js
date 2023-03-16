import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'noteIndicatorKe';
const args = { color: CssVars.ColorNoteIndicator };

export class NoteIndicatorKe extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
