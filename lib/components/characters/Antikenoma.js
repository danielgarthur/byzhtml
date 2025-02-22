import { BaseMark } from './BaseMark.js';
import { BaseBody } from './BaseBody.js';
import byzhtml from '../../byzhtml.js';

const glyphname = 'antikenoma';
const args = {};

const MAX_SEARCH_DEPTH = 100;

export class Antikenoma extends BaseMark {
  constructor() {
    super(glyphname, args);

    // If using webkit positioning, perform a
    // contextual substitution when combined with certain other characters
    if (byzhtml.options.useWebkitPositioning) {
      let previousSibling = this.previousElementSibling;
      let depth = 0;
      let base;

      while (previousSibling && depth <= MAX_SEARCH_DEPTH) {
        if (!previousSibling.nodeName.startsWith('X-')) {
          break;
        }

        if (previousSibling instanceof BaseBody) {
          base = previousSibling.glyphname;
          break;
        }

        previousSibling = previousSibling.previousElementSibling;

        // Paranoia. Don't want an infinite loop;
        depth++;
      }

      if (
        base === 'apostrofos' ||
        base === 'yporroi' ||
        (base && base.startsWith('petasti'))
      ) {
        this.glyphname = 'antikenoma.alt01';
      }
    }
  }
}
