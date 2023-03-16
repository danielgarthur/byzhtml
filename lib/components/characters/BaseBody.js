import { CssVars } from '../../util/CssVars.js';

export class BaseBody extends HTMLElement {
  static get observedAttributes() {
    return ['font-family'];
  }

  constructor(glyphname, args) {
    super();

    this.glyphname = glyphname;
    this.args = args;

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

    let otherStyles = '';

    if (this.args) {
      if (this.args.color) {
        otherStyles += ` color: var(${this.args.color});`;
      }
    }

    this.shadowRoot.innerHTML = `<style>:host { font-size: var(${CssVars.NeumeFontSize} );${otherStyles}}</style><x-neume name="${this.glyphname}" ${fontFamilyAttr} ${saltAttr}></x-neume>`;
  }
}
