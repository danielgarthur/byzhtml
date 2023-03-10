export class CustomElementGlyphMappingService {
  constructor() {
    this.map = new Map();
    this.map.set('X-ISON', 'ison');
    this.map.set('X-OLIGON', 'oligon');
    this.map.set('X-OLIGON-KENTIMA-MIDDLE', 'oligonKentimaMiddle');
    this.map.set('X-OLIGON-KENTIMA-BELOW', 'oligonKentimaBelow');
    this.map.set('X-OLIGON-KENTIMA-ABOVE', 'oligonKentimaAbove');
    this.map.set('X-OLIGON-YPSILI-RIGHT', 'oligonYpsiliRight');
    this.map.set('X-OLIGON-YPSILI-LEFT', 'oligonYpsiliLeft');
    this.map.set('X-OLIGON-KENTIMA-YPSILI-RIGHT', 'oligonKentimaYpsiliRight');
    this.map.set('X-OLIGON-KENTIMA-YPSILI-MIDDLE', 'oligonKentimaYpsiliMiddle');
    this.map.set('X-OLIGON-DOUBLE-YPSILI', 'oligonDoubleYpsili');
    this.map.set(
      'X-OLIGON-KENTIMATA-DOUBLE-YPSILI',
      'oligonKentimataDoubleYpsili',
    );
    this.map.set(
      'X-OLIGON-KENTIMA-DOUBLE-YPSILI-RIGHT',
      'oligonKentimaDoubleYpsiliRight',
    );
    this.map.set(
      'X-OLIGON-KENTIMA-DOUBLE-YPSILI-LEFT',
      'oligonKentimaDoubleYpsiliLeft',
    );
    this.map.set('X-OLIGON-TRIPLE-YPSILI', 'oligonTripleYpsili');
    this.map.set(
      'X-OLIGON-KENTIMATA-TRIPLE-YPSILI',
      'oligonKentimataTripleYpsili',
    );
    this.map.set('X-OLIGON-KENTIMA-TRIPLE-YPSILI', 'oligonKentimaTripleYpsili');
    this.map.set('X-OLIGON-ISON', 'oligonIson');
    this.map.set('X-OLIGON-APOSTROFOS', 'oligonApostrofos');
    this.map.set('X-OLIGON-YPORROI', 'oligonYporroi');
    this.map.set('X-OLIGON-ELAFRON', 'oligonElafron');
    this.map.set('X-OLIGON-ELAFRON-APOSTROFOS', 'oligonElafronApostrofos');
    this.map.set('X-OLIGON-CHAMILI', 'oligonChamili');
    this.map.set('X-ISON-APOSTROFOS', 'isonApostrofos');
    this.map.set('X-APOSTROFOS', 'apostrofos');
    this.map.set('X-APOSTROFOS-SYNDESMOS', 'apostrofosSyndesmos');
    this.map.set('X-YPORROI', 'yporroi');
    this.map.set('X-ELAFRON', 'elafron');
    this.map.set('X-RUNNING-ELAFRON', 'runningElafron');
    this.map.set('X-ELAFRON-APOSTROFOS', 'elafronApostrofos');
    this.map.set('X-CHAMILI', 'chamili');
    this.map.set('X-CHAMILI-APOSTROFOS', 'chamiliApostrofos');
    this.map.set('X-CHAMILI-ELAFRON', 'chamiliElafron');
    this.map.set('X-CHAMILI-ELAFRON-APOSTROFOS', 'chamiliElafronApostrofos');
    this.map.set('X-DOUBLE-CHAMILI', 'doubleChamili');
    this.map.set('X-DOUBLE-CHAMILI-APOSTROFOS', 'doubleChamiliApostrofos');
    this.map.set('X-DOUBLE-CHAMILI-ELAFRON', 'doubleChamiliElafron');
    this.map.set(
      'X-DOUBLE-CHAMILI-ELAFRON-APOSTROFOS',
      'doubleChamiliElafronApostrofos',
    );
    this.map.set('X-TRIPLE-CHAMILI', 'tripleChamili');
    this.map.set('X-PETASTI-ISON', 'petastiIson');
    this.map.set('X-PETASTI', 'petasti');
    this.map.set('X-PETASTI-OLIGON', 'petastiOligon');
    this.map.set('X-PETASTI-KENTIMA', 'petastiKentima');
    this.map.set('X-PETASTI-YPSILI-RIGHT', 'petastiYpsiliRight');
    this.map.set('X-PETASTI-YPSILI-LEFT', 'petastiYpsiliLeft');
    this.map.set('X-PETASTI-KENTIMA-YPSILI-RIGHT', 'petastiKentimaYpsiliRight');
    this.map.set(
      'X-PETASTI-KENTIMA-YPSILI-MIDDLE',
      'petastiKentimaYpsiliMiddle',
    );
    this.map.set('X-PETASTI-DOUBLE-YPSILI', 'petastiDoubleYpsili');
    this.map.set(
      'X-PETASTI-KENTIMATA-DOUBLE-YPSILI',
      'petastiKentimataDoubleYpsili',
    );
    this.map.set(
      'X-PETASTI-KENTIMA-DOUBLE-YPSILI-RIGHT',
      'petastiKentimaDoubleYpsiliRight',
    );
    this.map.set(
      'X-PETASTI-KENTIMA-DOUBLE-YPSILI-LEFT',
      'petastiKentimaDoubleYpsiliLeft',
    );
    this.map.set('X-PETASTI-TRIPLE-YPSILI', 'petastiTripleYpsili');
    this.map.set(
      'X-PETASTI-KENTIMATA-TRIPLE-YPSILI',
      'petastiKentimataTripleYpsili',
    );
    this.map.set(
      'X-PETASTI-KENTIMA-TRIPLE-YPSILI',
      'petastiKentimaTripleYpsili',
    );
    this.map.set('X-PETASTI-APOSTROFOS', 'petastiApostrofos');
    this.map.set('X-PETASTI-YPORROI', 'petastiYporroi');
    this.map.set('X-PETASTI-ELAFRON', 'petastiElafron');
    this.map.set('X-PETASTI-RUNNING-ELAFRON', 'petastiRunningElafron');
    this.map.set('X-PETASTI-ELAFRON-APOSTROFOS', 'petastiElafronApostrofos');
    this.map.set('X-PETASTI-CHAMILI', 'petastiChamili');
    this.map.set('X-PETASTI-CHAMILI-APOSTROFOS', 'petastiChamiliApostrofos');
    this.map.set('X-PETASTI-CHAMILI-ELAFRON', 'petastiChamiliElafron');
    this.map.set(
      'X-PETASTI-CHAMILI-ELAFRON-APOSTROFOS',
      'petastiChamiliElafronApostrofos',
    );
    this.map.set('X-PETASTI-DOUBLE-CHAMILI', 'petastiDoubleChamili');
    this.map.set(
      'X-PETASTI-DOUBLE-CHAMILI-APOSTROFOS',
      'petastiDoubleChamiliApostrofos',
    );
    this.map.set('X-KENTIMA', 'kentima');
    this.map.set('X-KENTIMATA', 'kentimata');
    this.map.set('X-OLIGON-KENTIMATA-BELOW', 'oligonKentimataBelow');
    this.map.set('X-OLIGON-KENTIMATA-ABOVE', 'oligonKentimataAbove');
    this.map.set('X-OLIGON-ISON-KENTIMATA', 'oligonIsonKentimata');
    this.map.set(
      'X-OLIGON-KENTIMA-MIDDLE-KENTIMATA',
      'oligonKentimaMiddleKentimata',
    );
    this.map.set(
      'X-OLIGON-YPSILI-RIGHT-KENTIMATA',
      'oligonYpsiliRightKentimata',
    );
    this.map.set('X-OLIGON-YPSILI-LEFT-KENTIMATA', 'oligonYpsiliLeftKentimata');
    this.map.set('X-OLIGON-APOSTROFOS-KENTIMATA', 'oligonApostrofosKentimata');
    this.map.set('X-OLIGON-YPORROI-KENTIMATA', 'oligonYporroiKentimata');
    this.map.set('X-OLIGON-ELAFRON-KENTIMATA', 'oligonElafronKentimata');
    this.map.set(
      'X-OLIGON-RUNNING-ELAFRON-KENTIMATA',
      'oligonRunningElafronKentimata',
    );
    this.map.set(
      'X-OLIGON-ELAFRON-APOSTROFOS-KENTIMATA',
      'oligonElafronApostrofosKentimata',
    );
    this.map.set('X-OLIGON-CHAMILI-KENTIMATA', 'oligonChamiliKentimata');
    this.map.set('X-VAREIA', 'vareia');
    this.map.set('X-PSIFISTON', 'psifiston');
    this.map.set('X-ANTIKENOMA', 'antikenoma');
    this.map.set('X-OMALON', 'omalon');
    this.map.set('X-OMALON-CONNECTING', 'omalonConnecting');
    this.map.set('X-HETERON', 'heteron');
    this.map.set('X-HETERON-CONNECTING', 'heteronConnecting');
    this.map.set('X-ENDOFONON', 'endofonon');
    this.map.set('X-YFEN-ABOVE', 'yfenAbove');
    this.map.set('X-YFEN-BELOW', 'yfenBelow');
    this.map.set('X-STAVROS', 'stavros');
    this.map.set('X-BREATH', 'breath');
    this.map.set('X-KLASMA-ABOVE', 'klasmaAbove');
    this.map.set('X-KLASMA-BELOW', 'klasmaBelow');
    this.map.set('X-APLI', 'apli');
    this.map.set('X-DIPLI', 'dipli');
    this.map.set('X-TRIPLI', 'tripli');
    this.map.set('X-TETRAPLI', 'tetrapli');
    this.map.set('X-KORONIS', 'koronis');
    this.map.set('X-LEIMMA1', 'leimma1');
    this.map.set('X-LEIMMA2', 'leimma2');
    this.map.set('X-LEIMMA3', 'leimma3');
    this.map.set('X-LEIMMA4', 'leimma4');
    this.map.set('X-LEIMMA-DOT', 'leimmaDot');
    this.map.set('X-GORGON-ABOVE', 'gorgonAbove');
    this.map.set('X-GORGON-BELOW', 'gorgonBelow');
    this.map.set('X-GORGON-DOTTED-LEFT', 'gorgonDottedLeft');
    this.map.set('X-GORGON-DOTTED-RIGHT', 'gorgonDottedRight');
    this.map.set('X-DIGORGON', 'digorgon');
    this.map.set('X-DIGORGON-DOTTED-LEFT-BELOW', 'digorgonDottedLeftBelow');
    this.map.set('X-DIGORGON-DOTTED-LEFT-ABOVE', 'digorgonDottedLeftAbove');
    this.map.set('X-DIGORGON-DOTTED-RIGHT', 'digorgonDottedRight');
    this.map.set('X-TRIGORGON', 'trigorgon');
    this.map.set('X-TRIGORGON-DOTTED-LEFT-BELOW', 'trigorgonDottedLeftBelow');
    this.map.set('X-TRIGORGON-DOTTED-LEFT-ABOVE', 'trigorgonDottedLeftAbove');
    this.map.set('X-TRIGORGON-DOTTED-RIGHT', 'trigorgonDottedRight');
    this.map.set('X-ARGON', 'argon');
    this.map.set('X-DIARGON', 'diargon');
    this.map.set('X-TRIARGON', 'triargon');
    this.map.set('X-GORGON-SECONDARY', 'gorgonSecondary');
    this.map.set('X-GORGON-DOTTED-LEFT-SECONDARY', 'gorgonDottedLeftSecondary');
    this.map.set(
      'X-GORGON-DOTTED-RIGHT-SECONDARY',
      'gorgonDottedRightSecondary',
    );
    this.map.set('X-DIGORGON-SECONDARY', 'digorgonSecondary');
    this.map.set(
      'X-DIGORGON-DOTTED-LEFT-BELOW-SECONDARY',
      'digorgonDottedLeftBelowSecondary',
    );
    this.map.set(
      'X-DIGORGON-DOTTED-RIGHT-SECONDARY',
      'digorgonDottedRightSecondary',
    );
    this.map.set('X-TRIGORGON-SECONDARY', 'trigorgonSecondary');
    this.map.set(
      'X-TRIGORGON-DOTTED-LEFT-BELOW-SECONDARY',
      'trigorgonDottedLeftBelowSecondary',
    );
    this.map.set(
      'X-TRIGORGON-DOTTED-RIGHT-SECONDARY',
      'trigorgonDottedRightSecondary',
    );
    this.map.set('X-AGOGI-POLI-ARGI', 'agogiPoliArgi');
    this.map.set('X-AGOGI-ARGOTERI', 'agogiArgoteri');
    this.map.set('X-AGOGI-ARGI', 'agogiArgi');
    this.map.set('X-AGOGI-METRIA', 'agogiMetria');
    this.map.set('X-AGOGI-MESI', 'agogiMesi');
    this.map.set('X-AGOGI-GORGI', 'agogiGorgi');
    this.map.set('X-AGOGI-GORGOTERI', 'agogiGorgoteri');
    this.map.set('X-AGOGI-POLI-GORGI', 'agogiPoliGorgi');
    this.map.set('X-AGOGI-POLI-ARGI-ABOVE', 'agogiPoliArgiAbove');
    this.map.set('X-AGOGI-ARGOTERI-ABOVE', 'agogiArgoteriAbove');
    this.map.set('X-AGOGI-ARGI-ABOVE', 'agogiArgiAbove');
    this.map.set('X-AGOGI-METRIA-ABOVE', 'agogiMetriaAbove');
    this.map.set('X-AGOGI-MESI-ABOVE', 'agogiMesiAbove');
    this.map.set('X-AGOGI-GORGI-ABOVE', 'agogiGorgiAbove');
    this.map.set('X-AGOGI-GORGOTERI-ABOVE', 'agogiGorgoteriAbove');
    this.map.set('X-AGOGI-POLI-GORGI-ABOVE', 'agogiPoliGorgiAbove');
    this.map.set('X-MARTYRIA-NOTE-ZO-LOW', 'martyriaNoteZoLow');
    this.map.set('X-MARTYRIA-NOTE-NI-LOW', 'martyriaNoteNiLow');
    this.map.set('X-MARTYRIA-NOTE-PA-LOW', 'martyriaNotePaLow');
    this.map.set('X-MARTYRIA-NOTE-VOU-LOW', 'martyriaNoteVouLow');
    this.map.set('X-MARTYRIA-NOTE-GA-LOW', 'martyriaNoteGaLow');
    this.map.set('X-MARTYRIA-NOTE-DI-LOW', 'martyriaNoteDiLow');
    this.map.set('X-MARTYRIA-NOTE-KE-LOW', 'martyriaNoteKeLow');
    this.map.set('X-MARTYRIA-NOTE-ZO', 'martyriaNoteZo');
    this.map.set('X-MARTYRIA-NOTE-NI', 'martyriaNoteNi');
    this.map.set('X-MARTYRIA-NOTE-PA', 'martyriaNotePa');
    this.map.set('X-MARTYRIA-NOTE-VOU', 'martyriaNoteVou');
    this.map.set('X-MARTYRIA-NOTE-GA', 'martyriaNoteGa');
    this.map.set('X-MARTYRIA-NOTE-DI', 'martyriaNoteDi');
    this.map.set('X-MARTYRIA-NOTE-KE', 'martyriaNoteKe');
    this.map.set('X-MARTYRIA-NOTE-ZO-HIGH', 'martyriaNoteZoHigh');
    this.map.set('X-MARTYRIA-NOTE-NI-HIGH', 'martyriaNoteNiHigh');
    this.map.set('X-MARTYRIA-NOTE-PA-HIGH', 'martyriaNotePaHigh');
    this.map.set('X-MARTYRIA-NOTE-VOU-HIGH', 'martyriaNoteVouHigh');
    this.map.set('X-MARTYRIA-NOTE-GA-HIGH', 'martyriaNoteGaHigh');
    this.map.set('X-MARTYRIA-NOTE-DI-HIGH', 'martyriaNoteDiHigh');
    this.map.set('X-MARTYRIA-NOTE-KE-HIGH', 'martyriaNoteKeHigh');
    this.map.set('X-MARTYRIA-TICK', 'martyriaTick');
    this.map.set('X-MARTYRIA-ZO-BELOW', 'martyriaZoBelow');
    this.map.set('X-MARTYRIA-DELTA-BELOW', 'martyriaDeltaBelow');
    this.map.set('X-MARTYRIA-ALPHA-BELOW', 'martyriaAlphaBelow');
    this.map.set('X-MARTYRIA-LEGETOS-BELOW', 'martyriaLegetosBelow');
    this.map.set('X-MARTYRIA-NANA-BELOW', 'martyriaNanaBelow');
    this.map.set('X-MARTYRIA-DELTA-DOTTED-BELOW', 'martyriaDeltaDottedBelow');
    this.map.set('X-MARTYRIA-ALPHA-DOTTED-BELOW', 'martyriaAlphaDottedBelow');
    this.map.set(
      'X-MARTYRIA-HARD-CHROMATIC-PA-BELOW',
      'martyriaHardChromaticPaBelow',
    );
    this.map.set(
      'X-MARTYRIA-HARD-CHROMATIC-DI-BELOW',
      'martyriaHardChromaticDiBelow',
    );
    this.map.set(
      'X-MARTYRIA-SOFT-CHROMATIC-DI-BELOW',
      'martyriaSoftChromaticDiBelow',
    );
    this.map.set(
      'X-MARTYRIA-SOFT-CHROMATIC-KE-BELOW',
      'martyriaSoftChromaticKeBelow',
    );
    this.map.set('X-MARTYRIA-ZYGOS-BELOW', 'martyriaZygosBelow');
    this.map.set('X-MARTYRIA-ZO-ABOVE', 'martyriaZoAbove');
    this.map.set('X-MARTYRIA-DELTA-ABOVE', 'martyriaDeltaAbove');
    this.map.set('X-MARTYRIA-ALPHA-ABOVE', 'martyriaAlphaAbove');
    this.map.set('X-MARTYRIA-LEGETOS-ABOVE', 'martyriaLegetosAbove');
    this.map.set('X-MARTYRIA-NANA-ABOVE', 'martyriaNanaAbove');
    this.map.set('X-MARTYRIA-DELTA-DOTTED-ABOVE', 'martyriaDeltaDottedAbove');
    this.map.set('X-MARTYRIA-ALPHA-DOTTED-ABOVE', 'martyriaAlphaDottedAbove');
    this.map.set(
      'X-MARTYRIA-HARD-CHROMATIC-PA-ABOVE',
      'martyriaHardChromaticPaAbove',
    );
    this.map.set(
      'X-MARTYRIA-HARD-CHROMATIC-DI-ABOVE',
      'martyriaHardChromaticDiAbove',
    );
    this.map.set(
      'X-MARTYRIA-SOFT-CHROMATIC-DI-ABOVE',
      'martyriaSoftChromaticDiAbove',
    );
    this.map.set(
      'X-MARTYRIA-SOFT-CHROMATIC-KE-ABOVE',
      'martyriaSoftChromaticKeAbove',
    );
    this.map.set('X-MARTYRIA-ZYGOS-ABOVE', 'martyriaZygosAbove');
    this.map.set('X-FTHORA-DIATONIC-NI-LOW-ABOVE', 'fthoraDiatonicNiLowAbove');
    this.map.set('X-FTHORA-DIATONIC-PA-ABOVE', 'fthoraDiatonicPaAbove');
    this.map.set('X-FTHORA-DIATONIC-VOU-ABOVE', 'fthoraDiatonicVouAbove');
    this.map.set('X-FTHORA-DIATONIC-GA-ABOVE', 'fthoraDiatonicGaAbove');
    this.map.set('X-FTHORA-DIATONIC-DI-ABOVE', 'fthoraDiatonicDiAbove');
    this.map.set('X-FTHORA-DIATONIC-KE-ABOVE', 'fthoraDiatonicKeAbove');
    this.map.set('X-FTHORA-DIATONIC-ZO-ABOVE', 'fthoraDiatonicZoAbove');
    this.map.set(
      'X-FTHORA-DIATONIC-NI-HIGH-ABOVE',
      'fthoraDiatonicNiHighAbove',
    );
    this.map.set(
      'X-FTHORA-HARD-CHROMATIC-PA-ABOVE',
      'fthoraHardChromaticPaAbove',
    );
    this.map.set(
      'X-FTHORA-HARD-CHROMATIC-DI-ABOVE',
      'fthoraHardChromaticDiAbove',
    );
    this.map.set(
      'X-FTHORA-SOFT-CHROMATIC-DI-ABOVE',
      'fthoraSoftChromaticDiAbove',
    );
    this.map.set(
      'X-FTHORA-SOFT-CHROMATIC-KE-ABOVE',
      'fthoraSoftChromaticKeAbove',
    );
    this.map.set('X-FTHORA-ENHARMONIC-ABOVE', 'fthoraEnharmonicAbove');
    this.map.set('X-CHROA-ZYGOS-ABOVE', 'chroaZygosAbove');
    this.map.set('X-CHROA-KLITON-ABOVE', 'chroaKlitonAbove');
    this.map.set('X-CHROA-SPATHI-ABOVE', 'chroaSpathiAbove');
    this.map.set('X-FTHORA-DIATONIC-NI-LOW-BELOW', 'fthoraDiatonicNiLowBelow');
    this.map.set('X-FTHORA-DIATONIC-PA-BELOW', 'fthoraDiatonicPaBelow');
    this.map.set('X-FTHORA-DIATONIC-VOU-BELOW', 'fthoraDiatonicVouBelow');
    this.map.set('X-FTHORA-DIATONIC-GA-BELOW', 'fthoraDiatonicGaBelow');
    this.map.set('X-FTHORA-DIATONIC-DI-BELOW', 'fthoraDiatonicDiBelow');
    this.map.set('X-FTHORA-DIATONIC-KE-BELOW', 'fthoraDiatonicKeBelow');
    this.map.set('X-FTHORA-DIATONIC-ZO-BELOW', 'fthoraDiatonicZoBelow');
    this.map.set(
      'X-FTHORA-DIATONIC-NI-HIGH-BELOW',
      'fthoraDiatonicNiHighBelow',
    );
    this.map.set(
      'X-FTHORA-HARD-CHROMATIC-PA-BELOW',
      'fthoraHardChromaticPaBelow',
    );
    this.map.set(
      'X-FTHORA-HARD-CHROMATIC-DI-BELOW',
      'fthoraHardChromaticDiBelow',
    );
    this.map.set(
      'X-FTHORA-SOFT-CHROMATIC-DI-BELOW',
      'fthoraSoftChromaticDiBelow',
    );
    this.map.set(
      'X-FTHORA-SOFT-CHROMATIC-KE-BELOW',
      'fthoraSoftChromaticKeBelow',
    );
    this.map.set('X-FTHORA-ENHARMONIC-BELOW', 'fthoraEnharmonicBelow');
    this.map.set('X-CHROA-ZYGOS-BELOW', 'chroaZygosBelow');
    this.map.set('X-CHROA-KLITON-BELOW', 'chroaKlitonBelow');
    this.map.set('X-CHROA-SPATHI-BELOW', 'chroaSpathiBelow');
    this.map.set('X-DIESIS2', 'diesis2');
    this.map.set('X-DIESIS4', 'diesis4');
    this.map.set('X-DIESIS6', 'diesis6');
    this.map.set('X-DIESIS8', 'diesis8');
    this.map.set('X-DIESIS-GENIKI-ABOVE', 'diesisGenikiAbove');
    this.map.set('X-DIESIS-GENIKI-BELOW', 'diesisGenikiBelow');
    this.map.set('X-YFESIS2', 'yfesis2');
    this.map.set('X-YFESIS4', 'yfesis4');
    this.map.set('X-YFESIS6', 'yfesis6');
    this.map.set('X-YFESIS8', 'yfesis8');
    this.map.set('X-YFESIS-GENIKI-ABOVE', 'yfesisGenikiAbove');
    this.map.set('X-YFESIS-GENIKI-BELOW', 'yfesisGenikiBelow');
    this.map.set('X-BARLINE-SINGLE', 'barlineSingle');
    this.map.set('X-BARLINE-DOUBLE', 'barlineDouble');
    this.map.set('X-BARLINE-THESEOS', 'barlineTheseos');
    this.map.set('X-BARLINE-SHORT-SINGLE', 'barlineShortSingle');
    this.map.set('X-BARLINE-SHORT-DOUBLE', 'barlineShortDouble');
    this.map.set('X-BARLINE-SHORT-THESEOS', 'barlineShortTheseos');
    this.map.set('X-MEASURE-NUMBER2', 'measureNumber2');
    this.map.set('X-MEASURE-NUMBER3', 'measureNumber3');
    this.map.set('X-MEASURE-NUMBER4', 'measureNumber4');
    this.map.set('X-MEASURE-NUMBER5', 'measureNumber5');
    this.map.set('X-MEASURE-NUMBER6', 'measureNumber6');
    this.map.set('X-MEASURE-NUMBER7', 'measureNumber7');
    this.map.set('X-MEASURE-NUMBER8', 'measureNumber8');
    this.map.set('X-NOTE-INDICATOR-NI', 'noteIndicatorNi');
    this.map.set('X-NOTE-INDICATOR-PA', 'noteIndicatorPa');
    this.map.set('X-NOTE-INDICATOR-VOU', 'noteIndicatorVou');
    this.map.set('X-NOTE-INDICATOR-GA', 'noteIndicatorGa');
    this.map.set('X-NOTE-INDICATOR-DI', 'noteIndicatorDi');
    this.map.set('X-NOTE-INDICATOR-KE', 'noteIndicatorKe');
    this.map.set('X-NOTE-INDICATOR-ZO', 'noteIndicatorZo');
    this.map.set('X-ISON-INDICATOR-UNISON', 'isonIndicatorUnison');
    this.map.set('X-ISON-INDICATOR-DI-LOW', 'isonIndicatorDiLow');
    this.map.set('X-ISON-INDICATOR-KE-LOW', 'isonIndicatorKeLow');
    this.map.set('X-ISON-INDICATOR-ZO', 'isonIndicatorZo');
    this.map.set('X-ISON-INDICATOR-NI', 'isonIndicatorNi');
    this.map.set('X-ISON-INDICATOR-PA', 'isonIndicatorPa');
    this.map.set('X-ISON-INDICATOR-VOU', 'isonIndicatorVou');
    this.map.set('X-ISON-INDICATOR-GA', 'isonIndicatorGa');
    this.map.set('X-ISON-INDICATOR-DI', 'isonIndicatorDi');
    this.map.set('X-ISON-INDICATOR-KE', 'isonIndicatorKe');
    this.map.set('X-ISON-INDICATOR-ZO-HIGH', 'isonIndicatorZoHigh');
    this.map.set('X-GORTHMIKON', 'gorthmikon');
    this.map.set('X-PELASTIKON', 'pelastikon');
    this.map.set('X-MODE-FIRST', 'modeFirst');
    this.map.set('X-MODE-SECOND', 'modeSecond');
    this.map.set('X-MODE-THIRD', 'modeThird');
    this.map.set('X-MODE-THIRD-NANA', 'modeThirdNana');
    this.map.set('X-MODE-FOURTH', 'modeFourth');
    this.map.set('X-MODE-LEGETOS', 'modeLegetos');
    this.map.set('X-MODE-PLAGAL-FIRST', 'modePlagalFirst');
    this.map.set('X-MODE-PLAGAL-SECOND', 'modePlagalSecond');
    this.map.set('X-MODE-VARYS', 'modeVarys');
    this.map.set('X-MODE-VARYS2', 'modeVarys2');
    this.map.set('X-MODE-PLAGAL-FOURTH', 'modePlagalFourth');
    this.map.set('X-MODE-NI', 'modeNi');
    this.map.set('X-MODE-PA', 'modePa');
    this.map.set('X-MODE-VOU', 'modeVou');
    this.map.set('X-MODE-GA', 'modeGa');
    this.map.set('X-MODE-DI', 'modeDi');
    this.map.set('X-MODE-KE', 'modeKe');
    this.map.set('X-MODE-ZO', 'modeZo');
    this.map.set('X-MODE-OLIGON-KENTIMA-ABOVE', 'modeOligonKentimaAbove');
    this.map.set('X-MODE-OLIGON-YPSILI', 'modeOligonYpsili');
    this.map.set('X-MODE-ELAFRON', 'modeElafron');
    this.map.set('X-MODE-RUNNING-ELAFRON', 'modeRunningElafron');
    this.map.set('X-MODE-PLAGAL', 'modePlagal');
    this.map.set('X-MODE-WORD-ECHOS', 'modeWordEchos');
    this.map.set('X-MODE-WORD-VARYS', 'modeWordVarys');
    this.map.set('X-MODE-ALPHA', 'modeAlpha');
    this.map.set('X-MODE-BETA', 'modeBeta');
    this.map.set('X-MODE-GAMMA', 'modeGamma');
    this.map.set('X-MODE-DELTA', 'modeDelta');
    this.map.set('X-MODE-ALPHA-CAPITAL', 'modeAlphaCapital');
    this.map.set('X-MODE-BETA-CAPITAL', 'modeBetaCapital');
    this.map.set('X-MODE-GAMMA-CAPITAL', 'modeGammaCapital');
    this.map.set('X-MODE-DELTA-CAPITAL', 'modeDeltaCapital');
  }

  getGlyphNameFromNodeName(nodeName) {
    return this.map.get(nodeName);
  }
}
