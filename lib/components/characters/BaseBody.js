export class BaseBody extends HTMLElement {
  constructor(glyphname) {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: relative;
          display: inline-block;
        }

        .group {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      </style>
      <span class="group">
          <x-neume name="${glyphname}"></x-neume>
          <slot></slot>
      </span>
    `;
  }
}
