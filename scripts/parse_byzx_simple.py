import json
import os
import sys
import getopt
import re


def print_help():
    print('Usage: parse_byzx_simple.py -i <inputfile> -o <outputfile>')


pattern = re.compile(r'(?<!^)(?=[A-Z])')

inputfilepath = ''
outputfilepath = ''

try:
    opts, args = getopt.getopt(sys.argv[1:], "hi:o:")
except getopt.GetoptError:
    print_help()
    sys.exit(2)

if len(opts) == 0:
    print_help()

for opt, arg in opts:
    if opt == '-h':
        print_help()
        sys.exit()
    elif opt == '-i':
        inputfilepath = arg
    elif opt == '-o':
        outputfilepath = arg

if len(inputfilepath) == 0 or len(outputfilepath) == 0:
    print_help()
    sys.exit(2)

with open(inputfilepath, encoding='utf-8') as infile:
    score = json.load(infile)

neumeToSbmuflGlyphMap = {}


def mapNeumeToSbmufl(neume, glyphname):
    neumeToSbmuflGlyphMap[neume] = 'x-' + \
        pattern.sub('-', glyphname).lower()


mapNeumeToSbmufl('Ison', 'ison')
mapNeumeToSbmufl('Oligon', 'oligon')
mapNeumeToSbmufl(
    'OligonPlusKentimaBelow',
    'oligonKentimaBelow',
)
mapNeumeToSbmufl(
    'OligonPlusKentimaAbove',
    'oligonKentimaAbove',
)
mapNeumeToSbmufl('OligonPlusHypsiliRight', 'oligonYpsiliRight')
mapNeumeToSbmufl('OligonPlusHypsiliLeft', 'oligonYpsiliLeft')
mapNeumeToSbmufl(
    'OligonPlusHypsiliPlusKentimaHorizontal',
    'oligonKentimaYpsiliRight',
)
mapNeumeToSbmufl(
    'OligonPlusHypsiliPlusKentimaVertical',
    'oligonKentimaYpsiliMiddle',
)
mapNeumeToSbmufl(
    'OligonPlusDoubleHypsili',
    'oligonDoubleYpsili',
)
mapNeumeToSbmufl(
    'OligonKentimataDoubleYpsili',
    'oligonKentimataDoubleYpsili',
)
mapNeumeToSbmufl(
    'OligonKentimaDoubleYpsiliRight',
    'oligonKentimaDoubleYpsiliRight',
)
mapNeumeToSbmufl(
    'OligonKentimaDoubleYpsiliLeft',
    'oligonKentimaDoubleYpsiliLeft',
)
mapNeumeToSbmufl('OligonTripleYpsili', 'oligonTripleYpsili')
mapNeumeToSbmufl(
    'OligonKentimataTripleYpsili',
    'oligonKentimataTripleYpsili',
)
mapNeumeToSbmufl(
    'OligonKentimaTripleYpsili',
    'oligonKentimaTripleYpsili',
)

mapNeumeToSbmufl('PetastiWithIson', 'petastiIson')
mapNeumeToSbmufl('Petasti', 'petasti')
mapNeumeToSbmufl('PetastiPlusOligon', 'petastiOligon')
mapNeumeToSbmufl('PetastiPlusKentimaAbove', 'petastiKentima')
mapNeumeToSbmufl(
    'PetastiPlusHypsiliRight',
    'petastiYpsiliRight',
)
mapNeumeToSbmufl('PetastiPlusHypsiliLeft', 'petastiYpsiliLeft')
mapNeumeToSbmufl(
    'PetastiPlusHypsiliPlusKentimaHorizontal',
    'petastiKentimaYpsiliRight',
)
mapNeumeToSbmufl(
    'PetastiPlusHypsiliPlusKentimaVertical',
    'petastiKentimaYpsiliMiddle',
)
mapNeumeToSbmufl(
    'PetastiPlusDoubleHypsili',
    'petastiDoubleYpsili',
)
mapNeumeToSbmufl(
    'PetastiKentimataDoubleYpsili',
    'petastiKentimataDoubleYpsili',
)
mapNeumeToSbmufl(
    'PetastiKentimaDoubleYpsiliRight',
    'petastiKentimaDoubleYpsiliRight',
)
mapNeumeToSbmufl(
    'PetastiKentimaDoubleYpsiliLeft',
    'petastiKentimaDoubleYpsiliLeft',
)
mapNeumeToSbmufl('PetastiTripleYpsili', 'petastiTripleYpsili')
mapNeumeToSbmufl(
    'PetastiKentimataTripleYpsili',
    'petastiKentimataTripleYpsili',
)
mapNeumeToSbmufl(
    'PetastiKentimaTripleYpsili',
    'petastiKentimaTripleYpsili',
)

