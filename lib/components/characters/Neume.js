import byzhtml from '../../byzhtml.js';

export class Neume extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    if (!this.hasAttribute('name')) {
      console.error('Neume: Missing attribute "name"');
    }

    const content = byzhtml.neumeMappingService.getMapping(
      this.getAttribute('name'),
    );

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          font-family: Neanes;
        }
      </style>
      <span>${content}</span>
    `;
  }
}
