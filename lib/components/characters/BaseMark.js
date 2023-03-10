import byzhtml from '../../byzhtml.js';

export class BaseMark extends HTMLElement {
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
      const base =
        byzhtml.customElementGlyphMappingService.getGlyphNameFromNodeName(
          this.parentNode?.querySelector('[base]')?.nodeName,
        );

      if (base) {
        const offset = byzhtml.fontService.getMarkOffset(base, this.glyphname);
        styleAttr = `style="position: absolute; left: ${offset.x}em; top: ${offset.y}em;"`;
      }
    }

    this.shadowRoot.innerHTML = `<x-neume name="${this.glyphname}" ${styleAttr} ${fontFamilyAttr} ${saltAttr}></x-neume>`;
  }
}
