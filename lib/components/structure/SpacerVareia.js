import byzhtml from '../../byzhtml';

export class SpacerVareia extends HTMLElement {
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
    let fontSizeAttr = 'font-size: --byz-neume-font-size';

    if (this.hasAttribute('font-family')) {
      fontFamily = this.getAttribute('font-family');
    }

    if (this.hasAttribute('font-size')) {
      fontSizeAttr = `font-size: ${this.getAttribute('font-size')};`;
    }

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          font-family: ${fontFamily};
          ${fontSizeAttr}
        }
      </style>`;
  }
}
