import { NeumeMappingService } from './services/NeumeMappingService.js';
import { FontService } from './services/FontService.js';
import { CustomElementGlyphMappingService } from './services/codegen/CustomElementGlyphMappingService.js';

const neumeMappingService = new NeumeMappingService();
const fontService = new FontService();
const customElementGlyphMappingService = new CustomElementGlyphMappingService();

export default {
  neumeMappingService,
  fontService,
  customElementGlyphMappingService,
};
