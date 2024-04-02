
    import { BaseMark } from '../BaseMark.js';
    import { CssVars } from '../../../util/CssVars.js';

    const glyphname = 'barlineDoubleAbove';
    const args = {color: CssVars.ColorBarline};

    export class BarlineDoubleAbove extends BaseMark {
    constructor() {
        super(glyphname, args);
    }
    }
            