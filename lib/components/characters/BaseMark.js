import byzhtml from '../../byzhtml.js';

export class BaseMark extends HTMLElement {
  constructor(glyphname) {
    super();

    this.glyphname = glyphname;

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
      </style>
      <span class="neume">
          <x-neume name="${glyphname}"></x-neume>
      </span>
    `;
  }

  connectedCallback() {
    const base =
      byzhtml.customElementGlyphMappingService.getGlyphNameFromNodeName(
        this.parentNode?.nodeName,
      );

    if (base) {
      const offset = byzhtml.fontService.getMarkOffset(base, this.glyphname);

      this.shadowRoot.querySelector('style').textContent = `
        .neume {
              position: absolute;
              left: ${offset.x}em;
              top: ${offset.y}em;
        }
    `;
    }
  }
}
