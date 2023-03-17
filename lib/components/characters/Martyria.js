export class Martyria extends HTMLElement {
  constructor(glyphname) {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>        
        :host {
          position: relative;
          display: inline-block;
          text-align: left;
        }
      </style>
      <span>
          <slot></slot>
      </span>
    `;
  }
}
