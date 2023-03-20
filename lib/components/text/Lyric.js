import { CssVars } from '../../util/CssVars.js';

const MAX_SEARCH_DEPTH = 100;

export class Lyric extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `<span style="font-family: var(${CssVars.LyricFontFamily}); font-size: var(${CssVars.LyricFontSize}); margin: 0 var(${CssVars.LyricOffsetHorizontal});"><slot></slot></span>`;
  }

  connectedCallback() {
    const parentNote = this.closest('x-note, x-n');

    if (parentNote) {
      this.slot = 'lyric';
    }
  }
}
