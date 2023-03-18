import { CssVars } from './CssVars.js';
import { TextMetrics } from './TextMetrics.js';

export function processAutoMelismas() {
  for (let melisma of document.querySelectorAll('x-melisma[auto]')) {
    const parentNote = melisma.closest('x-note');
    const siblingLyrics = parentNote.querySelector('x-lyric');

    let nextNote = parentNote.nextElementSibling;
    let nextLyrics;
    let depth = 0;

    while (nextNote.nodeName === 'X-NOTE' && depth < 100) {
      nextLyrics = nextNote.querySelector('x-lyric');

      if (nextLyrics) {
        break;
      }

      nextNote = nextNote.nextElementSibling;

      depth++;
    }

    if (nextLyrics) {
      const siblingLyricsRect = siblingLyrics.getBoundingClientRect();
      const nextLyricsRect = nextLyrics.getBoundingClientRect();

      const melismaWidth = nextLyricsRect.left - siblingLyricsRect.right;

      const melismaStyle = getComputedStyle(melisma);
      const fontFamily = melismaStyle.getPropertyValue(CssVars.LyricFontFamily);
      const fontSize = melismaStyle.getPropertyValue(CssVars.LyricFontSize);
      const font = `${fontSize} ${fontFamily}`;

      let text = '';

      if (melisma.hasAttribute('hyphen')) {
        const widthOfHyphen = TextMetrics.getTextWidthFromCache('-', font);

        text = '-';
        melisma.setAttribute(
          'right',
          `${melismaWidth / 2 + widthOfHyphen / 2}px`,
        );
      } else {
        const widthOfUnderscore = TextMetrics.getTextWidthFromCache('_', font);

        const numberOfUnderscoresNeeded = Math.ceil(
          melismaWidth / widthOfUnderscore,
        );

        for (let i = 0; i < numberOfUnderscoresNeeded; i++) {
          text += '_';
        }

        melisma.setAttribute('width', `${melismaWidth}px`);
      }

      melisma.textContent = text;
    }
  }
}
