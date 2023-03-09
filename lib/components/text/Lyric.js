export class Lyric extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: relative;
          display: inline-block;
        }
      </style>
      <span>
          <slot></slot>
      </span>
    `;
  }
}
