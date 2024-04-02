
    import { BaseMark } from '../BaseMark.js';
    import { CssVars } from '../../../util/CssVars.js';

    const glyphname = 'barlineTheseosAbove';
    const args = {color: CssVars.ColorBarline};

    export class BarlineTheseosAbove extends BaseMark {
    constructor() {
        super(glyphname, args);
    }
    }
            