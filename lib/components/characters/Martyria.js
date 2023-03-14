export class Martyria extends HTMLElement {
  constructor(glyphname) {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <span>
          <slot></slot>
      </span>
    `;
  }
}
