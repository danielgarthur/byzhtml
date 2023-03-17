import { NeumeMappingService } from './services/NeumeMappingService.js';
import { FontService } from './services/FontService.js';

const neumeMappingService = new NeumeMappingService();
const fontService = new FontService();
const options = {
  defaultFontFamily: 'Neanes',
  useLegacyPositioning: false,
};

export default {
  neumeMappingService,
  fontService,
  options,
};
