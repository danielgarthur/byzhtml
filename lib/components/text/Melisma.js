import { CssVars } from '../../util/CssVars.js';

export class Melisma extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
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
      }
    </style>
    <span class="melisma"><slot></slot></span>`;
  }
}
