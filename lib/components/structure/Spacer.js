export class Spacer extends HTMLElement {
  static get observedAttributes() {
    return ['width'];
  }

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
    if (!this.hasAttribute('width')) {
      console.error('Neume: Missing attribute "width"');
    }

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          line-height: 0;
          width: ${this.getAttribute('width')};
        }
      </style>`;
  }
}
