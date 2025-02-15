import byzhtml from '../../byzhtml.js';
import { CssVars } from '../../util/CssVars.js';

export class Neume extends HTMLElement {
  static get observedAttributes() {
    return ['name', 'font-family'];
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
    if (!this.hasAttribute('name')) {
      console.error('Neume: Missing attribute "name"');
      return;
    }

    const content = byzhtml.neumeMappingService.getMapping(
      this.getAttribute('name'),
    );

    let saltStyle = '';
    let fontFamily = `var(${CssVars.NeumeFontFamily})`;

    if (this.hasAttribute('font-family')) {
      fontFamily = this.getAttribute('font-family');
    }

    if (this.hasAttribute('salt')) {
      saltStyle = `font-feature-settings: 'salt' ${this.getAttribute('salt')};`;
    }

    this.shadowRoot.innerHTML = `<span style="font-family: ${fontFamily}; font-size: var(${CssVars.NeumeFontSize}); ${saltStyle}">${content}</span>`;
  }
}