mapNeumeToSbmufl('Apostrophos', 'apostrofos')
mapNeumeToSbmufl('Elaphron', 'elafron')
mapNeumeToSbmufl('Apostrophos', 'apostrofos')
mapNeumeToSbmufl(
    'ElaphronPlusApostrophos',
    'elafronApostrofos',
)
mapNeumeToSbmufl('Hamili', 'chamili')
mapNeumeToSbmufl('HamiliPlusApostrophos', 'chamiliApostrofos')
mapNeumeToSbmufl('HamiliPlusElaphron', 'chamiliElafron')
mapNeumeToSbmufl(
    'HamiliPlusElaphronPlusApostrophos',
    'chamiliElafronApostrofos',
)
mapNeumeToSbmufl('DoubleHamili', 'doubleChamili')
mapNeumeToSbmufl(
    'DoubleHamiliApostrofos',
    'doubleChamiliApostrofos',
)
mapNeumeToSbmufl('DoubleHamiliElafron', 'doubleChamiliElafron')
mapNeumeToSbmufl(
    'DoubleHamiliElafronApostrofos',
    'doubleChamiliElafronApostrofos',
)
mapNeumeToSbmufl('TripleHamili', 'tripleChamili')

mapNeumeToSbmufl('PetastiPlusApostrophos', 'petastiApostrofos')
mapNeumeToSbmufl('PetastiPlusElaphron', 'petastiElafron')
mapNeumeToSbmufl(
    'PetastiPlusElaphronPlusApostrophos',
    'petastiElafronApostrofos',
)
mapNeumeToSbmufl('PetastiHamili', 'petastiChamili')
mapNeumeToSbmufl(
    'PetastiHamiliApostrofos',
    'petastiChamiliApostrofos',
)
mapNeumeToSbmufl(
    'PetastiHamiliElafron',
    'petastiChamiliElafron',
)
mapNeumeToSbmufl(
    'PetastiHamiliElafronApostrofos',
    'petastiChamiliElafronApostrofos',
)
mapNeumeToSbmufl('PetastiDoubleHamili', 'petastiDoubleChamili')
mapNeumeToSbmufl(
    'PetastiDoubleHamiliApostrofos',
    'petastiDoubleChamiliApostrofos',
)

mapNeumeToSbmufl('OligonPlusKentemata', 'oligonKentimataAbove')
mapNeumeToSbmufl('KentemataPlusOligon', 'oligonKentimataBelow')
mapNeumeToSbmufl(
    'OligonPlusIsonPlusKentemata',
    'oligonIsonKentimata',
)
mapNeumeToSbmufl(
    'OligonPlusApostrophosPlusKentemata',
    'oligonApostrofosKentimata',
)
mapNeumeToSbmufl(
    'OligonPlusHyporoePlusKentemata',
    'oligonYporroiKentimata',
)
mapNeumeToSbmufl(
    'OligonPlusElaphronPlusKentemata',
    'oligonElafronKentimata',
)
mapNeumeToSbmufl(
    'OligonPlusElaphronPlusApostrophosPlusKentemata',
    'oligonElafronApostrofosKentimata',
)
mapNeumeToSbmufl('OligonPlusHamiliPlusKentemata',
                 'oligonChamiliKentimata',
                 )
