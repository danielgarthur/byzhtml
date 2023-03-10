import glyphnames from '../../assets/fonts/sbmufl/glyphnames.json' assert { type: 'json' };

export class NeumeMappingService {
  constructor() {
    this.glyphNameToCodepointMap = new Map();

    this.initMap();
  }

  getMapping(neume) {
    return this.glyphNameToCodepointMap.get(neume);
  }

  initMap() {
    for (let glyph in glyphnames) {
      const data = glyphnames[glyph];
      const codepoint = Number('0x' + data.codepoint.substring(2));
      this.glyphNameToCodepointMap.set(glyph, String.fromCodePoint(codepoint));
    }
  }
}
