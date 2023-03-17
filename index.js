import byzhtml from './lib/byzhtml.js';
import { defineCustomElements } from './lib/util/defineCustomElements.js';
import { isWebkit } from './lib/util/isWebkit.js';

if (isWebkit()) {
  console.log('byzhtml: webkit browser detected. Using legacy positioning.');

  fetch(
    'https://cdn.jsdelivr.net/gh/danielgarthur/byzhtml@latest/dist/neanes.metadata.json',
  )
    .then((response) => {
      response
        .json()
        .then((data) => {
          byzhtml.fontService.loadMap(byzhtml.options.defaultFontFamily, data);
          byzhtml.options.useLegacyPositioning = true;
        })
        .catch((err) => {
          console.error('could not load font metadata: ' + err);
        })
        .finally(defineCustomElements);
    })
    .catch((err) => {
      console.error('could not load font metadata: ' + err);

      // Load the page anyway, even though the styling will be bad
      defineCustomElements();
    });
} else {
  defineCustomElements();
}

export { byzhtml as default };
