
    import { BaseMark } from '../BaseMark.js';
    import { CssVars } from '../../../util/CssVars.js';

    const glyphname = 'diesis4Secondary';
    const args = {color: CssVars.ColorAccidental};

    export class Diesis4Secondary extends BaseMark {
    constructor() {
        super(glyphname, args);
    }
    }
            