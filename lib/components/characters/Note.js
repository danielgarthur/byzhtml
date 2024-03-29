import { CssVars } from '../../util/CssVars';

export class Note extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <style>${this.getStyleInnerHtml()}</style>
      <span class="group">
          <div class="neume-group">
            <slot></slot>
          </div>
          <div class="lyrics-container">
            <slot name="lyric"></slot>
            <slot name="melisma"></slot>
          </div>
      </span>
    `;
  }

  getStyleInnerHtml(lyricsPaddingLeft) {
    return `
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

        .neume-group {
          position: relative;
          text-align: left;
        }

        .lyrics-container {
          display: flex;
          margin-top: var(${CssVars.LyricOffsetVertical});
          ${lyricsPaddingLeft}
        }
    `;
  }

  vareiaConnectedCallback() {
    this.shadowRoot.querySelector('style').innerHTML = this.getStyleInnerHtml(
      `padding-left: calc(var(${CssVars.SpacerWidthVareia}) * var(${CssVars.NeumeFontSize}));`,
    );
  }

  runningElafronConnectedCallback() {
    this.shadowRoot.querySelector('style').innerHTML = this.getStyleInnerHtml(
      `padding-left: calc(var(${CssVars.SpacerWidthApostrofos}) * var(${CssVars.NeumeFontSize}));`,
    );
  }
}
