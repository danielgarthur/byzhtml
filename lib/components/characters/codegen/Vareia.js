import { BaseBody } from '../BaseBody.js';

const glyphname = 'vareia';
const args = {};

export class Vareia extends BaseBody {
  constructor() {
    super(glyphname, args);
  }

  connectedCallback() {
    super.connectedCallback();

    if (this.parentElement && this.parentElement.vareiaConnectedCallback) {
      this.parentElement.vareiaConnectedCallback();
    }
  }
}
