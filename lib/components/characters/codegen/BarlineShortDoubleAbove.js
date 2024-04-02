
    import { BaseMark } from '../BaseMark.js';
    import { CssVars } from '../../../util/CssVars.js';

    const glyphname = 'barlineShortDoubleAbove';
    const args = {color: CssVars.ColorBarline};

    export class BarlineShortDoubleAbove extends BaseMark {
    constructor() {
        super(glyphname, args);
    }
    }
            