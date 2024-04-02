
    import { BaseMark } from '../BaseMark.js';
    import { CssVars } from '../../../util/CssVars.js';

    const glyphname = 'diesis6Secondary';
    const args = {color: CssVars.ColorAccidental};

    export class Diesis6Secondary extends BaseMark {
    constructor() {
        super(glyphname, args);
    }
    }
            