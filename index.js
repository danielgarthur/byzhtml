import byzhtml from './lib/byzhtml.js';
import { defineCustomElements } from './lib/util/defineCustomElements.js';
import { isWebkit } from './lib/util/isWebkit.js';
import { processAutoMelismas } from './lib/util/MelismaProcessor.js';
import { throttle } from 'throttle-debounce';

if (isWebkit()) {
  console.log('byzhtml: webkit browser detected. Using webkit positioning.');

  fetch(
    'https://cdn.jsdelivr.net/gh/danielgarthur/byzhtml@1.0.9/dist/neanes.metadata.json',
  )
    .then((response) => {
      response
        .json()
        .then((data) => {
          byzhtml.fontService.loadMap(byzhtml.options.defaultFontFamily, data);

          byzhtml.neumeMappingService.glyphNameToCodepointMap.set(
            'oligonKentimataBelow.alt01',
            '\uF000',
          );

          byzhtml.neumeMappingService.glyphNameToCodepointMap.set(
            'antikenoma.alt01',
            '\uF002',
          );

          byzhtml.options.useWebkitPositioning = true;
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

window.addEventListener('load', (event) => {
  setTimeout(processAutoMelismas, 0);

  window.addEventListener('resize', throttle(100, processAutoMelismas));

  window.addEventListener('scroll', throttle(100, processAutoMelismas));
});

export { byzhtml as default };
