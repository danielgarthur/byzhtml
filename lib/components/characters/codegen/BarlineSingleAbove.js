
    import { BaseMark } from '../BaseMark.js';
    import { CssVars } from '../../../util/CssVars.js';

    const glyphname = 'barlineSingleAbove';
    const args = {color: CssVars.ColorBarline};

    export class BarlineSingleAbove extends BaseMark {
    constructor() {
        super(glyphname, args);
    }
    }
            