
    import { BaseMark } from '../BaseMark.js';
    import { CssVars } from '../../../util/CssVars.js';

    const glyphname = 'barlineShortSingleAbove';
    const args = {color: CssVars.ColorBarline};

    export class BarlineShortSingleAbove extends BaseMark {
    constructor() {
        super(glyphname, args);
    }
    }
            