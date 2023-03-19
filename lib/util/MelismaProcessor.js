import { CssVars } from './CssVars.js';
import { TextMetrics } from './TextMetrics.js';

function isElementInOrNearViewport(el) {
  const rect = el.getBoundingClientRect();

  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;

  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth;

  return (
    rect.top >= -viewportHeight &&
    rect.left >= -viewportWidth &&
    rect.bottom <= viewportHeight * 2 &&
    rect.right <= viewportWidth * 2
  );
}

function binarySearch(melismas) {
  let start = 0;
  let end = melismas.length - 1;
  let currentIndex;
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;

  while (start <= end) {
    currentIndex = Math.floor((start + end) / 2);
    const rect = melismas[currentIndex].getBoundingClientRect();

    if (rect.top < 0) {
      start = currentIndex + 1;
    } else if (rect.bottom > viewportHeight) {
      end = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }

  return -1;
}

function processAutoMelisma(melisma) {
  let change;
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
    change = { melisma };

    const melismaStyle = getComputedStyle(melisma);
    const fontFamily = melismaStyle.getPropertyValue(CssVars.LyricFontFamily);
    const fontSize = melismaStyle.getPropertyValue(CssVars.LyricFontSize);
    const font = `${fontSize} ${fontFamily}`;

    let text = '';

    if (melisma.hasAttribute('hyphen')) {
      const widthOfHyphen = TextMetrics.getTextWidthFromCache('-', font);

      text = '-';

      change.right = `${melismaWidth / 2 + widthOfHyphen / 2}px`;
    } else {
      const widthOfUnderscore = TextMetrics.getTextWidthFromCache('_', font);

      const numberOfUnderscoresNeeded = Math.ceil(
        melismaWidth / widthOfUnderscore,
      );

      for (let i = 0; i < numberOfUnderscoresNeeded; i++) {
        text += '_';
      }

      change.width = `${melismaWidth}px`;
    }

    change.textContent = text;
  }

  return change;
}

export function processAutoMelismas() {
  const melismas = document.querySelectorAll('x-melisma[auto]');
  const melismasInViewPort = [];

  const changes = [];

  // Find all visible elements

  // Binary search to find an element in the viewport.
  // Assume elements are arranged top to bottom
  const currentIndex = binarySearch(melismas);

  // If an element was found, search before and after the element
  // to find all elements in the viewport
  if (currentIndex !== -1) {
    for (let i = currentIndex; i < melismas.length; i++) {
      if (isElementInOrNearViewport(melismas[i])) {
        melismasInViewPort.push(melismas[i]);
      } else {
        break;
      }
    }

    for (let i = currentIndex; i >= 0; i--) {
      if (isElementInOrNearViewport(melismas[i])) {
        melismasInViewPort.push(melismas[i]);
      } else {
        break;
      }
    }
  }

  // Calculate the changes
  for (let melisma of melismasInViewPort) {
    let change = processAutoMelisma(melisma);

    if (change) {
      changes.push(change);
    }
  }

  // Apply changes
  for (let change of changes) {
    change.melisma.textContent = change.textContent;
    change.melisma.setAttribute('width', change.width);

    if (change.right != null) {
      change.melisma.setAttribute('right', change.right);
    }
  }
}
