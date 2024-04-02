
    import { BaseMark } from '../BaseMark.js';
    import { CssVars } from '../../../util/CssVars.js';

    const glyphname = 'barlineShortTheseosAbove';
    const args = {color: CssVars.ColorBarline};

    export class BarlineShortTheseosAbove extends BaseMark {
    constructor() {
        super(glyphname, args);
    }
    }
            