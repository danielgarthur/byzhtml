import json
import re
import os


def capitalize(s):
    return s[0].upper() + s[1:]


os.makedirs(os.path.dirname('./codegen/characters/codegen/'), exist_ok=True)
os.makedirs(os.path.dirname('./codegen/docs/codegen/'), exist_ok=True)
os.makedirs(os.path.dirname('./codegen/services/codegen/'), exist_ok=True)
os.makedirs(os.path.dirname('./codegen/util/codegen/'), exist_ok=True)

glyphnames_filepath = '../assets/fonts/sbmufl/glyphnames.json'

pattern = re.compile(r'(?<!^)(?=[A-Z0-9])')

infile = open(glyphnames_filepath)

glyphnames = json.load(infile)

infile.close()

body_neumes = [
    'ison',
    'oligon',
    'oligonKentimaMiddle',
    'oligonKentimaBelow',
    'oligonKentimaAbove',
    'oligonYpsiliRight',
    'oligonYpsiliLeft',
    'oligonKentimaYpsiliRight',
    'oligonKentimaYpsiliMiddle',
    'oligonDoubleYpsili',
    'oligonKentimataDoubleYpsili',
    'oligonKentimaDoubleYpsiliRight',
    'oligonKentimaDoubleYpsiliLeft',
    'oligonTripleYpsili',
    'oligonKentimataTripleYpsili',
    'oligonKentimaTripleYpsili',
    'oligonIson',
    'oligonApostrofos',
    'oligonYporroi',
    'oligonElafron',
    'oligonElafronApostrofos',
    'oligonChamili',
    'isonApostrofos',
    'apostrofos',
    'apostrofosSyndesmos',
    'yporroi',
    'elafron',
    'runningElafron',
    'elafronApostrofos',
    'chamili',
    'chamiliApostrofos',
    'chamiliElafron',
    'chamiliElafronApostrofos',
    'doubleChamili',
    'doubleChamiliApostrofos',
    'doubleChamiliElafron',
    'doubleChamiliElafronApostrofos',
    'tripleChamili',
    'petastiIson',
    'petasti',
    'petastiOligon',
    'petastiKentima',
    'petastiYpsiliRight',
    'petastiYpsiliLeft',
    'petastiKentimaYpsiliRight',
    'petastiKentimaYpsiliMiddle',
    'petastiDoubleYpsili',
    'petastiKentimataDoubleYpsili',
    'petastiKentimaDoubleYpsiliRight',
    'petastiKentimaDoubleYpsiliLeft',
    'petastiTripleYpsili',
    'petastiKentimataTripleYpsili',
    'petastiKentimaTripleYpsili',
    'petastiApostrofos',
    'petastiYporroi',
    'petastiElafron',
    'petastiRunningElafron',
    'petastiElafronApostrofos',
    'petastiChamili',
    'petastiChamiliApostrofos',
    'petastiChamiliElafron',
    'petastiChamiliElafronApostrofos',
    'petastiDoubleChamili',
    'petastiDoubleChamiliApostrofos',
    'kentima',
    'kentimata',
    'oligonKentimataBelow',
    'oligonKentimataAbove',
    'oligonIsonKentimata',
    'oligonKentimaMiddleKentimata',
    'oligonYpsiliRightKentimata',
    'oligonYpsiliLeftKentimata',
    'oligonApostrofosKentimata',
    'oligonYporroiKentimata',
    'oligonElafronKentimata',
    'oligonRunningElafronKentimata',
    'oligonElafronApostrofosKentimata',
    'oligonChamiliKentimata',
    'martyriaNoteZoLow',
    'martyriaNoteNiLow',
    'martyriaNotePaLow',
    'martyriaNoteVouLow',
    'martyriaNoteGaLow',
    'martyriaNoteDiLow',
    'martyriaNoteKeLow',
    'martyriaNoteZo',
    'martyriaNoteNi',
    'martyriaNotePa',
    'martyriaNoteVou',
    'martyriaNoteGa',
    'martyriaNoteDi',
    'martyriaNoteKe',
    'martyriaNoteZoHigh',
    'martyriaNoteNiHigh',
    'martyriaNotePaHigh',
    'martyriaNoteVouHigh',
    'martyriaNoteGaHigh',
    'martyriaNoteDiHigh',
    'martyriaNoteKeHigh',
    'barlineSingle',
    'barlineDouble',
    'barlineTheseos',
    'barlineShortSingle',
    'barlineShortDouble',
    'barlineShortTheseos',
    'agogiPoliArgi',
    'agogiArgoteri',
    'agogiArgi',
    'agogiMetria',
    'agogiMesi',
    'agogiGorgi',
    'agogiGorgoteri',
    'agogiPoliGorgi',
    'vareia',
    'leimma1',
    'leimma2',
    'leimma3',
    'leimma4',
    'stavros',
    'breath',
    'gorthmikon',
    'pelastikon',
    'modeFirst',
    'modeSecond',
    'modeThird',
    'modeThirdNana',
    'modeFourth',
    'modeLegetos',
    'modePlagalFirst',
    'modePlagalSecond',
    'modeVarys',
    'modeVarys2',
    'modePlagalFourth',
    'modeNi',
    'modePa',
    'modeVou',
    'modeGa',
    'modeDi',
    'modeKe',
    'modeZo',
    'modePlagal',
    'modeWordEchos',
    'modeWordVarys',
    'modeAlpha',
    'modeBeta',
    'modeGamma',
    'modeDelta',
    'modeAlphaCapital',
    'modeBetaCapital',
    'modeGammaCapital',
    'modeDeltaCapital',
]

