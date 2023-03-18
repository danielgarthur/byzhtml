import { CssVars } from './CssVars.js';
import { TextMetrics } from './TextMetrics.js';

export function processAutoMelismas() {
  for (let melisma of document.querySelectorAll('x-melisma[auto]')) {
    const parentNote = melisma.closest('x-note');
    const siblingLyrics = parentNote.querySelector('x-lyric');
    const siblingLyricsRect = siblingLyrics.getBoundingClientRect();

    let nextNote = parentNote.nextElementSibling;
    let nextLyrics;
    let depth = 0;
    let melismaWidth;
    let lastNoteRight;

    while (nextNote.nodeName === 'X-NOTE' && depth < 100) {
      nextLyrics = nextNote.querySelector('x-lyric');

      const nextNoteRect = nextNote.getBoundingClientRect();

      if (
        nextNoteRect.left < siblingLyricsRect.left &&
        lastNoteRight !== undefined
      ) {
        // We have wrapped around. Extend the melisma to the end of the last note
        // that was on the same line
        melismaWidth = lastNoteRight - siblingLyricsRect.right;
        console.log('hey');
        break;
      }

      if (nextLyrics) {
        // We've found lyrics. Extend the melisma to the start of the lyrics.
        const nextLyricsRect = nextLyrics.getBoundingClientRect();

        melismaWidth = nextLyricsRect.left - siblingLyricsRect.right;
        break;
      }

      lastNoteRight = nextNoteRect.right;
      nextNote = nextNote.nextElementSibling;

      depth++;
    }

    if (melismaWidth) {
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
