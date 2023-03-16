import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'noteIndicatorZo';
const args = { color: CssVars.ColorNoteIndicator };

export class NoteIndicatorZo extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
