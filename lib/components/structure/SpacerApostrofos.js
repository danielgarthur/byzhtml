import byzhtml from '../../byzhtml';
import { CssVars } from '../../util/CssVars.js';

export class SpacerApostrofos extends HTMLElement {
  static get observedAttributes() {
    return ['font-family', 'font-size'];
  }

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.updateStyle();
  }

  attributeChangedCallback() {
    this.updateStyle();
  }

  updateStyle() {
    let fontFamily = byzhtml.options.defaultFontFamily;
    let fontSize = `var(${CssVars.NeumeFontSize})`;

    if (this.hasAttribute('font-family')) {
      fontFamily = this.getAttribute('font-family');
    }

    if (this.hasAttribute('font-size')) {
      fontSize = this.getAttribute('font-size');
    }

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          width: var(${CssVars.SpacerWidthApostrofos});
          font-family: ${fontFamily};
          font-size: ${fontSize};
        }
      </style>`;
  }
}
