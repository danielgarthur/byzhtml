
    import { BaseMark } from '../BaseMark.js';
    import { CssVars } from '../../../util/CssVars.js';

    const glyphname = 'diesis8Tertiary';
    const args = {color: CssVars.ColorAccidental};

    export class Diesis8Tertiary extends BaseMark {
    constructor() {
        super(glyphname, args);
    }
    }
            