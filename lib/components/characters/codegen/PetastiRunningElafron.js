import { BaseBody } from '../BaseBody.js';
import { CssVars } from '../../../util/CssVars.js';

const glyphname = 'petastiRunningElafron';
const args = {};

export class PetastiRunningElafron extends BaseBody {
  constructor() {
    super(glyphname, args);
  }

  connectedCallback() {
    super.connectedCallback();

    if (
      this.parentElement &&
      this.parentElement.runningElafronConnectedCallback
    ) {
      this.parentElement.runningElafronConnectedCallback();
    }
  }
}
