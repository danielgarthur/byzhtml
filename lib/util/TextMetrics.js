export class TextMetrics {
  static canvas;
  static cache = new Map();

  static getTextWidth(text, font) {
    let canvas = this.canvas || document.createElement('canvas');
    let context = canvas.getContext('2d');
    context.font = font;
    let metrics = context.measureText(text);
    return metrics.width;
  }

  static getTextWidthFromCache(text, font) {
    const key = `${text} | ${font}`;

    let width = TextMetrics.cache.get(key);

    if (width == null) {
      width = TextMetrics.getTextWidth(text, font);

      TextMetrics.cache.set(key, width);
    }

    return width;
  }
}
