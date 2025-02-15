import { BaseBody } from './BaseBody.js';
import { CssVars } from '../../util/CssVars.js';
import byzhtml from '../../byzhtml.js';

const glyphname = 'oligonKentimataBelow';
const args = {};

const MAX_SEARCH_DEPTH = 100;

export class OligonKentimataBelow extends BaseBody {
  constructor() {
    super(glyphname, args);

    // If using webkit positioning, perform a
    // contextual substitution when combined with the psifiston
    if (
      byzhtml.options.useWebkitPositioning &&
      CssVars.NeumeFontFamily.startsWith('Neanes')
    ) {
      let nextSibling = this.nextElementSibling;
      let depth = 0;

      while (nextSibling && depth <= MAX_SEARCH_DEPTH) {
        if (!nextSibling.nodeName.startsWith('X-')) {
          break;
        }

        if (nextSibling.nodeName.startsWith('X-PSI')) {
          this.glyphname = 'oligonKentimataBelow.alt01';
          break;
        }

        nextSibling = nextSibling.nextElementSibling;

        // Paranoia. Don't want an infinite loop;
        depth++;
      }
    }
  }
}
