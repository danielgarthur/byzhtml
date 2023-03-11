export class DropCap extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `<span><slot></slot></span>`;
  }
}