mapNeumeToSbmufl('RunningElaphron', 'runningElafron')
mapNeumeToSbmufl('Hyporoe', 'yporroi')
mapNeumeToSbmufl('PetastiPlusRunningElaphron',
                 'petastiRunningElafron',
                 )
mapNeumeToSbmufl('PetastiPlusHyporoe', 'petastiYporroi')
mapNeumeToSbmufl('OligonPlusIson', 'oligonIson')
mapNeumeToSbmufl('OligonPlusApostrophos', 'oligonApostrofos')
mapNeumeToSbmufl('OligonPlusElaphron', 'oligonElafron')
mapNeumeToSbmufl('OligonPlusElaphronPlusApostrophos',
                 'oligonElafronApostrofos',
                 )
mapNeumeToSbmufl('OligonPlusHamili', 'oligonChamili')
mapNeumeToSbmufl('Kentima', 'kentima')
mapNeumeToSbmufl('OligonPlusKentima', 'oligonKentimaMiddle')
mapNeumeToSbmufl('Kentemata', 'kentimata')
mapNeumeToSbmufl('OligonPlusRunningElaphronPlusKentemata',
                 'oligonRunningElafronKentimata',
                 )
mapNeumeToSbmufl('DoubleApostrophos', 'apostrofosSyndesmos')
mapNeumeToSbmufl('IsonPlusApostrophos', 'isonApostrofos')
mapNeumeToSbmufl('OligonKentimaMiddleKentimata',
                 'oligonKentimaMiddleKentimata',
                 )
mapNeumeToSbmufl('OligonPlusKentemataPlusHypsiliLeft',
                 'oligonYpsiliLeftKentimata',
                 )
mapNeumeToSbmufl('OligonPlusKentemataPlusHypsiliRight',
                 'oligonYpsiliRightKentimata',
                 )
mapNeumeToSbmufl('Cross', 'stavros')
mapNeumeToSbmufl('Breath', 'breath')
mapNeumeToSbmufl('VareiaDotted', 'leimma1')
mapNeumeToSbmufl('VareiaDotted2', 'leimma2')
mapNeumeToSbmufl('VareiaDotted3', 'leimma3')
mapNeumeToSbmufl('VareiaDotted4', 'leimma4')
mapNeumeToSbmufl('Gorgon_Top', 'gorgonAbove')
mapNeumeToSbmufl('Gorgon_Bottom', 'gorgonBelow')
mapNeumeToSbmufl('Digorgon', 'digorgon')
mapNeumeToSbmufl('Trigorgon', 'trigorgon')
mapNeumeToSbmufl('GorgonDottedLeft', 'gorgonDottedLeft')
mapNeumeToSbmufl('GorgonDottedRight', 'gorgonDottedRight')
mapNeumeToSbmufl('DigorgonDottedLeft1', 'digorgonDottedLeftBelow')
mapNeumeToSbmufl('DigorgonDottedLeft2', 'digorgonDottedLeftAbove')
mapNeumeToSbmufl('DigorgonDottedRight', 'digorgonDottedRight')
mapNeumeToSbmufl('TrigorgonDottedLeft1', 'trigorgonDottedLeftBelow')
mapNeumeToSbmufl('TrigorgonDottedLeft2', 'trigorgonDottedLeftAbove')
mapNeumeToSbmufl('TrigorgonDottedRight', 'trigorgonDottedRight')
mapNeumeToSbmufl('Argon', 'argon')
mapNeumeToSbmufl('Hemiolion', 'diargon')
mapNeumeToSbmufl('Diargon', 'triargon')
mapNeumeToSbmufl('GorgonSecondary', 'gorgonSecondary')
mapNeumeToSbmufl('DigorgonSecondary', 'digorgonSecondary')
mapNeumeToSbmufl('TrigorgonSecondary', 'trigorgonSecondary')
mapNeumeToSbmufl(
    'GorgonDottedLeftSecondary',
    'gorgonDottedLeftSecondary',
)
mapNeumeToSbmufl(
    'GorgonDottedRightSecondary',
    'gorgonDottedRightSecondary',
)
mapNeumeToSbmufl(
    'DigorgonDottedLeft1Secondary',
    'digorgonDottedLeftBelowSecondary',
)
mapNeumeToSbmufl(
    'DigorgonDottedRightSecondary',
    'digorgonDottedRightSecondary',
)
mapNeumeToSbmufl(
    'TrigorgonDottedLeft1Secondary',
    'trigorgonDottedLeftBelowSecondary',
)
mapNeumeToSbmufl(
    'TrigorgonDottedRightSecondary',
    'trigorgonDottedRightSecondary',
)
mapNeumeToSbmufl('Klasma_Top', 'klasmaAbove')
mapNeumeToSbmufl('Klasma_Bottom', 'klasmaBelow')
mapNeumeToSbmufl('Hapli', 'apli')
mapNeumeToSbmufl('Dipli', 'dipli')
mapNeumeToSbmufl('Tripli', 'tripli')
mapNeumeToSbmufl('Tetrapli', 'tetrapli')
mapNeumeToSbmufl('Koronis', 'koronis')

