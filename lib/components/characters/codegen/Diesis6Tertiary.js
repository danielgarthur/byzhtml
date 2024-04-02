
    import { BaseMark } from '../BaseMark.js';
    import { CssVars } from '../../../util/CssVars.js';

    const glyphname = 'diesis6Tertiary';
    const args = {color: CssVars.ColorAccidental};

    export class Diesis6Tertiary extends BaseMark {
    constructor() {
        super(glyphname, args);
    }
    }
            