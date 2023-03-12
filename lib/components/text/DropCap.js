import { CssVars } from '../../util/CssVars';

export class DropCap extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: relative;
          line-height: 0;
          top: var(${CssVars.DropCapOffsetVertical});
          font-size: var(${CssVars.DropCapFontSize});
        }
      </style>
      <span><slot></slot></span>`;
  }
}
