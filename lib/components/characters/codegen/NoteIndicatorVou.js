import { BaseMark } from '../BaseMark.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'noteIndicatorVou';
const args = { color: CssVars.ColorNoteIndicator };

export class NoteIndicatorVou extends BaseMark {
  constructor() {
    super(glyphname, args);
  }
}
