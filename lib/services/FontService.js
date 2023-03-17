export class FontService {
  constructor() {
    this.fontFamilyMetadataMap = new Map();
  }

  loadMap(fontFamily, metadata) {
    this.fontFamilyMetadataMap.set(fontFamily, metadata);
  }

  getMetadata(fontFamily) {
    return this.fontFamilyMetadataMap.get(fontFamily);
  }

  getAdvanceWidth(fontFamily, glyph) {
    console.log(
      fontFamily,
      glyph,
      this.getMetadata(fontFamily).glyphAdvanceWidths[glyph],
    );
    return this.getMetadata(fontFamily).glyphAdvanceWidths[glyph];
  }

  getMarkOffset(fontFamily, base, mark) {
    const metadata = this.getMetadata(fontFamily);

    if (!metadata) {
      console.error(
        `FontService.getMarkOffset: no metadata loaded for font family "${fontFamily}"`,
      );

      return;
    }

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

  // Not needed right now, but could be useful later
  // getMarkAnchorOffset(fontFamily, base, mark) {
  //   const metadata = this.getMetadata(fontFamily);

  //   if (!metadata) {
  //     console.error(
  //       `FontService.getMarkAnchorOffset: no metadata loaded for font family "${fontFamily}"`,
  //     );
  //   }

  //   const markAnchorName = Object.keys(metadata.glyphsWithAnchors[mark]).find(
  //     (x) => metadata.glyphsWithAnchors[base][x] != null,
  //   );

  //   if (markAnchorName == null) {
  //     console.warn(`Missing anchor for base: ${base} mark: ${mark}`);
  //     return { x: 0, y: 0 };
  //   }

  //   const baseAnchor = metadata.glyphsWithAnchors[base][markAnchorName];

  //   return {
  //     x: baseAnchor[0],
  //     y: metadata.metrics.winAscent - baseAnchor[1],
  //   };
  // }
}
