import { NeumeMappingService } from './services/NeumeMappingService.js';
import { FontService } from './services/FontService.js';
import { processAutoMelismas } from './util/MelismaProcessor.js';

const neumeMappingService = new NeumeMappingService();
const fontService = new FontService();
const options = {
  useWebkitPositioning: false,
  melkiteRtl: false,
};

export default {
  neumeMappingService,
  fontService,
  options,
  processAutoMelismas,
};
