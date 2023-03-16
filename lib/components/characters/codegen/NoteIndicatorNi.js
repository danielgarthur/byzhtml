import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'noteIndicatorNi';
const args = { color: CssVars.ColorNoteIndicator };

export class NoteIndicatorNi extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
