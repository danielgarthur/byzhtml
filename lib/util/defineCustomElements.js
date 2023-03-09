import { Neume } from '../components/characters/Neume.js';
import { Lyric } from '../components/text/Lyric.js';
import { defineCustomElementsCharactersCodegen } from './codegen/defineCustomElementsCharactersCodegen.js';

export function defineCustomElements() {
  customElements.define('x-lyric', Lyric);
  customElements.define('x-neume', Neume);

  defineCustomElementsCharactersCodegen();
}
