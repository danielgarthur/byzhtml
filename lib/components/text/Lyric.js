import { CssVars } from '../../util/CssVars.js';
import byzhtml from '../../byzhtml.js';

const MAX_SEARCH_DEPTH = 100;

export class Lyric extends HTMLElement {
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
    // Search for vareia or running elaphros
    // If present, we need to shift the offset by the width of the vareia
    let previousSibling = this.previousElementSibling;
    let depth = 0;

    let shift = '';

    while (previousSibling && depth <= MAX_SEARCH_DEPTH) {
      if (!previousSibling.nodeName.startsWith('X-')) {
        break;
      }

      if (previousSibling.nodeName === 'X-VAREIA') {
        shift = `padding-left: calc(var(${CssVars.SpacerWidthVareia}) * var(${CssVars.NeumeFontSize}));`;
        break;
      }

      if (previousSibling.nodeName === 'X-RUNNING-ELAFRON') {
        shift = `position:relative; left: calc(var(${CssVars.SpacerWidthApostrofos}) * var(${CssVars.NeumeFontSize}) / 2);`;
        break;
      }

      previousSibling = previousSibling.previousElementSibling;

      // Paranoia. Don't want an infinite loop;
      depth++;
    }

    this.shadowRoot.innerHTML = `<style>:host { ${shift} }</style><span style="font-family: var(${CssVars.LyricFontFamily}); font-size: var(${CssVars.LyricFontSize}); margin: 0 var(${CssVars.LyricOffsetHorizontal});"><slot></slot></span>`;
  }
}
