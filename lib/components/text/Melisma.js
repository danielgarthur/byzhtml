import { CssVars } from '../../util/CssVars.js';

export class Melisma extends HTMLElement {
  static get observedAttributes() {
    return ['width', 'right'];
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
    let width = '';
    let paddingLeft = '';

    if (this.hasAttribute('width')) {
      width = `width: ${this.getAttribute('width')};`;
    }

    if (this.hasAttribute('right')) {
      paddingLeft = `padding-left: ${this.getAttribute('right')};`;
    }

    this.shadowRoot.innerHTML = `
    <style>
      .melisma {
        position: absolute;
        display: inline-flex;
        overflow: hidden!important;
        white-space: pre;
        font-family: var(${CssVars.LyricFontFamily});
        font-size: var(${CssVars.LyricFontSize});
        margin-left: calc(-1* var(${CssVars.LyricOffsetHorizontal})); 
        ${width}
        ${paddingLeft}
      }
    </style>
    <span class="melisma"><slot></slot></span>`;
  }
}
