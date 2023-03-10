export class Melisma extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
    <style>
      .melisma {
        position: absolute;
        display: inline;
        overflow: hidden!important;
        white-space: pre;
      }
    </style>
    <span class="melisma"><slot></slot></span>`;
  }
}
