import metadata from '../../assets/fonts/neanes.metadata.json' assert { type: 'json' };

export class FontService {
  getAdvanceWidth(glyph) {
    return metadata.glyphAdvanceWidths[glyph];
  }

  getMarkOffset(base, mark) {
    const markAnchorName = Object.keys(metadata.glyphsWithAnchors[mark]).find(
      (x) => metadata.glyphsWithAnchors[base][x] != null,
    );

    if (markAnchorName == null) {
      console.warn(`Missing anchor for base: ${base} mark: ${mark}`);
      return { x: 0, y: 0 };
    }

    const markAnchor = metadata.glyphsWithAnchors[mark][markAnchorName];

    const baseAnchor = metadata.glyphsWithAnchors[base][markAnchorName];

    return {
      x: baseAnchor[0] - markAnchor[0],
      y: -(baseAnchor[1] - markAnchor[1]),
    };
  }

  getMarkAnchorOffset(base, mark) {
    const markAnchorName = Object.keys(metadata.glyphsWithAnchors[mark]).find(
      (x) => metadata.glyphsWithAnchors[base][x] != null,
    );

    if (markAnchorName == null) {
      console.warn(`Missing anchor for base: ${base} mark: ${mark}`);
      return { x: 0, y: 0 };
    }

    const baseAnchor = metadata.glyphsWithAnchors[base][markAnchorName];

    return {
      x: baseAnchor[0],
      y: metadata.metrics.winAscent - baseAnchor[1],
    };
  }
}
