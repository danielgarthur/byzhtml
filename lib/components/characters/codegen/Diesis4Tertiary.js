
    import { BaseMark } from '../BaseMark.js';
    import { CssVars } from '../../../util/CssVars.js';

    const glyphname = 'diesis4Tertiary';
    const args = {color: CssVars.ColorAccidental};

    export class Diesis4Tertiary extends BaseMark {
    constructor() {
        super(glyphname, args);
    }
    }
            