mapNeumeToSbmufl('DiatonicNiLow_Top', 'fthoraDiatonicNiLowAbove')
mapNeumeToSbmufl('DiatonicPa_Top', 'fthoraDiatonicPaAbove')
mapNeumeToSbmufl('DiatonicVou_Top', 'fthoraDiatonicVouAbove')
mapNeumeToSbmufl('DiatonicGa_Top', 'fthoraDiatonicGaAbove')
mapNeumeToSbmufl('DiatonicThi_Top', 'fthoraDiatonicDiAbove')
mapNeumeToSbmufl('DiatonicKe_Top', 'fthoraDiatonicKeAbove')
mapNeumeToSbmufl('DiatonicZo_Top', 'fthoraDiatonicZoAbove')
mapNeumeToSbmufl('DiatonicNiHigh_Top', 'fthoraDiatonicNiHighAbove')
mapNeumeToSbmufl('HardChromaticPa_Top', 'fthoraHardChromaticPaAbove')
mapNeumeToSbmufl('HardChromaticThi_Top', 'fthoraHardChromaticDiAbove')
mapNeumeToSbmufl('SoftChromaticThi_Top', 'fthoraSoftChromaticDiAbove')
mapNeumeToSbmufl('SoftChromaticPa_Top', 'fthoraSoftChromaticKeAbove')
mapNeumeToSbmufl('Enharmonic_Top', 'fthoraEnharmonicAbove')
mapNeumeToSbmufl('Zygos_Top', 'chroaZygosAbove')
mapNeumeToSbmufl('Kliton_Top', 'chroaKlitonAbove')
mapNeumeToSbmufl('Spathi_Top', 'chroaSpathiAbove')
mapNeumeToSbmufl('Spathi_Bottom', 'chroaSpathiBelow')
mapNeumeToSbmufl('GeneralSharp_Top', 'diesisGenikiAbove')
mapNeumeToSbmufl('GeneralFlat_Top', 'yfesisGenikiAbove')
mapNeumeToSbmufl('DiatonicNiLow_Bottom', 'fthoraDiatonicNiLowBelow')
mapNeumeToSbmufl('DiatonicPa_Bottom', 'fthoraDiatonicPaBelow')
mapNeumeToSbmufl('DiatonicVou_Bottom', 'fthoraDiatonicVouBelow')
mapNeumeToSbmufl('DiatonicGa_Bottom', 'fthoraDiatonicGaBelow')
mapNeumeToSbmufl('DiatonicThi_Bottom', 'fthoraDiatonicDiBelow')
mapNeumeToSbmufl('DiatonicKe_Bottom', 'fthoraDiatonicKeBelow')
mapNeumeToSbmufl('DiatonicZo_Bottom', 'fthoraDiatonicZoBelow')
mapNeumeToSbmufl('DiatonicNiHigh_Bottom', 'fthoraDiatonicNiHighBelow')
mapNeumeToSbmufl('HardChromaticPa_Bottom', 'fthoraHardChromaticPaBelow')
mapNeumeToSbmufl('HardChromaticThi_Bottom', 'fthoraHardChromaticDiBelow')
mapNeumeToSbmufl('SoftChromaticThi_Bottom', 'fthoraSoftChromaticDiBelow')
mapNeumeToSbmufl('SoftChromaticPa_Bottom', 'fthoraSoftChromaticKeBelow')
mapNeumeToSbmufl('Enharmonic_Bottom', 'fthoraEnharmonicBelow')
mapNeumeToSbmufl('Zygos_Bottom', 'chroaZygosBelow')
mapNeumeToSbmufl('Kliton_Bottom', 'chroaKlitonBelow')
mapNeumeToSbmufl('GeneralSharp_Bottom', 'diesisGenikiBelow')
mapNeumeToSbmufl('GeneralFlat_Bottom', 'yfesisGenikiBelow')
mapNeumeToSbmufl('Sharp_2_Left', 'diesis2')
mapNeumeToSbmufl('Sharp_4_Left', 'diesis4')
mapNeumeToSbmufl('Sharp_6_Left', 'diesis6')
mapNeumeToSbmufl('Sharp_8_Left', 'diesis8')
mapNeumeToSbmufl('Flat_2_Right', 'yfesis2')
mapNeumeToSbmufl('Flat_4_Right', 'yfesis4')
mapNeumeToSbmufl('Flat_6_Right', 'yfesis6')
mapNeumeToSbmufl('Flat_8_Right', 'yfesis8')
mapNeumeToSbmufl('VerySlow', 'agogiPoliArgi')
mapNeumeToSbmufl('Slower', 'agogiArgoteri')
mapNeumeToSbmufl('Slow', 'agogiArgi')
mapNeumeToSbmufl('Moderate', 'agogiMetria')
mapNeumeToSbmufl('Medium', 'agogiMesi')
mapNeumeToSbmufl('Quick', 'agogiGorgi')
mapNeumeToSbmufl('Quicker', 'agogiGorgoteri')
mapNeumeToSbmufl('VeryQuick', 'agogiPoliGorgi')
mapNeumeToSbmufl('VerySlowAbove', 'agogiPoliArgiAbove')
mapNeumeToSbmufl('SlowerAbove', 'agogiArgoteriAbove')
mapNeumeToSbmufl('SlowAbove', 'agogiArgiAbove')
mapNeumeToSbmufl('ModerateAbove', 'agogiMetriaAbove')
mapNeumeToSbmufl('MediumAbove', 'agogiMesiAbove')
mapNeumeToSbmufl('QuickAbove', 'agogiGorgiAbove')
mapNeumeToSbmufl('QuickerAbove', 'agogiGorgoteriAbove')
mapNeumeToSbmufl('VeryQuickAbove', 'agogiPoliGorgiAbove')
mapNeumeToSbmufl('Vareia', 'vareia')
mapNeumeToSbmufl('HomalonConnecting', 'omalonConnecting')
mapNeumeToSbmufl('Homalon', 'omalon')
mapNeumeToSbmufl('Antikenoma', 'antikenoma')
mapNeumeToSbmufl('Psifiston', 'psifiston')
#mapNeumeToSbmufl('PsifistonSlanted', 'psifiston.salt01')
mapNeumeToSbmufl('Heteron', 'heteron')
mapNeumeToSbmufl('HeteronConnecting', 'heteronConnecting')
# mapNeumeToSbmufl(
#     'HeteronConnectingLong',
#     'heteronConnecting.salt01',
# )
mapNeumeToSbmufl('Endofonon', 'endofonon')

