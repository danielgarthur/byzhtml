import { CssVars } from './CssVars.js';

export function getNeumeFontFamily() {
  return (
    getComputedStyle(document.documentElement)
      .getPropertyValue(CssVars.NeumeFontFamily)
      .trim() ?? 'Neanes'
  );
}
