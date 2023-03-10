import { CssVars } from '../../util/CssVars';

export class Note extends HTMLElement {
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

        .lyrics-container {
          display: flex;
          margin-top: var(${CssVars.LyricOffsetVertical}) 
        }
      </style>
      <span class="group">
          <div>
            <slot></slot>
          </div>
          <div class="lyrics-container">
            <slot name="lyric"></slot>
            <slot name="melisma"></slot>
          </div>
      </span>
    `;
  }
}
