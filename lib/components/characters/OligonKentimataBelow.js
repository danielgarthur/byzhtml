import { BaseBody } from './BaseBody.js';
import byzHtml from '../../../index.js';

const glyphname = 'oligonKentimataBelow';
const args = {};

const MAX_SEARCH_DEPTH = 100;

export class OligonKentimataBelow extends BaseBody {
  constructor() {
    super(glyphname, args);

    // If using webkit positioning, perform a
    // contextual substition when combined with the psifiston
    if (
      byzHtml.options.useWebkitPositioning &&
      byzHtml.options.defaultFontFamily === 'Neanes'
    ) {
      let nextSibling = this.nextElementSibling;
      let depth = 0;

      while (nextSibling && depth <= MAX_SEARCH_DEPTH) {
        if (!nextSibling.nodeName.startsWith('X-')) {
          break;
        }

        if (nextSibling.nodeName === 'X-PSIFISTON') {
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
