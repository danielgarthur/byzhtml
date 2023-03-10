import { CssVars } from '../../util/CssVars.js';

export class Lyric extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `<span style="font-family: var(${CssVars.LyricFontFamily}); font-size: var(${CssVars.LyricFontSize}); margin: 0 var(${CssVars.LyricOffsetHorizontal});"><slot></slot></span>`;
  }
}
