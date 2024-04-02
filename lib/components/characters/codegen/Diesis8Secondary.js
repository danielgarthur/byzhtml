
    import { BaseMark } from '../BaseMark.js';
    import { CssVars } from '../../../util/CssVars.js';

    const glyphname = 'diesis8Secondary';
    const args = {color: CssVars.ColorAccidental};

    export class Diesis8Secondary extends BaseMark {
    constructor() {
        super(glyphname, args);
    }
    }
            