mapNeumeToSbmufl('Delta', 'martyriaDeltaBelow')
mapNeumeToSbmufl('Alpha', 'martyriaAlphaBelow')
mapNeumeToSbmufl('Legetos', 'martyriaLegetosBelow')
mapNeumeToSbmufl('Nana', 'martyriaNanaBelow')
mapNeumeToSbmufl('Zo', 'martyriaZoBelow')
mapNeumeToSbmufl('Squiggle', 'martyriaHardChromaticPaBelow')
mapNeumeToSbmufl('SquiggleLow', 'martyriaHardChromaticPaAbove')
mapNeumeToSbmufl('Tilt', 'martyriaHardChromaticDiBelow')
mapNeumeToSbmufl('TiltLow', 'martyriaHardChromaticDiAbove')
mapNeumeToSbmufl(
    'SoftChromaticSquiggle',
    'martyriaSoftChromaticDiBelow',
)
mapNeumeToSbmufl(
    'SoftChromaticSquiggleLow',
    'martyriaSoftChromaticDiAbove',
)
mapNeumeToSbmufl('Zygos', 'martyriaZygosBelow')
mapNeumeToSbmufl('DeltaDotted', 'martyriaDeltaDottedBelow')
mapNeumeToSbmufl('AlphaDotted', 'martyriaAlphaDottedBelow')
mapNeumeToSbmufl(
    'SoftChromaticPaRootSign',
    'martyriaSoftChromaticKeBelow',
)
mapNeumeToSbmufl(
    'SoftChromaticPaRootSignLow',
    'martyriaSoftChromaticKeAbove',
)
mapNeumeToSbmufl('AlphaLow', 'martyriaAlphaAbove')
mapNeumeToSbmufl('DeltaLow', 'martyriaDeltaAbove')
mapNeumeToSbmufl('NanaLow', 'martyriaNanaAbove')
mapNeumeToSbmufl('LegetosLow', 'martyriaLegetosAbove')
mapNeumeToSbmufl('VouLow', 'martyriaNoteVouLow')
mapNeumeToSbmufl('GaLow', 'martyriaNoteGaLow')
mapNeumeToSbmufl('ThiLow', 'martyriaNoteDiLow')
mapNeumeToSbmufl('KeLow', 'martyriaNoteKeLow')
mapNeumeToSbmufl('Zo', 'martyriaNoteZo')
mapNeumeToSbmufl('Ni', 'martyriaNoteNi')
mapNeumeToSbmufl('Pa', 'martyriaNotePa')
mapNeumeToSbmufl('Vou', 'martyriaNoteVou')
mapNeumeToSbmufl('Ga', 'martyriaNoteGa')
mapNeumeToSbmufl('Thi', 'martyriaNoteDi')
mapNeumeToSbmufl('Ke', 'martyriaNoteKe')
mapNeumeToSbmufl('ZoHigh', 'martyriaNoteZoHigh')
mapNeumeToSbmufl('NiHigh', 'martyriaNoteNiHigh')
mapNeumeToSbmufl('PaHigh', 'martyriaNotePaHigh')
mapNeumeToSbmufl('VouHigh', 'martyriaNoteVouHigh')
mapNeumeToSbmufl('GaHigh', 'martyriaNoteGaHigh')
mapNeumeToSbmufl('ThiHigh', 'martyriaNoteDiHigh')
mapNeumeToSbmufl('KeHigh', 'martyriaNoteKeHigh')
mapNeumeToSbmufl('ModeSign.Ekhos', 'modeWordEchos')
mapNeumeToSbmufl('ModeSign.Plagal', 'modePlagal')
mapNeumeToSbmufl('ModeSign.First', 'modeAlpha')
mapNeumeToSbmufl('ModeSign.Second', 'modeBeta')
mapNeumeToSbmufl('ModeSign.Third', 'modeGamma')
mapNeumeToSbmufl('ModeSign.Fourth', 'modeDelta')
mapNeumeToSbmufl('ModeSign.FirstCapital', 'modeAlphaCapital')
mapNeumeToSbmufl('ModeSign.SecondCapital', 'modeBetaCapital')
mapNeumeToSbmufl('ModeSign.ThirdCapital', 'modeGammaCapital')
mapNeumeToSbmufl('ModeSign.FourthCapital', 'modeDeltaCapital')
mapNeumeToSbmufl('ModeSign.Varys', 'modeWordVarys')
mapNeumeToSbmufl('ModeSign.Alpha', 'modePlagalFirst')
#mapNeumeToSbmufl('ModeSign.AlphaWithDeltaHat', 'modeFirst', 1)
mapNeumeToSbmufl('ModeSign.AlphaWithHypsili', 'modeFirst')
mapNeumeToSbmufl('ModeSign.SoftChromatic6', 'modePlagalSecond')
mapNeumeToSbmufl('ModeSign.SoftChromatic2', 'modeSecond')
mapNeumeToSbmufl('ModeSign.Nana', 'modeThirdNana')
mapNeumeToSbmufl('ModeSign.VarysZo', 'modeVarys')
mapNeumeToSbmufl('ModeSign.Delta', 'modePlagalFourth')
#mapNeumeToSbmufl('ModeSign.DeltaWithDeltaHat', 'modeFourth', 1)
mapNeumeToSbmufl('ModeSign.DeltaWithHypsili', 'modeFourth')
mapNeumeToSbmufl('ModeSign.NanaOld', 'modeThird')
mapNeumeToSbmufl('ModeSign.Legetos', 'modeLegetos')
mapNeumeToSbmufl('ModeSign.ElaphronPlusApostrophos', 'modeRunningElafron')
mapNeumeToSbmufl('ModeSign.Elaphron', 'modeElafron')
mapNeumeToSbmufl('ModeSign.OligonPlusKentima', 'modeOligonKentimaAbove')
mapNeumeToSbmufl('ModeSign.OligonPlusHypsili', 'modeOligonYpsili')
mapNeumeToSbmufl('ModeSign.Ni', 'modeNi')
mapNeumeToSbmufl('ModeSign.Pa', 'modePa')
mapNeumeToSbmufl('ModeSign.Vou', 'modeVou')
mapNeumeToSbmufl('ModeSign.Ga', 'modeGa')
mapNeumeToSbmufl('ModeSign.Thi', 'modeDi')
mapNeumeToSbmufl('ModeSign.Ke', 'modeKe')
mapNeumeToSbmufl('ModeSign.Zo', 'modeZo')
mapNeumeToSbmufl('MeasureBarRight', 'barlineSingle')
mapNeumeToSbmufl('MeasureBarTop', 'barlineShortSingle')
mapNeumeToSbmufl('Two', 'measureNumber2')
mapNeumeToSbmufl('Three', 'measureNumber3')
mapNeumeToSbmufl('Four', 'measureNumber4')
mapNeumeToSbmufl('Five', 'measureNumber5')
mapNeumeToSbmufl('Six', 'measureNumber6')
mapNeumeToSbmufl('Seven', 'measureNumber7')
mapNeumeToSbmufl('Eight', 'measureNumber8')
mapNeumeToSbmufl('NoteIndicator.Ni', 'noteIndicatorNi')
mapNeumeToSbmufl('NoteIndicator.Pa', 'noteIndicatorPa')
mapNeumeToSbmufl('NoteIndicator.Vou', 'noteIndicatorVou')
mapNeumeToSbmufl('NoteIndicator.Ga', 'noteIndicatorGa')
mapNeumeToSbmufl('NoteIndicator.Thi', 'noteIndicatorDi')
mapNeumeToSbmufl('NoteIndicator.Ke', 'noteIndicatorKe')
mapNeumeToSbmufl('NoteIndicator.Zo', 'noteIndicatorZo')
mapNeumeToSbmufl('Ison.Unison', 'isonIndicatorUnison')
mapNeumeToSbmufl('Ison.ThiLow', 'isonIndicatorDiLow')
mapNeumeToSbmufl('Ison.KeLow', 'isonIndicatorKeLow')
mapNeumeToSbmufl('Ison.Zo', 'isonIndicatorZo')
mapNeumeToSbmufl('Ison.Ni', 'isonIndicatorNi')
mapNeumeToSbmufl('Ison.Pa', 'isonIndicatorPa')
mapNeumeToSbmufl('Ison.Vou', 'isonIndicatorVou')
mapNeumeToSbmufl('Ison.Ga', 'isonIndicatorGa')
mapNeumeToSbmufl('Ison.Thi', 'isonIndicatorDi')
mapNeumeToSbmufl('Ison.Ke', 'isonIndicatorKe')
mapNeumeToSbmufl('Ison.ZoHigh', 'isonIndicatorZoHigh')