for name, data in glyphnames.items():
    classname = capitalize(name)

    with open(f'./codegen/characters/codegen/{classname}.js', 'w') as outfile:
        if name in body_neumes:
            args = '{'

            if name.startswith('agogi'):
                args += "color: CssVars.ColorAgogi"

            if name.startswith('barline'):
                args += "color: CssVars.ColorBarline"

            if name.startswith('martyria'):
                args += "color: CssVars.ColorMartyria"

            args += '}'

            outfile.write(f'''
    import {{ BaseBody }} from '../BaseBody.js';
    import {{ CssVars }} from '../../../util/CssVars.js';

    const glyphname = '{name}';
    const args = {args};

    export class {classname} extends BaseBody {{
    constructor() {{
        super(glyphname, args);
    }}
    }}
            ''')
        else:
            args = '{'

            if name.startswith('agogi'):
                args += "color: CssVars.ColorAgogi"

            if name.startswith('barline'):
                args += "color: CssVars.ColorBarline"

            if name.startswith('fthora') or name.startswith('chroa'):
                args += "color: CssVars.ColorFthora"

            if 'gorgon' in name.lower() or 'argon' in name.lower():
                args += "color: CssVars.ColorGorgon"

            if name.startswith('heteron') or name.startswith('endofonon'):
                args += "color: CssVars.ColorHeteron"

            if name.startswith('isonIndicator'):
                args += "color: CssVars.ColorIsonIndicator"

            if name.startswith('measureNumber'):
                args += "color: CssVars.ColorMeasureNumber"

            if name.startswith('noteIndicator'):
                args += "color: CssVars.ColorNoteIndicator"

            if name.startswith('koronis'):
                args += "color: CssVars.ColorKoronis"

            if name.startswith('martyria'):
                args += "color: CssVars.ColorMartyria"

            if name.startswith('yfesis') or name.startswith('diesis'):
                args += "color: CssVars.ColorAccidental"

            args += '}'

            outfile.write(f'''
    import {{ BaseMark }} from '../BaseMark.js';
    import {{ CssVars }} from '../../../util/CssVars.js';

    const glyphname = '{name}';
    const args = {args};

    export class {classname} extends BaseMark {{
    constructor() {{
        super(glyphname, args);
    }}
    }}
            ''')

with open('./codegen/util/codegen/defineCustomElementsCharactersCodegen.js', 'w') as outfile:
    for name, data in glyphnames.items():
        classname = capitalize(name)

        outfile.write(
            f"import {{ { classname } }} from '../../components/characters/codegen/{classname}.js';\n")

    outfile.write('\n')
    outfile.write(
        'export function defineCustomElementsCharactersCodegen() {\n')

    for name, data in glyphnames.items():
        kebab = pattern.sub('-', name).lower()
        classname = capitalize(name)

        outfile.write(
            f"customElements.define('x-{kebab}', {classname});\n")

    outfile.write('}\n')

with open('./codegen/services/codegen/CustomElementGlyphMappingService.js', 'w') as outfile:
    outfile.write('''export class CustomElementGlyphMappingService {
  constructor() {
    this.customElementNodeNameToGlyphNameMap = new Map();
    ''')

    for name, data in glyphnames.items():
        nodename = 'X-' + pattern.sub('-', name).upper()

        outfile.write(
            f"this.customElementNodeNameToGlyphNameMap.set('{nodename}', '{name}');\n")

    outfile.write('''  }

  getGlyphNameFromNodeName(nodeName) {
    this.customElementNodeNameToGlyphNameMap.get(nodeName);
  }
}
    ''')

with open('./codegen/docs/codegen/neume-component-list.md', 'w') as outfile:
    for name, data in glyphnames.items():
        nodename = 'x-' + pattern.sub('-', name).lower()

        outfile.write(
            f"|{nodename}|<{nodename}></{nodename}>|\n")
