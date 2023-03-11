import { Martyria } from '../components/characters/Martyria.js';
import { Neume } from '../components/characters/Neume.js';
import { Note } from '../components/characters/Note.js';
import { Spacer } from '../components/structure/Spacer.js';
import { SpacerVareia } from '../components/structure/SpacerVareia.js';
import { Lyric } from '../components/text/Lyric.js';
import { Melisma } from '../components/text/Melisma.js';
import { defineCustomElementsCharactersCodegen } from './codegen/defineCustomElementsCharactersCodegen.js';

export function defineCustomElements() {
  customElements.define('x-lyric', Lyric);
  customElements.define('x-martyria', Martyria);
  customElements.define('x-melisma', Melisma);
  customElements.define('x-neume', Neume);
  customElements.define('x-note', Note);
  customElements.define('x-spacer', Spacer);
  customElements.define('x-spacer-vareia', SpacerVareia);

  defineCustomElementsCharactersCodegen();
}
