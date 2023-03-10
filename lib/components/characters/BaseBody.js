export class BaseBody extends HTMLElement {
  static get observedAttributes() {
    return ['font-family'];
  }

  constructor(glyphname) {
    super();

    this.glyphname = glyphname;

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.updateStyle();
  }

  attributeChangedCallback() {
    this.updateStyle();
  }

  updateStyle() {
    let fontFamilyAttr = '';
    let saltAttr = '';

    if (this.hasAttribute('font-family')) {
      fontFamilyAttr = `font-family="${this.getAttribute('font-family')}"`;
    }

    if (this.hasAttribute('salt')) {
      saltAttr = `salt="${this.getAttribute('salt')}"`;
    }

    this.shadowRoot.innerHTML = `<x-neume name="${this.glyphname}" ${fontFamilyAttr} ${saltAttr}></x-neume>`;
  }
}