mapNeumeToSbmufl('YfenAbove', 'yfenAbove')
mapNeumeToSbmufl('YfenBelow', 'yfenBelow')


def write_note_supporting_neume(neume, classname=None):
    if neume:
        childnodename = neumeToSbmuflGlyphMap[neume]
        if classname:
            outfile.write(
                f'<{childnodename} class="{classname}"></{childnodename}\n    >')
        else:
            outfile.write(f'<{childnodename}></{childnodename}\n    >')
        return True
    else:
        return False


with open(outputfilepath, 'w', encoding='utf-8') as outfile:
    for element in score['staff']['elements']:
        if element['elementType'] == 'Note':
            need_newline = False
            quantitativeNeume = element['quantitativeNeume']
            lyrics = element.get('lyrics') or ''
            timeNeume = element.get('timeNeume')
            gorgonNeume = element.get('gorgonNeume')
            secondaryGorgonNeume = element.get('secondaryGorgonNeume')
            vocalExpressionNeume = element.get('vocalExpressionNeume')
            fthora = element.get('fthora')
            accidental = element.get('accidental')
            measureNumber = element.get('measureNumber')
            noteIndicator = element.get('noteIndicator')
            ison = element.get('ison')
            lyrics = element.get('lyrics')

            outfile.write(f'<x-note>\n')

            # check if there is vareia
            if element.get('vareia'):
                outfile.write(f'<x-vareia></x-vareia\n>')

            need_newline &= write_note_supporting_neume(quantitativeNeume)
            need_newline &= write_note_supporting_neume(vocalExpressionNeume)
            need_newline &= write_note_supporting_neume(timeNeume)
            need_newline &= write_note_supporting_neume(gorgonNeume, 'gorgon')
            need_newline &= write_note_supporting_neume(
                secondaryGorgonNeume, 'gorgon')
            need_newline &= write_note_supporting_neume(fthora, 'fthora')
            need_newline &= write_note_supporting_neume(
                accidental, 'accidental')
            need_newline &= write_note_supporting_neume(
                measureNumber, 'measure-number')
            need_newline &= write_note_supporting_neume(
                noteIndicator, 'note-indicator')
            need_newline &= write_note_supporting_neume(ison, 'ison')

            if lyrics:
                need_newline = True

                classattr = ''

                if element.get('vareia'):
                    classattr = 'class="vareia-shift"'

                outfile.write(
                    f'\n    <x-lyric slot="lyric" {classattr}>{lyrics}</x-lyric>')

            if need_newline:
                outfile.write('\n')

            outfile.write(f'</x-note\n>')

        if element['elementType'] == 'Martyria':
            note = element['note']
            rootSign = element.get('rootSign')
            alignRight = element.get('alignRight')

            notenode = neumeToSbmuflGlyphMap[note]
            rootsignnode = neumeToSbmuflGlyphMap[rootSign]

            classname = 'martyria'
            if alignRight:
                classname += ' align-right'

            outfile.write(f'<x-martyria class="{classname}">\n')

            outfile.write(
                f'<{notenode}></{notenode}\n>')

            outfile.write(
                f'<{rootsignnode}></{rootsignnode}\n>')

            outfile.write(f'</x-martyria\n>')

        if element['elementType'] == 'DropCap':
            content = element.get('content')

            outfile.write(
                f'<span class="drop-cap">{content}</span\n>')
