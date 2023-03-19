import { BaseBody } from '../BaseBody.js';

const glyphname = 'runningElafron';
const args = {};

export class RunningElafron extends BaseBody {
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
