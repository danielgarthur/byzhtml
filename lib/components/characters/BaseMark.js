import byzhtml from '../../byzhtml.js';
import { CssVars } from '../../util/CssVars.js';
import { BaseBody } from './BaseBody.js';

const MAX_SEARCH_DEPTH = 100;

export class BaseMark extends HTMLElement {
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
    let styleAttr = '';
    let fontFamilyAttr = '';
    let saltAttr = '';

    if (this.hasAttribute('font-family')) {
      fontFamilyAttr = `font-family="${this.getAttribute('font-family')}"`;
    }

    if (this.hasAttribute('salt')) {
      saltAttr = `salt="${this.getAttribute('salt')}"`;
    }

    if (byzhtml.options.useLegacyPositioning) {
      let fontFamily = byzhtml.options.defaultFontFamily;

      if (this.hasAttribute('font-family')) {
        fontFamily = this.getAttribute('font-family');
      }

      let base = null;

      var previousSibling = this.previousElementSibling;

      let depth = 0;

      while (previousSibling && depth <= MAX_SEARCH_DEPTH) {
        if (!previousSibling.nodeName.toLowerCase().startsWith('x-')) {
          break;
        }

        if (previousSibling instanceof BaseBody) {
          base = previousSibling.glyphname;
          break;
        }

        previousSibling = previousSibling.previousElementSibling;

        // Paranoia. Don't want an infinite loop;
        depth++;
      }

      if (base) {
        const offset = byzhtml.fontService.getMarkOffset(
          fontFamily,
          base,
          this.glyphname,
        );
        styleAttr = `style="position: absolute; left: ${offset.x}em; top: ${offset.y}em;"`;
      } else {
        console.warn('missing base for mark: ' + this.glyphname);
      }
    }

    let otherStyles = '';

    if (this.args) {
      if (this.args.color) {
        otherStyles += ` color: var(${this.args.color});`;
      }
    }

    this.shadowRoot.innerHTML = `<style> :host { font-size: var(${CssVars.NeumeFontSize});${otherStyles} } </style><x-neume name="${this.glyphname}" ${styleAttr} ${fontFamilyAttr} ${saltAttr}></x-neume>`;
  }
}
