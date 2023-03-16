import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'noteIndicatorDi';
const args = { color: CssVars.ColorNoteIndicator };

export class NoteIndicatorDi extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
