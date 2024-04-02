
    import { BaseMark } from '../BaseMark.js';
    import { CssVars } from '../../../util/CssVars.js';

    const glyphname = 'diesis2Tertiary';
    const args = {color: CssVars.ColorAccidental};

    export class Diesis2Tertiary extends BaseMark {
    constructor() {
        super(glyphname, args);
    }
    }
            