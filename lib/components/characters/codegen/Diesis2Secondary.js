
    import { BaseMark } from '../BaseMark.js';
    import { CssVars } from '../../../util/CssVars.js';

    const glyphname = 'diesis2Secondary';
    const args = {color: CssVars.ColorAccidental};

    export class Diesis2Secondary extends BaseMark {
    constructor() {
        super(glyphname, args);
    }
    }
            