var byzhtml = (function () {
  'use strict';

  var ison = {
  	alternateCodepoint: "U+1D046",
  	codepoint: "U+E000"
  };
  var oligon = {
  	alternateCodepoint: "U+1D047",
  	codepoint: "U+E001"
  };
  var oligonKentimaMiddle = {
  	codepoint: "U+E002"
  };
  var oligonKentimaBelow = {
  	codepoint: "U+E003"
  };
  var oligonKentimaAbove = {
  	codepoint: "U+E004"
  };
  var oligonYpsiliRight = {
  	codepoint: "U+E005"
  };
  var oligonYpsiliLeft = {
  	codepoint: "U+E006"
  };
  var oligonKentimaYpsiliRight = {
  	codepoint: "U+E007"
  };
  var oligonKentimaYpsiliMiddle = {
  	codepoint: "U+E008"
  };
  var oligonDoubleYpsili = {
  	codepoint: "U+E009"
  };
  var oligonKentimataDoubleYpsili = {
  	codepoint: "U+E00A"
  };
  var oligonKentimaDoubleYpsiliRight = {
  	codepoint: "U+E00B"
  };
  var oligonKentimaDoubleYpsiliLeft = {
  	codepoint: "U+E00C"
  };
  var oligonTripleYpsili = {
  	codepoint: "U+E00D"
  };
  var oligonKentimataTripleYpsili = {
  	codepoint: "U+E00E"
  };
  var oligonKentimaTripleYpsili = {
  	codepoint: "U+E00F"
  };
  var oligonIson = {
  	codepoint: "U+E010"
  };
  var oligonApostrofos = {
  	codepoint: "U+E011"
  };
  var oligonYporroi = {
  	codepoint: "U+E012"
  };
  var oligonElafron = {
  	codepoint: "U+E013"
  };
  var oligonElafronApostrofos = {
  	codepoint: "U+E014"
  };
  var oligonChamili = {
  	codepoint: "U+E015"
  };
  var isonApostrofos = {
  	codepoint: "U+E020"
  };
  var apostrofos = {
  	alternateCodepoint: "U+1D051",
  	codepoint: "U+E021"
  };
  var apostrofosSyndesmos = {
  	alternateCodepoint: "U+1D052",
  	codepoint: "U+E022"
  };
  var yporroi = {
  	alternateCodepoint: "U+1D053",
  	codepoint: "U+E023"
  };
  var elafron = {
  	alternateCodepoint: "U+1D055",
  	codepoint: "U+E024"
  };
  var runningElafron = {
  	codepoint: "U+E025"
  };
  var elafronApostrofos = {
  	codepoint: "U+E026"
  };
  var chamili = {
  	alternateCodepoint: "U+1D056",
  	codepoint: "U+E027"
  };
  var chamiliApostrofos = {
  	codepoint: "U+E028"
  };
  var chamiliElafron = {
  	codepoint: "U+E029"
  };
  var chamiliElafronApostrofos = {
  	codepoint: "U+E02A"
  };
  var doubleChamili = {
  	codepoint: "U+E02B"
  };
  var doubleChamiliApostrofos = {
  	codepoint: "U+E02C"
  };
  var doubleChamiliElafron = {
  	codepoint: "U+E02D"
  };
  var doubleChamiliElafronApostrofos = {
  	codepoint: "U+E02E"
  };
  var tripleChamili = {
  	codepoint: "U+E02F"
  };
  var petastiIson = {
  	codepoint: "U+E040"
  };
  var petasti = {
  	alternateCodepoint: "U+1D049",
  	codepoint: "U+E041"
  };
  var petastiOligon = {
  	codepoint: "U+E042"
  };
  var petastiKentima = {
  	codepoint: "U+E043"
  };
  var petastiYpsiliRight = {
  	codepoint: "U+E044"
  };
  var petastiYpsiliLeft = {
  	codepoint: "U+E045"
  };
  var petastiKentimaYpsiliRight = {
  	codepoint: "U+E046"
  };
  var petastiKentimaYpsiliMiddle = {
  	codepoint: "U+E047"
  };
  var petastiDoubleYpsili = {
  	codepoint: "U+E048"
  };
  var petastiKentimataDoubleYpsili = {
  	codepoint: "U+E049"
  };
  var petastiKentimaDoubleYpsiliRight = {
  	codepoint: "U+E04A"
  };
  var petastiKentimaDoubleYpsiliLeft = {
  	codepoint: "U+E04B"
  };
  var petastiTripleYpsili = {
  	codepoint: "U+E04C"
  };
  var petastiKentimataTripleYpsili = {
  	codepoint: "U+E04D"
  };
  var petastiKentimaTripleYpsili = {
  	codepoint: "U+E04E"
  };
  var petastiApostrofos = {
  	codepoint: "U+E060"
  };
  var petastiYporroi = {
  	codepoint: "U+E061"
  };
  var petastiElafron = {
  	codepoint: "U+E062"
  };
  var petastiRunningElafron = {
  	codepoint: "U+E063"
  };
  var petastiElafronApostrofos = {
  	codepoint: "U+E064"
  };
  var petastiChamili = {
  	codepoint: "U+E065"
  };
  var petastiChamiliApostrofos = {
  	codepoint: "U+E066"
  };
  var petastiChamiliElafron = {
  	codepoint: "U+E067"
  };
  var petastiChamiliElafronApostrofos = {
  	codepoint: "U+E068"
  };
  var petastiDoubleChamili = {
  	codepoint: "U+E069"
  };
  var petastiDoubleChamiliApostrofos = {
  	codepoint: "U+E06A"
  };
  var kentima = {
  	alternateCodepoint: "U+1D04F",
  	codepoint: "U+E080"
  };
  var kentimata = {
  	alternateCodepoint: "U+1D04E",
  	codepoint: "U+E081"
  };
  var oligonKentimataBelow = {
  	codepoint: "U+E082"
  };
  var oligonKentimataAbove = {
  	codepoint: "U+E083"
  };
  var oligonIsonKentimata = {
  	codepoint: "U+E084"
  };
  var oligonKentimaMiddleKentimata = {
  	codepoint: "U+E085"
  };
  var oligonYpsiliRightKentimata = {
  	codepoint: "U+E086"
  };
  var oligonYpsiliLeftKentimata = {
  	codepoint: "U+E087"
  };
  var oligonApostrofosKentimata = {
  	codepoint: "U+E088"
  };
  var oligonYporroiKentimata = {
  	codepoint: "U+E089"
  };
  var oligonElafronKentimata = {
  	codepoint: "U+E08A"
  };
  var oligonRunningElafronKentimata = {
  	codepoint: "U+E08B"
  };
  var oligonElafronApostrofosKentimata = {
  	codepoint: "U+E08C"
  };
  var oligonChamiliKentimata = {
  	codepoint: "U+E08D"
  };
  var vareia = {
  	alternateCodepoint: "U+1D058",
  	codepoint: "U+E0A0"
  };
  var psifiston = {
  	alternateCodepoint: "U+1D05A",
  	codepoint: "U+E0A1"
  };
  var antikenoma = {
  	alternateCodepoint: "U+1D05C",
  	codepoint: "U+E0A2"
  };
  var omalon = {
  	alternateCodepoint: "U+1D05B",
  	codepoint: "U+E0A3"
  };
  var omalonConnecting = {
  	codepoint: "U+E0A4"
  };
  var heteron = {
  	alternateCodepoint: "U+1D060",
  	codepoint: "U+E0A5"
  };
  var heteronConnecting = {
  	codepoint: "U+E0A6"
  };
  var endofonon = {
  	alternateCodepoint: "U+1D07B",
  	codepoint: "U+E0A7"
  };
  var yfenAbove = {
  	alternateCodepoint: "U+1D07D",
  	codepoint: "U+E0B0"
  };
  var yfenBelow = {
  	alternateCodepoint: "U+1D07C",
  	codepoint: "U+E0B1"
  };
  var stavros = {
  	alternateCodepoint: "U+1D07E",
  	codepoint: "U+E0C0"
  };
  var breath = {
  	alternateCodepoint: "U+1D112",
  	codepoint: "U+E0C1"
  };
  var klasmaAbove = {
  	alternateCodepoint: "U+1D07F",
  	codepoint: "U+E0D0"
  };
  var klasmaBelow = {
  	alternateCodepoint: "U+1D0F4",
  	codepoint: "U+E0D1"
  };
  var apli = {
  	alternateCodepoint: "U+1D085",
  	codepoint: "U+E0D2"
  };
  var dipli = {
  	alternateCodepoint: "U+1D086",
  	codepoint: "U+E0D3"
  };
  var tripli = {
  	alternateCodepoint: "U+1D087",
  	codepoint: "U+E0D4"
  };
  var tetrapli = {
  	alternateCodepoint: "U+1D088",
  	codepoint: "U+E0D5"
  };
  var koronis = {
  	alternateCodepoint: "U+1D089",
  	codepoint: "U+E0D6"
  };
  var leimma1 = {
  	alternateCodepoint: "U+1D08A",
  	codepoint: "U+E0E0"
  };
  var leimma2 = {
  	alternateCodepoint: "U+1D08B",
  	codepoint: "U+E0E1"
  };
  var leimma3 = {
  	alternateCodepoint: "U+1D08C",
  	codepoint: "U+E0E2"
  };
  var leimma4 = {
  	alternateCodepoint: "U+1D08D",
  	codepoint: "U+E0E3"
  };
  var leimmaDot = {
  	codepoint: "U+E0E4"
  };
  var gorgonAbove = {
  	alternateCodepoint: "U+1D08F",
  	codepoint: "U+E0F0"
  };
  var gorgonBelow = {
  	alternateCodepoint: "U+1D0F5",
  	codepoint: "U+E0F1"
  };
  var gorgonDottedLeft = {
  	alternateCodepoint: "U+1D090",
  	codepoint: "U+E0F2"
  };
  var gorgonDottedRight = {
  	alternateCodepoint: "U+1D091",
  	codepoint: "U+E0F3"
  };
  var digorgon = {
  	alternateCodepoint: "U+1D092",
  	codepoint: "U+E0F4"
  };
  var digorgonDottedLeftBelow = {
  	alternateCodepoint: "U+1D093",
  	codepoint: "U+E0F5"
  };
  var digorgonDottedLeftAbove = {
  	alternateCodepoint: "U+1D094",
  	codepoint: "U+E0F6"
  };
  var digorgonDottedRight = {
  	alternateCodepoint: "U+1D095",
  	codepoint: "U+E0F7"
  };
  var trigorgon = {
  	alternateCodepoint: "U+1D096",
  	codepoint: "U+E0F8"
  };
  var trigorgonDottedLeftBelow = {
  	codepoint: "U+E0F9"
  };
  var trigorgonDottedLeftAbove = {
  	codepoint: "U+E0FA"
  };
  var trigorgonDottedRight = {
  	codepoint: "U+E0FB"
  };
  var argon = {
  	alternateCodepoint: "U+1D097",
  	codepoint: "U+E0FC"
  };
  var diargon = {
  	alternateCodepoint: "U+1D098",
  	codepoint: "U+E0FD"
  };
  var triargon = {
  	alternateCodepoint: "U+1D099",
  	codepoint: "U+E0FE"
  };
  var gorgonSecondary = {
  	codepoint: "U+E100"
  };
  var gorgonDottedLeftSecondary = {
  	codepoint: "U+E101"
  };
  var gorgonDottedRightSecondary = {
  	codepoint: "U+E102"
  };
  var digorgonSecondary = {
  	codepoint: "U+E103"
  };
  var digorgonDottedLeftBelowSecondary = {
  	codepoint: "U+E104"
  };
  var digorgonDottedRightSecondary = {
  	codepoint: "U+E105"
  };
  var trigorgonSecondary = {
  	codepoint: "U+E106"
  };
  var trigorgonDottedLeftBelowSecondary = {
  	codepoint: "U+E107"
  };
  var trigorgonDottedRightSecondary = {
  	codepoint: "U+E108"
  };
  var agogiPoliArgi = {
  	alternateCodepoint: "U+1D09A",
  	codepoint: "U+E120"
  };
  var agogiArgoteri = {
  	alternateCodepoint: "U+1D09B",
  	codepoint: "U+E121"
  };
  var agogiArgi = {
  	alternateCodepoint: "U+1D09C",
  	codepoint: "U+E122"
  };
  var agogiMetria = {
  	alternateCodepoint: "U+1D09D",
  	codepoint: "U+E123"
  };
  var agogiMesi = {
  	alternateCodepoint: "U+1D09E",
  	codepoint: "U+E124"
  };
  var agogiGorgi = {
  	alternateCodepoint: "U+1D09F",
  	codepoint: "U+E125"
  };
  var agogiGorgoteri = {
  	alternateCodepoint: "U+1D0A0",
  	codepoint: "U+E126"
  };
  var agogiPoliGorgi = {
  	alternateCodepoint: "U+1D0A1",
  	codepoint: "U+E127"
  };
  var agogiPoliArgiAbove = {
  	alternateCodepoint: "U+1D09A",
  	codepoint: "U+E128"
  };
  var agogiArgoteriAbove = {
  	alternateCodepoint: "U+1D09B",
  	codepoint: "U+E129"
  };
  var agogiArgiAbove = {
  	alternateCodepoint: "U+1D09C",
  	codepoint: "U+E12A"
  };
  var agogiMetriaAbove = {
  	alternateCodepoint: "U+1D09D",
  	codepoint: "U+E12B"
  };
  var agogiMesiAbove = {
  	alternateCodepoint: "U+1D09E",
  	codepoint: "U+E12C"
  };
  var agogiGorgiAbove = {
  	alternateCodepoint: "U+1D09F",
  	codepoint: "U+E12D"
  };
  var agogiGorgoteriAbove = {
  	alternateCodepoint: "U+1D0A0",
  	codepoint: "U+E12E"
  };
  var agogiPoliGorgiAbove = {
  	alternateCodepoint: "U+1D0A1",
  	codepoint: "U+E12F"
  };
  var martyriaNoteZoLow = {
  	codepoint: "U+E130"
  };
  var martyriaNoteNiLow = {
  	codepoint: "U+E131"
  };
  var martyriaNotePaLow = {
  	codepoint: "U+E132"
  };
  var martyriaNoteVouLow = {
  	codepoint: "U+E133"
  };
  var martyriaNoteGaLow = {
  	codepoint: "U+E134"
  };
  var martyriaNoteDiLow = {
  	codepoint: "U+E135"
  };
  var martyriaNoteKeLow = {
  	codepoint: "U+E136"
  };
  var martyriaNoteZo = {
  	codepoint: "U+E137"
  };
  var martyriaNoteNi = {
  	codepoint: "U+E138"
  };
  var martyriaNotePa = {
  	codepoint: "U+E139"
  };
  var martyriaNoteVou = {
  	codepoint: "U+E13A"
  };
  var martyriaNoteGa = {
  	codepoint: "U+E13B"
  };
  var martyriaNoteDi = {
  	codepoint: "U+E13C"
  };
  var martyriaNoteKe = {
  	codepoint: "U+E13D"
  };
  var martyriaNoteZoHigh = {
  	codepoint: "U+E13E"
  };
  var martyriaNoteNiHigh = {
  	codepoint: "U+E13F"
  };
  var martyriaNotePaHigh = {
  	codepoint: "U+E140"
  };
  var martyriaNoteVouHigh = {
  	codepoint: "U+E141"
  };
  var martyriaNoteGaHigh = {
  	codepoint: "U+E142"
  };
  var martyriaNoteDiHigh = {
  	codepoint: "U+E143"
  };
  var martyriaNoteKeHigh = {
  	codepoint: "U+E144"
  };
  var martyriaTick = {
  	codepoint: "U+E145"
  };
  var martyriaZoBelow = {
  	codepoint: "U+E150"
  };
  var martyriaDeltaBelow = {
  	codepoint: "U+E151"
  };
  var martyriaAlphaBelow = {
  	codepoint: "U+E152"
  };
  var martyriaLegetosBelow = {
  	codepoint: "U+E153"
  };
  var martyriaNanaBelow = {
  	codepoint: "U+E154"
  };
  var martyriaDeltaDottedBelow = {
  	codepoint: "U+E155"
  };
  var martyriaAlphaDottedBelow = {
  	codepoint: "U+E156"
  };
  var martyriaHardChromaticPaBelow = {
  	codepoint: "U+E157"
  };
  var martyriaHardChromaticDiBelow = {
  	codepoint: "U+E158"
  };
  var martyriaSoftChromaticDiBelow = {
  	codepoint: "U+E159"
  };
  var martyriaSoftChromaticKeBelow = {
  	codepoint: "U+E15A"
  };
  var martyriaZygosBelow = {
  	codepoint: "U+E15B"
  };
  var martyriaZoAbove = {
  	codepoint: "U+E170"
  };
  var martyriaDeltaAbove = {
  	codepoint: "U+E171"
  };
  var martyriaAlphaAbove = {
  	codepoint: "U+E172"
  };
  var martyriaLegetosAbove = {
  	codepoint: "U+E173"
  };
  var martyriaNanaAbove = {
  	codepoint: "U+E174"
  };
  var martyriaDeltaDottedAbove = {
  	codepoint: "U+E175"
  };
  var martyriaAlphaDottedAbove = {
  	codepoint: "U+E176"
  };
  var martyriaHardChromaticPaAbove = {
  	codepoint: "U+E177"
  };
  var martyriaHardChromaticDiAbove = {
  	codepoint: "U+E178"
  };
  var martyriaSoftChromaticDiAbove = {
  	codepoint: "U+E179"
  };
  var martyriaSoftChromaticKeAbove = {
  	codepoint: "U+E17A"
  };
  var martyriaZygosAbove = {
  	codepoint: "U+E17B"
  };
  var fthoraDiatonicNiLowAbove = {
  	codepoint: "U+E190"
  };
  var fthoraDiatonicPaAbove = {
  	codepoint: "U+E191"
  };
  var fthoraDiatonicVouAbove = {
  	codepoint: "U+E192"
  };
  var fthoraDiatonicGaAbove = {
  	codepoint: "U+E193"
  };
  var fthoraDiatonicDiAbove = {
  	codepoint: "U+E194"
  };
  var fthoraDiatonicKeAbove = {
  	codepoint: "U+E195"
  };
  var fthoraDiatonicZoAbove = {
  	codepoint: "U+E196"
  };
  var fthoraDiatonicNiHighAbove = {
  	codepoint: "U+E197"
  };
  var fthoraHardChromaticPaAbove = {
  	codepoint: "U+E198"
  };
  var fthoraHardChromaticDiAbove = {
  	codepoint: "U+E199"
  };
  var fthoraSoftChromaticDiAbove = {
  	codepoint: "U+E19A"
  };
  var fthoraSoftChromaticKeAbove = {
  	codepoint: "U+E19B"
  };
  var fthoraEnharmonicAbove = {
  	codepoint: "U+E19C"
  };
  var chroaZygosAbove = {
  	codepoint: "U+E19D"
  };
  var chroaKlitonAbove = {
  	codepoint: "U+E19E"
  };
  var chroaSpathiAbove = {
  	codepoint: "U+E19F"
  };
  var fthoraDiatonicNiLowBelow = {
  	codepoint: "U+E1C0"
  };
  var fthoraDiatonicPaBelow = {
  	codepoint: "U+E1C1"
  };
  var fthoraDiatonicVouBelow = {
  	codepoint: "U+E1C2"
  };
  var fthoraDiatonicGaBelow = {
  	codepoint: "U+E1C3"
  };
  var fthoraDiatonicDiBelow = {
  	codepoint: "U+E1C4"
  };
  var fthoraDiatonicKeBelow = {
  	codepoint: "U+E1C5"
  };
  var fthoraDiatonicZoBelow = {
  	codepoint: "U+E1C6"
  };
  var fthoraDiatonicNiHighBelow = {
  	codepoint: "U+E1C7"
  };
  var fthoraHardChromaticPaBelow = {
  	codepoint: "U+E1C8"
  };
  var fthoraHardChromaticDiBelow = {
  	codepoint: "U+E1C9"
  };
  var fthoraSoftChromaticDiBelow = {
  	codepoint: "U+E1CA"
  };
  var fthoraSoftChromaticKeBelow = {
  	codepoint: "U+E1CB"
  };
  var fthoraEnharmonicBelow = {
  	codepoint: "U+E1CC"
  };
  var chroaZygosBelow = {
  	codepoint: "U+E1CD"
  };
  var chroaKlitonBelow = {
  	codepoint: "U+E1CE"
  };
  var chroaSpathiBelow = {
  	codepoint: "U+E1CF"
  };
  var diesis2 = {
  	alternateCodepoint: "U+1D0D0",
  	codepoint: "U+E1F0"
  };
  var diesis4 = {
  	alternateCodepoint: "U+1D0D1",
  	codepoint: "U+E1F1"
  };
  var diesis6 = {
  	alternateCodepoint: "U+1D0D2",
  	codepoint: "U+E1F2"
  };
  var diesis8 = {
  	alternateCodepoint: "U+1D0D3",
  	codepoint: "U+E1F3"
  };
  var diesisGenikiAbove = {
  	codepoint: "U+E1F4"
  };
  var diesisGenikiBelow = {
  	codepoint: "U+E1F5"
  };
  var yfesis2 = {
  	alternateCodepoint: "U+1D0D4",
  	codepoint: "U+E200"
  };
  var yfesis4 = {
  	alternateCodepoint: "U+1D0D5",
  	codepoint: "U+E201"
  };
  var yfesis6 = {
  	alternateCodepoint: "U+1D0D6",
  	codepoint: "U+E202"
  };
  var yfesis8 = {
  	alternateCodepoint: "U+1D0D7",
  	codepoint: "U+E203"
  };
  var yfesisGenikiAbove = {
  	codepoint: "U+E204"
  };
  var yfesisGenikiBelow = {
  	codepoint: "U+E205"
  };
  var barlineSingle = {
  	alternateCodepoint: "U+1D0DB",
  	codepoint: "U+E210"
  };
  var barlineDouble = {
  	codepoint: "U+E211"
  };
  var barlineTheseos = {
  	codepoint: "U+E212"
  };
  var barlineShortSingle = {
  	alternateCodepoint: "U+1D0DA",
  	codepoint: "U+E213"
  };
  var barlineShortDouble = {
  	alternateCodepoint: "U+1D0DC",
  	codepoint: "U+E214"
  };
  var barlineShortTheseos = {
  	alternateCodepoint: "U+1D0DD",
  	codepoint: "U+E215"
  };
  var measureNumber2 = {
  	codepoint: "U+E220"
  };
  var measureNumber3 = {
  	codepoint: "U+E221"
  };
  var measureNumber4 = {
  	codepoint: "U+E222"
  };
  var measureNumber5 = {
  	codepoint: "U+E223"
  };
  var measureNumber6 = {
  	codepoint: "U+E224"
  };
  var measureNumber7 = {
  	codepoint: "U+E225"
  };
  var measureNumber8 = {
  	codepoint: "U+E226"
  };
  var noteIndicatorNi = {
  	codepoint: "U+E250"
  };
  var noteIndicatorPa = {
  	codepoint: "U+E251"
  };
  var noteIndicatorVou = {
  	codepoint: "U+E252"
  };
  var noteIndicatorGa = {
  	codepoint: "U+E253"
  };
  var noteIndicatorDi = {
  	codepoint: "U+E254"
  };
  var noteIndicatorKe = {
  	codepoint: "U+E255"
  };
  var noteIndicatorZo = {
  	codepoint: "U+E256"
  };
  var isonIndicatorUnison = {
  	codepoint: "U+E260"
  };
  var isonIndicatorDiLow = {
  	codepoint: "U+E261"
  };
  var isonIndicatorKeLow = {
  	codepoint: "U+E262"
  };
  var isonIndicatorZo = {
  	codepoint: "U+E263"
  };
  var isonIndicatorNi = {
  	codepoint: "U+E264"
  };
  var isonIndicatorPa = {
  	codepoint: "U+E265"
  };
  var isonIndicatorVou = {
  	codepoint: "U+E266"
  };
  var isonIndicatorGa = {
  	codepoint: "U+E267"
  };
  var isonIndicatorDi = {
  	codepoint: "U+E268"
  };
  var isonIndicatorKe = {
  	codepoint: "U+E269"
  };
  var isonIndicatorZoHigh = {
  	codepoint: "U+E26A"
  };
  var gorthmikon = {
  	alternateCodepoint: "U+1D0B5",
  	codepoint: "U+E280"
  };
  var pelastikon = {
  	alternateCodepoint: "U+1D0B4",
  	codepoint: "U+E281"
  };
  var modeFirst = {
  	codepoint: "U+E2A0"
  };
  var modeSecond = {
  	codepoint: "U+E2A8"
  };
  var modeThird = {
  	codepoint: "U+E2B0"
  };
  var modeThirdNana = {
  	alternateCodepoint: "U+1D0A7",
  	codepoint: "U+E2B1"
  };
  var modeFourth = {
  	codepoint: "U+E2B8"
  };
  var modeLegetos = {
  	alternateCodepoint: "U+1D0AA",
  	codepoint: "U+E2BA"
  };
  var modePlagalFirst = {
  	codepoint: "U+E2C0"
  };
  var modePlagalSecond = {
  	codepoint: "U+E2C8"
  };
  var modeVarys = {
  	alternateCodepoint: "U+1D0B1",
  	codepoint: "U+E2D0"
  };
  var modeVarys2 = {
  	codepoint: "U+E2D1"
  };
  var modePlagalFourth = {
  	codepoint: "U+E2D8"
  };
  var modeNi = {
  	codepoint: "U+E2E0"
  };
  var modePa = {
  	codepoint: "U+E2E1"
  };
  var modeVou = {
  	codepoint: "U+E2E2"
  };
  var modeGa = {
  	codepoint: "U+E2E3"
  };
  var modeDi = {
  	codepoint: "U+E2E4"
  };
  var modeKe = {
  	codepoint: "U+E2E5"
  };
  var modeZo = {
  	codepoint: "U+E2E6"
  };
  var modeOligonKentimaAbove = {
  	codepoint: "U+E2E7"
  };
  var modeOligonYpsili = {
  	codepoint: "U+E2E8"
  };
  var modeElafron = {
  	codepoint: "U+E2E9"
  };
  var modeRunningElafron = {
  	codepoint: "U+E2EA"
  };
  var modePlagal = {
  	alternateCodepoint: "U+1D0AB",
  	codepoint: "U+E2F0"
  };
  var modeWordEchos = {
  	codepoint: "U+E2F1"
  };
  var modeWordVarys = {
  	codepoint: "U+E2F2"
  };
  var modeAlpha = {
  	codepoint: "U+E2F3"
  };
  var modeBeta = {
  	codepoint: "U+E2F4"
  };
  var modeGamma = {
  	codepoint: "U+E2F5"
  };
  var modeDelta = {
  	codepoint: "U+E2F6"
  };
  var modeAlphaCapital = {
  	codepoint: "U+E2F7"
  };
  var modeBetaCapital = {
  	codepoint: "U+E2F8"
  };
  var modeGammaCapital = {
  	codepoint: "U+E2F9"
  };
  var modeDeltaCapital = {
  	codepoint: "U+E2FA"
  };
  var glyphnames = {
  	ison: ison,
  	oligon: oligon,
  	oligonKentimaMiddle: oligonKentimaMiddle,
  	oligonKentimaBelow: oligonKentimaBelow,
  	oligonKentimaAbove: oligonKentimaAbove,
  	oligonYpsiliRight: oligonYpsiliRight,
  	oligonYpsiliLeft: oligonYpsiliLeft,
  	oligonKentimaYpsiliRight: oligonKentimaYpsiliRight,
  	oligonKentimaYpsiliMiddle: oligonKentimaYpsiliMiddle,
  	oligonDoubleYpsili: oligonDoubleYpsili,
  	oligonKentimataDoubleYpsili: oligonKentimataDoubleYpsili,
  	oligonKentimaDoubleYpsiliRight: oligonKentimaDoubleYpsiliRight,
  	oligonKentimaDoubleYpsiliLeft: oligonKentimaDoubleYpsiliLeft,
  	oligonTripleYpsili: oligonTripleYpsili,
  	oligonKentimataTripleYpsili: oligonKentimataTripleYpsili,
  	oligonKentimaTripleYpsili: oligonKentimaTripleYpsili,
  	oligonIson: oligonIson,
  	oligonApostrofos: oligonApostrofos,
  	oligonYporroi: oligonYporroi,
  	oligonElafron: oligonElafron,
  	oligonElafronApostrofos: oligonElafronApostrofos,
  	oligonChamili: oligonChamili,
  	isonApostrofos: isonApostrofos,
  	apostrofos: apostrofos,
  	apostrofosSyndesmos: apostrofosSyndesmos,
  	yporroi: yporroi,
  	elafron: elafron,
  	runningElafron: runningElafron,
  	elafronApostrofos: elafronApostrofos,
  	chamili: chamili,
  	chamiliApostrofos: chamiliApostrofos,
  	chamiliElafron: chamiliElafron,
  	chamiliElafronApostrofos: chamiliElafronApostrofos,
  	doubleChamili: doubleChamili,
  	doubleChamiliApostrofos: doubleChamiliApostrofos,
  	doubleChamiliElafron: doubleChamiliElafron,
  	doubleChamiliElafronApostrofos: doubleChamiliElafronApostrofos,
  	tripleChamili: tripleChamili,
  	petastiIson: petastiIson,
  	petasti: petasti,
  	petastiOligon: petastiOligon,
  	petastiKentima: petastiKentima,
  	petastiYpsiliRight: petastiYpsiliRight,
  	petastiYpsiliLeft: petastiYpsiliLeft,
  	petastiKentimaYpsiliRight: petastiKentimaYpsiliRight,
  	petastiKentimaYpsiliMiddle: petastiKentimaYpsiliMiddle,
  	petastiDoubleYpsili: petastiDoubleYpsili,
  	petastiKentimataDoubleYpsili: petastiKentimataDoubleYpsili,
  	petastiKentimaDoubleYpsiliRight: petastiKentimaDoubleYpsiliRight,
  	petastiKentimaDoubleYpsiliLeft: petastiKentimaDoubleYpsiliLeft,
  	petastiTripleYpsili: petastiTripleYpsili,
  	petastiKentimataTripleYpsili: petastiKentimataTripleYpsili,
  	petastiKentimaTripleYpsili: petastiKentimaTripleYpsili,
  	petastiApostrofos: petastiApostrofos,
  	petastiYporroi: petastiYporroi,
  	petastiElafron: petastiElafron,
  	petastiRunningElafron: petastiRunningElafron,
  	petastiElafronApostrofos: petastiElafronApostrofos,
  	petastiChamili: petastiChamili,
  	petastiChamiliApostrofos: petastiChamiliApostrofos,
  	petastiChamiliElafron: petastiChamiliElafron,
  	petastiChamiliElafronApostrofos: petastiChamiliElafronApostrofos,
  	petastiDoubleChamili: petastiDoubleChamili,
  	petastiDoubleChamiliApostrofos: petastiDoubleChamiliApostrofos,
  	kentima: kentima,
  	kentimata: kentimata,
  	oligonKentimataBelow: oligonKentimataBelow,
  	oligonKentimataAbove: oligonKentimataAbove,
  	oligonIsonKentimata: oligonIsonKentimata,
  	oligonKentimaMiddleKentimata: oligonKentimaMiddleKentimata,
  	oligonYpsiliRightKentimata: oligonYpsiliRightKentimata,
  	oligonYpsiliLeftKentimata: oligonYpsiliLeftKentimata,
  	oligonApostrofosKentimata: oligonApostrofosKentimata,
  	oligonYporroiKentimata: oligonYporroiKentimata,
  	oligonElafronKentimata: oligonElafronKentimata,
  	oligonRunningElafronKentimata: oligonRunningElafronKentimata,
  	oligonElafronApostrofosKentimata: oligonElafronApostrofosKentimata,
  	oligonChamiliKentimata: oligonChamiliKentimata,
  	vareia: vareia,
  	psifiston: psifiston,
  	antikenoma: antikenoma,
  	omalon: omalon,
  	omalonConnecting: omalonConnecting,
  	heteron: heteron,
  	heteronConnecting: heteronConnecting,
  	endofonon: endofonon,
  	yfenAbove: yfenAbove,
  	yfenBelow: yfenBelow,
  	stavros: stavros,
  	breath: breath,
  	klasmaAbove: klasmaAbove,
  	klasmaBelow: klasmaBelow,
  	apli: apli,
  	dipli: dipli,
  	tripli: tripli,
  	tetrapli: tetrapli,
  	koronis: koronis,
  	leimma1: leimma1,
  	leimma2: leimma2,
  	leimma3: leimma3,
  	leimma4: leimma4,
  	leimmaDot: leimmaDot,
  	gorgonAbove: gorgonAbove,
  	gorgonBelow: gorgonBelow,
  	gorgonDottedLeft: gorgonDottedLeft,
  	gorgonDottedRight: gorgonDottedRight,
  	digorgon: digorgon,
  	digorgonDottedLeftBelow: digorgonDottedLeftBelow,
  	digorgonDottedLeftAbove: digorgonDottedLeftAbove,
  	digorgonDottedRight: digorgonDottedRight,
  	trigorgon: trigorgon,
  	trigorgonDottedLeftBelow: trigorgonDottedLeftBelow,
  	trigorgonDottedLeftAbove: trigorgonDottedLeftAbove,
  	trigorgonDottedRight: trigorgonDottedRight,
  	argon: argon,
  	diargon: diargon,
  	triargon: triargon,
  	gorgonSecondary: gorgonSecondary,
  	gorgonDottedLeftSecondary: gorgonDottedLeftSecondary,
  	gorgonDottedRightSecondary: gorgonDottedRightSecondary,
  	digorgonSecondary: digorgonSecondary,
  	digorgonDottedLeftBelowSecondary: digorgonDottedLeftBelowSecondary,
  	digorgonDottedRightSecondary: digorgonDottedRightSecondary,
  	trigorgonSecondary: trigorgonSecondary,
  	trigorgonDottedLeftBelowSecondary: trigorgonDottedLeftBelowSecondary,
  	trigorgonDottedRightSecondary: trigorgonDottedRightSecondary,
  	agogiPoliArgi: agogiPoliArgi,
  	agogiArgoteri: agogiArgoteri,
  	agogiArgi: agogiArgi,
  	agogiMetria: agogiMetria,
  	agogiMesi: agogiMesi,
  	agogiGorgi: agogiGorgi,
  	agogiGorgoteri: agogiGorgoteri,
  	agogiPoliGorgi: agogiPoliGorgi,
  	agogiPoliArgiAbove: agogiPoliArgiAbove,
  	agogiArgoteriAbove: agogiArgoteriAbove,
  	agogiArgiAbove: agogiArgiAbove,
  	agogiMetriaAbove: agogiMetriaAbove,
  	agogiMesiAbove: agogiMesiAbove,
  	agogiGorgiAbove: agogiGorgiAbove,
  	agogiGorgoteriAbove: agogiGorgoteriAbove,
  	agogiPoliGorgiAbove: agogiPoliGorgiAbove,
  	martyriaNoteZoLow: martyriaNoteZoLow,
  	martyriaNoteNiLow: martyriaNoteNiLow,
  	martyriaNotePaLow: martyriaNotePaLow,
  	martyriaNoteVouLow: martyriaNoteVouLow,
  	martyriaNoteGaLow: martyriaNoteGaLow,
  	martyriaNoteDiLow: martyriaNoteDiLow,
  	martyriaNoteKeLow: martyriaNoteKeLow,
  	martyriaNoteZo: martyriaNoteZo,
  	martyriaNoteNi: martyriaNoteNi,
  	martyriaNotePa: martyriaNotePa,
  	martyriaNoteVou: martyriaNoteVou,
  	martyriaNoteGa: martyriaNoteGa,
  	martyriaNoteDi: martyriaNoteDi,
  	martyriaNoteKe: martyriaNoteKe,
  	martyriaNoteZoHigh: martyriaNoteZoHigh,
  	martyriaNoteNiHigh: martyriaNoteNiHigh,
  	martyriaNotePaHigh: martyriaNotePaHigh,
  	martyriaNoteVouHigh: martyriaNoteVouHigh,
  	martyriaNoteGaHigh: martyriaNoteGaHigh,
  	martyriaNoteDiHigh: martyriaNoteDiHigh,
  	martyriaNoteKeHigh: martyriaNoteKeHigh,
  	martyriaTick: martyriaTick,
  	martyriaZoBelow: martyriaZoBelow,
  	martyriaDeltaBelow: martyriaDeltaBelow,
  	martyriaAlphaBelow: martyriaAlphaBelow,
  	martyriaLegetosBelow: martyriaLegetosBelow,
  	martyriaNanaBelow: martyriaNanaBelow,
  	martyriaDeltaDottedBelow: martyriaDeltaDottedBelow,
  	martyriaAlphaDottedBelow: martyriaAlphaDottedBelow,
  	martyriaHardChromaticPaBelow: martyriaHardChromaticPaBelow,
  	martyriaHardChromaticDiBelow: martyriaHardChromaticDiBelow,
  	martyriaSoftChromaticDiBelow: martyriaSoftChromaticDiBelow,
  	martyriaSoftChromaticKeBelow: martyriaSoftChromaticKeBelow,
  	martyriaZygosBelow: martyriaZygosBelow,
  	martyriaZoAbove: martyriaZoAbove,
  	martyriaDeltaAbove: martyriaDeltaAbove,
  	martyriaAlphaAbove: martyriaAlphaAbove,
  	martyriaLegetosAbove: martyriaLegetosAbove,
  	martyriaNanaAbove: martyriaNanaAbove,
  	martyriaDeltaDottedAbove: martyriaDeltaDottedAbove,
  	martyriaAlphaDottedAbove: martyriaAlphaDottedAbove,
  	martyriaHardChromaticPaAbove: martyriaHardChromaticPaAbove,
  	martyriaHardChromaticDiAbove: martyriaHardChromaticDiAbove,
  	martyriaSoftChromaticDiAbove: martyriaSoftChromaticDiAbove,
  	martyriaSoftChromaticKeAbove: martyriaSoftChromaticKeAbove,
  	martyriaZygosAbove: martyriaZygosAbove,
  	fthoraDiatonicNiLowAbove: fthoraDiatonicNiLowAbove,
  	fthoraDiatonicPaAbove: fthoraDiatonicPaAbove,
  	fthoraDiatonicVouAbove: fthoraDiatonicVouAbove,
  	fthoraDiatonicGaAbove: fthoraDiatonicGaAbove,
  	fthoraDiatonicDiAbove: fthoraDiatonicDiAbove,
  	fthoraDiatonicKeAbove: fthoraDiatonicKeAbove,
  	fthoraDiatonicZoAbove: fthoraDiatonicZoAbove,
  	fthoraDiatonicNiHighAbove: fthoraDiatonicNiHighAbove,
  	fthoraHardChromaticPaAbove: fthoraHardChromaticPaAbove,
  	fthoraHardChromaticDiAbove: fthoraHardChromaticDiAbove,
  	fthoraSoftChromaticDiAbove: fthoraSoftChromaticDiAbove,
  	fthoraSoftChromaticKeAbove: fthoraSoftChromaticKeAbove,
  	fthoraEnharmonicAbove: fthoraEnharmonicAbove,
  	chroaZygosAbove: chroaZygosAbove,
  	chroaKlitonAbove: chroaKlitonAbove,
  	chroaSpathiAbove: chroaSpathiAbove,
  	fthoraDiatonicNiLowBelow: fthoraDiatonicNiLowBelow,
  	fthoraDiatonicPaBelow: fthoraDiatonicPaBelow,
  	fthoraDiatonicVouBelow: fthoraDiatonicVouBelow,
  	fthoraDiatonicGaBelow: fthoraDiatonicGaBelow,
  	fthoraDiatonicDiBelow: fthoraDiatonicDiBelow,
  	fthoraDiatonicKeBelow: fthoraDiatonicKeBelow,
  	fthoraDiatonicZoBelow: fthoraDiatonicZoBelow,
  	fthoraDiatonicNiHighBelow: fthoraDiatonicNiHighBelow,
  	fthoraHardChromaticPaBelow: fthoraHardChromaticPaBelow,
  	fthoraHardChromaticDiBelow: fthoraHardChromaticDiBelow,
  	fthoraSoftChromaticDiBelow: fthoraSoftChromaticDiBelow,
  	fthoraSoftChromaticKeBelow: fthoraSoftChromaticKeBelow,
  	fthoraEnharmonicBelow: fthoraEnharmonicBelow,
  	chroaZygosBelow: chroaZygosBelow,
  	chroaKlitonBelow: chroaKlitonBelow,
  	chroaSpathiBelow: chroaSpathiBelow,
  	diesis2: diesis2,
  	diesis4: diesis4,
  	diesis6: diesis6,
  	diesis8: diesis8,
  	diesisGenikiAbove: diesisGenikiAbove,
  	diesisGenikiBelow: diesisGenikiBelow,
  	yfesis2: yfesis2,
  	yfesis4: yfesis4,
  	yfesis6: yfesis6,
  	yfesis8: yfesis8,
  	yfesisGenikiAbove: yfesisGenikiAbove,
  	yfesisGenikiBelow: yfesisGenikiBelow,
  	barlineSingle: barlineSingle,
  	barlineDouble: barlineDouble,
  	barlineTheseos: barlineTheseos,
  	barlineShortSingle: barlineShortSingle,
  	barlineShortDouble: barlineShortDouble,
  	barlineShortTheseos: barlineShortTheseos,
  	measureNumber2: measureNumber2,
  	measureNumber3: measureNumber3,
  	measureNumber4: measureNumber4,
  	measureNumber5: measureNumber5,
  	measureNumber6: measureNumber6,
  	measureNumber7: measureNumber7,
  	measureNumber8: measureNumber8,
  	noteIndicatorNi: noteIndicatorNi,
  	noteIndicatorPa: noteIndicatorPa,
  	noteIndicatorVou: noteIndicatorVou,
  	noteIndicatorGa: noteIndicatorGa,
  	noteIndicatorDi: noteIndicatorDi,
  	noteIndicatorKe: noteIndicatorKe,
  	noteIndicatorZo: noteIndicatorZo,
  	isonIndicatorUnison: isonIndicatorUnison,
  	isonIndicatorDiLow: isonIndicatorDiLow,
  	isonIndicatorKeLow: isonIndicatorKeLow,
  	isonIndicatorZo: isonIndicatorZo,
  	isonIndicatorNi: isonIndicatorNi,
  	isonIndicatorPa: isonIndicatorPa,
  	isonIndicatorVou: isonIndicatorVou,
  	isonIndicatorGa: isonIndicatorGa,
  	isonIndicatorDi: isonIndicatorDi,
  	isonIndicatorKe: isonIndicatorKe,
  	isonIndicatorZoHigh: isonIndicatorZoHigh,
  	gorthmikon: gorthmikon,
  	pelastikon: pelastikon,
  	modeFirst: modeFirst,
  	modeSecond: modeSecond,
  	modeThird: modeThird,
  	modeThirdNana: modeThirdNana,
  	modeFourth: modeFourth,
  	modeLegetos: modeLegetos,
  	modePlagalFirst: modePlagalFirst,
  	modePlagalSecond: modePlagalSecond,
  	modeVarys: modeVarys,
  	modeVarys2: modeVarys2,
  	modePlagalFourth: modePlagalFourth,
  	modeNi: modeNi,
  	modePa: modePa,
  	modeVou: modeVou,
  	modeGa: modeGa,
  	modeDi: modeDi,
  	modeKe: modeKe,
  	modeZo: modeZo,
  	modeOligonKentimaAbove: modeOligonKentimaAbove,
  	modeOligonYpsili: modeOligonYpsili,
  	modeElafron: modeElafron,
  	modeRunningElafron: modeRunningElafron,
  	modePlagal: modePlagal,
  	modeWordEchos: modeWordEchos,
  	modeWordVarys: modeWordVarys,
  	modeAlpha: modeAlpha,
  	modeBeta: modeBeta,
  	modeGamma: modeGamma,
  	modeDelta: modeDelta,
  	modeAlphaCapital: modeAlphaCapital,
  	modeBetaCapital: modeBetaCapital,
  	modeGammaCapital: modeGammaCapital,
  	modeDeltaCapital: modeDeltaCapital
  };

  //import metadata from "../assets/fonts/neanes.metadata.json";

  class NeumeMappingService {
    constructor() {
      this.glyphNameToCodepointMap = new Map();

      this.initMap();
    }

    getMapping(neume) {
      return this.glyphNameToCodepointMap.get(neume);
    }

    initMap() {
      for (let glyph in glyphnames) {
        const data = glyphnames[glyph];
        const codepoint = Number('0x' + data.codepoint.substring(2));
        this.glyphNameToCodepointMap.set(glyph, String.fromCodePoint(codepoint));
      }

      // TODO support optional glyphs
      // for (let glyph in metadata.optionalGlyphs) {
      //   const data = metadata.optionalGlyphs[glyph];
      //   const codepoint = Number("0x" + data.codepoint.substring(2));
      //   glyphNameToCodepointMap.set(glyph, String.fromCodePoint(codepoint));
      // }
    }
  }

  var fontName = "Neanes";
  var fontVersion = "001.000";
  var metrics = {
  	winAscent: 1.4,
  	winDescent: 0.466
  };
  var glyphsWithAnchors = {
  	ison: {
  		yfenAbove: [
  			0.93,
  			0.641
  		],
  		yfenBelow: [
  			0.929,
  			-0.04
  		],
  		koronis: [
  			0.783,
  			0.801
  		],
  		endofonon: [
  			0.802,
  			-0.062
  		],
  		measureNumber: [
  			0.172,
  			0.753
  		],
  		isonIndicator: [
  			0.792,
  			0.913
  		],
  		gorgonBottom: [
  			0.713,
  			0.173
  		],
  		heteronConnecting: [
  			1.462,
  			0.139
  		],
  		heteron: [
  			1.027,
  			0.207
  		],
  		omalonConnecting: [
  			1.471,
  			0.133
  		],
  		omalon: [
  			1.031,
  			0.133
  		],
  		apli: [
  			0.803,
  			0.03
  		],
  		antikenoma: [
  			0.82,
  			0.165
  		],
  		noteTop: [
  			0.314,
  			0.676
  		],
  		fthoraBottom: [
  			0.789,
  			0.209
  		],
  		fthoraTop: [
  			0.788,
  			0.507
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		yfesis: [
  			1.316,
  			0.619
  		],
  		psifiston: [
  			0.84,
  			0.113
  		],
  		klasmaTop: [
  			0.873,
  			0.487
  		],
  		gorgonTop: [
  			0.786,
  			0.505
  		]
  	},
  	oligonKentimaBelow: {
  		yfenAbove: [
  			0.93,
  			0.641
  		],
  		yfenBelow: [
  			0.929,
  			-0.04
  		],
  		koronis: [
  			0.783,
  			0.801
  		],
  		endofonon: [
  			0.802,
  			-0.062
  		],
  		measureNumber: [
  			0.172,
  			0.753
  		],
  		isonIndicator: [
  			0.792,
  			0.913
  		],
  		heteronConnecting: [
  			1.462,
  			-0.051
  		],
  		heteron: [
  			1.027,
  			-0.033
  		],
  		omalon: [
  			1.033,
  			-0.067
  		],
  		omalonConnecting: [
  			1.473,
  			-0.053
  		],
  		antikenoma: [
  			0.82,
  			-0.055
  		],
  		noteTop: [
  			0.314,
  			0.676
  		],
  		fthoraTop: [
  			0.788,
  			0.507
  		],
  		fthoraBottom: [
  			0.42,
  			0.107
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		yfesis: [
  			1.316,
  			0.619
  		],
  		klasmaTop: [
  			0.793,
  			0.487
  		],
  		gorgonTop: [
  			0.78,
  			0.5
  		],
  		psifiston: [
  			0.84,
  			0.113
  		]
  	},
  	oligon: {
  		yfenAbove: [
  			0.93,
  			0.641
  		],
  		yfenBelow: [
  			0.929,
  			-0.04
  		],
  		koronis: [
  			0.686,
  			0.801
  		],
  		endofonon: [
  			0.802,
  			-0.062
  		],
  		measureNumber: [
  			0.172,
  			0.753
  		],
  		isonIndicator: [
  			0.792,
  			0.913
  		],
  		gorgonBottom: [
  			0.667,
  			0.175
  		],
  		heteronConnecting: [
  			1.763,
  			0.162
  		],
  		heteron: [
  			1.087,
  			0.227
  		],
  		omalon: [
  			1.031,
  			0.133
  		],
  		omalonConnecting: [
  			1.471,
  			0.133
  		],
  		apli: [
  			0.803,
  			0.03
  		],
  		antikenoma: [
  			0.82,
  			0.165
  		],
  		noteTop: [
  			0.314,
  			0.676
  		],
  		fthoraTop: [
  			0.788,
  			0.507
  		],
  		fthoraBottom: [
  			0.789,
  			0.209
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		yfesis: [
  			1.316,
  			0.619
  		],
  		klasmaTop: [
  			0.793,
  			0.487
  		],
  		psifiston: [
  			0.84,
  			0.113
  		],
  		gorgonTop: [
  			0.78,
  			0.5
  		]
  	},
  	oligonKentimaAbove: {
  		yfenAbove: [
  			0.93,
  			0.911
  		],
  		yfenBelow: [
  			0.929,
  			-0.04
  		],
  		koronis: [
  			0.783,
  			0.891
  		],
  		endofonon: [
  			0.802,
  			-0.062
  		],
  		measureNumber: [
  			0.172,
  			0.753
  		],
  		isonIndicator: [
  			0.792,
  			0.913
  		],
  		heteronConnecting: [
  			1.462,
  			0.139
  		],
  		heteron: [
  			1.087,
  			0.227
  		],
  		omalon: [
  			1.031,
  			0.133
  		],
  		omalonConnecting: [
  			1.471,
  			0.133
  		],
  		antikenoma: [
  			0.82,
  			0.165
  		],
  		apli: [
  			0.803,
  			0.03
  		],
  		noteTop: [
  			0.314,
  			0.676
  		],
  		fthoraTop: [
  			1.253,
  			0.44
  		],
  		fthoraBottom: [
  			0.789,
  			0.209
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		yfesis: [
  			1.316,
  			0.619
  		],
  		klasmaTop: [
  			0.383,
  			0.487
  		],
  		klasmaBottom: [
  			0.785,
  			0.16
  		],
  		gorgonTop: [
  			1.138,
  			0.5
  		],
  		psifiston: [
  			0.84,
  			0.113
  		]
  	},
  	oligonYpsiliRight: {
  		yfenAbove: [
  			0.93,
  			1.203
  		],
  		yfenBelow: [
  			0.929,
  			-0.04
  		],
  		koronis: [
  			0.783,
  			0.801
  		],
  		endofonon: [
  			0.802,
  			-0.062
  		],
  		measureNumber: [
  			0.172,
  			0.753
  		],
  		isonIndicator: [
  			0.792,
  			1.203
  		],
  		heteronConnecting: [
  			1.462,
  			0.139
  		],
  		heteron: [
  			1.087,
  			0.227
  		],
  		omalon: [
  			1.031,
  			0.133
  		],
  		omalonConnecting: [
  			1.471,
  			0.133
  		],
  		antikenoma: [
  			0.82,
  			0.165
  		],
  		apli: [
  			0.803,
  			0.03
  		],
  		noteTop: [
  			0.314,
  			0.676
  		],
  		fthoraTop: [
  			0.557,
  			0.489
  		],
  		fthoraBottom: [
  			0.789,
  			0.209
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		yfesis: [
  			1.316,
  			0.619
  		],
  		klasmaTop: [
  			0.433,
  			0.48
  		],
  		klasmaBottom: [
  			0.785,
  			0.16
  		],
  		gorgonTop: [
  			0.708,
  			0.5
  		],
  		psifiston: [
  			0.84,
  			0.113
  		]
  	},
  	oligonYpsiliLeft: {
  		yfenAbove: [
  			0.93,
  			1.285
  		],
  		yfenBelow: [
  			0.929,
  			-0.04
  		],
  		koronis: [
  			0.951,
  			0.855
  		],
  		endofonon: [
  			0.802,
  			-0.062
  		],
  		measureNumber: [
  			0.213,
  			0.827
  		],
  		isonIndicator: [
  			0.792,
  			1.283
  		],
  		heteronConnecting: [
  			1.462,
  			0.139
  		],
  		heteron: [
  			1.087,
  			0.227
  		],
  		omalon: [
  			1.031,
  			0.133
  		],
  		omalonConnecting: [
  			1.471,
  			0.133
  		],
  		antikenoma: [
  			0.82,
  			0.165
  		],
  		apli: [
  			0.803,
  			0.03
  		],
  		noteTop: [
  			0.188,
  			0.75
  		],
  		fthoraTop: [
  			0.889,
  			0.501
  		],
  		fthoraBottom: [
  			0.789,
  			0.209
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		yfesis: [
  			1.316,
  			0.619
  		],
  		klasmaTop: [
  			1.04,
  			0.5
  		],
  		klasmaBottom: [
  			0.785,
  			0.16
  		],
  		gorgonTop: [
  			1.102,
  			0.5
  		],
  		psifiston: [
  			0.84,
  			0.113
  		]
  	},
  	oligonKentimaYpsiliRight: {
  		yfenAbove: [
  			0.93,
  			1.202
  		],
  		yfenBelow: [
  			0.929,
  			-0.04
  		],
  		koronis: [
  			0.783,
  			0.911
  		],
  		endofonon: [
  			0.802,
  			-0.062
  		],
  		measureNumber: [
  			0.172,
  			0.753
  		],
  		isonIndicator: [
  			0.792,
  			1.203
  		],
  		heteronConnecting: [
  			1.462,
  			0.139
  		],
  		heteron: [
  			1.087,
  			0.227
  		],
  		omalon: [
  			1.031,
  			0.133
  		],
  		omalonConnecting: [
  			1.471,
  			0.133
  		],
  		antikenoma: [
  			0.82,
  			0.165
  		],
  		apli: [
  			0.803,
  			0.03
  		],
  		noteTop: [
  			0.314,
  			0.676
  		],
  		fthoraTop: [
  			0.358,
  			0.507
  		],
  		fthoraBottom: [
  			0.789,
  			0.209
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		yfesis: [
  			1.316,
  			0.619
  		],
  		klasmaTop: [
  			0.353,
  			0.487
  		],
  		klasmaBottom: [
  			0.785,
  			0.16
  		],
  		gorgonTop: [
  			0.708,
  			0.839
  		],
  		psifiston: [
  			0.84,
  			0.113
  		]
  	},
  	oligonKentimaYpsiliMiddle: {
  		yfenAbove: [
  			0.93,
  			1.403
  		],
  		yfenBelow: [
  			0.929,
  			-0.04
  		],
  		koronis: [
  			0.275,
  			0.835
  		],
  		klasmaTop: [
  			0.353,
  			0.487
  		],
  		measureNumber: [
  			0.172,
  			0.753
  		],
  		isonIndicator: [
  			0.792,
  			1.403
  		],
  		heteronConnecting: [
  			1.462,
  			0.139
  		],
  		heteron: [
  			1.087,
  			0.227
  		],
  		omalon: [
  			1.031,
  			0.133
  		],
  		omalonConnecting: [
  			1.471,
  			0.133
  		],
  		antikenoma: [
  			0.82,
  			0.165
  		],
  		apli: [
  			0.803,
  			0.03
  		],
  		noteTop: [
  			0.314,
  			0.676
  		],
  		fthoraTop: [
  			1.227,
  			0.447
  		],
  		fthoraBottom: [
  			0.789,
  			0.209
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		yfesis: [
  			1.316,
  			0.619
  		],
  		klasmaBottom: [
  			0.785,
  			0.16
  		],
  		gorgonTop: [
  			1.138,
  			0.5
  		],
  		psifiston: [
  			0.84,
  			0.113
  		]
  	},
  	oligonDoubleYpsili: {
  		yfenAbove: [
  			0.93,
  			1.271
  		],
  		yfenBelow: [
  			0.929,
  			-0.04
  		],
  		koronis: [
  			0.783,
  			1.261
  		],
  		endofonon: [
  			0.802,
  			-0.062
  		],
  		measureNumber: [
  			0.16,
  			0.8
  		],
  		isonIndicator: [
  			0.792,
  			1.273
  		],
  		heteronConnecting: [
  			1.462,
  			0.139
  		],
  		heteron: [
  			1.087,
  			0.227
  		],
  		omalon: [
  			1.031,
  			0.133
  		],
  		omalonConnecting: [
  			1.471,
  			0.133
  		],
  		antikenoma: [
  			0.82,
  			0.165
  		],
  		apli: [
  			0.803,
  			0.03
  		],
  		noteTop: [
  			0.194,
  			0.772
  		],
  		fthoraTop: [
  			0.678,
  			0.507
  		],
  		fthoraBottom: [
  			0.789,
  			0.209
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		yfesis: [
  			1.316,
  			0.619
  		],
  		klasmaBottom: [
  			0.785,
  			0.16
  		],
  		gorgonTop: [
  			0.757,
  			0.5
  		],
  		psifiston: [
  			0.84,
  			0.113
  		]
  	},
  	oligonKentimataDoubleYpsili: {
  		yfenAbove: [
  			0.93,
  			1.371
  		],
  		yfenBelow: [
  			0.929,
  			-0.04
  		],
  		koronis: [
  			0.783,
  			1.371
  		],
  		endofonon: [
  			0.802,
  			-0.062
  		],
  		measureNumber: [
  			0.172,
  			0.875
  		],
  		isonIndicator: [
  			0.792,
  			1.373
  		],
  		heteronConnecting: [
  			1.462,
  			0.139
  		],
  		heteron: [
  			1.087,
  			0.227
  		],
  		omalon: [
  			1.031,
  			0.133
  		],
  		omalonConnecting: [
  			1.471,
  			0.133
  		],
  		antikenoma: [
  			0.82,
  			0.165
  		],
  		apli: [
  			0.803,
  			0.03
  		],
  		noteTop: [
  			0.156,
  			0.68
  		],
  		fthoraTop: [
  			0.314,
  			1.071
  		],
  		fthoraBottom: [
  			0.789,
  			0.209
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		yfesis: [
  			1.368,
  			0.619
  		],
  		klasmaBottom: [
  			0.785,
  			0.16
  		],
  		psifiston: [
  			0.84,
  			0.113
  		]
  	},
  	isonApostrofos: {
  		yfenAbove: [
  			0.69,
  			0.891
  		],
  		yfenBelow: [
  			0.754,
  			-0.236
  		],
  		koronis: [
  			0.63,
  			0.881
  		],
  		apli: [
  			1.244,
  			-0.424
  		],
  		measureNumber: [
  			0.172,
  			0.773
  		],
  		isonIndicator: [
  			0.63,
  			0.895
  		],
  		noteTop: [
  			0.322,
  			0.661
  		],
  		fthoraTop: [
  			0.644,
  			0.507
  		],
  		fthoraBottom: [
  			0.42,
  			0.153
  		],
  		diesis: [
  			0.4,
  			0.133
  		]
  	},
  	apostrofosSyndesmos: {
  		yfenAbove: [
  			0.93,
  			0.891
  		],
  		yfenBelow: [
  			0.929,
  			-0.53
  		],
  		koronis: [
  			0.63,
  			0.881
  		],
  		apli: [
  			0.944,
  			-0.424
  		],
  		measureNumber: [
  			0.172,
  			0.803
  		],
  		isonIndicator: [
  			0.63,
  			0.895
  		],
  		noteTop: [
  			0.194,
  			0.699
  		],
  		fthoraTop: [
  			0.587,
  			0.642
  		],
  		fthoraBottom: [
  			0.373,
  			0.093
  		],
  		gorgonTop: [
  			0.938,
  			0.193
  		],
  		diesis: [
  			0.333,
  			0.127
  		]
  	},
  	yporroi: {
  		yfenAbove: [
  			0.217,
  			0.887
  		],
  		yfenBelow: [
  			0.159,
  			-0.15
  		],
  		koronis: [
  			0.21,
  			0.881
  		],
  		endofonon: [
  			0.192,
  			-0.146
  		],
  		heteronConnecting: [
  			0.304,
  			-0.062
  		],
  		measureNumber: [
  			0.072,
  			0.483
  		],
  		isonIndicator: [
  			0.212,
  			0.885
  		],
  		heteron: [
  			0.316,
  			-0.086
  		],
  		apli: [
  			0.161,
  			0.042
  		],
  		antikenoma: [
  			0.197,
  			0.1
  		],
  		noteTop: [
  			0.156,
  			0.675
  		],
  		fthoraTop: [
  			0.308,
  			0.609
  		],
  		fthoraBottom: [
  			0.148,
  			0.101
  		],
  		diesis: [
  			0.267,
  			0.06
  		],
  		gorgonTop: [
  			0.4,
  			0.527
  		]
  	},
  	runningElafron: {
  		yfenAbove: [
  			1.06,
  			0.891
  		],
  		yfenBelow: [
  			1.109,
  			-0.19
  		],
  		koronis: [
  			1.03,
  			0.746
  		],
  		endofonon: [
  			1.112,
  			-0.037
  		],
  		measureNumber: [
  			0.172,
  			0.653
  		],
  		isonIndicator: [
  			1.018,
  			0.887
  		],
  		heteronConnecting: [
  			1.714,
  			0.184
  		],
  		omalonConnecting: [
  			1.751,
  			0.089
  		],
  		apli: [
  			1.132,
  			0.013
  		],
  		antikenoma: [
  			1.191,
  			0.101
  		],
  		noteTop: [
  			0.742,
  			0.703
  		],
  		fthoraTop: [
  			1.098,
  			0.66
  		],
  		fthoraBottom: [
  			1.139,
  			0.07
  		],
  		gorgonTop: [
  			1.147,
  			0.58
  		],
  		diesis: [
  			0.937,
  			0.02
  		],
  		yfesis: [
  			1.49,
  			0.536
  		],
  		klasmaTop: [
  			1.06,
  			0.57
  		]
  	},
  	elafron: {
  		yfenAbove: [
  			0.65,
  			0.901
  		],
  		yfenBelow: [
  			0.659,
  			-0.19
  		],
  		koronis: [
  			0.56,
  			0.746
  		],
  		endofonon: [
  			0.632,
  			-0.037
  		],
  		measureNumber: [
  			0.172,
  			0.613
  		],
  		isonIndicator: [
  			0.528,
  			0.897
  		],
  		gorgonBottom: [
  			0.487,
  			0.08
  		],
  		heteronConnecting: [
  			1.214,
  			0.184
  		],
  		omalonConnecting: [
  			1.241,
  			0.089
  		],
  		apli: [
  			0.588,
  			-0.001
  		],
  		antikenoma: [
  			0.566,
  			0.07
  		],
  		noteTop: [
  			0.242,
  			0.703
  		],
  		fthoraTop: [
  			0.518,
  			0.66
  		],
  		fthoraBottom: [
  			0.609,
  			0.07
  		],
  		gorgonTop: [
  			0.627,
  			0.58
  		],
  		diesis: [
  			0.427,
  			0.02
  		],
  		yfesis: [
  			0.98,
  			0.536
  		],
  		klasmaTop: [
  			0.56,
  			0.57
  		]
  	},
  	elafronApostrofos: {
  		yfenAbove: [
  			0.63,
  			0.891
  		],
  		yfenBelow: [
  			0.659,
  			-0.19
  		],
  		koronis: [
  			0.56,
  			0.746
  		],
  		endofonon: [
  			0.632,
  			-0.037
  		],
  		measureNumber: [
  			0.172,
  			0.643
  		],
  		isonIndicator: [
  			0.528,
  			0.897
  		],
  		heteronConnecting: [
  			1.153,
  			0.04
  		],
  		omalonConnecting: [
  			1.241,
  			0.089
  		],
  		apli: [
  			0.6,
  			-0.093
  		],
  		antikenoma: [
  			0.581,
  			-0.029
  		],
  		noteTop: [
  			0.232,
  			0.703
  		],
  		fthoraTop: [
  			0.518,
  			0.66
  		],
  		fthoraBottom: [
  			0.609,
  			-0.03
  		],
  		gorgonTop: [
  			0.627,
  			0.58
  		],
  		diesis: [
  			0.427,
  			0.02
  		],
  		yfesis: [
  			0.98,
  			0.536
  		],
  		klasmaTop: [
  			0.56,
  			0.57
  		]
  	},
  	chamiliApostrofos: {
  		yfenAbove: [
  			0.63,
  			0.921
  		],
  		yfenBelow: [
  			0.659,
  			-0.4
  		],
  		koronis: [
  			0.72,
  			0.91
  		],
  		endofonon: [
  			0.632,
  			-0.257
  		],
  		measureNumber: [
  			0.172,
  			0.943
  		],
  		isonIndicator: [
  			0.528,
  			0.897
  		],
  		heteronConnecting: [
  			1.04,
  			-0.08
  		],
  		omalonConnecting: [
  			1.107,
  			-0.04
  		],
  		apli: [
  			0.576,
  			-0.211
  		],
  		antikenoma: [
  			0.579,
  			-0.129
  		],
  		noteTop: [
  			0.242,
  			0.933
  		],
  		fthoraTop: [
  			0.773,
  			0.765
  		],
  		fthoraBottom: [
  			0.609,
  			-0.13
  		],
  		gorgonTop: [
  			0.819,
  			0.68
  		],
  		diesis: [
  			0.328,
  			0.016
  		],
  		yfesis: [
  			0.953,
  			0.747
  		],
  		klasmaTop: [
  			0.747,
  			0.513
  		]
  	},
  	chamili: {
  		yfenAbove: [
  			0.63,
  			0.921
  		],
  		yfenBelow: [
  			0.659,
  			-0.1
  		],
  		koronis: [
  			0.77,
  			0.916
  		],
  		endofonon: [
  			0.632,
  			-0.037
  		],
  		measureNumber: [
  			0.172,
  			0.943
  		],
  		isonIndicator: [
  			0.528,
  			0.897
  		],
  		gorgonBottom: [
  			0.393,
  			0.24
  		],
  		heteronConnecting: [
  			1.114,
  			0.184
  		],
  		omalonConnecting: [
  			1.111,
  			0.089
  		],
  		apli: [
  			0.64,
  			0.076
  		],
  		antikenoma: [
  			0.642,
  			0.169
  		],
  		noteTop: [
  			0.242,
  			0.923
  		],
  		fthoraTop: [
  			0.773,
  			0.765
  		],
  		fthoraBottom: [
  			0.609,
  			0.24
  		],
  		gorgonTop: [
  			0.819,
  			0.68
  		],
  		diesis: [
  			0.393,
  			0.201
  		],
  		yfesis: [
  			0.953,
  			0.747
  		],
  		klasmaTop: [
  			0.747,
  			0.513
  		]
  	},
  	chamiliElafron: {
  		yfenAbove: [
  			0.63,
  			1.301
  		],
  		yfenBelow: [
  			0.659,
  			-0.2
  		],
  		koronis: [
  			0.77,
  			1.226
  		],
  		endofonon: [
  			0.632,
  			-0.037
  		],
  		measureNumber: [
  			0.172,
  			1.233
  		],
  		isonIndicator: [
  			0.528,
  			1.227
  		],
  		heteronConnecting: [
  			1.199,
  			0.156
  		],
  		omalonConnecting: [
  			1.24,
  			0.089
  		],
  		apli: [
  			0.575,
  			-0.01
  		],
  		antikenoma: [
  			0.569,
  			0.091
  		],
  		noteTop: [
  			0.242,
  			1.223
  		],
  		fthoraTop: [
  			0.773,
  			1.065
  		],
  		fthoraBottom: [
  			0.609,
  			0.09
  		],
  		gorgonTop: [
  			0.819,
  			1.01
  		],
  		diesis: [
  			0.458,
  			0.016
  		],
  		yfesis: [
  			1.005,
  			1.051
  		],
  		klasmaTop: [
  			0.807,
  			0.82
  		]
  	},
  	chamiliElafronApostrofos: {
  		yfenAbove: [
  			0.63,
  			1.251
  		],
  		yfenBelow: [
  			0.659,
  			-0.23
  		],
  		koronis: [
  			0.77,
  			1.216
  		],
  		endofonon: [
  			0.632,
  			-0.107
  		],
  		measureNumber: [
  			0.172,
  			1.233
  		],
  		isonIndicator: [
  			0.528,
  			1.227
  		],
  		heteronConnecting: [
  			1.153,
  			0.033
  		],
  		omalonConnecting: [
  			1.24,
  			0.089
  		],
  		apli: [
  			0.575,
  			-0.11
  		],
  		antikenoma: [
  			0.577,
  			-0.018
  		],
  		noteTop: [
  			0.242,
  			1.223
  		],
  		fthoraTop: [
  			0.773,
  			1.085
  		],
  		fthoraBottom: [
  			0.609,
  			-0.02
  		],
  		gorgonTop: [
  			0.819,
  			1.01
  		],
  		diesis: [
  			0.458,
  			0.016
  		],
  		yfesis: [
  			1.005,
  			1.051
  		],
  		klasmaTop: [
  			0.807,
  			0.82
  		]
  	},
  	doubleChamili: {
  		yfenAbove: [
  			0.63,
  			1.241
  		],
  		yfenBelow: [
  			0.659,
  			-0.12
  		],
  		koronis: [
  			0.77,
  			1.226
  		],
  		endofonon: [
  			0.632,
  			-0.037
  		],
  		measureNumber: [
  			0.172,
  			1.223
  		],
  		isonIndicator: [
  			0.528,
  			1.227
  		],
  		heteronConnecting: [
  			1.099,
  			0.186
  		],
  		omalonConnecting: [
  			1.108,
  			0.089
  		],
  		apli: [
  			0.595,
  			0.07
  		],
  		antikenoma: [
  			0.594,
  			0.175
  		],
  		noteTop: [
  			0.242,
  			1.223
  		],
  		fthoraTop: [
  			0.773,
  			1.105
  		],
  		fthoraBottom: [
  			0.609,
  			0.24
  		],
  		gorgonTop: [
  			0.819,
  			1.027
  		],
  		diesis: [
  			0.464,
  			0.161
  		],
  		yfesis: [
  			0.965,
  			1.097
  		],
  		klasmaTop: [
  			0.707,
  			0.933
  		]
  	},
  	petastiIson: {
  		yfenAbove: [
  			0.792,
  			1.049
  		],
  		yfenBelow: [
  			0.729,
  			-0.08
  		],
  		koronis: [
  			0.73,
  			1.046
  		],
  		endofonon: [
  			0.772,
  			-0.127
  		],
  		heteronConnecting: [
  			1.316,
  			0.052
  		],
  		yfesis: [
  			1.179,
  			0.915
  		],
  		psifiston: [
  			0.854,
  			0.14
  		],
  		measureNumber: [
  			0.172,
  			1.073
  		],
  		isonIndicator: [
  			0.714,
  			1.049
  		],
  		apli: [
  			0.765,
  			-0.01
  		],
  		antikenoma: [
  			0.713,
  			0.062
  		],
  		fthoraBottom: [
  			0.352,
  			0.162
  		],
  		noteTop: [
  			0.298,
  			1.04
  		],
  		fthoraTop: [
  			0.734,
  			0.846
  		],
  		diesis: [
  			0.464,
  			0.147
  		],
  		klasmaBottom: [
  			0.8,
  			0.083
  		]
  	},
  	petasti: {
  		yfenAbove: [
  			0.792,
  			1.049
  		],
  		yfenBelow: [
  			0.769,
  			-0.08
  		],
  		koronis: [
  			0.73,
  			1.046
  		],
  		endofonon: [
  			0.772,
  			-0.127
  		],
  		heteronConnecting: [
  			1.316,
  			0.052
  		],
  		yfesis: [
  			1.113,
  			0.691
  		],
  		measureNumber: [
  			0.172,
  			0.743
  		],
  		isonIndicator: [
  			0.664,
  			1.049
  		],
  		apli: [
  			0.765,
  			-0.08
  		],
  		antikenoma: [
  			0.713,
  			0.062
  		],
  		fthoraBottom: [
  			0.352,
  			0.162
  		],
  		noteTop: [
  			0.214,
  			0.636
  		],
  		fthoraTop: [
  			0.656,
  			0.6
  		],
  		diesis: [
  			0.464,
  			0.147
  		],
  		psifiston: [
  			0.795,
  			0.14
  		],
  		klasmaBottom: [
  			0.8,
  			0.083
  		]
  	},
  	petastiOligon: {
  		yfenAbove: [
  			0.792,
  			1.049
  		],
  		yfenBelow: [
  			0.789,
  			-0.08
  		],
  		koronis: [
  			0.73,
  			1.046
  		],
  		endofonon: [
  			0.772,
  			-0.127
  		],
  		heteronConnecting: [
  			1.316,
  			0.052
  		],
  		yfesis: [
  			1.113,
  			0.991
  		],
  		psifiston: [
  			0.86,
  			0.14
  		],
  		measureNumber: [
  			0.172,
  			0.953
  		],
  		isonIndicator: [
  			0.724,
  			1.049
  		],
  		apli: [
  			0.785,
  			-0.08
  		],
  		antikenoma: [
  			0.713,
  			0.062
  		],
  		fthoraBottom: [
  			0.352,
  			0.162
  		],
  		noteTop: [
  			0.214,
  			0.916
  		],
  		fthoraTop: [
  			0.734,
  			0.846
  		],
  		klasmaBottom: [
  			0.8,
  			0.083
  		],
  		diesis: [
  			0.464,
  			0.147
  		]
  	},
  	petastiKentima: {
  		yfenAbove: [
  			0.792,
  			1.049
  		],
  		yfenBelow: [
  			0.729,
  			-0.08
  		],
  		koronis: [
  			0.73,
  			1.046
  		],
  		endofonon: [
  			0.772,
  			-0.127
  		],
  		heteronConnecting: [
  			1.316,
  			0.052
  		],
  		yfesis: [
  			1.113,
  			0.691
  		],
  		psifiston: [
  			0.795,
  			0.14
  		],
  		measureNumber: [
  			0.172,
  			0.853
  		],
  		isonIndicator: [
  			0.664,
  			1.049
  		],
  		apli: [
  			0.765,
  			-0.08
  		],
  		antikenoma: [
  			0.713,
  			0.062
  		],
  		fthoraBottom: [
  			0.352,
  			0.162
  		],
  		noteTop: [
  			0.158,
  			0.67
  		],
  		fthoraTop: [
  			0.528,
  			0.922
  		],
  		diesis: [
  			0.464,
  			0.147
  		],
  		klasmaBottom: [
  			0.8,
  			0.083
  		]
  	},
  	petastiYpsiliRight: {
  		yfenAbove: [
  			0.792,
  			1.309
  		],
  		yfenBelow: [
  			0.729,
  			-0.08
  		],
  		koronis: [
  			0.43,
  			0.876
  		],
  		endofonon: [
  			0.772,
  			-0.127
  		],
  		heteronConnecting: [
  			1.316,
  			0.052
  		],
  		yfesis: [
  			1.113,
  			0.691
  		],
  		psifiston: [
  			0.795,
  			0.14
  		],
  		measureNumber: [
  			0.172,
  			0.853
  		],
  		isonIndicator: [
  			0.664,
  			1.299
  		],
  		apli: [
  			0.765,
  			-0.08
  		],
  		antikenoma: [
  			0.713,
  			0.062
  		],
  		fthoraBottom: [
  			0.352,
  			0.162
  		],
  		noteTop: [
  			0.214,
  			0.676
  		],
  		fthoraTop: [
  			0.594,
  			0.868
  		],
  		diesis: [
  			0.464,
  			0.147
  		],
  		klasmaBottom: [
  			0.8,
  			0.083
  		]
  	},
  	petastiYpsiliLeft: {
  		yfenAbove: [
  			0.792,
  			1.299
  		],
  		yfenBelow: [
  			0.729,
  			-0.08
  		],
  		koronis: [
  			0.925,
  			0.807
  		],
  		endofonon: [
  			0.772,
  			-0.127
  		],
  		heteronConnecting: [
  			1.316,
  			0.052
  		],
  		yfesis: [
  			1.113,
  			0.691
  		],
  		psifiston: [
  			0.795,
  			0.14
  		],
  		measureNumber: [
  			0.172,
  			0.853
  		],
  		isonIndicator: [
  			0.664,
  			1.299
  		],
  		apli: [
  			0.765,
  			-0.08
  		],
  		antikenoma: [
  			0.713,
  			0.062
  		],
  		fthoraBottom: [
  			0.352,
  			0.162
  		],
  		noteTop: [
  			0.194,
  			0.956
  		],
  		fthoraTop: [
  			0.958,
  			0.648
  		],
  		diesis: [
  			0.464,
  			0.147
  		],
  		klasmaBottom: [
  			0.8,
  			0.083
  		]
  	},
  	petastiKentimaYpsiliRight: {
  		yfenAbove: [
  			0.792,
  			1.299
  		],
  		yfenBelow: [
  			0.729,
  			-0.08
  		],
  		koronis: [
  			0.599,
  			0.969
  		],
  		endofonon: [
  			0.772,
  			-0.127
  		],
  		heteronConnecting: [
  			1.316,
  			0.052
  		],
  		yfesis: [
  			1.113,
  			0.691
  		],
  		psifiston: [
  			0.795,
  			0.14
  		],
  		measureNumber: [
  			0.172,
  			0.853
  		],
  		isonIndicator: [
  			0.664,
  			1.299
  		],
  		apli: [
  			0.765,
  			-0.08
  		],
  		antikenoma: [
  			0.713,
  			0.062
  		],
  		fthoraBottom: [
  			0.352,
  			0.162
  		],
  		noteTop: [
  			0.214,
  			0.676
  		],
  		fthoraTop: [
  			0.482,
  			0.89
  		],
  		diesis: [
  			0.464,
  			0.147
  		],
  		klasmaBottom: [
  			0.8,
  			0.083
  		]
  	},
  	petastiKentimaYpsiliMiddle: {
  		yfenAbove: [
  			0.792,
  			1.299
  		],
  		yfenBelow: [
  			0.729,
  			-0.08
  		],
  		koronis: [
  			0.313,
  			0.963
  		],
  		endofonon: [
  			0.772,
  			-0.127
  		],
  		heteronConnecting: [
  			1.316,
  			0.052
  		],
  		yfesis: [
  			1.113,
  			0.691
  		],
  		psifiston: [
  			0.795,
  			0.14
  		],
  		measureNumber: [
  			0.172,
  			0.853
  		],
  		isonIndicator: [
  			0.664,
  			1.299
  		],
  		apli: [
  			0.765,
  			-0.08
  		],
  		antikenoma: [
  			0.713,
  			0.062
  		],
  		fthoraBottom: [
  			0.352,
  			0.162
  		],
  		noteTop: [
  			0.214,
  			0.676
  		],
  		fthoraTop: [
  			1.02,
  			0.68
  		],
  		diesis: [
  			0.464,
  			0.147
  		],
  		klasmaBottom: [
  			0.8,
  			0.083
  		]
  	},
  	petastiApostrofos: {
  		yfenAbove: [
  			0.792,
  			1.049
  		],
  		yfenBelow: [
  			0.729,
  			-0.08
  		],
  		koronis: [
  			0.663,
  			0.961
  		],
  		endofonon: [
  			0.772,
  			-0.127
  		],
  		heteronConnecting: [
  			1.316,
  			0.052
  		],
  		psifiston: [
  			0.795,
  			0.14
  		],
  		measureNumber: [
  			0.172,
  			0.953
  		],
  		isonIndicator: [
  			0.664,
  			0.997
  		],
  		apli: [
  			0.765,
  			-0.08
  		],
  		antikenoma: [
  			0.713,
  			0.062
  		],
  		fthoraBottom: [
  			0.352,
  			0.162
  		],
  		fthoraTop: [
  			0.489,
  			0.911
  		],
  		noteTop: [
  			0.202,
  			0.942
  		],
  		diesis: [
  			0.464,
  			0.147
  		],
  		yfesis: [
  			0.802,
  			0.879
  		],
  		klasmaBottom: [
  			0.8,
  			0.083
  		]
  	},
  	petastiElafron: {
  		yfenAbove: [
  			0.712,
  			1.109
  		],
  		yfenBelow: [
  			0.729,
  			-0.08
  		],
  		koronis: [
  			0.663,
  			1.091
  		],
  		endofonon: [
  			0.772,
  			-0.127
  		],
  		heteronConnecting: [
  			1.316,
  			0.052
  		],
  		psifiston: [
  			0.795,
  			0.14
  		],
  		measureNumber: [
  			0.172,
  			1.103
  		],
  		isonIndicator: [
  			0.66,
  			1.049
  		],
  		apli: [
  			0.765,
  			-0.08
  		],
  		antikenoma: [
  			0.713,
  			0.062
  		],
  		fthoraBottom: [
  			0.352,
  			0.162
  		],
  		fthoraTop: [
  			0.489,
  			1.051
  		],
  		noteTop: [
  			0.202,
  			1.102
  		],
  		diesis: [
  			0.464,
  			0.147
  		],
  		yfesis: [
  			1.028,
  			1.025
  		],
  		klasmaBottom: [
  			0.8,
  			0.083
  		]
  	},
  	petastiElafronApostrofos: {
  		yfenAbove: [
  			0.702,
  			1.089
  		],
  		yfenBelow: [
  			0.729,
  			-0.08
  		],
  		koronis: [
  			0.663,
  			1.091
  		],
  		endofonon: [
  			0.772,
  			-0.127
  		],
  		heteronConnecting: [
  			1.316,
  			0.052
  		],
  		psifiston: [
  			0.795,
  			0.14
  		],
  		measureNumber: [
  			0.172,
  			1.103
  		],
  		isonIndicator: [
  			0.644,
  			1.037
  		],
  		apli: [
  			0.765,
  			-0.08
  		],
  		antikenoma: [
  			0.713,
  			0.062
  		],
  		fthoraBottom: [
  			0.352,
  			0.162
  		],
  		fthoraTop: [
  			0.489,
  			1.031
  		],
  		noteTop: [
  			0.202,
  			1.042
  		],
  		diesis: [
  			0.464,
  			0.147
  		],
  		yfesis: [
  			1.028,
  			1.025
  		],
  		klasmaBottom: [
  			0.8,
  			0.083
  		]
  	},
  	petastiChamili: {
  		yfenAbove: [
  			0.782,
  			1.229
  		],
  		yfenBelow: [
  			0.729,
  			-0.08
  		],
  		koronis: [
  			0.763,
  			1.131
  		],
  		endofonon: [
  			0.772,
  			-0.127
  		],
  		heteronConnecting: [
  			1.316,
  			0.052
  		],
  		psifiston: [
  			0.795,
  			0.14
  		],
  		measureNumber: [
  			0.172,
  			1.243
  		],
  		isonIndicator: [
  			0.65,
  			1.133
  		],
  		apli: [
  			0.765,
  			-0.08
  		],
  		antikenoma: [
  			0.713,
  			0.062
  		],
  		fthoraBottom: [
  			0.352,
  			0.162
  		],
  		fthoraTop: [
  			0.649,
  			0.971
  		],
  		noteTop: [
  			0.202,
  			1.242
  		],
  		diesis: [
  			0.464,
  			0.147
  		],
  		yfesis: [
  			1.028,
  			1.025
  		],
  		klasmaBottom: [
  			0.8,
  			0.083
  		]
  	},
  	kentimata: {
  		yfenAbove: [
  			0.413,
  			0.875
  		],
  		yfenBelow: [
  			0.459,
  			-0.08
  		],
  		endofonon: [
  			0.452,
  			-0.277
  		],
  		measureNumber: [
  			0.172,
  			0.753
  		],
  		gorgonBottom: [
  			0.354,
  			0.096
  		],
  		isonIndicator: [
  			0.33,
  			0.877
  		],
  		noteTop: [
  			0.125,
  			0.507
  		],
  		fthoraBottom: [
  			0.465,
  			0.097
  		],
  		fthoraTop: [
  			0.227,
  			0.759
  		],
  		diesis: [
  			0.333,
  			0.093
  		],
  		yfesis: [
  			0.624,
  			0.551
  		],
  		gorgonTop: [
  			0.453,
  			0.547
  		]
  	},
  	oligonKentimataAbove: {
  		yfenAbove: [
  			0.93,
  			0.901
  		],
  		yfenBelow: [
  			0.929,
  			-0.04
  		],
  		endofonon: [
  			0.772,
  			-0.047
  		],
  		heteronConnecting: [
  			1.594,
  			0.132
  		],
  		omalonConnecting: [
  			1.59,
  			0.13
  		],
  		measureNumber: [
  			0.172,
  			0.753
  		],
  		isonIndicator: [
  			0.71,
  			1.117
  		],
  		antikenoma: [
  			0.82,
  			0.165
  		],
  		noteTop: [
  			0.262,
  			0.561
  		],
  		fthoraBottom: [
  			0.746,
  			0.194
  		],
  		fthoraTop: [
  			0.767,
  			0.791
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		yfesis: [
  			1.316,
  			0.619
  		],
  		psifiston: [
  			0.84,
  			0.113
  		],
  		gorgonTop: [
  			0.842,
  			0.767
  		]
  	},
  	oligonIsonKentimata: {
  		yfenAbove: [
  			1.35,
  			0.961
  		],
  		yfenBelow: [
  			1.389,
  			-0.04
  		],
  		endofonon: [
  			1.102,
  			-0.077
  		],
  		heteronConnecting: [
  			2,
  			0.132
  		],
  		gorgonSecondary: [
  			0.685,
  			0.866
  		],
  		measureNumber: [
  			0.194,
  			0.961
  		],
  		isonIndicator: [
  			0.71,
  			1.157
  		],
  		antikenoma: [
  			1.053,
  			0.113
  		],
  		noteTop: [
  			0.342,
  			0.921
  		],
  		fthoraBottom: [
  			1.096,
  			0.194
  		],
  		fthoraTop: [
  			1.453,
  			0.901
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		yfesis: [
  			1.819,
  			0.82
  		],
  		psifiston: [
  			1.13,
  			0.113
  		],
  		gorgonTop: [
  			1.56,
  			0.76
  		]
  	},
  	oligonYpsiliLeftKentimata: {
  		yfenAbove: [
  			0.93,
  			1.201
  		],
  		yfenBelow: [
  			0.929,
  			-0.04
  		],
  		endofonon: [
  			0.802,
  			-0.037
  		],
  		heteronConnecting: [
  			1.594,
  			0.132
  		],
  		measureNumber: [
  			0.174,
  			0.983
  		],
  		isonIndicator: [
  			0.71,
  			1.207
  		],
  		antikenoma: [
  			0.82,
  			0.165
  		],
  		noteTop: [
  			0.172,
  			0.991
  		],
  		fthoraBottom: [
  			0.746,
  			0.194
  		],
  		fthoraTop: [
  			0.853,
  			0.889
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		yfesis: [
  			1.316,
  			0.619
  		],
  		psifiston: [
  			0.84,
  			0.113
  		],
  		gorgonTop: [
  			1,
  			0.787
  		]
  	},
  	oligonApostrofosKentimata: {
  		yfenAbove: [
  			0.93,
  			1.111
  		],
  		yfenBelow: [
  			0.929,
  			-0.04
  		],
  		endofonon: [
  			0.862,
  			-0.037
  		],
  		heteronConnecting: [
  			1.594,
  			0.132
  		],
  		gorgonSecondary: [
  			0.41,
  			0.874
  		],
  		measureNumber: [
  			0.172,
  			1.013
  		],
  		isonIndicator: [
  			0.707,
  			1.107
  		],
  		antikenoma: [
  			0.82,
  			0.165
  		],
  		noteTop: [
  			0.272,
  			1.011
  		],
  		fthoraBottom: [
  			0.876,
  			0.194
  		],
  		fthoraTop: [
  			1.087,
  			0.789
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		yfesis: [
  			1.437,
  			0.76
  		],
  		psifiston: [
  			0.895,
  			0.113
  		],
  		gorgonTop: [
  			1.213,
  			0.74
  		]
  	},
  	oligonElafronKentimata: {
  		gorgonSecondary: [
  			0.638,
  			0.939
  		],
  		yfenAbove: [
  			1.28,
  			1.061
  		],
  		yfenBelow: [
  			1.349,
  			-0.04
  		],
  		endofonon: [
  			1.142,
  			-0.037
  		],
  		heteronConnecting: [
  			2.05,
  			0.132
  		],
  		gorgonTop: [
  			1.647,
  			0.733
  		],
  		measureNumber: [
  			0.172,
  			1.043
  		],
  		isonIndicator: [
  			0.71,
  			1.057
  		],
  		antikenoma: [
  			1.093,
  			0.153
  		],
  		noteTop: [
  			0.242,
  			1.041
  		],
  		fthoraBottom: [
  			1.136,
  			0.194
  		],
  		fthoraTop: [
  			1.523,
  			0.825
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		yfesis: [
  			1.829,
  			0.761
  		],
  		psifiston: [
  			1.14,
  			0.113
  		]
  	},
  	oligonYporroiKentimata: {
  		yfenAbove: [
  			0.93,
  			1.141
  		],
  		yfenBelow: [
  			0.929,
  			-0.04
  		],
  		endofonon: [
  			0.852,
  			-0.037
  		],
  		heteronConnecting: [
  			1.594,
  			0.132
  		],
  		measureNumber: [
  			0.172,
  			0.943
  		],
  		isonIndicator: [
  			0.713,
  			1.147
  		],
  		antikenoma: [
  			0.82,
  			0.165
  		],
  		noteTop: [
  			0.192,
  			0.941
  		],
  		fthoraBottom: [
  			0.846,
  			0.194
  		],
  		fthoraTop: [
  			1.093,
  			0.767
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		yfesis: [
  			1.433,
  			0.719
  		],
  		psifiston: [
  			0.87,
  			0.113
  		],
  		gorgonSecondary: [
  			0.61,
  			0.793
  		],
  		gorgonTop: [
  			1.207,
  			0.733
  		]
  	},
  	oligonKentimataBelow: {
  		yfenAbove: [
  			0.93,
  			0.641
  		],
  		yfenBelow: [
  			0.929,
  			-0.2
  		],
  		koronis: [
  			0.686,
  			0.801
  		],
  		endofonon: [
  			0.772,
  			-0.277
  		],
  		heteron: [
  			1.087,
  			0.227
  		],
  		heteronConnecting: [
  			1.684,
  			-0.138
  		],
  		apli: [
  			0.803,
  			-0.227
  		],
  		measureNumber: [
  			0.172,
  			0.753
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		isonIndicator: [
  			0.71,
  			0.877
  		],
  		omalonConnecting: [
  			1.46,
  			-0.04
  		],
  		omalon: [
  			1.04,
  			-0.12
  		],
  		antikenoma: [
  			0.82,
  			-0.085
  		],
  		noteTop: [
  			0.262,
  			0.561
  		],
  		fthoraBottom: [
  			0.384,
  			0.16
  		],
  		fthoraTop: [
  			0.743,
  			0.515
  		],
  		yfesis: [
  			1.316,
  			0.619
  		],
  		klasmaTop: [
  			0.793,
  			0.487
  		],
  		gorgonTop: [
  			0.763,
  			0.505
  		],
  		psifiston: [
  			0.84,
  			0.113
  		]
  	},
  	oligonKentimaTripleYpsili: {
  		yfenAbove: [
  			0.93,
  			1.461
  		],
  		yfenBelow: [
  			0.929,
  			-0.04
  		],
  		koronis: [
  			0.783,
  			1.461
  		],
  		endofonon: [
  			0.802,
  			-0.062
  		],
  		measureNumber: [
  			0.172,
  			1.213
  		],
  		isonIndicator: [
  			0.792,
  			1.463
  		],
  		heteronConnecting: [
  			1.462,
  			0.139
  		],
  		heteron: [
  			1.087,
  			0.227
  		],
  		omalon: [
  			1.031,
  			0.133
  		],
  		omalonConnecting: [
  			1.471,
  			0.133
  		],
  		antikenoma: [
  			0.82,
  			0.165
  		],
  		apli: [
  			0.803,
  			0.03
  		],
  		noteTop: [
  			0.116,
  			0.82
  		],
  		fthoraTop: [
  			1.34,
  			1.293
  		],
  		fthoraBottom: [
  			0.789,
  			0.209
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		yfesis: [
  			1.378,
  			0.619
  		],
  		klasmaBottom: [
  			0.785,
  			0.16
  		],
  		psifiston: [
  			0.84,
  			0.113
  		]
  	},
  	oligonIson: {
  		yfenAbove: [
  			0.93,
  			0.911
  		],
  		yfenBelow: [
  			0.929,
  			-0.04
  		],
  		koronis: [
  			0.783,
  			0.911
  		],
  		endofonon: [
  			0.802,
  			-0.062
  		],
  		measureNumber: [
  			0.172,
  			0.943
  		],
  		isonIndicator: [
  			0.792,
  			0.913
  		],
  		heteronConnecting: [
  			1.462,
  			0.139
  		],
  		heteron: [
  			1.087,
  			0.227
  		],
  		omalon: [
  			1.031,
  			0.133
  		],
  		omalonConnecting: [
  			1.471,
  			0.133
  		],
  		antikenoma: [
  			0.82,
  			0.165
  		],
  		apli: [
  			0.803,
  			0.03
  		],
  		noteTop: [
  			0.338,
  			0.878
  		],
  		fthoraTop: [
  			0.788,
  			0.717
  		],
  		fthoraBottom: [
  			0.789,
  			0.209
  		],
  		klasmaBottom: [
  			0.785,
  			0.16
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		yfesis: [
  			1.316,
  			0.619
  		],
  		psifiston: [
  			0.84,
  			0.113
  		]
  	},
  	oligonElafron: {
  		yfenAbove: [
  			0.93,
  			1.091
  		],
  		yfenBelow: [
  			0.929,
  			-0.04
  		],
  		koronis: [
  			0.783,
  			1.041
  		],
  		endofonon: [
  			0.802,
  			-0.062
  		],
  		measureNumber: [
  			0.172,
  			0.943
  		],
  		isonIndicator: [
  			0.792,
  			1.093
  		],
  		heteronConnecting: [
  			1.462,
  			0.139
  		],
  		heteron: [
  			1.087,
  			0.227
  		],
  		omalon: [
  			1.031,
  			0.133
  		],
  		omalonConnecting: [
  			1.471,
  			0.133
  		],
  		antikenoma: [
  			0.82,
  			0.165
  		],
  		apli: [
  			0.803,
  			0.03
  		],
  		noteTop: [
  			0.214,
  			0.912
  		],
  		fthoraTop: [
  			0.602,
  			1.035
  		],
  		fthoraBottom: [
  			0.789,
  			0.209
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		yfesis: [
  			1.316,
  			0.619
  		],
  		klasmaBottom: [
  			0.785,
  			0.16
  		],
  		psifiston: [
  			0.84,
  			0.113
  		]
  	},
  	petastiRunningElafron: {
  		yfenAbove: [
  			0.932,
  			1.049
  		],
  		yfenBelow: [
  			1.029,
  			-0.17
  		],
  		koronis: [
  			0.833,
  			1.041
  		],
  		endofonon: [
  			1.052,
  			-0.127
  		],
  		heteronConnecting: [
  			1.586,
  			0.052
  		],
  		measureNumber: [
  			0.173,
  			0.92
  		],
  		isonIndicator: [
  			0.832,
  			0.999
  		],
  		apli: [
  			1.095,
  			-0.08
  		],
  		antikenoma: [
  			1.003,
  			0.062
  		],
  		fthoraBottom: [
  			0.542,
  			0.162
  		],
  		fthoraTop: [
  			0.759,
  			0.911
  		],
  		noteTop: [
  			0.502,
  			0.972
  		],
  		diesis: [
  			0.754,
  			0.147
  		],
  		yfesis: [
  			1.222,
  			0.911
  		],
  		psifiston: [
  			1.072,
  			0.129
  		],
  		klasmaBottom: [
  			1.26,
  			0.053
  		]
  	},
  	oligonApostrofos: {
  		yfenAbove: [
  			0.93,
  			0.911
  		],
  		yfenBelow: [
  			0.929,
  			-0.04
  		],
  		koronis: [
  			0.783,
  			0.911
  		],
  		endofonon: [
  			0.802,
  			-0.062
  		],
  		measureNumber: [
  			0.172,
  			0.943
  		],
  		isonIndicator: [
  			0.792,
  			0.913
  		],
  		heteronConnecting: [
  			1.462,
  			0.139
  		],
  		heteron: [
  			1.087,
  			0.227
  		],
  		omalon: [
  			1.031,
  			0.133
  		],
  		omalonConnecting: [
  			1.471,
  			0.133
  		],
  		antikenoma: [
  			0.82,
  			0.165
  		],
  		apli: [
  			0.803,
  			0.03
  		],
  		noteTop: [
  			0.196,
  			0.674
  		],
  		fthoraTop: [
  			0.746,
  			0.882
  		],
  		fthoraBottom: [
  			0.789,
  			0.209
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		yfesis: [
  			1.316,
  			0.619
  		],
  		klasmaBottom: [
  			0.785,
  			0.16
  		],
  		psifiston: [
  			0.84,
  			0.113
  		]
  	},
  	oligonYporroi: {
  		yfenAbove: [
  			0.93,
  			0.971
  		],
  		yfenBelow: [
  			0.929,
  			-0.04
  		],
  		koronis: [
  			0.783,
  			0.911
  		],
  		endofonon: [
  			0.802,
  			-0.062
  		],
  		measureNumber: [
  			0.172,
  			0.943
  		],
  		isonIndicator: [
  			0.792,
  			0.973
  		],
  		heteronConnecting: [
  			1.462,
  			0.139
  		],
  		heteron: [
  			1.087,
  			0.227
  		],
  		omalon: [
  			1.031,
  			0.133
  		],
  		omalonConnecting: [
  			1.471,
  			0.133
  		],
  		antikenoma: [
  			0.82,
  			0.165
  		],
  		apli: [
  			0.803,
  			0.03
  		],
  		noteTop: [
  			0.196,
  			0.674
  		],
  		fthoraTop: [
  			0.989,
  			0.924
  		],
  		fthoraBottom: [
  			0.789,
  			0.209
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		yfesis: [
  			1.316,
  			0.619
  		],
  		klasmaBottom: [
  			0.785,
  			0.16
  		],
  		psifiston: [
  			0.84,
  			0.113
  		]
  	},
  	petastiYporroi: {
  		yfenAbove: [
  			0.702,
  			1.049
  		],
  		yfenBelow: [
  			0.729,
  			-0.08
  		],
  		koronis: [
  			0.663,
  			0.961
  		],
  		endofonon: [
  			0.772,
  			-0.127
  		],
  		heteronConnecting: [
  			1.316,
  			0.052
  		],
  		psifiston: [
  			0.745,
  			0.14
  		],
  		measureNumber: [
  			0.172,
  			0.663
  		],
  		isonIndicator: [
  			0.664,
  			0.997
  		],
  		apli: [
  			0.765,
  			-0.08
  		],
  		antikenoma: [
  			0.713,
  			0.062
  		],
  		fthoraBottom: [
  			0.352,
  			0.162
  		],
  		fthoraTop: [
  			0.689,
  			0.781
  		],
  		noteTop: [
  			0.202,
  			0.942
  		],
  		diesis: [
  			0.464,
  			0.147
  		],
  		yfesis: [
  			0.936,
  			0.857
  		],
  		klasmaBottom: [
  			0.8,
  			0.083
  		]
  	},
  	oligonRunningElafronKentimata: {
  		gorgonSecondary: [
  			0.948,
  			0.889
  		],
  		yfenAbove: [
  			1.32,
  			1.061
  		],
  		yfenBelow: [
  			1.389,
  			-0.04
  		],
  		endofonon: [
  			1.212,
  			-0.037
  		],
  		heteronConnecting: [
  			2.15,
  			0.132
  		],
  		measureNumber: [
  			0.662,
  			0.913
  		],
  		isonIndicator: [
  			0.71,
  			1.077
  		],
  		antikenoma: [
  			1.253,
  			0.153
  		],
  		noteTop: [
  			0.732,
  			0.921
  		],
  		fthoraBottom: [
  			1.206,
  			0.194
  		],
  		fthoraTop: [
  			1.735,
  			0.743
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		yfesis: [
  			2.033,
  			0.829
  		],
  		psifiston: [
  			1.22,
  			0.113
  		],
  		gorgonTop: [
  			1.86,
  			0.74
  		]
  	},
  	oligonElafronApostrofosKentimata: {
  		gorgonSecondary: [
  			0.638,
  			0.939
  		],
  		yfenAbove: [
  			1.24,
  			1.061
  		],
  		yfenBelow: [
  			1.269,
  			-0.04
  		],
  		endofonon: [
  			1.122,
  			-0.037
  		],
  		heteronConnecting: [
  			2.05,
  			0.132
  		],
  		measureNumber: [
  			0.172,
  			1.013
  		],
  		isonIndicator: [
  			0.71,
  			1.01
  		],
  		antikenoma: [
  			0.82,
  			0.165
  		],
  		noteTop: [
  			0.312,
  			1.011
  		],
  		fthoraBottom: [
  			1.126,
  			0.194
  		],
  		fthoraTop: [
  			1.527,
  			0.745
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		yfesis: [
  			1.868,
  			0.766
  		],
  		psifiston: [
  			1.14,
  			0.113
  		],
  		gorgonTop: [
  			1.647,
  			0.733
  		]
  	},
  	oligonKentimaMiddleKentimata: {
  		yfenAbove: [
  			0.93,
  			1.101
  		],
  		yfenBelow: [
  			1.109,
  			-0.04
  		],
  		endofonon: [
  			0.802,
  			-0.037
  		],
  		heteronConnecting: [
  			1.594,
  			0.132
  		],
  		measureNumber: [
  			0.172,
  			0.753
  		],
  		isonIndicator: [
  			0.71,
  			1.117
  		],
  		antikenoma: [
  			0.82,
  			0.165
  		],
  		noteTop: [
  			0.262,
  			0.561
  		],
  		fthoraBottom: [
  			0.746,
  			0.194
  		],
  		fthoraTop: [
  			0.767,
  			0.791
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		yfesis: [
  			1.316,
  			0.619
  		],
  		psifiston: [
  			0.84,
  			0.113
  		],
  		gorgonTop: [
  			0.842,
  			0.767
  		]
  	},
  	oligonYpsiliRightKentimata: {
  		yfenAbove: [
  			0.93,
  			1.251
  		],
  		yfenBelow: [
  			0.929,
  			-0.04
  		],
  		endofonon: [
  			0.802,
  			-0.037
  		],
  		heteronConnecting: [
  			1.594,
  			0.132
  		],
  		measureNumber: [
  			0.164,
  			0.847
  		],
  		isonIndicator: [
  			0.71,
  			1.177
  		],
  		antikenoma: [
  			0.82,
  			0.165
  		],
  		noteTop: [
  			0.212,
  			0.85
  		],
  		fthoraBottom: [
  			0.746,
  			0.194
  		],
  		fthoraTop: [
  			0.573,
  			0.855
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		yfesis: [
  			1.515,
  			0.939
  		],
  		psifiston: [
  			0.84,
  			0.113
  		],
  		gorgonTop: [
  			0.713,
  			0.753
  		]
  	},
  	petastiChamiliApostrofos: {
  		yfenAbove: [
  			0.782,
  			1.229
  		],
  		yfenBelow: [
  			0.729,
  			-0.08
  		],
  		koronis: [
  			0.763,
  			1.131
  		],
  		endofonon: [
  			0.772,
  			-0.127
  		],
  		heteronConnecting: [
  			1.316,
  			0.052
  		],
  		psifiston: [
  			0.795,
  			0.14
  		],
  		measureNumber: [
  			0.172,
  			1.243
  		],
  		isonIndicator: [
  			0.65,
  			1.133
  		],
  		apli: [
  			0.765,
  			-0.08
  		],
  		antikenoma: [
  			0.713,
  			0.062
  		],
  		fthoraBottom: [
  			0.352,
  			0.162
  		],
  		fthoraTop: [
  			0.649,
  			0.971
  		],
  		noteTop: [
  			0.202,
  			1.242
  		],
  		diesis: [
  			0.464,
  			0.147
  		],
  		yfesis: [
  			1.028,
  			1.025
  		],
  		klasmaBottom: [
  			0.8,
  			0.083
  		]
  	},
  	apostrofos: {
  		yfenAbove: [
  			0.47,
  			0.891
  		],
  		yfenBelow: [
  			0.509,
  			-0.22
  		],
  		koronis: [
  			0.37,
  			0.891
  		],
  		endofonon: [
  			0.502,
  			-0.126
  		],
  		heteronConnecting: [
  			0.731,
  			0.125
  		],
  		measureNumber: [
  			0.172,
  			0.783
  		],
  		isonIndicator: [
  			0.366,
  			0.885
  		],
  		gorgonBottom: [
  			0.287,
  			0.093
  		],
  		apli: [
  			0.5,
  			0.018
  		],
  		antikenoma: [
  			0.461,
  			0.101
  		],
  		noteTop: [
  			0.17,
  			0.643
  		],
  		fthoraTop: [
  			0.386,
  			0.642
  		],
  		fthoraBottom: [
  			0.34,
  			0.099
  		],
  		gorgonTop: [
  			0.4,
  			0.58
  		],
  		diesis: [
  			0.233,
  			0.1
  		],
  		yfesis: [
  			0.648,
  			0.557
  		],
  		klasmaTop: [
  			0.408,
  			0.567
  		]
  	},
  	oligonKentimataTripleYpsili: {
  		yfenAbove: [
  			0.93,
  			1.461
  		],
  		yfenBelow: [
  			0.929,
  			-0.04
  		],
  		koronis: [
  			0.783,
  			1.461
  		],
  		endofonon: [
  			0.802,
  			-0.062
  		],
  		measureNumber: [
  			0.172,
  			1.213
  		],
  		isonIndicator: [
  			0.792,
  			1.463
  		],
  		heteronConnecting: [
  			1.462,
  			0.139
  		],
  		heteron: [
  			1.087,
  			0.227
  		],
  		omalon: [
  			1.031,
  			0.133
  		],
  		omalonConnecting: [
  			1.471,
  			0.133
  		],
  		antikenoma: [
  			0.82,
  			0.165
  		],
  		apli: [
  			0.803,
  			0.013
  		],
  		noteTop: [
  			0.116,
  			0.82
  		],
  		fthoraTop: [
  			1.28,
  			1.329
  		],
  		fthoraBottom: [
  			0.789,
  			0.209
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		yfesis: [
  			1.377,
  			0.619
  		],
  		klasmaBottom: [
  			0.785,
  			0.16
  		],
  		psifiston: [
  			0.84,
  			0.113
  		]
  	},
  	doubleChamiliElafronApostrofos: {
  		yfenAbove: [
  			0.63,
  			1.231
  		],
  		yfenBelow: [
  			0.659,
  			-0.52
  		],
  		koronis: [
  			0.77,
  			1.236
  		],
  		endofonon: [
  			0.632,
  			-0.347
  		],
  		measureNumber: [
  			0.172,
  			1.223
  		],
  		isonIndicator: [
  			0.528,
  			1.227
  		],
  		heteronConnecting: [
  			1.144,
  			-0.24
  		],
  		omalonConnecting: [
  			1.16,
  			-0.18
  		],
  		apli: [
  			0.575,
  			-0.32
  		],
  		antikenoma: [
  			0.572,
  			-0.232
  		],
  		noteTop: [
  			0.242,
  			1.223
  		],
  		fthoraTop: [
  			0.773,
  			1.105
  		],
  		fthoraBottom: [
  			0.609,
  			-0.23
  		],
  		gorgonTop: [
  			0.819,
  			1.047
  		],
  		diesis: [
  			0.462,
  			-0.191
  		],
  		yfesis: [
  			0.965,
  			1.097
  		],
  		klasmaTop: [
  			0.707,
  			0.933
  		]
  	},
  	doubleChamiliElafron: {
  		yfenAbove: [
  			0.63,
  			1.231
  		],
  		yfenBelow: [
  			0.659,
  			-0.41
  		],
  		koronis: [
  			0.77,
  			1.226
  		],
  		endofonon: [
  			0.632,
  			-0.267
  		],
  		measureNumber: [
  			0.172,
  			1.223
  		],
  		isonIndicator: [
  			0.528,
  			1.227
  		],
  		heteronConnecting: [
  			1.144,
  			-0.074
  		],
  		omalonConnecting: [
  			1.153,
  			-0.14
  		],
  		apli: [
  			0.575,
  			-0.2
  		],
  		antikenoma: [
  			0.644,
  			-0.123
  		],
  		noteTop: [
  			0.242,
  			1.223
  		],
  		fthoraTop: [
  			0.773,
  			1.105
  		],
  		fthoraBottom: [
  			0.609,
  			-0.12
  		],
  		gorgonTop: [
  			0.819,
  			1.047
  		],
  		diesis: [
  			0.462,
  			-0.191
  		],
  		yfesis: [
  			0.965,
  			1.097
  		],
  		klasmaTop: [
  			0.707,
  			0.933
  		]
  	},
  	doubleChamiliApostrofos: {
  		yfenAbove: [
  			0.63,
  			1.231
  		],
  		yfenBelow: [
  			0.659,
  			-0.41
  		],
  		koronis: [
  			0.77,
  			1.236
  		],
  		endofonon: [
  			0.632,
  			-0.297
  		],
  		measureNumber: [
  			0.172,
  			1.223
  		],
  		isonIndicator: [
  			0.528,
  			1.227
  		],
  		heteronConnecting: [
  			1.013,
  			-0.18
  		],
  		omalonConnecting: [
  			1.087,
  			-0.113
  		],
  		apli: [
  			0.575,
  			-0.23
  		],
  		antikenoma: [
  			0.581,
  			-0.12
  		],
  		noteTop: [
  			0.242,
  			1.223
  		],
  		fthoraTop: [
  			0.773,
  			1.105
  		],
  		fthoraBottom: [
  			0.609,
  			-0.12
  		],
  		gorgonTop: [
  			0.819,
  			1.047
  		],
  		diesis: [
  			0.458,
  			0.016
  		],
  		yfesis: [
  			0.965,
  			1.097
  		],
  		klasmaTop: [
  			0.707,
  			0.933
  		]
  	},
  	petastiKentimataDoubleYpsili: {
  		yfenAbove: [
  			0.792,
  			1.419
  		],
  		yfenBelow: [
  			0.729,
  			-0.08
  		],
  		koronis: [
  			0.235,
  			1.333
  		],
  		endofonon: [
  			0.772,
  			-0.127
  		],
  		heteronConnecting: [
  			1.316,
  			0.052
  		],
  		yfesis: [
  			1.22,
  			0.627
  		],
  		psifiston: [
  			0.795,
  			0.14
  		],
  		measureNumber: [
  			0.172,
  			0.853
  		],
  		isonIndicator: [
  			0.664,
  			1.389
  		],
  		apli: [
  			0.765,
  			-0.08
  		],
  		antikenoma: [
  			0.713,
  			0.062
  		],
  		fthoraBottom: [
  			0.352,
  			0.162
  		],
  		noteTop: [
  			0.227,
  			0.927
  		],
  		fthoraTop: [
  			0.192,
  			0.75
  		],
  		diesis: [
  			0.464,
  			0.147
  		],
  		klasmaBottom: [
  			0.8,
  			0.083
  		]
  	},
  	petastiKentimaDoubleYpsiliRight: {
  		yfenAbove: [
  			0.792,
  			1.449
  		],
  		yfenBelow: [
  			0.729,
  			-0.08
  		],
  		koronis: [
  			0.34,
  			1.33
  		],
  		endofonon: [
  			0.772,
  			-0.127
  		],
  		heteronConnecting: [
  			1.316,
  			0.052
  		],
  		yfesis: [
  			1.113,
  			0.691
  		],
  		psifiston: [
  			0.795,
  			0.14
  		],
  		measureNumber: [
  			0.172,
  			0.853
  		],
  		isonIndicator: [
  			0.664,
  			1.389
  		],
  		apli: [
  			0.765,
  			-0.08
  		],
  		antikenoma: [
  			0.713,
  			0.062
  		],
  		fthoraBottom: [
  			0.352,
  			0.162
  		],
  		noteTop: [
  			0.207,
  			0.913
  		],
  		fthoraTop: [
  			0.192,
  			0.75
  		],
  		diesis: [
  			0.464,
  			0.147
  		],
  		klasmaBottom: [
  			0.8,
  			0.083
  		]
  	},
  	petastiKentimaDoubleYpsiliLeft: {
  		yfenAbove: [
  			0.792,
  			1.449
  		],
  		yfenBelow: [
  			0.729,
  			-0.08
  		],
  		koronis: [
  			0.67,
  			1.46
  		],
  		endofonon: [
  			0.772,
  			-0.127
  		],
  		heteronConnecting: [
  			1.316,
  			0.052
  		],
  		yfesis: [
  			1.113,
  			0.691
  		],
  		psifiston: [
  			0.795,
  			0.14
  		],
  		measureNumber: [
  			0.187,
  			1.293
  		],
  		isonIndicator: [
  			0.664,
  			1.389
  		],
  		apli: [
  			0.765,
  			-0.08
  		],
  		antikenoma: [
  			0.713,
  			0.062
  		],
  		fthoraBottom: [
  			0.352,
  			0.162
  		],
  		noteTop: [
  			0.132,
  			1.142
  		],
  		fthoraTop: [
  			1.086,
  			0.648
  		],
  		diesis: [
  			0.464,
  			0.147
  		],
  		klasmaBottom: [
  			0.8,
  			0.083
  		]
  	},
  	petastiKentimataTripleYpsili: {
  		yfenAbove: [
  			0.792,
  			1.439
  		],
  		yfenBelow: [
  			0.729,
  			-0.08
  		],
  		koronis: [
  			0.663,
  			1.383
  		],
  		endofonon: [
  			0.772,
  			-0.127
  		],
  		heteronConnecting: [
  			1.316,
  			0.052
  		],
  		yfesis: [
  			1.227,
  			0.6
  		],
  		psifiston: [
  			0.795,
  			0.14
  		],
  		measureNumber: [
  			0.133,
  			1.273
  		],
  		isonIndicator: [
  			0.664,
  			1.389
  		],
  		apli: [
  			0.765,
  			-0.08
  		],
  		antikenoma: [
  			0.713,
  			0.062
  		],
  		fthoraBottom: [
  			0.352,
  			0.162
  		],
  		noteTop: [
  			0.132,
  			1.272
  		],
  		fthoraTop: [
  			1.224,
  			1.296
  		],
  		diesis: [
  			0.464,
  			0.147
  		],
  		klasmaBottom: [
  			0.8,
  			0.083
  		]
  	},
  	petastiTripleYpsili: {
  		yfenAbove: [
  			0.792,
  			1.379
  		],
  		yfenBelow: [
  			0.729,
  			-0.08
  		],
  		koronis: [
  			0.663,
  			1.313
  		],
  		endofonon: [
  			0.772,
  			-0.127
  		],
  		heteronConnecting: [
  			1.316,
  			0.052
  		],
  		yfesis: [
  			1.193,
  			0.66
  		],
  		psifiston: [
  			0.795,
  			0.14
  		],
  		measureNumber: [
  			0.193,
  			1.28
  		],
  		isonIndicator: [
  			0.664,
  			1.299
  		],
  		apli: [
  			0.765,
  			-0.08
  		],
  		antikenoma: [
  			0.713,
  			0.062
  		],
  		fthoraBottom: [
  			0.352,
  			0.162
  		],
  		noteTop: [
  			0.132,
  			1.142
  		],
  		fthoraTop: [
  			0.834,
  			1.282
  		],
  		diesis: [
  			0.464,
  			0.147
  		],
  		klasmaBottom: [
  			0.8,
  			0.083
  		]
  	},
  	oligonKentimaDoubleYpsiliRight: {
  		yfenAbove: [
  			0.93,
  			1.441
  		],
  		yfenBelow: [
  			0.929,
  			-0.04
  		],
  		koronis: [
  			0.783,
  			1.441
  		],
  		endofonon: [
  			0.802,
  			-0.062
  		],
  		measureNumber: [
  			0.172,
  			0.853
  		],
  		isonIndicator: [
  			0.792,
  			1.443
  		],
  		heteronConnecting: [
  			1.462,
  			0.139
  		],
  		heteron: [
  			1.087,
  			0.227
  		],
  		omalon: [
  			1.031,
  			0.133
  		],
  		omalonConnecting: [
  			1.471,
  			0.133
  		],
  		antikenoma: [
  			0.82,
  			0.165
  		],
  		apli: [
  			0.803,
  			0.03
  		],
  		noteTop: [
  			0.156,
  			0.68
  		],
  		fthoraTop: [
  			0.245,
  			1.056
  		],
  		fthoraBottom: [
  			0.789,
  			0.209
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		yfesis: [
  			1.368,
  			0.619
  		],
  		klasmaBottom: [
  			0.785,
  			0.16
  		],
  		psifiston: [
  			0.84,
  			0.113
  		]
  	},
  	oligonKentimaDoubleYpsiliLeft: {
  		yfenAbove: [
  			0.93,
  			1.441
  		],
  		yfenBelow: [
  			0.929,
  			-0.04
  		],
  		koronis: [
  			0.783,
  			1.441
  		],
  		endofonon: [
  			0.802,
  			-0.062
  		],
  		measureNumber: [
  			0.172,
  			1.213
  		],
  		isonIndicator: [
  			0.792,
  			1.443
  		],
  		heteronConnecting: [
  			1.462,
  			0.139
  		],
  		heteron: [
  			1.087,
  			0.227
  		],
  		omalon: [
  			1.031,
  			0.133
  		],
  		omalonConnecting: [
  			1.471,
  			0.133
  		],
  		antikenoma: [
  			0.82,
  			0.165
  		],
  		apli: [
  			0.803,
  			0.03
  		],
  		noteTop: [
  			0.116,
  			0.82
  		],
  		fthoraTop: [
  			1.262,
  			0.861
  		],
  		fthoraBottom: [
  			0.789,
  			0.209
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		yfesis: [
  			1.316,
  			0.619
  		],
  		klasmaBottom: [
  			0.785,
  			0.16
  		],
  		psifiston: [
  			0.84,
  			0.113
  		]
  	},
  	oligonTripleYpsili: {
  		yfenAbove: [
  			0.93,
  			1.281
  		],
  		yfenBelow: [
  			0.929,
  			-0.04
  		],
  		koronis: [
  			0.783,
  			1.281
  		],
  		endofonon: [
  			0.802,
  			-0.062
  		],
  		measureNumber: [
  			0.172,
  			1.213
  		],
  		isonIndicator: [
  			0.792,
  			1.283
  		],
  		heteronConnecting: [
  			1.462,
  			0.139
  		],
  		heteron: [
  			1.087,
  			0.227
  		],
  		omalon: [
  			1.031,
  			0.133
  		],
  		omalonConnecting: [
  			1.471,
  			0.133
  		],
  		antikenoma: [
  			0.82,
  			0.165
  		],
  		apli: [
  			0.803,
  			0.03
  		],
  		noteTop: [
  			0.116,
  			0.82
  		],
  		fthoraTop: [
  			0.863,
  			1.239
  		],
  		fthoraBottom: [
  			0.789,
  			0.209
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		yfesis: [
  			1.368,
  			0.619
  		],
  		klasmaBottom: [
  			0.785,
  			0.16
  		],
  		psifiston: [
  			0.84,
  			0.113
  		]
  	},
  	oligonElafronApostrofos: {
  		yfenAbove: [
  			0.93,
  			1.091
  		],
  		yfenBelow: [
  			0.929,
  			-0.04
  		],
  		koronis: [
  			0.783,
  			1.041
  		],
  		endofonon: [
  			0.802,
  			-0.062
  		],
  		measureNumber: [
  			0.172,
  			0.943
  		],
  		isonIndicator: [
  			0.792,
  			1.093
  		],
  		heteronConnecting: [
  			1.462,
  			0.139
  		],
  		heteron: [
  			1.087,
  			0.227
  		],
  		omalon: [
  			1.031,
  			0.133
  		],
  		omalonConnecting: [
  			1.471,
  			0.133
  		],
  		antikenoma: [
  			0.82,
  			0.165
  		],
  		apli: [
  			0.803,
  			0.03
  		],
  		noteTop: [
  			0.214,
  			0.912
  		],
  		fthoraTop: [
  			0.602,
  			1.035
  		],
  		fthoraBottom: [
  			0.789,
  			0.209
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		yfesis: [
  			1.316,
  			0.619
  		],
  		klasmaBottom: [
  			0.785,
  			0.16
  		],
  		psifiston: [
  			0.84,
  			0.113
  		]
  	},
  	petastiDoubleYpsili: {
  		yfenAbove: [
  			0.792,
  			1.299
  		],
  		yfenBelow: [
  			0.729,
  			-0.08
  		],
  		koronis: [
  			0.867,
  			1.283
  		],
  		endofonon: [
  			0.772,
  			-0.127
  		],
  		heteronConnecting: [
  			1.316,
  			0.052
  		],
  		yfesis: [
  			1.113,
  			0.691
  		],
  		psifiston: [
  			0.795,
  			0.14
  		],
  		measureNumber: [
  			0.172,
  			0.853
  		],
  		isonIndicator: [
  			0.664,
  			1.299
  		],
  		apli: [
  			0.765,
  			-0.08
  		],
  		antikenoma: [
  			0.713,
  			0.062
  		],
  		fthoraBottom: [
  			0.352,
  			0.162
  		],
  		noteTop: [
  			0.213,
  			0.96
  		],
  		fthoraTop: [
  			0.204,
  			0.842
  		],
  		diesis: [
  			0.464,
  			0.147
  		],
  		klasmaBottom: [
  			0.8,
  			0.083
  		]
  	},
  	oligonChamili: {
  		yfenAbove: [
  			0.93,
  			1.031
  		],
  		yfenBelow: [
  			0.929,
  			-0.04
  		],
  		koronis: [
  			0.783,
  			1.041
  		],
  		endofonon: [
  			0.802,
  			-0.062
  		],
  		measureNumber: [
  			0.172,
  			0.513
  		],
  		isonIndicator: [
  			0.792,
  			1.023
  		],
  		heteronConnecting: [
  			1.462,
  			0.139
  		],
  		heteron: [
  			1.087,
  			0.227
  		],
  		omalon: [
  			1.031,
  			0.133
  		],
  		omalonConnecting: [
  			1.471,
  			0.133
  		],
  		antikenoma: [
  			0.82,
  			0.165
  		],
  		apli: [
  			0.803,
  			0.03
  		],
  		noteTop: [
  			0.24,
  			1.02
  		],
  		fthoraTop: [
  			0.758,
  			0.927
  		],
  		fthoraBottom: [
  			0.789,
  			0.209
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		yfesis: [
  			1.316,
  			0.619
  		],
  		klasmaBottom: [
  			0.785,
  			0.16
  		],
  		psifiston: [
  			0.84,
  			0.113
  		]
  	},
  	petastiChamiliElafron: {
  		yfenAbove: [
  			0.782,
  			1.429
  		],
  		yfenBelow: [
  			0.729,
  			-0.08
  		],
  		koronis: [
  			0.763,
  			1.421
  		],
  		endofonon: [
  			0.772,
  			-0.127
  		],
  		heteronConnecting: [
  			1.316,
  			0.052
  		],
  		psifiston: [
  			0.795,
  			0.14
  		],
  		measureNumber: [
  			0.172,
  			1.483
  		],
  		isonIndicator: [
  			0.65,
  			1.423
  		],
  		apli: [
  			0.765,
  			-0.08
  		],
  		antikenoma: [
  			0.713,
  			0.062
  		],
  		fthoraBottom: [
  			0.352,
  			0.162
  		],
  		fthoraTop: [
  			0.649,
  			1.221
  		],
  		noteTop: [
  			0.202,
  			1.482
  		],
  		diesis: [
  			0.464,
  			0.147
  		],
  		yfesis: [
  			0.968,
  			1.337
  		],
  		klasmaBottom: [
  			0.8,
  			0.083
  		]
  	},
  	petastiChamiliElafronApostrofos: {
  		yfenAbove: [
  			0.782,
  			1.429
  		],
  		yfenBelow: [
  			0.729,
  			-0.08
  		],
  		koronis: [
  			0.763,
  			1.421
  		],
  		endofonon: [
  			0.772,
  			-0.127
  		],
  		heteronConnecting: [
  			1.316,
  			0.052
  		],
  		psifiston: [
  			0.795,
  			0.14
  		],
  		measureNumber: [
  			0.172,
  			1.483
  		],
  		isonIndicator: [
  			0.65,
  			1.423
  		],
  		apli: [
  			0.765,
  			-0.08
  		],
  		antikenoma: [
  			0.713,
  			0.062
  		],
  		fthoraBottom: [
  			0.352,
  			0.162
  		],
  		fthoraTop: [
  			0.649,
  			1.261
  		],
  		noteTop: [
  			0.202,
  			1.482
  		],
  		diesis: [
  			0.464,
  			0.147
  		],
  		yfesis: [
  			0.968,
  			1.337
  		],
  		klasmaBottom: [
  			0.8,
  			0.083
  		]
  	},
  	petastiDoubleChamili: {
  		yfenAbove: [
  			0.782,
  			1.289
  		],
  		yfenBelow: [
  			0.729,
  			-0.3
  		],
  		koronis: [
  			0.763,
  			1.291
  		],
  		endofonon: [
  			0.772,
  			-0.277
  		],
  		heteronConnecting: [
  			1.316,
  			-0.049
  		],
  		psifiston: [
  			0.784,
  			0.001
  		],
  		measureNumber: [
  			0.172,
  			1.333
  		],
  		isonIndicator: [
  			0.65,
  			1.293
  		],
  		apli: [
  			0.765,
  			-0.25
  		],
  		antikenoma: [
  			0.713,
  			-0.068
  		],
  		fthoraBottom: [
  			0.352,
  			0.042
  		],
  		fthoraTop: [
  			0.649,
  			1.101
  		],
  		noteTop: [
  			0.202,
  			1.332
  		],
  		diesis: [
  			0.464,
  			0.004
  		],
  		yfesis: [
  			0.968,
  			1.337
  		],
  		klasmaBottom: [
  			0.8,
  			-0.063
  		]
  	},
  	petastiDoubleChamiliApostrofos: {
  		yfenAbove: [
  			0.782,
  			1.289
  		],
  		yfenBelow: [
  			0.729,
  			-0.3
  		],
  		koronis: [
  			0.763,
  			1.291
  		],
  		endofonon: [
  			0.772,
  			-0.287
  		],
  		heteronConnecting: [
  			1.316,
  			-0.049
  		],
  		psifiston: [
  			0.781,
  			0.002
  		],
  		measureNumber: [
  			0.172,
  			1.333
  		],
  		isonIndicator: [
  			0.65,
  			1.293
  		],
  		apli: [
  			0.765,
  			-0.25
  		],
  		antikenoma: [
  			0.713,
  			-0.068
  		],
  		fthoraBottom: [
  			0.352,
  			0.042
  		],
  		fthoraTop: [
  			0.649,
  			1.101
  		],
  		noteTop: [
  			0.202,
  			1.332
  		],
  		diesis: [
  			0.464,
  			0.004
  		],
  		yfesis: [
  			0.968,
  			1.337
  		],
  		klasmaBottom: [
  			0.8,
  			-0.065
  		]
  	},
  	gorgonAbove: {
  		gorgonTop: [
  			0,
  			0.8
  		]
  	},
  	gorgonBelow: {
  		gorgonBottom: [
  			-0.121,
  			0.26
  		]
  	},
  	gorgonDottedLeft: {
  		gorgonTop: [
  			0,
  			0.8
  		]
  	},
  	digorgon: {
  		gorgonTop: [
  			0,
  			0.8
  		]
  	},
  	oligonKentimaMiddle: {
  		yfenAbove: [
  			0.93,
  			0.641
  		],
  		yfenBelow: [
  			0.929,
  			-0.04
  		],
  		koronis: [
  			0.783,
  			0.801
  		],
  		endofonon: [
  			0.802,
  			-0.062
  		],
  		measureNumber: [
  			0.172,
  			0.753
  		],
  		isonIndicator: [
  			0.792,
  			0.913
  		],
  		heteronConnecting: [
  			1.462,
  			0.139
  		],
  		heteron: [
  			1.087,
  			0.227
  		],
  		omalon: [
  			1.031,
  			0.133
  		],
  		omalonConnecting: [
  			1.471,
  			0.133
  		],
  		antikenoma: [
  			0.82,
  			0.165
  		],
  		apli: [
  			0.803,
  			0.03
  		],
  		noteTop: [
  			0.314,
  			0.676
  		],
  		fthoraTop: [
  			0.788,
  			0.507
  		],
  		fthoraBottom: [
  			0.789,
  			0.209
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		yfesis: [
  			1.316,
  			0.619
  		],
  		klasmaTop: [
  			0.793,
  			0.487
  		],
  		gorgonTop: [
  			0.708,
  			0.459
  		],
  		psifiston: [
  			0.84,
  			0.113
  		]
  	},
  	gorgonDottedRight: {
  		gorgonTop: [
  			0,
  			0.8
  		]
  	},
  	digorgonDottedLeftBelow: {
  		gorgonTop: [
  			0,
  			0.8
  		]
  	},
  	tripleChamili: {
  		yfenAbove: [
  			0.63,
  			1.321
  		],
  		yfenBelow: [
  			0.659,
  			-0.21
  		],
  		koronis: [
  			0.67,
  			1.33
  		],
  		endofonon: [
  			0.632,
  			-0.037
  		],
  		measureNumber: [
  			0.172,
  			1.363
  		],
  		isonIndicator: [
  			0.528,
  			1.317
  		],
  		heteronConnecting: [
  			0.974,
  			0.146
  		],
  		omalonConnecting: [
  			1.001,
  			0.089
  		],
  		apli: [
  			0.575,
  			0.01
  		],
  		antikenoma: [
  			0.571,
  			0.131
  		],
  		noteTop: [
  			0.242,
  			1.363
  		],
  		fthoraTop: [
  			0.773,
  			1.235
  		],
  		fthoraBottom: [
  			0.609,
  			0.12
  		],
  		gorgonTop: [
  			0.779,
  			1.197
  		],
  		diesis: [
  			0.464,
  			0.167
  		],
  		yfesis: [
  			0.893,
  			1.227
  		],
  		klasmaTop: [
  			0.687,
  			1.107
  		]
  	},
  	digorgonDottedLeftAbove: {
  		gorgonTop: [
  			0,
  			0.8
  		]
  	},
  	martyriaNoteZoLow: {
  		agogi: [
  			0.517,
  			0.444
  		],
  		martyriaTop: [
  			0.547,
  			-0.04
  		],
  		fthoraTop: [
  			0.517,
  			0.446
  		]
  	},
  	martyriaNoteNiLow: {
  		agogi: [
  			0.517,
  			0.374
  		],
  		martyriaTop: [
  			0.515,
  			-0.078
  		],
  		fthoraTop: [
  			0.517,
  			0.376
  		]
  	},
  	martyriaNotePaLow: {
  		agogi: [
  			0.517,
  			0.474
  		],
  		martyriaTop: [
  			0.517,
  			-0.044
  		],
  		fthoraTop: [
  			0.512,
  			0.474
  		]
  	},
  	martyriaNoteVouLow: {
  		agogi: [
  			0.517,
  			0.454
  		],
  		martyriaTop: [
  			0.467,
  			-0.04
  		],
  		fthoraTop: [
  			0.517,
  			0.456
  		]
  	},
  	martyriaNoteGaLow: {
  		agogi: [
  			0.517,
  			0.444
  		],
  		fthoraTop: [
  			0.517,
  			0.446
  		],
  		martyriaTop: [
  			0.467,
  			-0.04
  		]
  	},
  	martyriaNoteDiLow: {
  		agogi: [
  			0.517,
  			0.444
  		],
  		fthoraTop: [
  			0.517,
  			0.446
  		],
  		martyriaTop: [
  			0.533,
  			-0.013
  		]
  	},
  	martyriaNoteKeLow: {
  		agogi: [
  			0.517,
  			0.444
  		],
  		fthoraTop: [
  			0.517,
  			0.446
  		],
  		martyriaTop: [
  			0.56,
  			-0.08
  		]
  	},
  	martyriaNoteZo: {
  		agogi: [
  			0.517,
  			0.541
  		],
  		martyriaBottom: [
  			0.527,
  			-0.033
  		],
  		fthoraTop: [
  			0.517,
  			0.54
  		]
  	},
  	martyriaNotePa: {
  		agogi: [
  			0.517,
  			0.448
  		],
  		martyriaBottom: [
  			0.52,
  			-0.047
  		],
  		fthoraTop: [
  			0.517,
  			0.45
  		]
  	},
  	martyriaNoteNi: {
  		agogi: [
  			0.517,
  			0.417
  		],
  		martyriaBottom: [
  			0.487,
  			-0.03
  		],
  		fthoraTop: [
  			0.517,
  			0.416
  		]
  	},
  	martyriaNoteVou: {
  		agogi: [
  			0.517,
  			0.523
  		],
  		martyriaBottom: [
  			0.453,
  			-0.04
  		],
  		fthoraTop: [
  			0.517,
  			0.525
  		]
  	},
  	martyriaNoteNiHigh: {
  		agogi: [
  			0.517,
  			0.417
  		],
  		martyriaBottom: [
  			0.487,
  			-0.03
  		],
  		fthoraTop: [
  			0.517,
  			0.376
  		]
  	},
  	martyriaNoteGa: {
  		agogi: [
  			0.517,
  			0.529
  		],
  		martyriaBottom: [
  			0.493,
  			-0.027
  		],
  		fthoraTop: [
  			0.517,
  			0.53
  		]
  	},
  	martyriaNoteDi: {
  		agogi: [
  			0.539,
  			0.548
  		],
  		martyriaBottom: [
  			0.533,
  			-0.027
  		],
  		fthoraTop: [
  			0.54,
  			0.55
  		]
  	},
  	martyriaNoteKe: {
  		agogi: [
  			0.517,
  			0.449
  		],
  		fthoraTop: [
  			0.517,
  			0.45
  		],
  		martyriaBottom: [
  			0.507,
  			-0.027
  		]
  	},
  	martyriaNoteZoHigh: {
  		agogi: [
  			0.517,
  			0.541
  		],
  		martyriaBottom: [
  			0.527,
  			-0.033
  		],
  		fthoraTop: [
  			0.517,
  			0.446
  		]
  	},
  	martyriaNotePaHigh: {
  		agogi: [
  			0.517,
  			0.448
  		],
  		martyriaBottom: [
  			0.52,
  			-0.047
  		],
  		fthoraTop: [
  			0.517,
  			0.376
  		]
  	},
  	martyriaNoteVouHigh: {
  		agogi: [
  			0.517,
  			0.523
  		],
  		martyriaBottom: [
  			0.453,
  			-0.04
  		],
  		fthoraTop: [
  			0.517,
  			0.456
  		]
  	},
  	martyriaNoteGaHigh: {
  		agogi: [
  			0.517,
  			0.529
  		],
  		martyriaBottom: [
  			0.493,
  			-0.027
  		],
  		fthoraTop: [
  			0.517,
  			0.436
  		]
  	},
  	martyriaNoteDiHigh: {
  		agogi: [
  			0.539,
  			0.548
  		],
  		martyriaBottom: [
  			0.533,
  			-0.027
  		],
  		fthoraTop: [
  			0.54,
  			0.454
  		]
  	},
  	martyriaNoteKeHigh: {
  		agogi: [
  			0.517,
  			0.449
  		],
  		fthoraTop: [
  			0.517,
  			0.376
  		],
  		martyriaBottom: [
  			0.507,
  			-0.027
  		]
  	},
  	"oligonKentimataBelow.alt01": {
  		koronis: [
  			0.686,
  			0.801
  		],
  		measureNumber: [
  			0.172,
  			0.753
  		],
  		fthoraBottom: [
  			0.384,
  			0.16
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		gorgonTop: [
  			0.763,
  			0.505
  		],
  		klasmaTop: [
  			0.793,
  			0.487
  		],
  		yfesis: [
  			1.316,
  			0.619
  		],
  		fthoraTop: [
  			0.743,
  			0.515
  		],
  		noteTop: [
  			0.262,
  			0.561
  		],
  		isonIndicator: [
  			0.71,
  			0.877
  		],
  		psifiston: [
  			0.84,
  			0.113
  		]
  	},
  	"oligonKentimataAbove.alt01": {
  		psifiston: [
  			0.84,
  			0.113
  		]
  	},
  	"antikenoma.alt01": {
  		antikenoma: [
  			0,
  			0.088
  		]
  	},
  	petastiKentimaTripleYpsili: {
  		yfenAbove: [
  			0.792,
  			1.439
  		],
  		yfenBelow: [
  			0.729,
  			-0.08
  		],
  		koronis: [
  			0.663,
  			1.383
  		],
  		endofonon: [
  			0.772,
  			-0.127
  		],
  		heteronConnecting: [
  			1.316,
  			0.052
  		],
  		yfesis: [
  			1.213,
  			0.613
  		],
  		psifiston: [
  			0.795,
  			0.14
  		],
  		measureNumber: [
  			0.173,
  			1.24
  		],
  		isonIndicator: [
  			0.664,
  			1.389
  		],
  		fthoraTop: [
  			1.224,
  			1.296
  		],
  		noteTop: [
  			0.132,
  			1.272
  		],
  		diesis: [
  			0.464,
  			0.147
  		],
  		fthoraBottom: [
  			0.352,
  			0.162
  		],
  		klasmaBottom: [
  			0.8,
  			0.083
  		],
  		antikenoma: [
  			0.713,
  			0.062
  		],
  		apli: [
  			0.765,
  			-0.08
  		]
  	},
  	psifiston: {
  		psifiston: [
  			-0.001,
  			0.458
  		]
  	},
  	antikenoma: {
  		antikenoma: [
  			0.008,
  			0.113
  		]
  	},
  	omalon: {
  		omalon: [
  			0,
  			0.067
  		]
  	},
  	omalonConnecting: {
  		omalonConnecting: [
  			0,
  			0.067
  		]
  	},
  	heteron: {
  		heteron: [
  			0.001,
  			-0.02
  		]
  	},
  	heteronConnecting: {
  		heteronConnecting: [
  			0,
  			-0.019
  		]
  	},
  	klasmaAbove: {
  		klasmaTop: [
  			0.084,
  			0.604
  		]
  	},
  	klasmaBelow: {
  		klasmaBottom: [
  			0,
  			0.201
  		]
  	},
  	apli: {
  		apli: [
  			0,
  			0
  		]
  	},
  	dipli: {
  		apli: [
  			0,
  			0
  		]
  	},
  	tripli: {
  		apli: [
  			0,
  			0
  		]
  	},
  	tetrapli: {
  		apli: [
  			0,
  			0
  		]
  	},
  	leimma1: {
  		gorgonTop: [
  			0.585,
  			0.563
  		]
  	},
  	digorgonDottedRight: {
  		gorgonTop: [
  			0,
  			0.8
  		]
  	},
  	trigorgon: {
  		gorgonTop: [
  			0,
  			0.8
  		]
  	},
  	trigorgonDottedLeftBelow: {
  		gorgonTop: [
  			0,
  			0.8
  		]
  	},
  	trigorgonDottedLeftAbove: {
  		gorgonTop: [
  			0,
  			0.8
  		]
  	},
  	trigorgonDottedRight: {
  		gorgonTop: [
  			0,
  			0.8
  		]
  	},
  	argon: {
  		gorgonTop: [
  			0,
  			0.8
  		]
  	},
  	diargon: {
  		gorgonTop: [
  			-0.001,
  			0.8
  		]
  	},
  	triargon: {
  		gorgonTop: [
  			0,
  			0.8
  		]
  	},
  	martyriaZoBelow: {
  		martyriaBottom: [
  			0.002,
  			0.108
  		]
  	},
  	martyriaDeltaBelow: {
  		martyriaBottom: [
  			0.002,
  			0.298
  		]
  	},
  	martyriaAlphaBelow: {
  		martyriaBottom: [
  			0.002,
  			0.328
  		]
  	},
  	martyriaLegetosBelow: {
  		martyriaBottom: [
  			0.002,
  			0.298
  		]
  	},
  	martyriaNanaBelow: {
  		martyriaBottom: [
  			0.002,
  			0.248
  		]
  	},
  	martyriaDeltaDottedBelow: {
  		martyriaBottom: [
  			0.002,
  			0.398
  		]
  	},
  	martyriaAlphaDottedBelow: {
  		martyriaBottom: [
  			0.001,
  			0.427
  		]
  	},
  	martyriaHardChromaticPaBelow: {
  		martyriaBottom: [
  			0.002,
  			0.138
  		]
  	},
  	martyriaHardChromaticDiBelow: {
  		martyriaBottom: [
  			0.002,
  			0.298
  		]
  	},
  	martyriaSoftChromaticDiBelow: {
  		martyriaBottom: [
  			0.002,
  			0.138
  		]
  	},
  	martyriaSoftChromaticKeBelow: {
  		martyriaBottom: [
  			0.002,
  			0.263
  		]
  	},
  	martyriaZygosBelow: {
  		martyriaBottom: [
  			0,
  			0.244
  		]
  	},
  	martyriaZoAbove: {
  		martyriaTop: [
  			0.002,
  			-0.192
  		]
  	},
  	martyriaDeltaAbove: {
  		martyriaTop: [
  			0.002,
  			-0.192
  		]
  	},
  	martyriaAlphaAbove: {
  		martyriaTop: [
  			0.002,
  			-0.192
  		]
  	},
  	martyriaLegetosAbove: {
  		martyriaTop: [
  			0.002,
  			-0.143
  		]
  	},
  	martyriaNanaAbove: {
  		martyriaTop: [
  			0.002,
  			-0.204
  		]
  	},
  	martyriaDeltaDottedAbove: {
  		martyriaTop: [
  			0.002,
  			-0.199
  		]
  	},
  	martyriaAlphaDottedAbove: {
  		martyriaTop: [
  			0.002,
  			-0.192
  		],
  		martyriaBottom: [
  			0.001,
  			0.427
  		]
  	},
  	martyriaHardChromaticPaAbove: {
  		martyriaTop: [
  			0.002,
  			-0.192
  		]
  	},
  	martyriaHardChromaticDiAbove: {
  		martyriaTop: [
  			0.002,
  			-0.192
  		]
  	},
  	martyriaSoftChromaticDiAbove: {
  		martyriaTop: [
  			0.002,
  			-0.192
  		]
  	},
  	martyriaSoftChromaticKeAbove: {
  		martyriaTop: [
  			0.002,
  			-0.192
  		]
  	},
  	martyriaZygosAbove: {
  		martyriaTop: [
  			0,
  			-0.199
  		]
  	},
  	fthoraDiatonicNiLowAbove: {
  		agogiAboveFthora: [
  			-0.001,
  			1.126
  		],
  		fthoraTop: [
  			0,
  			0.734
  		]
  	},
  	fthoraDiatonicPaAbove: {
  		agogiAboveFthora: [
  			-0.001,
  			1.076
  		],
  		fthoraTop: [
  			0,
  			0.644
  		]
  	},
  	fthoraDiatonicVouAbove: {
  		agogiAboveFthora: [
  			-0.001,
  			1.296
  		],
  		fthoraTop: [
  			0,
  			0.634
  		]
  	},
  	fthoraDiatonicGaAbove: {
  		agogiAboveFthora: [
  			-0.001,
  			1.216
  		],
  		fthoraTop: [
  			0,
  			0.684
  		]
  	},
  	fthoraDiatonicDiAbove: {
  		agogiAboveFthora: [
  			-0.001,
  			1.146
  		],
  		fthoraTop: [
  			0,
  			0.744
  		]
  	},
  	fthoraDiatonicKeAbove: {
  		agogiAboveFthora: [
  			-0.001,
  			1.226
  		],
  		fthoraTop: [
  			0,
  			0.804
  		]
  	},
  	fthoraDiatonicZoAbove: {
  		agogiAboveFthora: [
  			-0.001,
  			1.356
  		],
  		fthoraTop: [
  			0,
  			0.624
  		]
  	},
  	fthoraDiatonicNiHighAbove: {
  		agogiAboveFthora: [
  			-0.001,
  			1.226
  		],
  		fthoraTop: [
  			0,
  			0.754
  		]
  	},
  	fthoraHardChromaticPaAbove: {
  		agogiAboveFthora: [
  			-0.001,
  			1.125
  		],
  		fthoraTop: [
  			0,
  			0.804
  		]
  	},
  	fthoraHardChromaticDiAbove: {
  		agogiAboveFthora: [
  			-0.001,
  			1.126
  		],
  		fthoraTop: [
  			0,
  			0.744
  		]
  	},
  	fthoraSoftChromaticDiAbove: {
  		agogiAboveFthora: [
  			-0.001,
  			1.146
  		],
  		fthoraTop: [
  			0,
  			0.804
  		]
  	},
  	fthoraSoftChromaticKeAbove: {
  		agogiAboveFthora: [
  			-0.001,
  			1.196
  		],
  		fthoraTop: [
  			0,
  			0.714
  		]
  	},
  	fthoraEnharmonicAbove: {
  		agogiAboveFthora: [
  			-0.001,
  			1.146
  		],
  		fthoraTop: [
  			0,
  			0.734
  		]
  	},
  	chroaZygosAbove: {
  		agogiAboveFthora: [
  			-0.001,
  			1.196
  		],
  		fthoraTop: [
  			0,
  			0.704
  		]
  	},
  	chroaKlitonAbove: {
  		agogiAboveFthora: [
  			-0.001,
  			1.225
  		],
  		fthoraTop: [
  			0,
  			0.734
  		]
  	},
  	fthoraDiatonicNiLowBelow: {
  		fthoraBottom: [
  			0,
  			0.264
  		]
  	},
  	fthoraDiatonicPaBelow: {
  		fthoraBottom: [
  			0,
  			0.244
  		]
  	},
  	fthoraDiatonicVouBelow: {
  		fthoraBottom: [
  			0,
  			0.471
  		]
  	},
  	fthoraDiatonicGaBelow: {
  		fthoraBottom: [
  			0,
  			0.374
  		]
  	},
  	fthoraDiatonicDiBelow: {
  		fthoraBottom: [
  			0,
  			0.314
  		]
  	},
  	fthoraDiatonicKeBelow: {
  		fthoraBottom: [
  			0,
  			0.394
  		]
  	},
  	fthoraDiatonicZoBelow: {
  		fthoraBottom: [
  			0,
  			0.514
  		]
  	},
  	fthoraDiatonicNiHighBelow: {
  		fthoraBottom: [
  			0,
  			0.374
  		]
  	},
  	fthoraHardChromaticPaBelow: {
  		fthoraBottom: [
  			0,
  			0.294
  		]
  	},
  	fthoraHardChromaticDiBelow: {
  		fthoraBottom: [
  			0,
  			0.334
  		]
  	},
  	fthoraSoftChromaticDiBelow: {
  		fthoraBottom: [
  			0,
  			0.314
  		]
  	},
  	fthoraSoftChromaticKeBelow: {
  		fthoraBottom: [
  			0,
  			0.364
  		]
  	},
  	fthoraEnharmonicBelow: {
  		fthoraBottom: [
  			0,
  			0.294
  		]
  	},
  	chroaZygosBelow: {
  		fthoraBottom: [
  			0,
  			0.354
  		]
  	},
  	chroaKlitonBelow: {
  		fthoraBottom: [
  			0,
  			0.394
  		]
  	},
  	diesis2: {
  		diesis: [
  			0.196,
  			0.612
  		]
  	},
  	diesis4: {
  		diesis: [
  			0.177,
  			0.682
  		]
  	},
  	diesis6: {
  		diesis: [
  			0.152,
  			0.652
  		]
  	},
  	diesis8: {
  		diesis: [
  			0.012,
  			0.553
  		]
  	},
  	yfesis2: {
  		yfesis: [
  			-0.213,
  			0.452
  		]
  	},
  	yfesis4: {
  		yfesis: [
  			-0.134,
  			0.429
  		]
  	},
  	yfesis6: {
  		yfesis: [
  			-0.153,
  			0.456
  		]
  	},
  	yfesis8: {
  		yfesis: [
  			-0.159,
  			0.44
  		]
  	},
  	diesisGenikiAbove: {
  		fthoraTop: [
  			0,
  			0.804
  		]
  	},
  	yfesisGenikiAbove: {
  		fthoraTop: [
  			0,
  			0.634
  		]
  	},
  	diesisGenikiBelow: {
  		fthoraBottom: [
  			0,
  			0.444
  		]
  	},
  	yfesisGenikiBelow: {
  		fthoraBottom: [
  			0,
  			0.25
  		]
  	},
  	noteIndicatorNi: {
  		noteTop: [
  			0,
  			0.8
  		]
  	},
  	noteIndicatorPa: {
  		noteTop: [
  			0,
  			0.8
  		]
  	},
  	noteIndicatorVou: {
  		noteTop: [
  			0,
  			0.8
  		]
  	},
  	noteIndicatorGa: {
  		noteTop: [
  			0,
  			0.8
  		]
  	},
  	noteIndicatorDi: {
  		noteTop: [
  			0,
  			0.8
  		]
  	},
  	noteIndicatorKe: {
  		noteTop: [
  			0,
  			0.8
  		]
  	},
  	noteIndicatorZo: {
  		noteTop: [
  			0,
  			0.8
  		]
  	},
  	chroaSpathiBelow: {
  		fthoraBottom: [
  			0,
  			0.304
  		]
  	},
  	chroaSpathiAbove: {
  		agogiAboveFthora: [
  			-0.001,
  			1.136
  		],
  		fthoraTop: [
  			0,
  			0.804
  		]
  	},
  	measureNumber3: {
  		measureNumber: [
  			0,
  			0.656
  		]
  	},
  	measureNumber4: {
  		measureNumber: [
  			0,
  			0.656
  		]
  	},
  	measureNumber5: {
  		measureNumber: [
  			0,
  			0.656
  		]
  	},
  	measureNumber6: {
  		measureNumber: [
  			0,
  			0.656
  		]
  	},
  	measureNumber7: {
  		measureNumber: [
  			0,
  			0.656
  		]
  	},
  	measureNumber8: {
  		measureNumber: [
  			0,
  			0.656
  		]
  	},
  	measureNumber2: {
  		measureNumber: [
  			0,
  			0.656
  		]
  	},
  	isonIndicatorDiLow: {
  		isonIndicator: [
  			0,
  			0.996
  		]
  	},
  	isonIndicatorUnison: {
  		isonIndicator: [
  			0,
  			0.996
  		]
  	},
  	isonIndicatorKeLow: {
  		isonIndicator: [
  			0,
  			0.996
  		]
  	},
  	isonIndicatorZo: {
  		isonIndicator: [
  			0,
  			0.996
  		]
  	},
  	isonIndicatorNi: {
  		isonIndicator: [
  			0,
  			0.996
  		]
  	},
  	isonIndicatorPa: {
  		isonIndicator: [
  			0,
  			0.996
  		]
  	},
  	isonIndicatorVou: {
  		isonIndicator: [
  			0,
  			0.996
  		]
  	},
  	isonIndicatorGa: {
  		isonIndicator: [
  			0,
  			0.996
  		]
  	},
  	isonIndicatorDi: {
  		isonIndicator: [
  			0,
  			0.996
  		]
  	},
  	isonIndicatorKe: {
  		isonIndicator: [
  			0,
  			0.996
  		]
  	},
  	isonIndicatorZoHigh: {
  		isonIndicator: [
  			0,
  			0.996
  		]
  	},
  	modeOligonYpsili: {
  		modeTop: [
  			0,
  			0.8
  		]
  	},
  	modeNi: {
  		fthoraTop: [
  			0.634,
  			0.94
  		],
  		modeTop: [
  			0.617,
  			0.981
  		]
  	},
  	modePa: {
  		fthoraTop: [
  			0.634,
  			0.94
  		],
  		modeTop: [
  			0.617,
  			0.981
  		]
  	},
  	modeVou: {
  		fthoraTop: [
  			0.634,
  			0.94
  		],
  		modeTop: [
  			0.617,
  			0.981
  		]
  	},
  	modeGa: {
  		fthoraTop: [
  			0.634,
  			0.94
  		],
  		modeTop: [
  			0.617,
  			0.981
  		]
  	},
  	modeDi: {
  		fthoraTop: [
  			0.634,
  			0.94
  		],
  		modeTop: [
  			0.617,
  			0.981
  		]
  	},
  	modeKe: {
  		fthoraTop: [
  			0.634,
  			0.94
  		],
  		modeTop: [
  			0.617,
  			0.981
  		]
  	},
  	modeZo: {
  		fthoraTop: [
  			0.634,
  			0.94
  		],
  		modeTop: [
  			0.617,
  			0.981
  		]
  	},
  	modeOligonKentimaAbove: {
  		modeTop: [
  			0,
  			0.8
  		]
  	},
  	modeElafron: {
  		modeTop: [
  			0,
  			0.8
  		]
  	},
  	modeRunningElafron: {
  		modeTop: [
  			0,
  			0.8
  		]
  	},
  	koronis: {
  		koronis: [
  			0,
  			0.872
  		]
  	},
  	gorgonSecondary: {
  		gorgonSecondary: [
  			0,
  			0.8
  		]
  	},
  	endofonon: {
  		endofonon: [
  			0.001,
  			-0.02
  		]
  	},
  	yfenAbove: {
  		yfenAbove: [
  			-0.589,
  			0.951
  		]
  	},
  	yfenBelow: {
  		yfenBelow: [
  			-0.593,
  			-0.043
  		]
  	},
  	gorgonDottedLeftSecondary: {
  		gorgonSecondary: [
  			0,
  			0.8
  		]
  	},
  	gorgonDottedRightSecondary: {
  		gorgonSecondary: [
  			0,
  			0.8
  		]
  	},
  	digorgonSecondary: {
  		gorgonSecondary: [
  			0,
  			0.8
  		]
  	},
  	digorgonDottedLeftBelowSecondary: {
  		gorgonSecondary: [
  			0,
  			0.8
  		]
  	},
  	digorgonDottedRightSecondary: {
  		gorgonSecondary: [
  			0,
  			0.8
  		]
  	},
  	trigorgonSecondary: {
  		gorgonSecondary: [
  			0,
  			0.8
  		]
  	},
  	trigorgonDottedLeftBelowSecondary: {
  		gorgonSecondary: [
  			0,
  			0.8
  		]
  	},
  	trigorgonDottedRightSecondary: {
  		gorgonSecondary: [
  			0,
  			0.8
  		]
  	},
  	oligonChamiliKentimata: {
  		gorgonSecondary: [
  			0.795,
  			0.91
  		],
  		yfenAbove: [
  			1.26,
  			1.061
  		],
  		yfenBelow: [
  			1.299,
  			-0.04
  		],
  		endofonon: [
  			1.112,
  			-0.037
  		],
  		heteronConnecting: [
  			2,
  			0.132
  		],
  		measureNumber: [
  			0.172,
  			0.993
  		],
  		isonIndicator: [
  			0.71,
  			1.01
  		],
  		antikenoma: [
  			1.1,
  			0.173
  		],
  		noteTop: [
  			0.372,
  			0.991
  		],
  		fthoraBottom: [
  			1.116,
  			0.194
  		],
  		fthoraTop: [
  			1.459,
  			0.751
  		],
  		diesis: [
  			0.4,
  			0.133
  		],
  		yfesis: [
  			1.828,
  			0.736
  		],
  		psifiston: [
  			1.13,
  			0.113
  		],
  		gorgonTop: [
  			1.58,
  			0.74
  		]
  	},
  	"psifiston.salt01": {
  		psifiston: [
  			-0.001,
  			0.569
  		]
  	},
  	"heteronConnecting.salt01": {
  		heteronConnecting: [
  			0,
  			-0.019
  		]
  	},
  	agogiPoliArgiAbove: {
  		agogiAboveFthora: [
  			0.433599,
  			-0.203486
  		],
  		agogi: [
  			0.433411,
  			-0.202736
  		]
  	},
  	agogiArgoteriAbove: {
  		agogi: [
  			0.46767200000000003,
  			-0.20313900000000001
  		],
  		agogiAboveFthora: [
  			0.46635899999999997,
  			-0.20838900000000002
  		]
  	},
  	agogiArgiAbove: {
  		agogi: [
  			0.459797,
  			-0.229223
  		],
  		agogiAboveFthora: [
  			0.458484,
  			-0.226973
  		]
  	},
  	agogiMetriaAbove: {
  		agogi: [
  			0.333964,
  			-0.225973
  		],
  		agogiAboveFthora: [
  			0.33265100000000003,
  			-0.226723
  		]
  	},
  	agogiMesiAbove: {
  		agogi: [
  			0.334562,
  			-0.225973
  		],
  		agogiAboveFthora: [
  			0.33325,
  			-0.226723
  		]
  	},
  	agogiGorgiAbove: {
  		agogi: [
  			0.33207,
  			-0.225973
  		],
  		agogiAboveFthora: [
  			0.333758,
  			-0.226723
  		]
  	},
  	agogiGorgoteriAbove: {
  		agogi: [
  			0.35923700000000003,
  			-0.21422300000000002
  		],
  		agogiAboveFthora: [
  			0.359925,
  			-0.21497300000000003
  		]
  	},
  	agogiPoliGorgiAbove: {
  		agogi: [
  			0.390296,
  			-0.20772300000000002
  		],
  		agogiAboveFthora: [
  			0.388983,
  			-0.20847300000000002
  		]
  	}
  };
  var glyphsWithAlternates = {
  	psifiston: {
  		alternates: [
  			{
  				codepoint: "U+F006",
  				name: "psifiston.salt01"
  			}
  		]
  	},
  	heteronConnecting: {
  		alternates: [
  			{
  				codepoint: "U+F007",
  				name: "heteronConnecting.salt01"
  			}
  		]
  	},
  	modeFourth: {
  		alternates: [
  			{
  				codepoint: "U+F004",
  				name: "modeFourth.salt01"
  			}
  		]
  	},
  	modeFirst: {
  		alternates: [
  			{
  				codepoint: "U+F003",
  				name: "modeFirst.salt01"
  			}
  		]
  	}
  };
  var glyphAdvanceWidths = {
  	ison: 1.524,
  	oligonKentimaBelow: 1.515,
  	oligon: 1.515,
  	oligonKentimaAbove: 1.515,
  	oligonYpsiliRight: 1.515,
  	oligonYpsiliLeft: 1.515,
  	oligonKentimaYpsiliRight: 1.515,
  	oligonKentimaYpsiliMiddle: 1.515,
  	oligonDoubleYpsili: 1.515,
  	oligonKentimataDoubleYpsili: 1.596,
  	isonApostrofos: 1.277,
  	apostrofosSyndesmos: 1.177,
  	yporroi: 0.4,
  	runningElafron: 1.752,
  	elafron: 1.243,
  	elafronApostrofos: 1.243,
  	chamiliApostrofos: 1.113,
  	chamili: 1.113,
  	chamiliElafron: 1.24,
  	chamiliElafronApostrofos: 1.243,
  	doubleChamili: 1.107,
  	petastiIson: 1.318,
  	petasti: 1.243,
  	petastiOligon: 1.367,
  	petastiKentima: 1.236,
  	petastiYpsiliRight: 1.236,
  	petastiYpsiliLeft: 1.236,
  	petastiKentimaYpsiliRight: 1.234,
  	petastiKentimaYpsiliMiddle: 1.236,
  	petastiApostrofos: 1.236,
  	petastiElafron: 1.242,
  	petastiElafronApostrofos: 1.243,
  	petastiChamili: 1.236,
  	kentima: 0.279,
  	kentimata: 0.738,
  	oligonKentimataAbove: 1.465,
  	oligonIsonKentimata: 1.964,
  	oligonYpsiliLeftKentimata: 1.515,
  	oligonApostrofosKentimata: 1.627,
  	oligonElafronKentimata: 2.077,
  	oligonYporroiKentimata: 1.627,
  	oligonKentimataBelow: 1.515,
  	oligonKentimaTripleYpsili: 1.58,
  	oligonIson: 1.515,
  	oligonElafron: 1.519,
  	petastiRunningElafron: 1.514,
  	oligonApostrofos: 1.515,
  	oligonYporroi: 1.515,
  	petastiYporroi: 1.164,
  	oligonRunningElafronKentimata: 2.201,
  	oligonElafronApostrofosKentimata: 2.077,
  	oligonKentimaMiddleKentimata: 1.744,
  	oligonYpsiliRightKentimata: 1.532,
  	petastiChamiliApostrofos: 1.236,
  	apostrofos: 0.703,
  	oligonKentimataTripleYpsili: 1.58,
  	doubleChamiliElafronApostrofos: 1.174,
  	doubleChamiliElafron: 1.174,
  	doubleChamiliApostrofos: 1.107,
  	petastiKentimataDoubleYpsili: 1.439,
  	petastiKentimaDoubleYpsiliRight: 1.313,
  	petastiKentimaDoubleYpsiliLeft: 1.236,
  	petastiKentimataTripleYpsili: 1.439,
  	petastiTripleYpsili: 1.36,
  	oligonKentimaDoubleYpsiliRight: 1.577,
  	oligonKentimaDoubleYpsiliLeft: 1.517,
  	oligonTripleYpsili: 1.58,
  	oligonElafronApostrofos: 1.515,
  	petastiDoubleYpsili: 1.232,
  	oligonChamili: 1.515,
  	petastiChamiliElafron: 1.236,
  	petastiChamiliElafronApostrofos: 1.236,
  	petastiDoubleChamili: 1.236,
  	petastiDoubleChamiliApostrofos: 1.236,
  	gorgonAbove: 0,
  	gorgonBelow: 0,
  	gorgonDottedLeft: 0,
  	digorgon: 0,
  	agogiPoliArgi: 0.766,
  	agogiMesi: 0.709,
  	oligonKentimaMiddle: 1.794,
  	gorgonDottedRight: 0,
  	digorgonDottedLeftBelow: 0,
  	tripleChamili: 1.006,
  	agogiArgoteri: 0.766,
  	agogiGorgi: 0.618,
  	agogiArgi: 0.766,
  	agogiGorgoteri: 0.826,
  	agogiPoliGorgi: 1.02,
  	agogiMetria: 0.608,
  	digorgonDottedLeftAbove: 0,
  	martyriaNoteZoLow: 0.783,
  	martyriaNoteNiLow: 0.731,
  	martyriaNotePaLow: 0.737,
  	martyriaNoteVouLow: 0.701,
  	martyriaNoteGaLow: 0.692,
  	martyriaNoteDiLow: 0.738,
  	martyriaNoteKeLow: 0.744,
  	martyriaNoteZo: 0.783,
  	martyriaNotePa: 0.737,
  	martyriaNoteNi: 0.731,
  	martyriaNoteVou: 0.701,
  	martyriaNoteNiHigh: 0.879,
  	martyriaNoteGa: 0.692,
  	martyriaNoteDi: 0.738,
  	martyriaNoteKe: 0.746,
  	martyriaNoteZoHigh: 0.931,
  	martyriaNotePaHigh: 0.885,
  	martyriaNoteVouHigh: 0.849,
  	martyriaNoteGaHigh: 0.84,
  	martyriaNoteDiHigh: 0.886,
  	martyriaNoteKeHigh: 0.894,
  	martyriaTick: 0.148,
  	"oligonKentimataBelow.alt01": 1.465,
  	"oligonKentimataAbove.alt01": 1.465,
  	"antikenoma.alt01": 0,
  	petastiKentimaTripleYpsili: 1.439,
  	vareia: 0.534,
  	psifiston: 0,
  	antikenoma: 0,
  	omalon: 0,
  	omalonConnecting: 0,
  	heteron: 0,
  	heteronConnecting: 0,
  	stavros: 0.457,
  	klasmaAbove: 0,
  	klasmaBelow: 0,
  	apli: 0,
  	dipli: 0,
  	tripli: 0,
  	tetrapli: 0,
  	leimma1: 0.61,
  	leimma2: 0.781,
  	leimma3: 0.976,
  	leimma4: 1.166,
  	digorgonDottedRight: 0,
  	trigorgon: 0,
  	trigorgonDottedLeftBelow: 0,
  	trigorgonDottedLeftAbove: 0,
  	trigorgonDottedRight: 0,
  	argon: 0,
  	diargon: 0,
  	triargon: 0,
  	martyriaZoBelow: 0,
  	martyriaDeltaBelow: 0,
  	martyriaAlphaBelow: 0,
  	martyriaLegetosBelow: 0,
  	martyriaNanaBelow: 0,
  	martyriaDeltaDottedBelow: 0,
  	martyriaAlphaDottedBelow: 0,
  	martyriaHardChromaticPaBelow: 0,
  	martyriaHardChromaticDiBelow: 0,
  	martyriaSoftChromaticDiBelow: 0,
  	martyriaSoftChromaticKeBelow: 0,
  	martyriaZygosBelow: 0,
  	martyriaZoAbove: 0,
  	martyriaDeltaAbove: 0,
  	martyriaAlphaAbove: 0,
  	martyriaLegetosAbove: 0,
  	martyriaNanaAbove: 0,
  	martyriaDeltaDottedAbove: 0,
  	martyriaAlphaDottedAbove: 0,
  	martyriaHardChromaticPaAbove: 0,
  	martyriaHardChromaticDiAbove: 0,
  	martyriaSoftChromaticDiAbove: 0,
  	martyriaSoftChromaticKeAbove: 0,
  	martyriaZygosAbove: 0,
  	fthoraDiatonicNiLowAbove: 0,
  	fthoraDiatonicPaAbove: 0,
  	fthoraDiatonicVouAbove: 0,
  	fthoraDiatonicGaAbove: 0,
  	fthoraDiatonicDiAbove: 0,
  	fthoraDiatonicKeAbove: 0,
  	fthoraDiatonicZoAbove: 0,
  	fthoraDiatonicNiHighAbove: 0,
  	fthoraHardChromaticPaAbove: 0,
  	fthoraHardChromaticDiAbove: 0,
  	fthoraSoftChromaticDiAbove: 0,
  	fthoraSoftChromaticKeAbove: 0,
  	fthoraEnharmonicAbove: 0,
  	chroaZygosAbove: 0,
  	chroaKlitonAbove: 0,
  	fthoraDiatonicNiLowBelow: 0,
  	fthoraDiatonicPaBelow: 0,
  	fthoraDiatonicVouBelow: 0,
  	fthoraDiatonicGaBelow: 0,
  	fthoraDiatonicDiBelow: 0,
  	fthoraDiatonicKeBelow: 0,
  	fthoraDiatonicZoBelow: 0,
  	fthoraDiatonicNiHighBelow: 0,
  	fthoraHardChromaticPaBelow: 0,
  	fthoraHardChromaticDiBelow: 0,
  	fthoraSoftChromaticDiBelow: 0,
  	fthoraSoftChromaticKeBelow: 0,
  	fthoraEnharmonicBelow: 0,
  	chroaZygosBelow: 0,
  	chroaKlitonBelow: 0,
  	diesis2: 0,
  	diesis4: 0,
  	diesis6: 0,
  	diesis8: 0,
  	yfesis2: 0,
  	yfesis4: 0,
  	yfesis6: 0,
  	yfesis8: 0,
  	diesisGenikiAbove: 0,
  	yfesisGenikiAbove: 0,
  	diesisGenikiBelow: 0,
  	yfesisGenikiBelow: 0,
  	noteIndicatorNi: 0,
  	noteIndicatorPa: 0,
  	noteIndicatorVou: 0,
  	noteIndicatorGa: 0,
  	noteIndicatorDi: 0,
  	noteIndicatorKe: 0,
  	noteIndicatorZo: 0,
  	chroaSpathiBelow: 0,
  	chroaSpathiAbove: 0,
  	measureNumber3: 0,
  	measureNumber4: 0,
  	measureNumber5: 0,
  	measureNumber6: 0,
  	measureNumber7: 0,
  	measureNumber8: 0,
  	measureNumber2: 0,
  	isonIndicatorDiLow: 0,
  	isonIndicatorUnison: 0,
  	isonIndicatorKeLow: 0,
  	isonIndicatorZo: 0,
  	isonIndicatorNi: 0,
  	isonIndicatorPa: 0,
  	isonIndicatorVou: 0,
  	isonIndicatorGa: 0,
  	isonIndicatorDi: 0,
  	isonIndicatorKe: 0,
  	isonIndicatorZoHigh: 0,
  	modeThirdNana: 1.02,
  	modeThird: 2.612,
  	modePlagalFirst: 0.945,
  	modeFourth: 0.98,
  	modeOligonYpsili: 0,
  	modePlagalSecond: 1.232,
  	modePlagalFourth: 0.93,
  	modeNi: 1.238,
  	modePa: 1.245,
  	modeAlphaCapital: 1.083,
  	modeBetaCapital: 1.048,
  	modeGammaCapital: 1.117,
  	modeDeltaCapital: 1.063,
  	modeVarys: 1.485,
  	modePlagal: 0.775,
  	modeWordVarys: 2.099,
  	modeAlpha: 1.019,
  	modeBeta: 1.009,
  	modeWordEchos: 1.588,
  	modeGamma: 1.06,
  	modeDelta: 1,
  	modeFirst: 0.98,
  	modeSecond: 1.77,
  	modeLegetos: 1.505,
  	modeVarys2: 0.783,
  	modeVou: 1.128,
  	modeGa: 1.132,
  	modeDi: 1.073,
  	modeKe: 1.198,
  	modeZo: 1.289,
  	modeOligonKentimaAbove: 0,
  	modeElafron: 0,
  	modeRunningElafron: 0,
  	gorthmikon: 0.612,
  	pelastikon: 0.62,
  	barlineSingle: 0.208,
  	barlineDouble: 0,
  	barlineTheseos: 0.208,
  	barlineShortSingle: 0,
  	barlineShortDouble: 0,
  	barlineShortTheseos: 0,
  	breath: 0.214,
  	koronis: 0,
  	leimmaDot: 0.233,
  	gorgonSecondary: 0,
  	endofonon: 0,
  	yfenAbove: 0,
  	yfenBelow: 0,
  	"modeFirst.salt01": 0.945,
  	"modeFourth.salt01": 0.93,
  	"oligonKentimataBelow.alt02": 1.75,
  	gorgonDottedLeftSecondary: 0,
  	gorgonDottedRightSecondary: 0,
  	digorgonSecondary: 0,
  	digorgonDottedLeftBelowSecondary: 0,
  	digorgonDottedRightSecondary: 0,
  	trigorgonSecondary: 0,
  	trigorgonDottedLeftBelowSecondary: 0,
  	trigorgonDottedRightSecondary: 0,
  	oligonChamiliKentimata: 1.995,
  	"psifiston.salt01": 0,
  	"heteronConnecting.salt01": 0,
  	agogiPoliArgiAbove: 0.766,
  	agogiArgoteriAbove: 0.766,
  	agogiArgiAbove: 0.766,
  	agogiMetriaAbove: 0.608,
  	agogiMesiAbove: 0.709,
  	agogiGorgiAbove: 0.618,
  	agogiGorgoteriAbove: 0.826,
  	agogiPoliGorgiAbove: 1.02
  };
  var optionalGlyphs = {
  	"oligonKentimataBelow.alt01": {
  		codepoint: "U+F000"
  	},
  	"oligonKentimataAbove.alt01": {
  		codepoint: "U+F001"
  	},
  	"antikenoma.alt01": {
  		codepoint: "U+F002"
  	},
  	"modeFirst.salt01": {
  		codepoint: "U+F003"
  	},
  	"modeFourth.salt01": {
  		codepoint: "U+F004"
  	},
  	"oligonKentimataBelow.alt02": {
  		codepoint: "U+F005"
  	},
  	"psifiston.salt01": {
  		codepoint: "U+F006"
  	},
  	"heteronConnecting.salt01": {
  		codepoint: "U+F007"
  	}
  };
  var glyphBBoxes = {
  	ison: {
  		bBoxNE: [
  			1.438,
  			0.6144705882351141
  		],
  		bBoxSW: [
  			0.08198198198190983,
  			0.219
  		]
  	},
  	oligonKentimaBelow: {
  		bBoxNE: [
  			1.4189767441845793,
  			0.3925555555554815
  		],
  		bBoxSW: [
  			0.08222222222223703,
  			-0.021166666666791664
  		]
  	},
  	oligon: {
  		bBoxNE: [
  			1.4189767441845793,
  			0.3925555555554815
  		],
  		bBoxSW: [
  			0.08222222222223703,
  			0.22242105263118006
  		]
  	},
  	oligonKentimaAbove: {
  		bBoxNE: [
  			1.4189767441845793,
  			0.783
  		],
  		bBoxSW: [
  			0.08222222222223703,
  			0.22242105263118006
  		]
  	},
  	oligonYpsiliRight: {
  		bBoxNE: [
  			1.4412222222214541,
  			1.163
  		],
  		bBoxSW: [
  			0.08222222222223703,
  			0.22242105263118006
  		]
  	},
  	oligonYpsiliLeft: {
  		bBoxNE: [
  			1.4189767441845793,
  			1.163
  		],
  		bBoxSW: [
  			0.08222222222223703,
  			0.22242105263118006
  		]
  	},
  	oligonKentimaYpsiliRight: {
  		bBoxNE: [
  			1.4412222222214541,
  			1.163
  		],
  		bBoxSW: [
  			0.08222222222223703,
  			0.22242105263118006
  		]
  	},
  	oligonKentimaYpsiliMiddle: {
  		bBoxNE: [
  			1.4189767441845793,
  			1.27
  		],
  		bBoxSW: [
  			0.08222222222223703,
  			0.22242105263118006
  		]
  	},
  	oligonDoubleYpsili: {
  		bBoxNE: [
  			1.4412222222214541,
  			1.163
  		],
  		bBoxSW: [
  			0.08222222222223703,
  			0.22242105263118006
  		]
  	},
  	oligonKentimataDoubleYpsili: {
  		bBoxNE: [
  			1.4952222222214542,
  			1.272
  		],
  		bBoxSW: [
  			0.08222222222223703,
  			0.22242105263118006
  		]
  	},
  	isonApostrofos: {
  		bBoxNE: [
  			1.3937352941163927,
  			0.6144705882351141
  		],
  		bBoxSW: [
  			0.07698198198190982,
  			-0.226
  		]
  	},
  	apostrofosSyndesmos: {
  		bBoxNE: [
  			1.118104477611784,
  			0.5512857142859183
  		],
  		bBoxSW: [
  			0.078800000000016,
  			-0.225
  		]
  	},
  	yporroi: {
  		bBoxNE: [
  			0.3805106179713311,
  			0.4493332429114316
  		],
  		bBoxSW: [
  			0.07375013732868244,
  			0.16085704035261802
  		]
  	},
  	runningElafron: {
  		bBoxNE: [
  			1.693123076923242,
  			0.505
  		],
  		bBoxSW: [
  			0.04743750000005078,
  			0.131
  		]
  	},
  	elafron: {
  		bBoxNE: [
  			1.1811136363636363,
  			0.505
  		],
  		bBoxSW: [
  			0.07875000000005625,
  			0.13346666666648
  		]
  	},
  	elafronApostrofos: {
  		bBoxNE: [
  			1.1811136363636363,
  			0.505
  		],
  		bBoxSW: [
  			0.07875000000005625,
  			0.028
  		]
  	},
  	chamiliApostrofos: {
  		bBoxNE: [
  			1.0591578947387812,
  			0.82020000000016
  		],
  		bBoxSW: [
  			0.07173437500002303,
  			-0.093
  		]
  	},
  	chamili: {
  		bBoxNE: [
  			1.0591578947387812,
  			0.82020000000016
  		],
  		bBoxSW: [
  			0.07173437500002303,
  			0.203
  		]
  	},
  	chamiliElafron: {
  		bBoxNE: [
  			1.1811136363636363,
  			1.1204
  		],
  		bBoxSW: [
  			0.07875000000005625,
  			0.13346666666648
  		]
  	},
  	chamiliElafronApostrofos: {
  		bBoxNE: [
  			1.1811136363636363,
  			1.1204
  		],
  		bBoxSW: [
  			0.07875000000005625,
  			0.028
  		]
  	},
  	doubleChamili: {
  		bBoxNE: [
  			1.053444444443484,
  			1.1162000000016001
  		],
  		bBoxSW: [
  			0.06827272727272726,
  			0.203
  		]
  	},
  	petastiIson: {
  		bBoxNE: [
  			1.256249862670263,
  			0.975499999999875
  		],
  		bBoxSW: [
  			0.07698198198190982,
  			0.13347830146552808
  		]
  	},
  	petasti: {
  		bBoxNE: [
  			1.1812499999985937,
  			0.50453333333352
  		],
  		bBoxSW: [
  			0.07888636363636364,
  			0.1334782608696068
  		]
  	},
  	petastiOligon: {
  		bBoxNE: [
  			1.3055789473698909,
  			0.7745555555554815
  		],
  		bBoxSW: [
  			0.07222222222223704,
  			0.1334782608696068
  		]
  	},
  	petastiKentima: {
  		bBoxNE: [
  			1.1812499999985937,
  			0.829
  		],
  		bBoxSW: [
  			0.07888636363636364,
  			0.1334782608696068
  		]
  	},
  	petastiYpsiliRight: {
  		bBoxNE: [
  			1.262222222221454,
  			1.225
  		],
  		bBoxSW: [
  			0.07388636363636364,
  			0.1334782608696068
  		]
  	},
  	petastiYpsiliLeft: {
  		bBoxNE: [
  			1.1762499999985936,
  			1.222
  		],
  		bBoxSW: [
  			0.07388636363636364,
  			0.1334782608696068
  		]
  	},
  	petastiKentimaYpsiliRight: {
  		bBoxNE: [
  			1.262222222221454,
  			1.225
  		],
  		bBoxSW: [
  			0.07388636363636364,
  			0.1334782608696068
  		]
  	},
  	petastiKentimaYpsiliMiddle: {
  		bBoxNE: [
  			1.1762499999985936,
  			1.27
  		],
  		bBoxSW: [
  			0.07388636363636364,
  			0.1334782608696068
  		]
  	},
  	petastiApostrofos: {
  		bBoxNE: [
  			1.1762499999985936,
  			0.811
  		],
  		bBoxSW: [
  			0.07388636363636364,
  			0.1334782608696068
  		]
  	},
  	petastiElafron: {
  		bBoxNE: [
  			1.1812499999985937,
  			0.9595217391303932
  		],
  		bBoxSW: [
  			0.07875000000005625,
  			0.1334782608696068
  		]
  	},
  	petastiElafronApostrofos: {
  		bBoxNE: [
  			1.1812499999985937,
  			0.9545217391303932
  		],
  		bBoxSW: [
  			0.07875000000005625,
  			0.1334782608696068
  		]
  	},
  	petastiChamili: {
  		bBoxNE: [
  			1.1762499999985936,
  			1.100909090909632
  		],
  		bBoxSW: [
  			0.06827272727272726,
  			0.1334782608696068
  		]
  	},
  	kentima: {
  		bBoxNE: [
  			0.262249999999875,
  			0.447
  		],
  		bBoxSW: [
  			-0.04215999999999264,
  			0.1604615384623905
  		]
  	},
  	kentimata: {
  		bBoxNE: [
  			0.6995384615384616,
  			0.452
  		],
  		bBoxSW: [
  			0.08526415094338857,
  			0.16485714285640818
  		]
  	},
  	oligonKentimataAbove: {
  		bBoxNE: [
  			1.3990476190470575,
  			0.697
  		],
  		bBoxSW: [
  			0.08222222222223703,
  			0.22242105263118006
  		]
  	},
  	oligonIsonKentimata: {
  		bBoxNE: [
  			1.8680476190470576,
  			0.8334705882351142
  		],
  		bBoxSW: [
  			0.08298198198190983,
  			0.22242105263118006
  		]
  	},
  	oligonYpsiliLeftKentimata: {
  		bBoxNE: [
  			1.4189767441845793,
  			1.163
  		],
  		bBoxSW: [
  			0.08222222222223703,
  			0.22242105263118006
  		]
  	},
  	oligonApostrofosKentimata: {
  		bBoxNE: [
  			1.5459767441845793,
  			0.806
  		],
  		bBoxSW: [
  			0.07722222222223704,
  			0.22242105263118006
  		]
  	},
  	oligonElafronKentimata: {
  		bBoxNE: [
  			1.9709767441845794,
  			0.8535217391303932
  		],
  		bBoxSW: [
  			0.07975000000005625,
  			0.22242105263118006
  		]
  	},
  	oligonYporroiKentimata: {
  		bBoxNE: [
  			1.5360476190470576,
  			0.72
  		],
  		bBoxSW: [
  			0.07722222222223704,
  			0.22242105263118006
  		]
  	},
  	oligonKentimataBelow: {
  		bBoxNE: [
  			1.4189767441845793,
  			0.3925555555554815
  		],
  		bBoxSW: [
  			0.08222222222223703,
  			-0.060538461538376324
  		]
  	},
  	oligonKentimaTripleYpsili: {
  		bBoxNE: [
  			1.500222222221454,
  			1.338
  		],
  		bBoxSW: [
  			0.059,
  			0.22242105263118006
  		]
  	},
  	oligonIson: {
  		bBoxNE: [
  			1.4189767441845793,
  			0.8394705882351142
  		],
  		bBoxSW: [
  			0.08222222222223703,
  			0.22242105263118006
  		]
  	},
  	oligonElafron: {
  		bBoxNE: [
  			1.4189767441845793,
  			0.8665217391303931
  		],
  		bBoxSW: [
  			0.08222222222223703,
  			0.22242105263118006
  		]
  	},
  	petastiRunningElafron: {
  		bBoxNE: [
  			1.4289411764723874,
  			0.856
  		],
  		bBoxSW: [
  			-0.07696296296308064,
  			0.127
  		]
  	},
  	oligonApostrofos: {
  		bBoxNE: [
  			1.4189767441845793,
  			0.824
  		],
  		bBoxSW: [
  			0.08222222222223703,
  			0.22242105263118006
  		]
  	},
  	oligonYporroi: {
  		bBoxNE: [
  			1.4189767441845793,
  			0.7366956521732705
  		],
  		bBoxSW: [
  			0.08222222222223703,
  			0.22242105263118006
  		]
  	},
  	petastiYporroi: {
  		bBoxNE: [
  			1.102657142857634,
  			0.6746956521732704
  		],
  		bBoxSW: [
  			0.07746666666652802,
  			0.1344761904779591
  		]
  	},
  	oligonRunningElafronKentimata: {
  		bBoxNE: [
  			2.0830476190470577,
  			0.791523809522041
  		],
  		bBoxSW: [
  			-0.008642857142861633,
  			0.22242105263118006
  		]
  	},
  	oligonElafronApostrofosKentimata: {
  		bBoxNE: [
  			1.9709767441845794,
  			0.8515217391303932
  		],
  		bBoxSW: [
  			0.07875000000005625,
  			0.22242105263118006
  		]
  	},
  	oligonKentimaMiddleKentimata: {
  		bBoxNE: [
  			1.7272498626713175,
  			0.697
  		],
  		bBoxSW: [
  			0.08222219542424306,
  			0.160461602450778
  		]
  	},
  	oligonYpsiliRightKentimata: {
  		bBoxNE: [
  			1.500222222221454,
  			1.163
  		],
  		bBoxSW: [
  			0.08222222222223703,
  			0.22242105263118006
  		]
  	},
  	petastiChamiliApostrofos: {
  		bBoxNE: [
  			1.1762499999985936,
  			1.100909090909632
  		],
  		bBoxSW: [
  			0.06827272727272726,
  			0.1334782608696068
  		]
  	},
  	apostrofos: {
  		bBoxNE: [
  			0.6661044623580955,
  			0.49628591359669194
  		],
  		bBoxSW: [
  			0.08480015624509511,
  			0.145
  		]
  	},
  	oligonKentimataTripleYpsili: {
  		bBoxNE: [
  			1.500222222221454,
  			1.338
  		],
  		bBoxSW: [
  			0.059,
  			0.22242105263118006
  		]
  	},
  	doubleChamiliElafronApostrofos: {
  		bBoxNE: [
  			1.1205423728823691,
  			1.1162000000016001
  		],
  		bBoxSW: [
  			0.06827272727272726,
  			-0.201
  		]
  	},
  	doubleChamiliElafron: {
  		bBoxNE: [
  			1.1205423728823691,
  			1.1162000000016001
  		],
  		bBoxSW: [
  			0.06827272727272726,
  			-0.10225925925904526
  		]
  	},
  	doubleChamiliApostrofos: {
  		bBoxNE: [
  			1.053444444443484,
  			1.1162000000016001
  		],
  		bBoxSW: [
  			0.06827272727272726,
  			-0.093
  		]
  	},
  	petastiKentimataDoubleYpsili: {
  		bBoxNE: [
  			1.3682222222214542,
  			1.348
  		],
  		bBoxSW: [
  			0.07388636363636364,
  			0.1334782608696068
  		]
  	},
  	petastiKentimaDoubleYpsiliRight: {
  		bBoxNE: [
  			1.2512222222214542,
  			1.343
  		],
  		bBoxSW: [
  			0.07388636363636364,
  			0.1334782608696068
  		]
  	},
  	petastiKentimaDoubleYpsiliLeft: {
  		bBoxNE: [
  			1.1762499999985936,
  			1.343
  		],
  		bBoxSW: [
  			0.044,
  			0.1334782608696068
  		]
  	},
  	petastiKentimataTripleYpsili: {
  		bBoxNE: [
  			1.3682222222214542,
  			1.348
  		],
  		bBoxSW: [
  			-0.029,
  			0.1334782608696068
  		]
  	},
  	petastiTripleYpsili: {
  		bBoxNE: [
  			1.295222222221454,
  			1.222
  		],
  		bBoxSW: [
  			0.044,
  			0.1334782608696068
  		]
  	},
  	oligonKentimaDoubleYpsiliRight: {
  		bBoxNE: [
  			1.500222222221454,
  			1.338
  		],
  		bBoxSW: [
  			0.08222222222223703,
  			0.22242105263118006
  		]
  	},
  	oligonKentimaDoubleYpsiliLeft: {
  		bBoxNE: [
  			1.4189767441845793,
  			1.338
  		],
  		bBoxSW: [
  			0.059,
  			0.22242105263118006
  		]
  	},
  	oligonTripleYpsili: {
  		bBoxNE: [
  			1.500222222221454,
  			1.163
  		],
  		bBoxSW: [
  			0.059,
  			0.22242105263118006
  		]
  	},
  	oligonElafronApostrofos: {
  		bBoxNE: [
  			1.4189767441845793,
  			0.8665217391303931
  		],
  		bBoxSW: [
  			0.08222222222223703,
  			0.22242105263118006
  		]
  	},
  	petastiDoubleYpsili: {
  		bBoxNE: [
  			1.262222222221454,
  			1.225
  		],
  		bBoxSW: [
  			0.07388636363636364,
  			0.1334782608696068
  		]
  	},
  	oligonChamili: {
  		bBoxNE: [
  			1.4189767441845793,
  			0.9359090909091652
  		],
  		bBoxSW: [
  			0.08222222222223703,
  			0.22242105263118006
  		]
  	},
  	petastiChamiliElafron: {
  		bBoxNE: [
  			1.1762499999985936,
  			1.3710625000013843
  		],
  		bBoxSW: [
  			0.049750000000056256,
  			0.1334782608696068
  		]
  	},
  	petastiChamiliElafronApostrofos: {
  		bBoxNE: [
  			1.1762499999985936,
  			1.3710625000013843
  		],
  		bBoxSW: [
  			0.049750000000056256,
  			0.1334782608696068
  		]
  	},
  	petastiDoubleChamili: {
  		bBoxNE: [
  			1.1762499999985936,
  			1.229571428570379
  		],
  		bBoxSW: [
  			0.05798245614041237,
  			-0.0035217391304265093
  		]
  	},
  	petastiDoubleChamiliApostrofos: {
  		bBoxNE: [
  			1.1762499999985936,
  			1.229571428570379
  		],
  		bBoxSW: [
  			0.05798245614041237,
  			-0.0035217391304265093
  		]
  	},
  	gorgonAbove: {
  		bBoxNE: [
  			0.16266675709036268,
  			1.0175
  		],
  		bBoxSW: [
  			-0.1505,
  			0.8131665943250609
  		]
  	},
  	gorgonBelow: {
  		bBoxNE: [
  			0.1566667570903627,
  			0.2235
  		],
  		bBoxSW: [
  			-0.1565,
  			0.019166594325172034
  		]
  	},
  	gorgonDottedLeft: {
  		bBoxNE: [
  			0.1661667570903627,
  			1.039
  		],
  		bBoxSW: [
  			-0.303,
  			0.8143334056669915
  		]
  	},
  	digorgon: {
  		bBoxNE: [
  			0.3117645770791375,
  			1.188
  		],
  		bBoxSW: [
  			-0.251,
  			0.820666594325061
  		]
  	},
  	agogiPoliArgi: {
  		bBoxNE: [
  			0.7275624999994923,
  			0.793
  		],
  		bBoxSW: [
  			-0.1578461538461006,
  			-0.3391111111093795
  		]
  	},
  	agogiMesi: {
  		bBoxNE: [
  			0.6751666666679165,
  			0.622
  		],
  		bBoxSW: [
  			-0.022166666666674998,
  			-0.3391111111093795
  		]
  	},
  	oligonKentimaMiddle: {
  		bBoxNE: [
  			1.7772498626713176,
  			0.447
  		],
  		bBoxSW: [
  			0.08222219542424306,
  			0.160461602450778
  		]
  	},
  	gorgonDottedRight: {
  		bBoxNE: [
  			0.3196432386601042,
  			1.039
  		],
  		bBoxSW: [
  			-0.147642578125,
  			0.8143334056669915
  		]
  	},
  	digorgonDottedLeftBelow: {
  		bBoxNE: [
  			0.3117645770791375,
  			1.188
  		],
  		bBoxSW: [
  			-0.413,
  			0.820666594325061
  		]
  	},
  	tripleChamili: {
  		bBoxNE: [
  			0.9475106382975425,
  			1.229571428570379
  		],
  		bBoxSW: [
  			0.05798245614041237,
  			0.15
  		]
  	},
  	agogiArgoteri: {
  		bBoxNE: [
  			0.7275624999994923,
  			0.788666666666
  		],
  		bBoxSW: [
  			0.173,
  			-0.3391111111093795
  		]
  	},
  	agogiGorgi: {
  		bBoxNE: [
  			0.5881666666679165,
  			0.622
  		],
  		bBoxSW: [
  			0.12279999999984,
  			-0.3391111111093795
  		]
  	},
  	agogiArgi: {
  		bBoxNE: [
  			0.7275624999994923,
  			0.695
  		],
  		bBoxSW: [
  			0.024499999999975,
  			-0.3391111111093795
  		]
  	},
  	agogiGorgoteri: {
  		bBoxNE: [
  			0.78350000000025,
  			0.695
  		],
  		bBoxSW: [
  			0.12279999999984,
  			-0.3391111111093795
  		]
  	},
  	agogiPoliGorgi: {
  		bBoxNE: [
  			0.9672666666669867,
  			0.789
  		],
  		bBoxSW: [
  			0.12279999999984,
  			-0.3391111111093795
  		]
  	},
  	agogiMetria: {
  		bBoxNE: [
  			0.5765624999994923,
  			0.622
  		],
  		bBoxSW: [
  			0.078833333333325,
  			-0.3391111111093795
  		]
  	},
  	digorgonDottedLeftAbove: {
  		bBoxNE: [
  			0.3117645770791375,
  			1.188
  		],
  		bBoxSW: [
  			-0.251,
  			0.820666594325061
  		]
  	},
  	martyriaNoteZoLow: {
  		bBoxNE: [
  			0.747,
  			-0.11194439889203207
  		],
  		bBoxSW: [
  			0.3560329308522726,
  			-0.466
  		]
  	},
  	martyriaNoteNiLow: {
  		bBoxNE: [
  			0.6230263408178665,
  			-0.155
  		],
  		bBoxSW: [
  			0.39485704035246055,
  			-0.459
  		]
  	},
  	martyriaNotePaLow: {
  		bBoxNE: [
  			0.6695332806837037,
  			-0.16
  		],
  		bBoxSW: [
  			0.361,
  			-0.4620526777170886
  		]
  	},
  	martyriaNoteVouLow: {
  		bBoxNE: [
  			0.5818589667994963,
  			-0.08198856039425548
  		],
  		bBoxSW: [
  			0.36,
  			-0.46512302053070276
  		]
  	},
  	martyriaNoteGaLow: {
  		bBoxNE: [
  			0.659,
  			-0.10292307692311391
  		],
  		bBoxSW: [
  			0.36,
  			-0.46
  		]
  	},
  	martyriaNoteDiLow: {
  		bBoxNE: [
  			0.703,
  			-0.077
  		],
  		bBoxSW: [
  			0.36,
  			-0.46
  		]
  	},
  	martyriaNoteKeLow: {
  		bBoxNE: [
  			0.726,
  			-0.17394736842015515
  		],
  		bBoxSW: [
  			0.43321428571438775,
  			-0.47711764705960213
  		]
  	},
  	martyriaNoteZo: {
  		bBoxNE: [
  			0.747,
  			0.42205555555560187
  		],
  		bBoxSW: [
  			0.35603278688565465,
  			0.068
  		]
  	},
  	martyriaNotePa: {
  		bBoxNE: [
  			0.66953333333328,
  			0.37
  		],
  		bBoxSW: [
  			0.361,
  			0.06794736842096288
  		]
  	},
  	martyriaNoteNi: {
  		bBoxNE: [
  			0.6230263157894993,
  			0.365
  		],
  		bBoxSW: [
  			0.3948571428570408,
  			0.061
  		]
  	},
  	martyriaNoteVou: {
  		bBoxNE: [
  			0.5818590604025887,
  			0.4380114285714399
  		],
  		bBoxSW: [
  			0.36,
  			0.05487692307692885
  		]
  	},
  	martyriaNoteNiHigh: {
  		bBoxNE: [
  			0.856,
  			0.55
  		],
  		bBoxSW: [
  			0.39485704035261804,
  			0.061
  		]
  	},
  	martyriaNoteGa: {
  		bBoxNE: [
  			0.659,
  			0.42501960784504045
  		],
  		bBoxSW: [
  			0.36,
  			0.068
  		]
  	},
  	martyriaNoteDi: {
  		bBoxNE: [
  			0.703,
  			0.45
  		],
  		bBoxSW: [
  			0.36,
  			0.068
  		]
  	},
  	martyriaNoteKe: {
  		bBoxNE: [
  			0.6778799999997697,
  			0.3720526315798449
  		],
  		bBoxSW: [
  			0.385,
  			0.06888235294109864
  		]
  	},
  	martyriaNoteZoHigh: {
  		bBoxNE: [
  			0.908,
  			0.55
  		],
  		bBoxSW: [
  			0.3560329308520515,
  			0.068
  		]
  	},
  	martyriaNotePaHigh: {
  		bBoxNE: [
  			0.862,
  			0.55
  		],
  		bBoxSW: [
  			0.361,
  			0.06794732228298231
  		]
  	},
  	martyriaNoteVouHigh: {
  		bBoxNE: [
  			0.826,
  			0.55
  		],
  		bBoxSW: [
  			0.36,
  			0.05487697946921059
  		]
  	},
  	martyriaNoteGaHigh: {
  		bBoxNE: [
  			0.817,
  			0.55
  		],
  		bBoxSW: [
  			0.36,
  			0.068
  		]
  	},
  	martyriaNoteDiHigh: {
  		bBoxNE: [
  			0.863,
  			0.55
  		],
  		bBoxSW: [
  			0.36,
  			0.068
  		]
  	},
  	martyriaNoteKeHigh: {
  		bBoxNE: [
  			0.871,
  			0.55
  		],
  		bBoxSW: [
  			0.385,
  			0.06888226348503225
  		]
  	},
  	martyriaTick: {
  		bBoxNE: [
  			0.125,
  			0.55
  		],
  		bBoxSW: [
  			0.027,
  			0.344
  		]
  	},
  	"oligonKentimataBelow.alt01": {
  		bBoxNE: [
  			1.4040476190470577,
  			0.3925555555554815
  		],
  		bBoxSW: [
  			0.06722222222223703,
  			-0.022545454545446278
  		]
  	},
  	"oligonKentimataAbove.alt01": {
  		bBoxNE: [
  			1.3750476190470577,
  			0.662
  		],
  		bBoxSW: [
  			0.08222222222223703,
  			0.22242105263118006
  		]
  	},
  	"antikenoma.alt01": {
  		bBoxNE: [
  			0.5431978805064592,
  			0.08933340568012374
  		],
  		bBoxSW: [
  			-0.5431981349340659,
  			-0.2011251068284493
  		]
  	},
  	petastiKentimaTripleYpsili: {
  		bBoxNE: [
  			1.3682222222214542,
  			1.348
  		],
  		bBoxSW: [
  			-0.029,
  			0.1334782608696068
  		]
  	},
  	vareia: {
  		bBoxNE: [
  			0.5798378378379547,
  			0.702433962264356
  		],
  		bBoxSW: [
  			0.07378947368421994,
  			-0.072
  		]
  	},
  	psifiston: {
  		bBoxNE: [
  			0.7286053770959283,
  			0.46087718870268657
  		],
  		bBoxSW: [
  			-0.7286053334544177,
  			0.09988008099790775
  		]
  	},
  	antikenoma: {
  		bBoxNE: [
  			0.6718910465875105,
  			0.089562290193746
  		],
  		bBoxSW: [
  			-0.6648910985259383,
  			-0.20522231599387236
  		]
  	},
  	omalon: {
  		bBoxNE: [
  			0.6125918332983422,
  			0.067
  		],
  		bBoxSW: [
  			-0.5795116062493747,
  			-0.22014295964753944
  		]
  	},
  	omalonConnecting: {
  		bBoxNE: [
  			0.6125918332983422,
  			0.067
  		],
  		bBoxSW: [
  			-0.5795116062493747,
  			-0.22014295964753944
  		]
  	},
  	heteron: {
  		bBoxNE: [
  			0.6061645492561065,
  			-0.047048674897116935
  		],
  		bBoxSW: [
  			-0.606164136232269,
  			-0.37185734215716953
  		]
  	},
  	heteronConnecting: {
  		bBoxNE: [
  			0.6061645492561065,
  			-0.047048674897116935
  		],
  		bBoxSW: [
  			-0.606164136232269,
  			-0.37185734215716953
  		]
  	},
  	stavros: {
  		bBoxNE: [
  			0.436,
  			0.471
  		],
  		bBoxSW: [
  			0.09,
  			0.1259374999991211
  		]
  	},
  	klasmaAbove: {
  		bBoxNE: [
  			0.235622070312,
  			0.784
  		],
  		bBoxSW: [
  			-0.23562191501858465,
  			0.604655029707047
  		]
  	},
  	klasmaBelow: {
  		bBoxNE: [
  			0.235622070312,
  			0.204
  		],
  		bBoxSW: [
  			-0.23562191501858465,
  			0.024655029707266195
  		]
  	},
  	apli: {
  		bBoxNE: [
  			0.06834193754578578,
  			-0.001
  		],
  		bBoxSW: [
  			-0.068341796875,
  			-0.109
  		]
  	},
  	dipli: {
  		bBoxNE: [
  			0.18056241417238847,
  			-0.001
  		],
  		bBoxSW: [
  			-0.1805625,
  			-0.109
  		]
  	},
  	tripli: {
  		bBoxNE: [
  			0.2873426517055924,
  			-0.001
  		],
  		bBoxSW: [
  			-0.287341796875,
  			-0.109
  		]
  	},
  	tetrapli: {
  		bBoxNE: [
  			0.3923426517055924,
  			-0.001
  		],
  		bBoxSW: [
  			-0.392341796875,
  			-0.109
  		]
  	},
  	leimma1: {
  		bBoxNE: [
  			0.5798378378379547,
  			0.702433962264356
  		],
  		bBoxSW: [
  			0.07378947368421994,
  			-0.072
  		]
  	},
  	leimma2: {
  		bBoxNE: [
  			0.7366844485813236,
  			0.702433962264356
  		],
  		bBoxSW: [
  			0.07378947368421994,
  			-0.072
  		]
  	},
  	leimma3: {
  		bBoxNE: [
  			0.9266844485813236,
  			0.702433962264356
  		],
  		bBoxSW: [
  			0.07378947368421994,
  			-0.072
  		]
  	},
  	leimma4: {
  		bBoxNE: [
  			1.1166844485827863,
  			0.702433962264356
  		],
  		bBoxSW: [
  			0.07378947368421994,
  			-0.072
  		]
  	},
  	digorgonDottedRight: {
  		bBoxNE: [
  			0.46472704674874554,
  			1.177
  		],
  		bBoxSW: [
  			-0.25,
  			0.8363334056669915
  		]
  	},
  	trigorgon: {
  		bBoxNE: [
  			0.42616675709036267,
  			1.203
  		],
  		bBoxSW: [
  			-0.381,
  			0.8106665943250609
  		]
  	},
  	trigorgonDottedLeftBelow: {
  		bBoxNE: [
  			0.42416675709036267,
  			1.202
  		],
  		bBoxSW: [
  			-0.546,
  			0.8096665943250609
  		]
  	},
  	trigorgonDottedLeftAbove: {
  		bBoxNE: [
  			0.42316675709036267,
  			1.223
  		],
  		bBoxSW: [
  			-0.384,
  			0.8096665943250609
  		]
  	},
  	trigorgonDottedRight: {
  		bBoxNE: [
  			0.5737270467487455,
  			1.201
  		],
  		bBoxSW: [
  			-0.387,
  			0.8086665943250609
  		]
  	},
  	argon: {
  		bBoxNE: [
  			0.118,
  			1.03
  		],
  		bBoxSW: [
  			-0.19714295964753945,
  			0.8033334056669915
  		]
  	},
  	diargon: {
  		bBoxNE: [
  			0.182,
  			1.206666594332564
  		],
  		bBoxSW: [
  			-0.182,
  			0.804
  		]
  	},
  	triargon: {
  		bBoxNE: [
  			0.212,
  			1.17
  		],
  		bBoxSW: [
  			-0.34884611384459646,
  			0.8033334056669915
  		]
  	},
  	martyriaZoBelow: {
  		bBoxNE: [
  			0.5121881890778728,
  			0.102000244141
  		],
  		bBoxSW: [
  			-0.5121885590058988,
  			-0.18596305574240682
  		]
  	},
  	martyriaDeltaBelow: {
  		bBoxNE: [
  			0.26027734375,
  			0.285
  		],
  		bBoxSW: [
  			-0.2602778635136527,
  			-0.20588248174639126
  		]
  	},
  	martyriaAlphaBelow: {
  		bBoxNE: [
  			0.13895093677801545,
  			0.32039999999999996
  		],
  		bBoxSW: [
  			-0.1389509919406282,
  			-0.18633333333333335
  		]
  	},
  	martyriaLegetosBelow: {
  		bBoxNE: [
  			0.2364714474938806,
  			0.2846364164643925
  		],
  		bBoxSW: [
  			-0.23647194668513855,
  			-0.14113324421306486
  		]
  	},
  	martyriaNanaBelow: {
  		bBoxNE: [
  			0.3000548537383018,
  			0.23
  		],
  		bBoxSW: [
  			-0.3000546875,
  			-0.20039984375834394
  		]
  	},
  	martyriaDeltaDottedBelow: {
  		bBoxNE: [
  			0.26027734375,
  			0.394
  		],
  		bBoxSW: [
  			-0.2602778635136527,
  			-0.20588248174639126
  		]
  	},
  	martyriaAlphaDottedBelow: {
  		bBoxNE: [
  			0.13895093677801545,
  			0.429
  		],
  		bBoxSW: [
  			-0.1389509919406282,
  			-0.18633333333333335
  		]
  	},
  	martyriaHardChromaticPaBelow: {
  		bBoxNE: [
  			0.3588903990991987,
  			0.13063025710106121
  		],
  		bBoxSW: [
  			-0.3588899998128688,
  			-0.18633778047108654
  		]
  	},
  	martyriaHardChromaticDiBelow: {
  		bBoxNE: [
  			0.2262622966587148,
  			0.26612778418635613
  		],
  		bBoxSW: [
  			-0.22626171899101835,
  			-0.184500244141
  		]
  	},
  	martyriaSoftChromaticDiBelow: {
  		bBoxNE: [
  			0.3588903990991987,
  			0.13063025710106121
  		],
  		bBoxSW: [
  			-0.3588899998128688,
  			-0.18633778047108654
  		]
  	},
  	martyriaSoftChromaticKeBelow: {
  		bBoxNE: [
  			0.21519488153134927,
  			0.22887878049096191
  		],
  		bBoxSW: [
  			-0.21519517062270022,
  			-0.19462778781033413
  		]
  	},
  	martyriaZygosBelow: {
  		bBoxNE: [
  			0.21662778781033412,
  			0.2144
  		],
  		bBoxSW: [
  			-0.21662778781033412,
  			-0.2115
  		]
  	},
  	martyriaZoAbove: {
  		bBoxNE: [
  			0.5121881890778728,
  			0.102000244141
  		],
  		bBoxSW: [
  			-0.5121885590058988,
  			-0.18596305574240682
  		]
  	},
  	martyriaDeltaAbove: {
  		bBoxNE: [
  			0.26027734375,
  			0.285
  		],
  		bBoxSW: [
  			-0.2602778635136527,
  			-0.20588248174639126
  		]
  	},
  	martyriaAlphaAbove: {
  		bBoxNE: [
  			0.13895093677801545,
  			0.32039999999999996
  		],
  		bBoxSW: [
  			-0.1389509919406282,
  			-0.18633333333333335
  		]
  	},
  	martyriaLegetosAbove: {
  		bBoxNE: [
  			0.2364714474938806,
  			0.2846364164643925
  		],
  		bBoxSW: [
  			-0.23647194668513855,
  			-0.14113324421306486
  		]
  	},
  	martyriaNanaAbove: {
  		bBoxNE: [
  			0.3000548537383018,
  			0.23
  		],
  		bBoxSW: [
  			-0.3000546875,
  			-0.20039984375834394
  		]
  	},
  	martyriaDeltaDottedAbove: {
  		bBoxNE: [
  			0.26027734375,
  			0.394
  		],
  		bBoxSW: [
  			-0.2602778635136527,
  			-0.20588248174639126
  		]
  	},
  	martyriaAlphaDottedAbove: {
  		bBoxNE: [
  			0.13895093677801545,
  			0.429
  		],
  		bBoxSW: [
  			-0.1389509919406282,
  			-0.18633333333333335
  		]
  	},
  	martyriaHardChromaticPaAbove: {
  		bBoxNE: [
  			0.3588903990991987,
  			0.13063025710106121
  		],
  		bBoxSW: [
  			-0.3588899998128688,
  			-0.18633778047108654
  		]
  	},
  	martyriaHardChromaticDiAbove: {
  		bBoxNE: [
  			0.2262622966587148,
  			0.26612778418635613
  		],
  		bBoxSW: [
  			-0.22626171899101835,
  			-0.184500244141
  		]
  	},
  	martyriaSoftChromaticDiAbove: {
  		bBoxNE: [
  			0.3588903990991987,
  			0.13063025710106121
  		],
  		bBoxSW: [
  			-0.3588899998128688,
  			-0.18633778047108654
  		]
  	},
  	martyriaSoftChromaticKeAbove: {
  		bBoxNE: [
  			0.21519488153134927,
  			0.22887878049096191
  		],
  		bBoxSW: [
  			-0.21519517062270022,
  			-0.19462778781033413
  		]
  	},
  	martyriaZygosAbove: {
  		bBoxNE: [
  			0.21662778781033412,
  			0.2144
  		],
  		bBoxSW: [
  			-0.21662778781033412,
  			-0.2115
  		]
  	},
  	fthoraDiatonicNiLowAbove: {
  		bBoxNE: [
  			0.16331190499236686,
  			1.103
  		],
  		bBoxSW: [
  			-0.16331152343799998,
  			0.7433847594021427
  		]
  	},
  	fthoraDiatonicPaAbove: {
  		bBoxNE: [
  			0.118,
  			1.04
  		],
  		bBoxSW: [
  			-0.118,
  			0.653483900458442
  		]
  	},
  	fthoraDiatonicVouAbove: {
  		bBoxNE: [
  			0.1904031808035714,
  			1.2630741311373195
  		],
  		bBoxSW: [
  			-0.19040308369840575,
  			0.6347272727272727
  		]
  	},
  	fthoraDiatonicGaAbove: {
  		bBoxNE: [
  			0.1195,
  			1.1660625536532372
  		],
  		bBoxSW: [
  			-0.1195,
  			0.6874848754319814
  		]
  	},
  	fthoraDiatonicDiAbove: {
  		bBoxNE: [
  			0.18158286025331868,
  			1.1141281988753013
  		],
  		bBoxSW: [
  			-0.1815826091587148,
  			0.7499501087637955
  		]
  	},
  	fthoraDiatonicKeAbove: {
  		bBoxNE: [
  			0.1175,
  			1.1855172088799377
  		],
  		bBoxSW: [
  			-0.1175,
  			0.802
  		]
  	},
  	fthoraDiatonicZoAbove: {
  		bBoxNE: [
  			0.19027915736657142,
  			1.306
  		],
  		bBoxSW: [
  			-0.19027943533552527,
  			0.6307313504137247
  		]
  	},
  	fthoraDiatonicNiHighAbove: {
  		bBoxNE: [
  			0.15286891609707054,
  			1.1962423302730039
  		],
  		bBoxSW: [
  			-0.15286816406200002,
  			0.7527998437325972
  		]
  	},
  	fthoraHardChromaticPaAbove: {
  		bBoxNE: [
  			0.3732340494958155,
  			1.084
  		],
  		bBoxSW: [
  			-0.37323397634571476,
  			0.813
  		]
  	},
  	fthoraHardChromaticDiAbove: {
  		bBoxNE: [
  			0.18065369481572754,
  			1.1071281988753015
  		],
  		bBoxSW: [
  			-0.18065414931631868,
  			0.7447367267789309
  		]
  	},
  	fthoraSoftChromaticDiAbove: {
  		bBoxNE: [
  			0.41786185685826244,
  			1.104
  		],
  		bBoxSW: [
  			-0.417861328125,
  			0.7999671821392237
  		]
  	},
  	fthoraSoftChromaticKeAbove: {
  		bBoxNE: [
  			0.21519488153134927,
  			1.1388787804909166
  		],
  		bBoxSW: [
  			-0.21519517062270022,
  			0.715372212189666
  		]
  	},
  	fthoraEnharmonicAbove: {
  		bBoxNE: [
  			0.211887695312,
  			1.099
  		],
  		bBoxSW: [
  			-0.21188794462011185,
  			0.7388570403524606
  		]
  	},
  	chroaZygosAbove: {
  		bBoxNE: [
  			0.21662778781033412,
  			1.1344
  		],
  		bBoxSW: [
  			-0.21662778781033412,
  			0.7085
  		]
  	},
  	chroaKlitonAbove: {
  		bBoxNE: [
  			0.24301926467134485,
  			1.1995110740546344
  		],
  		bBoxSW: [
  			-0.2430193455254081,
  			0.7338748931715506
  		]
  	},
  	fthoraDiatonicNiLowBelow: {
  		bBoxNE: [
  			0.16331190499236686,
  			0.253
  		],
  		bBoxSW: [
  			-0.16331152343799998,
  			-0.10661524059785735
  		]
  	},
  	fthoraDiatonicPaBelow: {
  		bBoxNE: [
  			0.118,
  			0.24
  		],
  		bBoxSW: [
  			-0.118,
  			-0.14651609954155798
  		]
  	},
  	fthoraDiatonicVouBelow: {
  		bBoxNE: [
  			0.1904031808035714,
  			0.4630741311369689
  		],
  		bBoxSW: [
  			-0.19040308369840575,
  			-0.1652727272727273
  		]
  	},
  	fthoraDiatonicGaBelow: {
  		bBoxNE: [
  			0.1195,
  			0.36606255365290763
  		],
  		bBoxSW: [
  			-0.1195,
  			-0.11251512456801858
  		]
  	},
  	fthoraDiatonicDiBelow: {
  		bBoxNE: [
  			0.18158286025331868,
  			0.3041281988753398
  		],
  		bBoxSW: [
  			-0.1815826091587148,
  			-0.060049891236371486
  		]
  	},
  	fthoraDiatonicKeBelow: {
  		bBoxNE: [
  			0.1175,
  			0.3855172088801374
  		],
  		bBoxSW: [
  			-0.1175,
  			0.002
  		]
  	},
  	fthoraDiatonicZoBelow: {
  		bBoxNE: [
  			0.19027915736657142,
  			0.506
  		],
  		bBoxSW: [
  			-0.19027943533552527,
  			-0.16926864958627527
  		]
  	},
  	fthoraDiatonicNiHighBelow: {
  		bBoxNE: [
  			0.15286891609707054,
  			0.36624233027358133
  		],
  		bBoxSW: [
  			-0.15286816406200002,
  			-0.07720015626716278
  		]
  	},
  	fthoraHardChromaticPaBelow: {
  		bBoxNE: [
  			0.3732340494958155,
  			0.284
  		],
  		bBoxSW: [
  			-0.37323397634571476,
  			0.013
  		]
  	},
  	fthoraHardChromaticDiBelow: {
  		bBoxNE: [
  			0.18065369481572754,
  			0.31712819887533983
  		],
  		bBoxSW: [
  			-0.18065414931631868,
  			-0.045263273220891936
  		]
  	},
  	fthoraSoftChromaticDiBelow: {
  		bBoxNE: [
  			0.41786185685826244,
  			0.304
  		],
  		bBoxSW: [
  			-0.417861328125,
  			-0.00003281786072873643
  		]
  	},
  	fthoraSoftChromaticKeBelow: {
  		bBoxNE: [
  			0.21519488153134927,
  			0.33887878049096193
  		],
  		bBoxSW: [
  			-0.21519517062270022,
  			-0.08462778781051718
  		]
  	},
  	fthoraEnharmonicBelow: {
  		bBoxNE: [
  			0.211887695312,
  			0.289
  		],
  		bBoxSW: [
  			-0.21188794462011185,
  			-0.07114295964738199
  		]
  	},
  	chroaZygosBelow: {
  		bBoxNE: [
  			0.21662778781033412,
  			0.3344
  		],
  		bBoxSW: [
  			-0.21662778781033412,
  			-0.0915
  		]
  	},
  	chroaKlitonBelow: {
  		bBoxNE: [
  			0.24301926467134485,
  			0.37951107405486223
  		],
  		bBoxSW: [
  			-0.2430193455254081,
  			-0.0861251068282852
  		]
  	},
  	diesis2: {
  		bBoxNE: [
  			0.19076191636410422,
  			0.609000244141
  		],
  		bBoxSW: [
  			-0.132,
  			0.29
  		]
  	},
  	diesis4: {
  		bBoxNE: [
  			0.1774,
  			0.6796286968850564
  		],
  		bBoxSW: [
  			-0.152,
  			0.354
  		]
  	},
  	diesis6: {
  		bBoxNE: [
  			0.171499755859,
  			0.6756286968850564
  		],
  		bBoxSW: [
  			-0.182,
  			0.324
  		]
  	},
  	diesis8: {
  		bBoxNE: [
  			0.046499755859375,
  			0.5895
  		],
  		bBoxSW: [
  			-0.343,
  			0.203
  		]
  	},
  	yfesis2: {
  		bBoxNE: [
  			0.114,
  			0.776
  		],
  		bBoxSW: [
  			-0.212000244141,
  			0.4532380836358958
  		]
  	},
  	yfesis4: {
  		bBoxNE: [
  			0.194,
  			0.754
  		],
  		bBoxSW: [
  			-0.133000244141,
  			0.4295
  		]
  	},
  	yfesis6: {
  		bBoxNE: [
  			0.174,
  			0.779
  		],
  		bBoxSW: [
  			-0.17887817375458334,
  			0.4283713031149435
  		]
  	},
  	yfesis8: {
  		bBoxNE: [
  			0.195,
  			0.79
  		],
  		bBoxSW: [
  			-0.19276191636410422,
  			0.4043713031149435
  		]
  	},
  	diesisGenikiAbove: {
  		bBoxNE: [
  			0.1195,
  			1.229515124567853
  		],
  		bBoxSW: [
  			-0.1195,
  			0.808
  		]
  	},
  	yfesisGenikiAbove: {
  		bBoxNE: [
  			0.1195,
  			1.062
  		],
  		bBoxSW: [
  			-0.1195,
  			0.6404857413782357
  		]
  	},
  	diesisGenikiBelow: {
  		bBoxNE: [
  			0.1195,
  			0.42951512456801855
  		],
  		bBoxSW: [
  			-0.1195,
  			0.008
  		]
  	},
  	yfesisGenikiBelow: {
  		bBoxNE: [
  			0.1195,
  			0.242
  		],
  		bBoxSW: [
  			-0.1195,
  			-0.17951425862176434
  		]
  	},
  	noteIndicatorNi: {
  		bBoxNE: [
  			0.12175338738080779,
  			1.142
  		],
  		bBoxSW: [
  			-0.121752929688,
  			0.822
  		]
  	},
  	noteIndicatorPa: {
  		bBoxNE: [
  			0.1525626068284493,
  			1.101
  		],
  		bBoxSW: [
  			-0.1525625,
  			0.803
  		]
  	},
  	noteIndicatorVou: {
  		bBoxNE: [
  			0.09908248832537835,
  			1.1580125904431637
  		],
  		bBoxSW: [
  			-0.0990830078125,
  			0.8118689083686565
  		]
  	},
  	noteIndicatorGa: {
  		bBoxNE: [
  			0.141,
  			1.1450799640031268
  		],
  		bBoxSW: [
  			-0.141,
  			0.809
  		]
  	},
  	noteIndicatorDi: {
  		bBoxNE: [
  			0.144,
  			1.122
  		],
  		bBoxSW: [
  			-0.144,
  			0.8
  		]
  	},
  	noteIndicatorKe: {
  		bBoxNE: [
  			0.154309814453,
  			1.132
  		],
  		bBoxSW: [
  			-0.15431034868996785,
  			0.811888813867231
  		]
  	},
  	noteIndicatorZo: {
  		bBoxNE: [
  			0.1535,
  			1.1360712984482915
  		],
  		bBoxSW: [
  			-0.1535,
  			0.81
  		]
  	},
  	chroaSpathiBelow: {
  		bBoxNE: [
  			0.41836185685826244,
  			0.301
  		],
  		bBoxSW: [
  			-0.418361328125,
  			-0.002
  		]
  	},
  	chroaSpathiAbove: {
  		bBoxNE: [
  			0.41836185685826244,
  			1.101
  		],
  		bBoxSW: [
  			-0.418361328125,
  			0.798
  		]
  	},
  	measureNumber3: {
  		bBoxNE: [
  			0.102,
  			0.963
  		],
  		bBoxSW: [
  			-0.102,
  			0.644
  		]
  	},
  	measureNumber4: {
  		bBoxNE: [
  			0.111,
  			0.966
  		],
  		bBoxSW: [
  			-0.111,
  			0.644
  		]
  	},
  	measureNumber5: {
  		bBoxNE: [
  			0.103,
  			0.954
  		],
  		bBoxSW: [
  			-0.103,
  			0.643
  		]
  	},
  	measureNumber6: {
  		bBoxNE: [
  			0.103,
  			0.962
  		],
  		bBoxSW: [
  			-0.103,
  			0.643
  		]
  	},
  	measureNumber7: {
  		bBoxNE: [
  			0.105,
  			0.963
  		],
  		bBoxSW: [
  			-0.105,
  			0.643
  		]
  	},
  	measureNumber8: {
  		bBoxNE: [
  			0.0995,
  			0.962
  		],
  		bBoxSW: [
  			-0.0995,
  			0.652
  		]
  	},
  	measureNumber2: {
  		bBoxNE: [
  			0.1025,
  			0.964
  		],
  		bBoxSW: [
  			-0.1025,
  			0.653
  		]
  	},
  	isonIndicatorDiLow: {
  		bBoxNE: [
  			0.456,
  			1.298
  		],
  		bBoxSW: [
  			-0.456,
  			0.931
  		]
  	},
  	isonIndicatorUnison: {
  		bBoxNE: [
  			0.39,
  			1.298
  		],
  		bBoxSW: [
  			-0.39,
  			0.964
  		]
  	},
  	isonIndicatorKeLow: {
  		bBoxNE: [
  			0.4555,
  			1.298
  		],
  		bBoxSW: [
  			-0.4555,
  			0.931
  		]
  	},
  	isonIndicatorZo: {
  		bBoxNE: [
  			0.3535,
  			1.298
  		],
  		bBoxSW: [
  			-0.3535,
  			0.964
  		]
  	},
  	isonIndicatorNi: {
  		bBoxNE: [
  			0.395,
  			1.298
  		],
  		bBoxSW: [
  			-0.395,
  			0.964
  		]
  	},
  	isonIndicatorPa: {
  		bBoxNE: [
  			0.3705,
  			1.298
  		],
  		bBoxSW: [
  			-0.3705,
  			0.964
  		]
  	},
  	isonIndicatorVou: {
  		bBoxNE: [
  			0.368,
  			1.298
  		],
  		bBoxSW: [
  			-0.368,
  			0.964
  		]
  	},
  	isonIndicatorGa: {
  		bBoxNE: [
  			0.3705,
  			1.298
  		],
  		bBoxSW: [
  			-0.3705,
  			0.964
  		]
  	},
  	isonIndicatorDi: {
  		bBoxNE: [
  			0.3435,
  			1.298
  		],
  		bBoxSW: [
  			-0.3435,
  			0.964
  		]
  	},
  	isonIndicatorKe: {
  		bBoxNE: [
  			0.361,
  			1.298
  		],
  		bBoxSW: [
  			-0.361,
  			0.964
  		]
  	},
  	isonIndicatorZoHigh: {
  		bBoxNE: [
  			0.456,
  			1.298
  		],
  		bBoxSW: [
  			-0.456,
  			0.955
  		]
  	},
  	modeThirdNana: {
  		bBoxNE: [
  			0.9701081081080569,
  			0.7
  		],
  		bBoxSW: [
  			0.37,
  			0.09490476190466396
  		]
  	},
  	modeThird: {
  		bBoxNE: [
  			2.24857894737241,
  			0.77920000000016
  		],
  		bBoxSW: [
  			0.3632222222223704,
  			0.004333333333333333
  		]
  	},
  	modePlagalFirst: {
  		bBoxNE: [
  			0.7911538461539763,
  			0.776
  		],
  		bBoxSW: [
  			0.487,
  			0.07436666666662702
  		]
  	},
  	modeFourth: {
  		bBoxNE: [
  			0.933628571427814,
  			1.256
  		],
  		bBoxSW: [
  			0.3116521739127977,
  			-0.17488235294120413
  		]
  	},
  	modeOligonYpsili: {
  		bBoxNE: [
  			0.6454498438431541,
  			1.394
  		],
  		bBoxSW: [
  			-0.6454500010762756,
  			0.7814209091154843
  		]
  	},
  	modePlagalSecond: {
  		bBoxNE: [
  			1.1697936507927393,
  			0.718469387754928
  		],
  		bBoxSW: [
  			0.3787407407409547,
  			0.36856626505944734
  		]
  	},
  	modePlagalFourth: {
  		bBoxNE: [
  			0.887,
  			0.746
  		],
  		bBoxSW: [
  			0.3116521739127977,
  			0.08022222222223703
  		]
  	},
  	modeNi: {
  		bBoxNE: [
  			1.13,
  			0.866
  		],
  		bBoxSW: [
  			0.307,
  			0.151
  		]
  	},
  	modePa: {
  		bBoxNE: [
  			1.1502857142846648,
  			0.866
  		],
  		bBoxSW: [
  			0.329,
  			0.366
  		]
  	},
  	modeAlphaCapital: {
  		bBoxNE: [
  			1.023,
  			0.866
  		],
  		bBoxSW: [
  			0.294,
  			0.366
  		]
  	},
  	modeBetaCapital: {
  		bBoxNE: [
  			0.989,
  			0.866
  		],
  		bBoxSW: [
  			0.294,
  			0.366
  		]
  	},
  	modeGammaCapital: {
  		bBoxNE: [
  			1.057,
  			0.866
  		],
  		bBoxSW: [
  			0.346,
  			0.366
  		]
  	},
  	modeDeltaCapital: {
  		bBoxNE: [
  			1.003027027027283,
  			0.8914324324332279
  		],
  		bBoxSW: [
  			0.292,
  			0.366
  		]
  	},
  	modeVarys: {
  		bBoxNE: [
  			1.4131428571421938,
  			0.565
  		],
  		bBoxSW: [
  			0.3369393939393223,
  			0.007692307692308995
  		]
  	},
  	modePlagal: {
  		bBoxNE: [
  			0.739,
  			0.974
  		],
  		bBoxSW: [
  			0.36,
  			0.087
  		]
  	},
  	modeWordVarys: {
  		bBoxNE: [
  			1.941,
  			0.881
  		],
  		bBoxSW: [
  			0.331,
  			0.18
  		]
  	},
  	modeAlpha: {
  		bBoxNE: [
  			0.955,
  			0.86025
  		],
  		bBoxSW: [
  			0.2951379310351677,
  			0.366
  		]
  	},
  	modeBeta: {
  		bBoxNE: [
  			0.95,
  			0.8621818181817356
  		],
  		bBoxSW: [
  			0.343749999999875,
  			0.366
  		]
  	},
  	modeWordEchos: {
  		bBoxNE: [
  			1.504066666667206,
  			0.866
  		],
  		bBoxSW: [
  			-0.09,
  			0.15497619047616837
  		]
  	},
  	modeGamma: {
  		bBoxNE: [
  			0.999,
  			0.86025
  		],
  		bBoxSW: [
  			0.34365217391318714,
  			0.153
  		]
  	},
  	modeDelta: {
  		bBoxNE: [
  			0.94,
  			0.86025
  		],
  		bBoxSW: [
  			0.344,
  			0.366
  		]
  	},
  	modeFirst: {
  		bBoxNE: [
  			0.933628571427814,
  			1.256
  		],
  		bBoxSW: [
  			0.42,
  			-0.21063333333372997
  		]
  	},
  	modeSecond: {
  		bBoxNE: [
  			1.7020476190470577,
  			0.9735555555554816
  		],
  		bBoxSW: [
  			0.3652222222223704,
  			0.36856626505944734
  		]
  	},
  	modeLegetos: {
  		bBoxNE: [
  			1.421,
  			0.9280196258834619
  		],
  		bBoxSW: [
  			0.25452805331486145,
  			0.03686675578679825
  		]
  	},
  	modeVarys2: {
  		bBoxNE: [
  			1.0391881890818258,
  			0.42205555555560187
  		],
  		bBoxSW: [
  			0.014811440994313235,
  			-0.3259630557424068
  		]
  	},
  	modeVou: {
  		bBoxNE: [
  			1.035,
  			0.866
  		],
  		bBoxSW: [
  			0.329,
  			0.366
  		]
  	},
  	modeGa: {
  		bBoxNE: [
  			1.0562666666658191,
  			0.866
  		],
  		bBoxSW: [
  			0.329,
  			0.366
  		]
  	},
  	modeDi: {
  		bBoxNE: [
  			0.9762857142856123,
  			0.866
  		],
  		bBoxSW: [
  			0.333,
  			0.366
  		]
  	},
  	modeKe: {
  		bBoxNE: [
  			1.0963448275843757,
  			0.866
  		],
  		bBoxSW: [
  			0.333,
  			0.366
  		]
  	},
  	modeZo: {
  		bBoxNE: [
  			1.193,
  			0.867
  		],
  		bBoxSW: [
  			0.333,
  			0.366
  		]
  	},
  	modeOligonKentimaAbove: {
  		bBoxNE: [
  			0.6456452642444991,
  			1.259
  		],
  		bBoxSW: [
  			-0.6456453135762756,
  			0.7814209091154843
  		]
  	},
  	modeElafron: {
  		bBoxNE: [
  			0.500604574636267,
  			1.1495237694649438
  		],
  		bBoxSW: [
  			-0.5006044564517234,
  			0.8117407317086957
  		]
  	},
  	modeRunningElafron: {
  		bBoxNE: [
  			0.7785759059791264,
  			1.1455237694649438
  		],
  		bBoxSW: [
  			-0.778575585938,
  			0.8077407317086956
  		]
  	},
  	gorthmikon: {
  		bBoxNE: [
  			0.585,
  			0.8652857142857143
  		],
  		bBoxSW: [
  			0.04727522216582278,
  			0.005
  		]
  	},
  	pelastikon: {
  		bBoxNE: [
  			0.574,
  			0.8171530674096971
  		],
  		bBoxSW: [
  			0.04207838116270664,
  			0.004894644851049375
  		]
  	},
  	barlineSingle: {
  		bBoxNE: [
  			0.123,
  			0.7050714285714949
  		],
  		bBoxSW: [
  			0.091,
  			0.0037333333333472002
  		]
  	},
  	barlineDouble: {
  		bBoxNE: [
  			0.079,
  			0.7050714285714949
  		],
  		bBoxSW: [
  			-0.07,
  			0.0037333333333472002
  		]
  	},
  	barlineTheseos: {
  		bBoxNE: [
  			0.306,
  			0.812
  		],
  		bBoxSW: [
  			-0.101,
  			0.0037333333333472002
  		]
  	},
  	barlineShortSingle: {
  		bBoxNE: [
  			0.015,
  			0.8950714285714948
  		],
  		bBoxSW: [
  			-0.017,
  			0.5897333333347199
  		]
  	},
  	barlineShortDouble: {
  		bBoxNE: [
  			0.064,
  			0.8950714285714948
  		],
  		bBoxSW: [
  			-0.061,
  			0.5897333333347199
  		]
  	},
  	barlineShortTheseos: {
  		bBoxNE: [
  			0.146,
  			0.9892000000000001
  		],
  		bBoxSW: [
  			-0.148,
  			0.5887333333347199
  		]
  	},
  	breath: {
  		bBoxNE: [
  			0.169,
  			1.151
  		],
  		bBoxSW: [
  			0.031,
  			0.907
  		]
  	},
  	koronis: {
  		bBoxNE: [
  			0.277,
  			1.173
  		],
  		bBoxSW: [
  			-0.277,
  			0.877
  		]
  	},
  	leimmaDot: {
  		bBoxNE: [
  			0.17468421052655955,
  			0.474
  		],
  		bBoxSW: [
  			0.038,
  			0.366
  		]
  	},
  	gorgonSecondary: {
  		bBoxNE: [
  			0.16266675709036268,
  			1.0175
  		],
  		bBoxSW: [
  			-0.1505,
  			0.8131665943250609
  		]
  	},
  	endofonon: {
  		bBoxNE: [
  			0.6062527154751576,
  			-0.047048674897116935
  		],
  		bBoxSW: [
  			-0.6062526424632353,
  			-0.3724808641803582
  		]
  	},
  	yfenAbove: {
  		bBoxNE: [
  			0.5995,
  			1.3150096246866274
  		],
  		bBoxSW: [
  			-0.5995,
  			0.958
  		]
  	},
  	yfenBelow: {
  		bBoxNE: [
  			0.6,
  			-0.049
  		],
  		bBoxSW: [
  			-0.6,
  			-0.40603789687608005
  		]
  	},
  	"modeFirst.salt01": {
  		bBoxNE: [
  			0.829,
  			1.255
  		],
  		bBoxSW: [
  			0.413,
  			0.07436666666662702
  		]
  	},
  	"modeFourth.salt01": {
  		bBoxNE: [
  			0.887,
  			1.255
  		],
  		bBoxSW: [
  			0.3116521739127977,
  			0.08022222222223703
  		]
  	},
  	"oligonKentimataBelow.alt02": {
  		bBoxNE: [
  			1.6630476190470576,
  			0.78354999999992
  		],
  		bBoxSW: [
  			0.3602222222223704,
  			0.36844444444592594
  		]
  	},
  	gorgonDottedLeftSecondary: {
  		bBoxNE: [
  			0.1661667570903627,
  			1.039
  		],
  		bBoxSW: [
  			-0.303,
  			0.8143334056669915
  		]
  	},
  	gorgonDottedRightSecondary: {
  		bBoxNE: [
  			0.3196432386601042,
  			1.039
  		],
  		bBoxSW: [
  			-0.147642578125,
  			0.8143334056669915
  		]
  	},
  	digorgonSecondary: {
  		bBoxNE: [
  			0.3117645770791375,
  			1.188
  		],
  		bBoxSW: [
  			-0.251,
  			0.820666594325061
  		]
  	},
  	digorgonDottedLeftBelowSecondary: {
  		bBoxNE: [
  			0.3117645770791375,
  			1.188
  		],
  		bBoxSW: [
  			-0.413,
  			0.820666594325061
  		]
  	},
  	digorgonDottedRightSecondary: {
  		bBoxNE: [
  			0.46472704674874554,
  			1.177
  		],
  		bBoxSW: [
  			-0.25,
  			0.8363334056669915
  		]
  	},
  	trigorgonSecondary: {
  		bBoxNE: [
  			0.42616675709036267,
  			1.203
  		],
  		bBoxSW: [
  			-0.381,
  			0.8106665943250609
  		]
  	},
  	trigorgonDottedLeftBelowSecondary: {
  		bBoxNE: [
  			0.42416675709036267,
  			1.202
  		],
  		bBoxSW: [
  			-0.546,
  			0.8096665943250609
  		]
  	},
  	trigorgonDottedRightSecondary: {
  		bBoxNE: [
  			0.5737270467487455,
  			1.201
  		],
  		bBoxSW: [
  			-0.387,
  			0.8086665943250609
  		]
  	},
  	oligonChamiliKentimata: {
  		bBoxNE: [
  			1.8924500000022748,
  			0.9359090909091652
  		],
  		bBoxSW: [
  			0.06873437500002302,
  			0.22242105263118006
  		]
  	},
  	"psifiston.salt01": {
  		bBoxNE: [
  			0.7598837714134049,
  			0.5547998593754707
  		],
  		bBoxSW: [
  			-0.7598828125,
  			0.10288881386723099
  		]
  	},
  	"heteronConnecting.salt01": {
  		bBoxNE: [
  			0.688446289062,
  			-0.05262174030508771
  		],
  		bBoxSW: [
  			-0.6644466365460583,
  			-0.32169436009241525
  		]
  	},
  	agogiPoliArgiAbove: {
  		bBoxNE: [
  			0.6168329241401106,
  			0.651513671875
  		],
  		bBoxSW: [
  			-0.04722360262671557,
  			-0.19756980668589846
  		]
  	},
  	agogiArgoteriAbove: {
  		bBoxNE: [
  			0.6582421038281105,
  			0.6476949870322807
  		],
  		bBoxSW: [
  			0.2423203125,
  			-0.19813884374004087
  		]
  	},
  	agogiArgiAbove: {
  		bBoxNE: [
  			0.6396796875,
  			0.565736328125
  		],
  		bBoxSW: [
  			0.1123835449215,
  			-0.20984715898936995
  		]
  	},
  	agogiMetriaAbove: {
  		bBoxNE: [
  			0.51434676338587,
  			0.501861328125
  		],
  		bBoxSW: [
  			0.14104987247501297,
  			-0.21897215898936995
  		]
  	},
  	agogiMesiAbove: {
  		bBoxNE: [
  			0.588,
  			0.501861328125
  		],
  		bBoxSW: [
  			0.065,
  			-0.21897215898936995
  		]
  	},
  	agogiGorgiAbove: {
  		bBoxNE: [
  			0.5299954563547311,
  			0.501861328125
  		],
  		bBoxSW: [
  			0.180970117188,
  			-0.21897215898936995
  		]
  	},
  	agogiGorgoteriAbove: {
  		bBoxNE: [
  			0.700912109375,
  			0.565736328125
  		],
  		bBoxSW: [
  			0.20538664041892696,
  			-0.20984715898936995
  		]
  	},
  	agogiPoliGorgiAbove: {
  		bBoxNE: [
  			0.8617084001819921,
  			0.647986328125
  		],
  		bBoxSW: [
  			0.228358789062,
  			-0.19809715898936994
  		]
  	}
  };
  var ligatures = {
  	oligonKentimaMiddleKentimata: {
  		codepoint: "U+E085",
  		componentGlyphs: [
  			"oligonKentimataAbove",
  			"kentima"
  		]
  	},
  	oligonKentimaMiddle: {
  		codepoint: "U+E002",
  		componentGlyphs: [
  			"oligon",
  			"kentima"
  		]
  	},
  	martyriaNoteNiHigh: {
  		codepoint: "U+E13F",
  		componentGlyphs: [
  			"martyriaNoteNi",
  			"martyriaTick"
  		]
  	},
  	martyriaNoteZoHigh: {
  		codepoint: "U+E13E",
  		componentGlyphs: [
  			"martyriaNoteZo",
  			"martyriaTick"
  		]
  	},
  	martyriaNotePaHigh: {
  		codepoint: "U+E140",
  		componentGlyphs: [
  			"martyriaNotePa",
  			"martyriaTick"
  		]
  	},
  	martyriaNoteVouHigh: {
  		codepoint: "U+E141",
  		componentGlyphs: [
  			"martyriaNoteVou",
  			"martyriaTick"
  		]
  	},
  	martyriaNoteGaHigh: {
  		codepoint: "U+E142",
  		componentGlyphs: [
  			"martyriaNoteGa",
  			"martyriaTick"
  		]
  	},
  	martyriaNoteDiHigh: {
  		codepoint: "U+E143",
  		componentGlyphs: [
  			"martyriaNoteDi",
  			"martyriaTick"
  		]
  	},
  	martyriaNoteKeHigh: {
  		codepoint: "U+E144",
  		componentGlyphs: [
  			"martyriaNoteKe",
  			"martyriaTick"
  		]
  	}
  };
  var metadata = {
  	fontName: fontName,
  	fontVersion: fontVersion,
  	metrics: metrics,
  	glyphsWithAnchors: glyphsWithAnchors,
  	glyphsWithAlternates: glyphsWithAlternates,
  	glyphAdvanceWidths: glyphAdvanceWidths,
  	optionalGlyphs: optionalGlyphs,
  	glyphBBoxes: glyphBBoxes,
  	ligatures: ligatures
  };

  class FontService {
    getAdvanceWidth(glyph) {
      return metadata.glyphAdvanceWidths[glyph];
    }

    getMarkOffset(base, mark) {
      const markAnchorName = Object.keys(metadata.glyphsWithAnchors[mark]).find(
        (x) => metadata.glyphsWithAnchors[base][x] != null,
      );

      if (markAnchorName == null) {
        console.warn(`Missing anchor for base: ${base} mark: ${mark}`);
        return { x: 0, y: 0 };
      }

      const markAnchor = metadata.glyphsWithAnchors[mark][markAnchorName];

      const baseAnchor = metadata.glyphsWithAnchors[base][markAnchorName];

      return {
        x: baseAnchor[0] - markAnchor[0],
        y: -(baseAnchor[1] - markAnchor[1]),
      };
    }

    getMarkAnchorOffset(base, mark) {
      const markAnchorName = Object.keys(metadata.glyphsWithAnchors[mark]).find(
        (x) => metadata.glyphsWithAnchors[base][x] != null,
      );

      if (markAnchorName == null) {
        console.warn(`Missing anchor for base: ${base} mark: ${mark}`);
        return { x: 0, y: 0 };
      }

      const baseAnchor = metadata.glyphsWithAnchors[base][markAnchorName];

      return {
        x: baseAnchor[0],
        y: metadata.metrics.winAscent - baseAnchor[1],
      };
    }
  }

  class CustomElementGlyphMappingService {
    constructor() {
      this.customElementNodeNameToGlyphNameMap = new Map();
      this.customElementNodeNameToGlyphNameMap.set('X-ISON', 'ison');
      this.customElementNodeNameToGlyphNameMap.set('X-OLIGON', 'oligon');
      this.customElementNodeNameToGlyphNameMap.set(
        'X-OLIGON-KENTIMA-MIDDLE',
        'oligonKentimaMiddle',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-OLIGON-KENTIMA-BELOW',
        'oligonKentimaBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-OLIGON-KENTIMA-ABOVE',
        'oligonKentimaAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-OLIGON-YPSILI-RIGHT',
        'oligonYpsiliRight',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-OLIGON-YPSILI-LEFT',
        'oligonYpsiliLeft',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-OLIGON-KENTIMA-YPSILI-RIGHT',
        'oligonKentimaYpsiliRight',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-OLIGON-KENTIMA-YPSILI-MIDDLE',
        'oligonKentimaYpsiliMiddle',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-OLIGON-DOUBLE-YPSILI',
        'oligonDoubleYpsili',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-OLIGON-KENTIMATA-DOUBLE-YPSILI',
        'oligonKentimataDoubleYpsili',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-OLIGON-KENTIMA-DOUBLE-YPSILI-RIGHT',
        'oligonKentimaDoubleYpsiliRight',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-OLIGON-KENTIMA-DOUBLE-YPSILI-LEFT',
        'oligonKentimaDoubleYpsiliLeft',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-OLIGON-TRIPLE-YPSILI',
        'oligonTripleYpsili',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-OLIGON-KENTIMATA-TRIPLE-YPSILI',
        'oligonKentimataTripleYpsili',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-OLIGON-KENTIMA-TRIPLE-YPSILI',
        'oligonKentimaTripleYpsili',
      );
      this.customElementNodeNameToGlyphNameMap.set('X-OLIGON-ISON', 'oligonIson');
      this.customElementNodeNameToGlyphNameMap.set(
        'X-OLIGON-APOSTROFOS',
        'oligonApostrofos',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-OLIGON-YPORROI',
        'oligonYporroi',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-OLIGON-ELAFRON',
        'oligonElafron',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-OLIGON-ELAFRON-APOSTROFOS',
        'oligonElafronApostrofos',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-OLIGON-CHAMILI',
        'oligonChamili',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-ISON-APOSTROFOS',
        'isonApostrofos',
      );
      this.customElementNodeNameToGlyphNameMap.set('X-APOSTROFOS', 'apostrofos');
      this.customElementNodeNameToGlyphNameMap.set(
        'X-APOSTROFOS-SYNDESMOS',
        'apostrofosSyndesmos',
      );
      this.customElementNodeNameToGlyphNameMap.set('X-YPORROI', 'yporroi');
      this.customElementNodeNameToGlyphNameMap.set('X-ELAFRON', 'elafron');
      this.customElementNodeNameToGlyphNameMap.set(
        'X-RUNNING-ELAFRON',
        'runningElafron',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-ELAFRON-APOSTROFOS',
        'elafronApostrofos',
      );
      this.customElementNodeNameToGlyphNameMap.set('X-CHAMILI', 'chamili');
      this.customElementNodeNameToGlyphNameMap.set(
        'X-CHAMILI-APOSTROFOS',
        'chamiliApostrofos',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-CHAMILI-ELAFRON',
        'chamiliElafron',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-CHAMILI-ELAFRON-APOSTROFOS',
        'chamiliElafronApostrofos',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-DOUBLE-CHAMILI',
        'doubleChamili',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-DOUBLE-CHAMILI-APOSTROFOS',
        'doubleChamiliApostrofos',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-DOUBLE-CHAMILI-ELAFRON',
        'doubleChamiliElafron',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-DOUBLE-CHAMILI-ELAFRON-APOSTROFOS',
        'doubleChamiliElafronApostrofos',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-TRIPLE-CHAMILI',
        'tripleChamili',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-PETASTI-ISON',
        'petastiIson',
      );
      this.customElementNodeNameToGlyphNameMap.set('X-PETASTI', 'petasti');
      this.customElementNodeNameToGlyphNameMap.set(
        'X-PETASTI-OLIGON',
        'petastiOligon',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-PETASTI-KENTIMA',
        'petastiKentima',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-PETASTI-YPSILI-RIGHT',
        'petastiYpsiliRight',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-PETASTI-YPSILI-LEFT',
        'petastiYpsiliLeft',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-PETASTI-KENTIMA-YPSILI-RIGHT',
        'petastiKentimaYpsiliRight',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-PETASTI-KENTIMA-YPSILI-MIDDLE',
        'petastiKentimaYpsiliMiddle',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-PETASTI-DOUBLE-YPSILI',
        'petastiDoubleYpsili',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-PETASTI-KENTIMATA-DOUBLE-YPSILI',
        'petastiKentimataDoubleYpsili',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-PETASTI-KENTIMA-DOUBLE-YPSILI-RIGHT',
        'petastiKentimaDoubleYpsiliRight',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-PETASTI-KENTIMA-DOUBLE-YPSILI-LEFT',
        'petastiKentimaDoubleYpsiliLeft',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-PETASTI-TRIPLE-YPSILI',
        'petastiTripleYpsili',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-PETASTI-KENTIMATA-TRIPLE-YPSILI',
        'petastiKentimataTripleYpsili',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-PETASTI-KENTIMA-TRIPLE-YPSILI',
        'petastiKentimaTripleYpsili',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-PETASTI-APOSTROFOS',
        'petastiApostrofos',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-PETASTI-YPORROI',
        'petastiYporroi',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-PETASTI-ELAFRON',
        'petastiElafron',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-PETASTI-RUNNING-ELAFRON',
        'petastiRunningElafron',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-PETASTI-ELAFRON-APOSTROFOS',
        'petastiElafronApostrofos',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-PETASTI-CHAMILI',
        'petastiChamili',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-PETASTI-CHAMILI-APOSTROFOS',
        'petastiChamiliApostrofos',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-PETASTI-CHAMILI-ELAFRON',
        'petastiChamiliElafron',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-PETASTI-CHAMILI-ELAFRON-APOSTROFOS',
        'petastiChamiliElafronApostrofos',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-PETASTI-DOUBLE-CHAMILI',
        'petastiDoubleChamili',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-PETASTI-DOUBLE-CHAMILI-APOSTROFOS',
        'petastiDoubleChamiliApostrofos',
      );
      this.customElementNodeNameToGlyphNameMap.set('X-KENTIMA', 'kentima');
      this.customElementNodeNameToGlyphNameMap.set('X-KENTIMATA', 'kentimata');
      this.customElementNodeNameToGlyphNameMap.set(
        'X-OLIGON-KENTIMATA-BELOW',
        'oligonKentimataBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-OLIGON-KENTIMATA-ABOVE',
        'oligonKentimataAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-OLIGON-ISON-KENTIMATA',
        'oligonIsonKentimata',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-OLIGON-KENTIMA-MIDDLE-KENTIMATA',
        'oligonKentimaMiddleKentimata',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-OLIGON-YPSILI-RIGHT-KENTIMATA',
        'oligonYpsiliRightKentimata',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-OLIGON-YPSILI-LEFT-KENTIMATA',
        'oligonYpsiliLeftKentimata',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-OLIGON-APOSTROFOS-KENTIMATA',
        'oligonApostrofosKentimata',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-OLIGON-YPORROI-KENTIMATA',
        'oligonYporroiKentimata',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-OLIGON-ELAFRON-KENTIMATA',
        'oligonElafronKentimata',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-OLIGON-RUNNING-ELAFRON-KENTIMATA',
        'oligonRunningElafronKentimata',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-OLIGON-ELAFRON-APOSTROFOS-KENTIMATA',
        'oligonElafronApostrofosKentimata',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-OLIGON-CHAMILI-KENTIMATA',
        'oligonChamiliKentimata',
      );
      this.customElementNodeNameToGlyphNameMap.set('X-VAREIA', 'vareia');
      this.customElementNodeNameToGlyphNameMap.set('X-PSIFISTON', 'psifiston');
      this.customElementNodeNameToGlyphNameMap.set('X-ANTIKENOMA', 'antikenoma');
      this.customElementNodeNameToGlyphNameMap.set('X-OMALON', 'omalon');
      this.customElementNodeNameToGlyphNameMap.set(
        'X-OMALON-CONNECTING',
        'omalonConnecting',
      );
      this.customElementNodeNameToGlyphNameMap.set('X-HETERON', 'heteron');
      this.customElementNodeNameToGlyphNameMap.set(
        'X-HETERON-CONNECTING',
        'heteronConnecting',
      );
      this.customElementNodeNameToGlyphNameMap.set('X-ENDOFONON', 'endofonon');
      this.customElementNodeNameToGlyphNameMap.set('X-YFEN-ABOVE', 'yfenAbove');
      this.customElementNodeNameToGlyphNameMap.set('X-YFEN-BELOW', 'yfenBelow');
      this.customElementNodeNameToGlyphNameMap.set('X-STAVROS', 'stavros');
      this.customElementNodeNameToGlyphNameMap.set('X-BREATH', 'breath');
      this.customElementNodeNameToGlyphNameMap.set(
        'X-KLASMA-ABOVE',
        'klasmaAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-KLASMA-BELOW',
        'klasmaBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set('X-APLI', 'apli');
      this.customElementNodeNameToGlyphNameMap.set('X-DIPLI', 'dipli');
      this.customElementNodeNameToGlyphNameMap.set('X-TRIPLI', 'tripli');
      this.customElementNodeNameToGlyphNameMap.set('X-TETRAPLI', 'tetrapli');
      this.customElementNodeNameToGlyphNameMap.set('X-KORONIS', 'koronis');
      this.customElementNodeNameToGlyphNameMap.set('X-LEIMMA1', 'leimma1');
      this.customElementNodeNameToGlyphNameMap.set('X-LEIMMA2', 'leimma2');
      this.customElementNodeNameToGlyphNameMap.set('X-LEIMMA3', 'leimma3');
      this.customElementNodeNameToGlyphNameMap.set('X-LEIMMA4', 'leimma4');
      this.customElementNodeNameToGlyphNameMap.set('X-LEIMMA-DOT', 'leimmaDot');
      this.customElementNodeNameToGlyphNameMap.set(
        'X-GORGON-ABOVE',
        'gorgonAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-GORGON-BELOW',
        'gorgonBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-GORGON-DOTTED-LEFT',
        'gorgonDottedLeft',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-GORGON-DOTTED-RIGHT',
        'gorgonDottedRight',
      );
      this.customElementNodeNameToGlyphNameMap.set('X-DIGORGON', 'digorgon');
      this.customElementNodeNameToGlyphNameMap.set(
        'X-DIGORGON-DOTTED-LEFT-BELOW',
        'digorgonDottedLeftBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-DIGORGON-DOTTED-LEFT-ABOVE',
        'digorgonDottedLeftAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-DIGORGON-DOTTED-RIGHT',
        'digorgonDottedRight',
      );
      this.customElementNodeNameToGlyphNameMap.set('X-TRIGORGON', 'trigorgon');
      this.customElementNodeNameToGlyphNameMap.set(
        'X-TRIGORGON-DOTTED-LEFT-BELOW',
        'trigorgonDottedLeftBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-TRIGORGON-DOTTED-LEFT-ABOVE',
        'trigorgonDottedLeftAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-TRIGORGON-DOTTED-RIGHT',
        'trigorgonDottedRight',
      );
      this.customElementNodeNameToGlyphNameMap.set('X-ARGON', 'argon');
      this.customElementNodeNameToGlyphNameMap.set('X-DIARGON', 'diargon');
      this.customElementNodeNameToGlyphNameMap.set('X-TRIARGON', 'triargon');
      this.customElementNodeNameToGlyphNameMap.set(
        'X-GORGON-SECONDARY',
        'gorgonSecondary',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-GORGON-DOTTED-LEFT-SECONDARY',
        'gorgonDottedLeftSecondary',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-GORGON-DOTTED-RIGHT-SECONDARY',
        'gorgonDottedRightSecondary',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-DIGORGON-SECONDARY',
        'digorgonSecondary',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-DIGORGON-DOTTED-LEFT-BELOW-SECONDARY',
        'digorgonDottedLeftBelowSecondary',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-DIGORGON-DOTTED-RIGHT-SECONDARY',
        'digorgonDottedRightSecondary',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-TRIGORGON-SECONDARY',
        'trigorgonSecondary',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-TRIGORGON-DOTTED-LEFT-BELOW-SECONDARY',
        'trigorgonDottedLeftBelowSecondary',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-TRIGORGON-DOTTED-RIGHT-SECONDARY',
        'trigorgonDottedRightSecondary',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-AGOGI-POLI-ARGI',
        'agogiPoliArgi',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-AGOGI-ARGOTERI',
        'agogiArgoteri',
      );
      this.customElementNodeNameToGlyphNameMap.set('X-AGOGI-ARGI', 'agogiArgi');
      this.customElementNodeNameToGlyphNameMap.set(
        'X-AGOGI-METRIA',
        'agogiMetria',
      );
      this.customElementNodeNameToGlyphNameMap.set('X-AGOGI-MESI', 'agogiMesi');
      this.customElementNodeNameToGlyphNameMap.set('X-AGOGI-GORGI', 'agogiGorgi');
      this.customElementNodeNameToGlyphNameMap.set(
        'X-AGOGI-GORGOTERI',
        'agogiGorgoteri',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-AGOGI-POLI-GORGI',
        'agogiPoliGorgi',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-AGOGI-POLI-ARGI-ABOVE',
        'agogiPoliArgiAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-AGOGI-ARGOTERI-ABOVE',
        'agogiArgoteriAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-AGOGI-ARGI-ABOVE',
        'agogiArgiAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-AGOGI-METRIA-ABOVE',
        'agogiMetriaAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-AGOGI-MESI-ABOVE',
        'agogiMesiAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-AGOGI-GORGI-ABOVE',
        'agogiGorgiAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-AGOGI-GORGOTERI-ABOVE',
        'agogiGorgoteriAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-AGOGI-POLI-GORGI-ABOVE',
        'agogiPoliGorgiAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-NOTE-ZO-LOW',
        'martyriaNoteZoLow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-NOTE-NI-LOW',
        'martyriaNoteNiLow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-NOTE-PA-LOW',
        'martyriaNotePaLow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-NOTE-VOU-LOW',
        'martyriaNoteVouLow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-NOTE-GA-LOW',
        'martyriaNoteGaLow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-NOTE-DI-LOW',
        'martyriaNoteDiLow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-NOTE-KE-LOW',
        'martyriaNoteKeLow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-NOTE-ZO',
        'martyriaNoteZo',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-NOTE-NI',
        'martyriaNoteNi',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-NOTE-PA',
        'martyriaNotePa',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-NOTE-VOU',
        'martyriaNoteVou',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-NOTE-GA',
        'martyriaNoteGa',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-NOTE-DI',
        'martyriaNoteDi',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-NOTE-KE',
        'martyriaNoteKe',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-NOTE-ZO-HIGH',
        'martyriaNoteZoHigh',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-NOTE-NI-HIGH',
        'martyriaNoteNiHigh',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-NOTE-PA-HIGH',
        'martyriaNotePaHigh',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-NOTE-VOU-HIGH',
        'martyriaNoteVouHigh',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-NOTE-GA-HIGH',
        'martyriaNoteGaHigh',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-NOTE-DI-HIGH',
        'martyriaNoteDiHigh',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-NOTE-KE-HIGH',
        'martyriaNoteKeHigh',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-TICK',
        'martyriaTick',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-ZO-BELOW',
        'martyriaZoBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-DELTA-BELOW',
        'martyriaDeltaBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-ALPHA-BELOW',
        'martyriaAlphaBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-LEGETOS-BELOW',
        'martyriaLegetosBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-NANA-BELOW',
        'martyriaNanaBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-DELTA-DOTTED-BELOW',
        'martyriaDeltaDottedBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-ALPHA-DOTTED-BELOW',
        'martyriaAlphaDottedBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-HARD-CHROMATIC-PA-BELOW',
        'martyriaHardChromaticPaBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-HARD-CHROMATIC-DI-BELOW',
        'martyriaHardChromaticDiBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-SOFT-CHROMATIC-DI-BELOW',
        'martyriaSoftChromaticDiBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-SOFT-CHROMATIC-KE-BELOW',
        'martyriaSoftChromaticKeBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-ZYGOS-BELOW',
        'martyriaZygosBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-ZO-ABOVE',
        'martyriaZoAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-DELTA-ABOVE',
        'martyriaDeltaAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-ALPHA-ABOVE',
        'martyriaAlphaAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-LEGETOS-ABOVE',
        'martyriaLegetosAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-NANA-ABOVE',
        'martyriaNanaAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-DELTA-DOTTED-ABOVE',
        'martyriaDeltaDottedAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-ALPHA-DOTTED-ABOVE',
        'martyriaAlphaDottedAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-HARD-CHROMATIC-PA-ABOVE',
        'martyriaHardChromaticPaAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-HARD-CHROMATIC-DI-ABOVE',
        'martyriaHardChromaticDiAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-SOFT-CHROMATIC-DI-ABOVE',
        'martyriaSoftChromaticDiAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-SOFT-CHROMATIC-KE-ABOVE',
        'martyriaSoftChromaticKeAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MARTYRIA-ZYGOS-ABOVE',
        'martyriaZygosAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-FTHORA-DIATONIC-NI-LOW-ABOVE',
        'fthoraDiatonicNiLowAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-FTHORA-DIATONIC-PA-ABOVE',
        'fthoraDiatonicPaAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-FTHORA-DIATONIC-VOU-ABOVE',
        'fthoraDiatonicVouAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-FTHORA-DIATONIC-GA-ABOVE',
        'fthoraDiatonicGaAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-FTHORA-DIATONIC-DI-ABOVE',
        'fthoraDiatonicDiAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-FTHORA-DIATONIC-KE-ABOVE',
        'fthoraDiatonicKeAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-FTHORA-DIATONIC-ZO-ABOVE',
        'fthoraDiatonicZoAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-FTHORA-DIATONIC-NI-HIGH-ABOVE',
        'fthoraDiatonicNiHighAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-FTHORA-HARD-CHROMATIC-PA-ABOVE',
        'fthoraHardChromaticPaAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-FTHORA-HARD-CHROMATIC-DI-ABOVE',
        'fthoraHardChromaticDiAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-FTHORA-SOFT-CHROMATIC-DI-ABOVE',
        'fthoraSoftChromaticDiAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-FTHORA-SOFT-CHROMATIC-KE-ABOVE',
        'fthoraSoftChromaticKeAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-FTHORA-ENHARMONIC-ABOVE',
        'fthoraEnharmonicAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-CHROA-ZYGOS-ABOVE',
        'chroaZygosAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-CHROA-KLITON-ABOVE',
        'chroaKlitonAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-CHROA-SPATHI-ABOVE',
        'chroaSpathiAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-FTHORA-DIATONIC-NI-LOW-BELOW',
        'fthoraDiatonicNiLowBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-FTHORA-DIATONIC-PA-BELOW',
        'fthoraDiatonicPaBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-FTHORA-DIATONIC-VOU-BELOW',
        'fthoraDiatonicVouBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-FTHORA-DIATONIC-GA-BELOW',
        'fthoraDiatonicGaBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-FTHORA-DIATONIC-DI-BELOW',
        'fthoraDiatonicDiBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-FTHORA-DIATONIC-KE-BELOW',
        'fthoraDiatonicKeBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-FTHORA-DIATONIC-ZO-BELOW',
        'fthoraDiatonicZoBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-FTHORA-DIATONIC-NI-HIGH-BELOW',
        'fthoraDiatonicNiHighBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-FTHORA-HARD-CHROMATIC-PA-BELOW',
        'fthoraHardChromaticPaBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-FTHORA-HARD-CHROMATIC-DI-BELOW',
        'fthoraHardChromaticDiBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-FTHORA-SOFT-CHROMATIC-DI-BELOW',
        'fthoraSoftChromaticDiBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-FTHORA-SOFT-CHROMATIC-KE-BELOW',
        'fthoraSoftChromaticKeBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-FTHORA-ENHARMONIC-BELOW',
        'fthoraEnharmonicBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-CHROA-ZYGOS-BELOW',
        'chroaZygosBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-CHROA-KLITON-BELOW',
        'chroaKlitonBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-CHROA-SPATHI-BELOW',
        'chroaSpathiBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set('X-DIESIS2', 'diesis2');
      this.customElementNodeNameToGlyphNameMap.set('X-DIESIS4', 'diesis4');
      this.customElementNodeNameToGlyphNameMap.set('X-DIESIS6', 'diesis6');
      this.customElementNodeNameToGlyphNameMap.set('X-DIESIS8', 'diesis8');
      this.customElementNodeNameToGlyphNameMap.set(
        'X-DIESIS-GENIKI-ABOVE',
        'diesisGenikiAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-DIESIS-GENIKI-BELOW',
        'diesisGenikiBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set('X-YFESIS2', 'yfesis2');
      this.customElementNodeNameToGlyphNameMap.set('X-YFESIS4', 'yfesis4');
      this.customElementNodeNameToGlyphNameMap.set('X-YFESIS6', 'yfesis6');
      this.customElementNodeNameToGlyphNameMap.set('X-YFESIS8', 'yfesis8');
      this.customElementNodeNameToGlyphNameMap.set(
        'X-YFESIS-GENIKI-ABOVE',
        'yfesisGenikiAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-YFESIS-GENIKI-BELOW',
        'yfesisGenikiBelow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-BARLINE-SINGLE',
        'barlineSingle',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-BARLINE-DOUBLE',
        'barlineDouble',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-BARLINE-THESEOS',
        'barlineTheseos',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-BARLINE-SHORT-SINGLE',
        'barlineShortSingle',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-BARLINE-SHORT-DOUBLE',
        'barlineShortDouble',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-BARLINE-SHORT-THESEOS',
        'barlineShortTheseos',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MEASURE-NUMBER2',
        'measureNumber2',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MEASURE-NUMBER3',
        'measureNumber3',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MEASURE-NUMBER4',
        'measureNumber4',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MEASURE-NUMBER5',
        'measureNumber5',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MEASURE-NUMBER6',
        'measureNumber6',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MEASURE-NUMBER7',
        'measureNumber7',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MEASURE-NUMBER8',
        'measureNumber8',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-NOTE-INDICATOR-NI',
        'noteIndicatorNi',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-NOTE-INDICATOR-PA',
        'noteIndicatorPa',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-NOTE-INDICATOR-VOU',
        'noteIndicatorVou',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-NOTE-INDICATOR-GA',
        'noteIndicatorGa',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-NOTE-INDICATOR-DI',
        'noteIndicatorDi',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-NOTE-INDICATOR-KE',
        'noteIndicatorKe',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-NOTE-INDICATOR-ZO',
        'noteIndicatorZo',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-ISON-INDICATOR-UNISON',
        'isonIndicatorUnison',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-ISON-INDICATOR-DI-LOW',
        'isonIndicatorDiLow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-ISON-INDICATOR-KE-LOW',
        'isonIndicatorKeLow',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-ISON-INDICATOR-ZO',
        'isonIndicatorZo',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-ISON-INDICATOR-NI',
        'isonIndicatorNi',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-ISON-INDICATOR-PA',
        'isonIndicatorPa',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-ISON-INDICATOR-VOU',
        'isonIndicatorVou',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-ISON-INDICATOR-GA',
        'isonIndicatorGa',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-ISON-INDICATOR-DI',
        'isonIndicatorDi',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-ISON-INDICATOR-KE',
        'isonIndicatorKe',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-ISON-INDICATOR-ZO-HIGH',
        'isonIndicatorZoHigh',
      );
      this.customElementNodeNameToGlyphNameMap.set('X-GORTHMIKON', 'gorthmikon');
      this.customElementNodeNameToGlyphNameMap.set('X-PELASTIKON', 'pelastikon');
      this.customElementNodeNameToGlyphNameMap.set('X-MODE-FIRST', 'modeFirst');
      this.customElementNodeNameToGlyphNameMap.set('X-MODE-SECOND', 'modeSecond');
      this.customElementNodeNameToGlyphNameMap.set('X-MODE-THIRD', 'modeThird');
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MODE-THIRD-NANA',
        'modeThirdNana',
      );
      this.customElementNodeNameToGlyphNameMap.set('X-MODE-FOURTH', 'modeFourth');
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MODE-LEGETOS',
        'modeLegetos',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MODE-PLAGAL-FIRST',
        'modePlagalFirst',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MODE-PLAGAL-SECOND',
        'modePlagalSecond',
      );
      this.customElementNodeNameToGlyphNameMap.set('X-MODE-VARYS', 'modeVarys');
      this.customElementNodeNameToGlyphNameMap.set('X-MODE-VARYS2', 'modeVarys2');
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MODE-PLAGAL-FOURTH',
        'modePlagalFourth',
      );
      this.customElementNodeNameToGlyphNameMap.set('X-MODE-NI', 'modeNi');
      this.customElementNodeNameToGlyphNameMap.set('X-MODE-PA', 'modePa');
      this.customElementNodeNameToGlyphNameMap.set('X-MODE-VOU', 'modeVou');
      this.customElementNodeNameToGlyphNameMap.set('X-MODE-GA', 'modeGa');
      this.customElementNodeNameToGlyphNameMap.set('X-MODE-DI', 'modeDi');
      this.customElementNodeNameToGlyphNameMap.set('X-MODE-KE', 'modeKe');
      this.customElementNodeNameToGlyphNameMap.set('X-MODE-ZO', 'modeZo');
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MODE-OLIGON-KENTIMA-ABOVE',
        'modeOligonKentimaAbove',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MODE-OLIGON-YPSILI',
        'modeOligonYpsili',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MODE-ELAFRON',
        'modeElafron',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MODE-RUNNING-ELAFRON',
        'modeRunningElafron',
      );
      this.customElementNodeNameToGlyphNameMap.set('X-MODE-PLAGAL', 'modePlagal');
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MODE-WORD-ECHOS',
        'modeWordEchos',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MODE-WORD-VARYS',
        'modeWordVarys',
      );
      this.customElementNodeNameToGlyphNameMap.set('X-MODE-ALPHA', 'modeAlpha');
      this.customElementNodeNameToGlyphNameMap.set('X-MODE-BETA', 'modeBeta');
      this.customElementNodeNameToGlyphNameMap.set('X-MODE-GAMMA', 'modeGamma');
      this.customElementNodeNameToGlyphNameMap.set('X-MODE-DELTA', 'modeDelta');
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MODE-ALPHA-CAPITAL',
        'modeAlphaCapital',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MODE-BETA-CAPITAL',
        'modeBetaCapital',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MODE-GAMMA-CAPITAL',
        'modeGammaCapital',
      );
      this.customElementNodeNameToGlyphNameMap.set(
        'X-MODE-DELTA-CAPITAL',
        'modeDeltaCapital',
      );
    }

    getGlyphNameFromNodeName(nodeName) {
      return this.customElementNodeNameToGlyphNameMap.get(nodeName);
    }
  }

  const neumeMappingService = new NeumeMappingService();
  const fontService = new FontService();
  const customElementGlyphMappingService = new CustomElementGlyphMappingService();
  const options = {
    defaultFontFamily: 'Neanes',
    useLegacyPositioning: false,
  };

  var byzhtml = {
    neumeMappingService,
    fontService,
    customElementGlyphMappingService,
    options,
  };

  class Martyria extends HTMLElement {
    constructor(glyphname) {
      super();

      this.attachShadow({ mode: 'open' });

      this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: relative;
          display: inline-block;
        }
      </style>
      <span>
          <slot></slot>
      </span>
    `;
    }
  }

  class Neume extends HTMLElement {
    static get observedAttributes() {
      return ['name', 'font-family'];
    }

    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      this.updateStyle();
    }

    attributeChangedCallback() {
      this.updateStyle();
    }

    updateStyle() {
      if (!this.hasAttribute('name')) {
        console.error('Neume: Missing attribute "name"');
      }

      const content = byzhtml.neumeMappingService.getMapping(
        this.getAttribute('name'),
      );

      let saltStyle = '';
      let fontFamily = byzhtml.options.defaultFontFamily;

      if (this.hasAttribute('font-family')) {
        fontFamily = this.getAttribute('font-family');
      }

      if (this.hasAttribute('salt')) {
        saltStyle = `font-feature-settings: 'salt' ${this.getAttribute('salt')};`;
      }

      this.shadowRoot.innerHTML = `<span style="font-family: ${fontFamily}; ${saltStyle}">${content}</span>`;
    }
  }

  class Note extends HTMLElement {
    constructor(glyphname) {
      super();

      this.attachShadow({ mode: 'open' });

      this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: relative;
          display: inline-block;
        }

        .group {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      </style>
      <span class="group">
          <div><slot></slot></div>
          <div><slot name="lyric"></slot></div>
      </span>
    `;
    }
  }

  class Lyric extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });

      this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: relative;
          display: inline-block;
        }
      </style>
      <span>
          <slot></slot>
      </span>
    `;
    }
  }

  class BaseBody extends HTMLElement {
    static get observedAttributes() {
      return ['font-family'];
    }

    constructor(glyphname) {
      super();

      this.glyphname = glyphname;

      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      this.updateStyle();
    }

    attributeChangedCallback() {
      this.updateStyle();
    }

    updateStyle() {
      let fontFamilyAttr = '';
      let saltAttr = '';

      if (this.hasAttribute('font-family')) {
        fontFamilyAttr = `font-family="${this.getAttribute('font-family')}"`;
      }

      if (this.hasAttribute('salt')) {
        saltAttr = `salt="${this.getAttribute('salt')}"`;
      }

      this.shadowRoot.innerHTML = `<x-neume name="${this.glyphname}" ${fontFamilyAttr} ${saltAttr}></x-neume>`;
    }
  }

  const glyphname$4F = 'ison';

  class Ison extends BaseBody {
    constructor() {
      super(glyphname$4F);
    }
  }

  const glyphname$4E = 'oligon';

  class Oligon extends BaseBody {
    constructor() {
      super(glyphname$4E);
    }
  }

  const glyphname$4D = 'oligonKentimaMiddle';

  class OligonKentimaMiddle extends BaseBody {
    constructor() {
      super(glyphname$4D);
    }
  }

  const glyphname$4C = 'oligonKentimaBelow';

  class OligonKentimaBelow extends BaseBody {
    constructor() {
      super(glyphname$4C);
    }
  }

  const glyphname$4B = 'oligonKentimaAbove';

  class OligonKentimaAbove extends BaseBody {
    constructor() {
      super(glyphname$4B);
    }
  }

  const glyphname$4A = 'oligonYpsiliRight';

  class OligonYpsiliRight extends BaseBody {
    constructor() {
      super(glyphname$4A);
    }
  }

  const glyphname$4z = 'oligonYpsiliLeft';

  class OligonYpsiliLeft extends BaseBody {
    constructor() {
      super(glyphname$4z);
    }
  }

  const glyphname$4y = 'oligonKentimaYpsiliRight';

  class OligonKentimaYpsiliRight extends BaseBody {
    constructor() {
      super(glyphname$4y);
    }
  }

  const glyphname$4x = 'oligonKentimaYpsiliMiddle';

  class OligonKentimaYpsiliMiddle extends BaseBody {
    constructor() {
      super(glyphname$4x);
    }
  }

  const glyphname$4w = 'oligonDoubleYpsili';

  class OligonDoubleYpsili extends BaseBody {
    constructor() {
      super(glyphname$4w);
    }
  }

  const glyphname$4v = 'oligonKentimataDoubleYpsili';

  class OligonKentimataDoubleYpsili extends BaseBody {
    constructor() {
      super(glyphname$4v);
    }
  }

  const glyphname$4u = 'oligonKentimaDoubleYpsiliRight';

  class OligonKentimaDoubleYpsiliRight extends BaseBody {
    constructor() {
      super(glyphname$4u);
    }
  }

  const glyphname$4t = 'oligonKentimaDoubleYpsiliLeft';

  class OligonKentimaDoubleYpsiliLeft extends BaseBody {
    constructor() {
      super(glyphname$4t);
    }
  }

  const glyphname$4s = 'oligonTripleYpsili';

  class OligonTripleYpsili extends BaseBody {
    constructor() {
      super(glyphname$4s);
    }
  }

  const glyphname$4r = 'oligonKentimataTripleYpsili';

  class OligonKentimataTripleYpsili extends BaseBody {
    constructor() {
      super(glyphname$4r);
    }
  }

  const glyphname$4q = 'oligonKentimaTripleYpsili';

  class OligonKentimaTripleYpsili extends BaseBody {
    constructor() {
      super(glyphname$4q);
    }
  }

  const glyphname$4p = 'oligonIson';

  class OligonIson extends BaseBody {
    constructor() {
      super(glyphname$4p);
    }
  }

  const glyphname$4o = 'oligonApostrofos';

  class OligonApostrofos extends BaseBody {
    constructor() {
      super(glyphname$4o);
    }
  }

  const glyphname$4n = 'oligonYporroi';

  class OligonYporroi extends BaseBody {
    constructor() {
      super(glyphname$4n);
    }
  }

  const glyphname$4m = 'oligonElafron';

  class OligonElafron extends BaseBody {
    constructor() {
      super(glyphname$4m);
    }
  }

  const glyphname$4l = 'oligonElafronApostrofos';

  class OligonElafronApostrofos extends BaseBody {
    constructor() {
      super(glyphname$4l);
    }
  }

  const glyphname$4k = 'oligonChamili';

  class OligonChamili extends BaseBody {
    constructor() {
      super(glyphname$4k);
    }
  }

  const glyphname$4j = 'isonApostrofos';

  class IsonApostrofos extends BaseBody {
    constructor() {
      super(glyphname$4j);
    }
  }

  const glyphname$4i = 'apostrofos';

  class Apostrofos extends BaseBody {
    constructor() {
      super(glyphname$4i);
    }
  }

  const glyphname$4h = 'apostrofosSyndesmos';

  class ApostrofosSyndesmos extends BaseBody {
    constructor() {
      super(glyphname$4h);
    }
  }

  const glyphname$4g = 'yporroi';

  class Yporroi extends BaseBody {
    constructor() {
      super(glyphname$4g);
    }
  }

  const glyphname$4f = 'elafron';

  class Elafron extends BaseBody {
    constructor() {
      super(glyphname$4f);
    }
  }

  const glyphname$4e = 'runningElafron';

  class RunningElafron extends BaseBody {
    constructor() {
      super(glyphname$4e);
    }
  }

  const glyphname$4d = 'elafronApostrofos';

  class ElafronApostrofos extends BaseBody {
    constructor() {
      super(glyphname$4d);
    }
  }

  const glyphname$4c = 'chamili';

  class Chamili extends BaseBody {
    constructor() {
      super(glyphname$4c);
    }
  }

  const glyphname$4b = 'chamiliApostrofos';

  class ChamiliApostrofos extends BaseBody {
    constructor() {
      super(glyphname$4b);
    }
  }

  const glyphname$4a = 'chamiliElafron';

  class ChamiliElafron extends BaseBody {
    constructor() {
      super(glyphname$4a);
    }
  }

  const glyphname$49 = 'chamiliElafronApostrofos';

  class ChamiliElafronApostrofos extends BaseBody {
    constructor() {
      super(glyphname$49);
    }
  }

  const glyphname$48 = 'doubleChamili';

  class DoubleChamili extends BaseBody {
    constructor() {
      super(glyphname$48);
    }
  }

  const glyphname$47 = 'doubleChamiliApostrofos';

  class DoubleChamiliApostrofos extends BaseBody {
    constructor() {
      super(glyphname$47);
    }
  }

  const glyphname$46 = 'doubleChamiliElafron';

  class DoubleChamiliElafron extends BaseBody {
    constructor() {
      super(glyphname$46);
    }
  }

  const glyphname$45 = 'doubleChamiliElafronApostrofos';

  class DoubleChamiliElafronApostrofos extends BaseBody {
    constructor() {
      super(glyphname$45);
    }
  }

  const glyphname$44 = 'tripleChamili';

  class TripleChamili extends BaseBody {
    constructor() {
      super(glyphname$44);
    }
  }

  const glyphname$43 = 'petastiIson';

  class PetastiIson extends BaseBody {
    constructor() {
      super(glyphname$43);
    }
  }

  const glyphname$42 = 'petasti';

  class Petasti extends BaseBody {
    constructor() {
      super(glyphname$42);
    }
  }

  const glyphname$41 = 'petastiOligon';

  class PetastiOligon extends BaseBody {
    constructor() {
      super(glyphname$41);
    }
  }

  const glyphname$40 = 'petastiKentima';

  class PetastiKentima extends BaseBody {
    constructor() {
      super(glyphname$40);
    }
  }

  const glyphname$3$ = 'petastiYpsiliRight';

  class PetastiYpsiliRight extends BaseBody {
    constructor() {
      super(glyphname$3$);
    }
  }

  const glyphname$3_ = 'petastiYpsiliLeft';

  class PetastiYpsiliLeft extends BaseBody {
    constructor() {
      super(glyphname$3_);
    }
  }

  const glyphname$3Z = 'petastiKentimaYpsiliRight';

  class PetastiKentimaYpsiliRight extends BaseBody {
    constructor() {
      super(glyphname$3Z);
    }
  }

  const glyphname$3Y = 'petastiKentimaYpsiliMiddle';

  class PetastiKentimaYpsiliMiddle extends BaseBody {
    constructor() {
      super(glyphname$3Y);
    }
  }

  const glyphname$3X = 'petastiDoubleYpsili';

  class PetastiDoubleYpsili extends BaseBody {
    constructor() {
      super(glyphname$3X);
    }
  }

  const glyphname$3W = 'petastiKentimataDoubleYpsili';

  class PetastiKentimataDoubleYpsili extends BaseBody {
    constructor() {
      super(glyphname$3W);
    }
  }

  const glyphname$3V = 'petastiKentimaDoubleYpsiliRight';

  class PetastiKentimaDoubleYpsiliRight extends BaseBody {
    constructor() {
      super(glyphname$3V);
    }
  }

  const glyphname$3U = 'petastiKentimaDoubleYpsiliLeft';

  class PetastiKentimaDoubleYpsiliLeft extends BaseBody {
    constructor() {
      super(glyphname$3U);
    }
  }

  const glyphname$3T = 'petastiTripleYpsili';

  class PetastiTripleYpsili extends BaseBody {
    constructor() {
      super(glyphname$3T);
    }
  }

  const glyphname$3S = 'petastiKentimataTripleYpsili';

  class PetastiKentimataTripleYpsili extends BaseBody {
    constructor() {
      super(glyphname$3S);
    }
  }

  const glyphname$3R = 'petastiKentimaTripleYpsili';

  class PetastiKentimaTripleYpsili extends BaseBody {
    constructor() {
      super(glyphname$3R);
    }
  }

  const glyphname$3Q = 'petastiApostrofos';

  class PetastiApostrofos extends BaseBody {
    constructor() {
      super(glyphname$3Q);
    }
  }

  const glyphname$3P = 'petastiYporroi';

  class PetastiYporroi extends BaseBody {
    constructor() {
      super(glyphname$3P);
    }
  }

  const glyphname$3O = 'petastiElafron';

  class PetastiElafron extends BaseBody {
    constructor() {
      super(glyphname$3O);
    }
  }

  const glyphname$3N = 'petastiRunningElafron';

  class PetastiRunningElafron extends BaseBody {
    constructor() {
      super(glyphname$3N);
    }
  }

  const glyphname$3M = 'petastiElafronApostrofos';

  class PetastiElafronApostrofos extends BaseBody {
    constructor() {
      super(glyphname$3M);
    }
  }

  const glyphname$3L = 'petastiChamili';

  class PetastiChamili extends BaseBody {
    constructor() {
      super(glyphname$3L);
    }
  }

  const glyphname$3K = 'petastiChamiliApostrofos';

  class PetastiChamiliApostrofos extends BaseBody {
    constructor() {
      super(glyphname$3K);
    }
  }

  const glyphname$3J = 'petastiChamiliElafron';

  class PetastiChamiliElafron extends BaseBody {
    constructor() {
      super(glyphname$3J);
    }
  }

  const glyphname$3I = 'petastiChamiliElafronApostrofos';

  class PetastiChamiliElafronApostrofos extends BaseBody {
    constructor() {
      super(glyphname$3I);
    }
  }

  const glyphname$3H = 'petastiDoubleChamili';

  class PetastiDoubleChamili extends BaseBody {
    constructor() {
      super(glyphname$3H);
    }
  }

  const glyphname$3G = 'petastiDoubleChamiliApostrofos';

  class PetastiDoubleChamiliApostrofos extends BaseBody {
    constructor() {
      super(glyphname$3G);
    }
  }

  const glyphname$3F = 'kentima';

  class Kentima extends BaseBody {
    constructor() {
      super(glyphname$3F);
    }
  }

  const glyphname$3E = 'kentimata';

  class Kentimata extends BaseBody {
    constructor() {
      super(glyphname$3E);
    }
  }

  const glyphname$3D = 'oligonKentimataBelow';

  class OligonKentimataBelow extends BaseBody {
    constructor() {
      super(glyphname$3D);
    }
  }

  const glyphname$3C = 'oligonKentimataAbove';

  class OligonKentimataAbove extends BaseBody {
    constructor() {
      super(glyphname$3C);
    }
  }

  const glyphname$3B = 'oligonIsonKentimata';

  class OligonIsonKentimata extends BaseBody {
    constructor() {
      super(glyphname$3B);
    }
  }

  const glyphname$3A = 'oligonKentimaMiddleKentimata';

  class OligonKentimaMiddleKentimata extends BaseBody {
    constructor() {
      super(glyphname$3A);
    }
  }

  const glyphname$3z = 'oligonYpsiliRightKentimata';

  class OligonYpsiliRightKentimata extends BaseBody {
    constructor() {
      super(glyphname$3z);
    }
  }

  const glyphname$3y = 'oligonYpsiliLeftKentimata';

  class OligonYpsiliLeftKentimata extends BaseBody {
    constructor() {
      super(glyphname$3y);
    }
  }

  const glyphname$3x = 'oligonApostrofosKentimata';

  class OligonApostrofosKentimata extends BaseBody {
    constructor() {
      super(glyphname$3x);
    }
  }

  const glyphname$3w = 'oligonYporroiKentimata';

  class OligonYporroiKentimata extends BaseBody {
    constructor() {
      super(glyphname$3w);
    }
  }

  const glyphname$3v = 'oligonElafronKentimata';

  class OligonElafronKentimata extends BaseBody {
    constructor() {
      super(glyphname$3v);
    }
  }

  const glyphname$3u = 'oligonRunningElafronKentimata';

  class OligonRunningElafronKentimata extends BaseBody {
    constructor() {
      super(glyphname$3u);
    }
  }

  const glyphname$3t = 'oligonElafronApostrofosKentimata';

  class OligonElafronApostrofosKentimata extends BaseBody {
    constructor() {
      super(glyphname$3t);
    }
  }

  const glyphname$3s = 'oligonChamiliKentimata';

  class OligonChamiliKentimata extends BaseBody {
    constructor() {
      super(glyphname$3s);
    }
  }

  const glyphname$3r = 'vareia';

  class Vareia extends BaseBody {
    constructor() {
      super(glyphname$3r);
    }
  }

  class BaseMark extends HTMLElement {
    static get observedAttributes() {
      return ['font-family'];
    }

    constructor(glyphname) {
      super();

      this.glyphname = glyphname;

      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      this.updateStyle();
    }

    attributeChangedCallback() {
      this.updateStyle();
    }

    updateStyle() {
      let styleAttr = '';
      let fontFamilyAttr = '';
      let saltAttr = '';

      if (this.hasAttribute('font-family')) {
        fontFamilyAttr = `font-family="${this.getAttribute('font-family')}"`;
      }

      if (this.hasAttribute('salt')) {
        saltAttr = `salt="${this.getAttribute('salt')}"`;
      }

      if (byzhtml.options.useLegacyPositioning) {
        const base =
          byzhtml.customElementGlyphMappingService.getGlyphNameFromNodeName(
            this.parentNode?.querySelector('[base]')?.nodeName,
          );

        if (base) {
          const offset = byzhtml.fontService.getMarkOffset(base, this.glyphname);
          styleAttr = `style="position: absolute; left: ${offset.x}em; top: ${offset.y}em;"`;
        }
      }

      this.shadowRoot.innerHTML = `<x-neume name="${this.glyphname}" ${styleAttr} ${fontFamilyAttr} ${saltAttr}></x-neume>`;
    }
  }

  const glyphname$3q = 'psifiston';

  class Psifiston extends BaseMark {
    constructor() {
      super(glyphname$3q);
    }
  }

  const glyphname$3p = 'antikenoma';

  class Antikenoma extends BaseMark {
    constructor() {
      super(glyphname$3p);
    }
  }

  const glyphname$3o = 'omalon';

  class Omalon extends BaseMark {
    constructor() {
      super(glyphname$3o);
    }
  }

  const glyphname$3n = 'omalonConnecting';

  class OmalonConnecting extends BaseMark {
    constructor() {
      super(glyphname$3n);
    }
  }

  const glyphname$3m = 'heteron';

  class Heteron extends BaseMark {
    constructor() {
      super(glyphname$3m);
    }
  }

  const glyphname$3l = 'heteronConnecting';

  class HeteronConnecting extends BaseMark {
    constructor() {
      super(glyphname$3l);
    }
  }

  const glyphname$3k = 'endofonon';

  class Endofonon extends BaseMark {
    constructor() {
      super(glyphname$3k);
    }
  }

  const glyphname$3j = 'yfenAbove';

  class YfenAbove extends BaseMark {
    constructor() {
      super(glyphname$3j);
    }
  }

  const glyphname$3i = 'yfenBelow';

  class YfenBelow extends BaseMark {
    constructor() {
      super(glyphname$3i);
    }
  }

  const glyphname$3h = 'stavros';

  class Stavros extends BaseBody {
    constructor() {
      super(glyphname$3h);
    }
  }

  const glyphname$3g = 'breath';

  class Breath extends BaseBody {
    constructor() {
      super(glyphname$3g);
    }
  }

  const glyphname$3f = 'klasmaAbove';

  class KlasmaAbove extends BaseMark {
    constructor() {
      super(glyphname$3f);
    }
  }

  const glyphname$3e = 'klasmaBelow';

  class KlasmaBelow extends BaseMark {
    constructor() {
      super(glyphname$3e);
    }
  }

  const glyphname$3d = 'apli';

  class Apli extends BaseMark {
    constructor() {
      super(glyphname$3d);
    }
  }

  const glyphname$3c = 'dipli';

  class Dipli extends BaseMark {
    constructor() {
      super(glyphname$3c);
    }
  }

  const glyphname$3b = 'tripli';

  class Tripli extends BaseMark {
    constructor() {
      super(glyphname$3b);
    }
  }

  const glyphname$3a = 'tetrapli';

  class Tetrapli extends BaseMark {
    constructor() {
      super(glyphname$3a);
    }
  }

  const glyphname$39 = 'koronis';

  class Koronis extends BaseMark {
    constructor() {
      super(glyphname$39);
    }
  }

  const glyphname$38 = 'leimma1';

  class Leimma1 extends BaseBody {
    constructor() {
      super(glyphname$38);
    }
  }

  const glyphname$37 = 'leimma2';

  class Leimma2 extends BaseBody {
    constructor() {
      super(glyphname$37);
    }
  }

  const glyphname$36 = 'leimma3';

  class Leimma3 extends BaseBody {
    constructor() {
      super(glyphname$36);
    }
  }

  const glyphname$35 = 'leimma4';

  class Leimma4 extends BaseBody {
    constructor() {
      super(glyphname$35);
    }
  }

  const glyphname$34 = 'leimmaDot';

  class LeimmaDot extends BaseMark {
    constructor() {
      super(glyphname$34);
    }
  }

  const glyphname$33 = 'gorgonAbove';

  class GorgonAbove extends BaseMark {
    constructor() {
      super(glyphname$33);
    }
  }

  const glyphname$32 = 'gorgonBelow';

  class GorgonBelow extends BaseMark {
    constructor() {
      super(glyphname$32);
    }
  }

  const glyphname$31 = 'gorgonDottedLeft';

  class GorgonDottedLeft extends BaseMark {
    constructor() {
      super(glyphname$31);
    }
  }

  const glyphname$30 = 'gorgonDottedRight';

  class GorgonDottedRight extends BaseMark {
    constructor() {
      super(glyphname$30);
    }
  }

  const glyphname$2$ = 'digorgon';

  class Digorgon extends BaseMark {
    constructor() {
      super(glyphname$2$);
    }
  }

  const glyphname$2_ = 'digorgonDottedLeftBelow';

  class DigorgonDottedLeftBelow extends BaseMark {
    constructor() {
      super(glyphname$2_);
    }
  }

  const glyphname$2Z = 'digorgonDottedLeftAbove';

  class DigorgonDottedLeftAbove extends BaseMark {
    constructor() {
      super(glyphname$2Z);
    }
  }

  const glyphname$2Y = 'digorgonDottedRight';

  class DigorgonDottedRight extends BaseMark {
    constructor() {
      super(glyphname$2Y);
    }
  }

  const glyphname$2X = 'trigorgon';

  class Trigorgon extends BaseMark {
    constructor() {
      super(glyphname$2X);
    }
  }

  const glyphname$2W = 'trigorgonDottedLeftBelow';

  class TrigorgonDottedLeftBelow extends BaseMark {
    constructor() {
      super(glyphname$2W);
    }
  }

  const glyphname$2V = 'trigorgonDottedLeftAbove';

  class TrigorgonDottedLeftAbove extends BaseMark {
    constructor() {
      super(glyphname$2V);
    }
  }

  const glyphname$2U = 'trigorgonDottedRight';

  class TrigorgonDottedRight extends BaseMark {
    constructor() {
      super(glyphname$2U);
    }
  }

  const glyphname$2T = 'argon';

  class Argon extends BaseMark {
    constructor() {
      super(glyphname$2T);
    }
  }

  const glyphname$2S = 'diargon';

  class Diargon extends BaseMark {
    constructor() {
      super(glyphname$2S);
    }
  }

  const glyphname$2R = 'triargon';

  class Triargon extends BaseMark {
    constructor() {
      super(glyphname$2R);
    }
  }

  const glyphname$2Q = 'gorgonSecondary';

  class GorgonSecondary extends BaseMark {
    constructor() {
      super(glyphname$2Q);
    }
  }

  const glyphname$2P = 'gorgonDottedLeftSecondary';

  class GorgonDottedLeftSecondary extends BaseMark {
    constructor() {
      super(glyphname$2P);
    }
  }

  const glyphname$2O = 'gorgonDottedRightSecondary';

  class GorgonDottedRightSecondary extends BaseMark {
    constructor() {
      super(glyphname$2O);
    }
  }

  const glyphname$2N = 'digorgonSecondary';

  class DigorgonSecondary extends BaseMark {
    constructor() {
      super(glyphname$2N);
    }
  }

  const glyphname$2M = 'digorgonDottedLeftBelowSecondary';

  class DigorgonDottedLeftBelowSecondary extends BaseMark {
    constructor() {
      super(glyphname$2M);
    }
  }

  const glyphname$2L = 'digorgonDottedRightSecondary';

  class DigorgonDottedRightSecondary extends BaseMark {
    constructor() {
      super(glyphname$2L);
    }
  }

  const glyphname$2K = 'trigorgonSecondary';

  class TrigorgonSecondary extends BaseMark {
    constructor() {
      super(glyphname$2K);
    }
  }

  const glyphname$2J = 'trigorgonDottedLeftBelowSecondary';

  class TrigorgonDottedLeftBelowSecondary extends BaseMark {
    constructor() {
      super(glyphname$2J);
    }
  }

  const glyphname$2I = 'trigorgonDottedRightSecondary';

  class TrigorgonDottedRightSecondary extends BaseMark {
    constructor() {
      super(glyphname$2I);
    }
  }

  const glyphname$2H = 'agogiPoliArgi';

  class AgogiPoliArgi extends BaseBody {
    constructor() {
      super(glyphname$2H);
    }
  }

  const glyphname$2G = 'agogiArgoteri';

  class AgogiArgoteri extends BaseBody {
    constructor() {
      super(glyphname$2G);
    }
  }

  const glyphname$2F = 'agogiArgi';

  class AgogiArgi extends BaseBody {
    constructor() {
      super(glyphname$2F);
    }
  }

  const glyphname$2E = 'agogiMetria';

  class AgogiMetria extends BaseBody {
    constructor() {
      super(glyphname$2E);
    }
  }

  const glyphname$2D = 'agogiMesi';

  class AgogiMesi extends BaseBody {
    constructor() {
      super(glyphname$2D);
    }
  }

  const glyphname$2C = 'agogiGorgi';

  class AgogiGorgi extends BaseBody {
    constructor() {
      super(glyphname$2C);
    }
  }

  const glyphname$2B = 'agogiGorgoteri';

  class AgogiGorgoteri extends BaseBody {
    constructor() {
      super(glyphname$2B);
    }
  }

  const glyphname$2A = 'agogiPoliGorgi';

  class AgogiPoliGorgi extends BaseBody {
    constructor() {
      super(glyphname$2A);
    }
  }

  const glyphname$2z = 'agogiPoliArgiAbove';

  class AgogiPoliArgiAbove extends BaseMark {
    constructor() {
      super(glyphname$2z);
    }
  }

  const glyphname$2y = 'agogiArgoteriAbove';

  class AgogiArgoteriAbove extends BaseMark {
    constructor() {
      super(glyphname$2y);
    }
  }

  const glyphname$2x = 'agogiArgiAbove';

  class AgogiArgiAbove extends BaseMark {
    constructor() {
      super(glyphname$2x);
    }
  }

  const glyphname$2w = 'agogiMetriaAbove';

  class AgogiMetriaAbove extends BaseMark {
    constructor() {
      super(glyphname$2w);
    }
  }

  const glyphname$2v = 'agogiMesiAbove';

  class AgogiMesiAbove extends BaseMark {
    constructor() {
      super(glyphname$2v);
    }
  }

  const glyphname$2u = 'agogiGorgiAbove';

  class AgogiGorgiAbove extends BaseMark {
    constructor() {
      super(glyphname$2u);
    }
  }

  const glyphname$2t = 'agogiGorgoteriAbove';

  class AgogiGorgoteriAbove extends BaseMark {
    constructor() {
      super(glyphname$2t);
    }
  }

  const glyphname$2s = 'agogiPoliGorgiAbove';

  class AgogiPoliGorgiAbove extends BaseMark {
    constructor() {
      super(glyphname$2s);
    }
  }

  const glyphname$2r = 'martyriaNoteZoLow';

  class MartyriaNoteZoLow extends BaseBody {
    constructor() {
      super(glyphname$2r);
    }
  }

  const glyphname$2q = 'martyriaNoteNiLow';

  class MartyriaNoteNiLow extends BaseBody {
    constructor() {
      super(glyphname$2q);
    }
  }

  const glyphname$2p = 'martyriaNotePaLow';

  class MartyriaNotePaLow extends BaseBody {
    constructor() {
      super(glyphname$2p);
    }
  }

  const glyphname$2o = 'martyriaNoteVouLow';

  class MartyriaNoteVouLow extends BaseBody {
    constructor() {
      super(glyphname$2o);
    }
  }

  const glyphname$2n = 'martyriaNoteGaLow';

  class MartyriaNoteGaLow extends BaseBody {
    constructor() {
      super(glyphname$2n);
    }
  }

  const glyphname$2m = 'martyriaNoteDiLow';

  class MartyriaNoteDiLow extends BaseBody {
    constructor() {
      super(glyphname$2m);
    }
  }

  const glyphname$2l = 'martyriaNoteKeLow';

  class MartyriaNoteKeLow extends BaseBody {
    constructor() {
      super(glyphname$2l);
    }
  }

  const glyphname$2k = 'martyriaNoteZo';

  class MartyriaNoteZo extends BaseBody {
    constructor() {
      super(glyphname$2k);
    }
  }

  const glyphname$2j = 'martyriaNoteNi';

  class MartyriaNoteNi extends BaseBody {
    constructor() {
      super(glyphname$2j);
    }
  }

  const glyphname$2i = 'martyriaNotePa';

  class MartyriaNotePa extends BaseBody {
    constructor() {
      super(glyphname$2i);
    }
  }

  const glyphname$2h = 'martyriaNoteVou';

  class MartyriaNoteVou extends BaseBody {
    constructor() {
      super(glyphname$2h);
    }
  }

  const glyphname$2g = 'martyriaNoteGa';

  class MartyriaNoteGa extends BaseBody {
    constructor() {
      super(glyphname$2g);
    }
  }

  const glyphname$2f = 'martyriaNoteDi';

  class MartyriaNoteDi extends BaseBody {
    constructor() {
      super(glyphname$2f);
    }
  }

  const glyphname$2e = 'martyriaNoteKe';

  class MartyriaNoteKe extends BaseBody {
    constructor() {
      super(glyphname$2e);
    }
  }

  const glyphname$2d = 'martyriaNoteZoHigh';

  class MartyriaNoteZoHigh extends BaseBody {
    constructor() {
      super(glyphname$2d);
    }
  }

  const glyphname$2c = 'martyriaNoteNiHigh';

  class MartyriaNoteNiHigh extends BaseBody {
    constructor() {
      super(glyphname$2c);
    }
  }

  const glyphname$2b = 'martyriaNotePaHigh';

  class MartyriaNotePaHigh extends BaseBody {
    constructor() {
      super(glyphname$2b);
    }
  }

  const glyphname$2a = 'martyriaNoteVouHigh';

  class MartyriaNoteVouHigh extends BaseBody {
    constructor() {
      super(glyphname$2a);
    }
  }

  const glyphname$29 = 'martyriaNoteGaHigh';

  class MartyriaNoteGaHigh extends BaseBody {
    constructor() {
      super(glyphname$29);
    }
  }

  const glyphname$28 = 'martyriaNoteDiHigh';

  class MartyriaNoteDiHigh extends BaseBody {
    constructor() {
      super(glyphname$28);
    }
  }

  const glyphname$27 = 'martyriaNoteKeHigh';

  class MartyriaNoteKeHigh extends BaseBody {
    constructor() {
      super(glyphname$27);
    }
  }

  const glyphname$26 = 'martyriaTick';

  class MartyriaTick extends BaseMark {
    constructor() {
      super(glyphname$26);
    }
  }

  const glyphname$25 = 'martyriaZoBelow';

  class MartyriaZoBelow extends BaseMark {
    constructor() {
      super(glyphname$25);
    }
  }

  const glyphname$24 = 'martyriaDeltaBelow';

  class MartyriaDeltaBelow extends BaseMark {
    constructor() {
      super(glyphname$24);
    }
  }

  const glyphname$23 = 'martyriaAlphaBelow';

  class MartyriaAlphaBelow extends BaseMark {
    constructor() {
      super(glyphname$23);
    }
  }

  const glyphname$22 = 'martyriaLegetosBelow';

  class MartyriaLegetosBelow extends BaseMark {
    constructor() {
      super(glyphname$22);
    }
  }

  const glyphname$21 = 'martyriaNanaBelow';

  class MartyriaNanaBelow extends BaseMark {
    constructor() {
      super(glyphname$21);
    }
  }

  const glyphname$20 = 'martyriaDeltaDottedBelow';

  class MartyriaDeltaDottedBelow extends BaseMark {
    constructor() {
      super(glyphname$20);
    }
  }

  const glyphname$1$ = 'martyriaAlphaDottedBelow';

  class MartyriaAlphaDottedBelow extends BaseMark {
    constructor() {
      super(glyphname$1$);
    }
  }

  const glyphname$1_ = 'martyriaHardChromaticPaBelow';

  class MartyriaHardChromaticPaBelow extends BaseMark {
    constructor() {
      super(glyphname$1_);
    }
  }

  const glyphname$1Z = 'martyriaHardChromaticDiBelow';

  class MartyriaHardChromaticDiBelow extends BaseMark {
    constructor() {
      super(glyphname$1Z);
    }
  }

  const glyphname$1Y = 'martyriaSoftChromaticDiBelow';

  class MartyriaSoftChromaticDiBelow extends BaseMark {
    constructor() {
      super(glyphname$1Y);
    }
  }

  const glyphname$1X = 'martyriaSoftChromaticKeBelow';

  class MartyriaSoftChromaticKeBelow extends BaseMark {
    constructor() {
      super(glyphname$1X);
    }
  }

  const glyphname$1W = 'martyriaZygosBelow';

  class MartyriaZygosBelow extends BaseMark {
    constructor() {
      super(glyphname$1W);
    }
  }

  const glyphname$1V = 'martyriaZoAbove';

  class MartyriaZoAbove extends BaseMark {
    constructor() {
      super(glyphname$1V);
    }
  }

  const glyphname$1U = 'martyriaDeltaAbove';

  class MartyriaDeltaAbove extends BaseMark {
    constructor() {
      super(glyphname$1U);
    }
  }

  const glyphname$1T = 'martyriaAlphaAbove';

  class MartyriaAlphaAbove extends BaseMark {
    constructor() {
      super(glyphname$1T);
    }
  }

  const glyphname$1S = 'martyriaLegetosAbove';

  class MartyriaLegetosAbove extends BaseMark {
    constructor() {
      super(glyphname$1S);
    }
  }

  const glyphname$1R = 'martyriaNanaAbove';

  class MartyriaNanaAbove extends BaseMark {
    constructor() {
      super(glyphname$1R);
    }
  }

  const glyphname$1Q = 'martyriaDeltaDottedAbove';

  class MartyriaDeltaDottedAbove extends BaseMark {
    constructor() {
      super(glyphname$1Q);
    }
  }

  const glyphname$1P = 'martyriaAlphaDottedAbove';

  class MartyriaAlphaDottedAbove extends BaseMark {
    constructor() {
      super(glyphname$1P);
    }
  }

  const glyphname$1O = 'martyriaHardChromaticPaAbove';

  class MartyriaHardChromaticPaAbove extends BaseMark {
    constructor() {
      super(glyphname$1O);
    }
  }

  const glyphname$1N = 'martyriaHardChromaticDiAbove';

  class MartyriaHardChromaticDiAbove extends BaseMark {
    constructor() {
      super(glyphname$1N);
    }
  }

  const glyphname$1M = 'martyriaSoftChromaticDiAbove';

  class MartyriaSoftChromaticDiAbove extends BaseMark {
    constructor() {
      super(glyphname$1M);
    }
  }

  const glyphname$1L = 'martyriaSoftChromaticKeAbove';

  class MartyriaSoftChromaticKeAbove extends BaseMark {
    constructor() {
      super(glyphname$1L);
    }
  }

  const glyphname$1K = 'martyriaZygosAbove';

  class MartyriaZygosAbove extends BaseMark {
    constructor() {
      super(glyphname$1K);
    }
  }

  const glyphname$1J = 'fthoraDiatonicNiLowAbove';

  class FthoraDiatonicNiLowAbove extends BaseMark {
    constructor() {
      super(glyphname$1J);
    }
  }

  const glyphname$1I = 'fthoraDiatonicPaAbove';

  class FthoraDiatonicPaAbove extends BaseMark {
    constructor() {
      super(glyphname$1I);
    }
  }

  const glyphname$1H = 'fthoraDiatonicVouAbove';

  class FthoraDiatonicVouAbove extends BaseMark {
    constructor() {
      super(glyphname$1H);
    }
  }

  const glyphname$1G = 'fthoraDiatonicGaAbove';

  class FthoraDiatonicGaAbove extends BaseMark {
    constructor() {
      super(glyphname$1G);
    }
  }

  const glyphname$1F = 'fthoraDiatonicDiAbove';

  class FthoraDiatonicDiAbove extends BaseMark {
    constructor() {
      super(glyphname$1F);
    }
  }

  const glyphname$1E = 'fthoraDiatonicKeAbove';

  class FthoraDiatonicKeAbove extends BaseMark {
    constructor() {
      super(glyphname$1E);
    }
  }

  const glyphname$1D = 'fthoraDiatonicZoAbove';

  class FthoraDiatonicZoAbove extends BaseMark {
    constructor() {
      super(glyphname$1D);
    }
  }

  const glyphname$1C = 'fthoraDiatonicNiHighAbove';

  class FthoraDiatonicNiHighAbove extends BaseMark {
    constructor() {
      super(glyphname$1C);
    }
  }

  const glyphname$1B = 'fthoraHardChromaticPaAbove';

  class FthoraHardChromaticPaAbove extends BaseMark {
    constructor() {
      super(glyphname$1B);
    }
  }

  const glyphname$1A = 'fthoraHardChromaticDiAbove';

  class FthoraHardChromaticDiAbove extends BaseMark {
    constructor() {
      super(glyphname$1A);
    }
  }

  const glyphname$1z = 'fthoraSoftChromaticDiAbove';

  class FthoraSoftChromaticDiAbove extends BaseMark {
    constructor() {
      super(glyphname$1z);
    }
  }

  const glyphname$1y = 'fthoraSoftChromaticKeAbove';

  class FthoraSoftChromaticKeAbove extends BaseMark {
    constructor() {
      super(glyphname$1y);
    }
  }

  const glyphname$1x = 'fthoraEnharmonicAbove';

  class FthoraEnharmonicAbove extends BaseMark {
    constructor() {
      super(glyphname$1x);
    }
  }

  const glyphname$1w = 'chroaZygosAbove';

  class ChroaZygosAbove extends BaseMark {
    constructor() {
      super(glyphname$1w);
    }
  }

  const glyphname$1v = 'chroaKlitonAbove';

  class ChroaKlitonAbove extends BaseMark {
    constructor() {
      super(glyphname$1v);
    }
  }

  const glyphname$1u = 'chroaSpathiAbove';

  class ChroaSpathiAbove extends BaseMark {
    constructor() {
      super(glyphname$1u);
    }
  }

  const glyphname$1t = 'fthoraDiatonicNiLowBelow';

  class FthoraDiatonicNiLowBelow extends BaseMark {
    constructor() {
      super(glyphname$1t);
    }
  }

  const glyphname$1s = 'fthoraDiatonicPaBelow';

  class FthoraDiatonicPaBelow extends BaseMark {
    constructor() {
      super(glyphname$1s);
    }
  }

  const glyphname$1r = 'fthoraDiatonicVouBelow';

  class FthoraDiatonicVouBelow extends BaseMark {
    constructor() {
      super(glyphname$1r);
    }
  }

  const glyphname$1q = 'fthoraDiatonicGaBelow';

  class FthoraDiatonicGaBelow extends BaseMark {
    constructor() {
      super(glyphname$1q);
    }
  }

  const glyphname$1p = 'fthoraDiatonicDiBelow';

  class FthoraDiatonicDiBelow extends BaseMark {
    constructor() {
      super(glyphname$1p);
    }
  }

  const glyphname$1o = 'fthoraDiatonicKeBelow';

  class FthoraDiatonicKeBelow extends BaseMark {
    constructor() {
      super(glyphname$1o);
    }
  }

  const glyphname$1n = 'fthoraDiatonicZoBelow';

  class FthoraDiatonicZoBelow extends BaseMark {
    constructor() {
      super(glyphname$1n);
    }
  }

  const glyphname$1m = 'fthoraDiatonicNiHighBelow';

  class FthoraDiatonicNiHighBelow extends BaseMark {
    constructor() {
      super(glyphname$1m);
    }
  }

  const glyphname$1l = 'fthoraHardChromaticPaBelow';

  class FthoraHardChromaticPaBelow extends BaseMark {
    constructor() {
      super(glyphname$1l);
    }
  }

  const glyphname$1k = 'fthoraHardChromaticDiBelow';

  class FthoraHardChromaticDiBelow extends BaseMark {
    constructor() {
      super(glyphname$1k);
    }
  }

  const glyphname$1j = 'fthoraSoftChromaticDiBelow';

  class FthoraSoftChromaticDiBelow extends BaseMark {
    constructor() {
      super(glyphname$1j);
    }
  }

  const glyphname$1i = 'fthoraSoftChromaticKeBelow';

  class FthoraSoftChromaticKeBelow extends BaseMark {
    constructor() {
      super(glyphname$1i);
    }
  }

  const glyphname$1h = 'fthoraEnharmonicBelow';

  class FthoraEnharmonicBelow extends BaseMark {
    constructor() {
      super(glyphname$1h);
    }
  }

  const glyphname$1g = 'chroaZygosBelow';

  class ChroaZygosBelow extends BaseMark {
    constructor() {
      super(glyphname$1g);
    }
  }

  const glyphname$1f = 'chroaKlitonBelow';

  class ChroaKlitonBelow extends BaseMark {
    constructor() {
      super(glyphname$1f);
    }
  }

  const glyphname$1e = 'chroaSpathiBelow';

  class ChroaSpathiBelow extends BaseMark {
    constructor() {
      super(glyphname$1e);
    }
  }

  const glyphname$1d = 'diesis2';

  class Diesis2 extends BaseMark {
    constructor() {
      super(glyphname$1d);
    }
  }

  const glyphname$1c = 'diesis4';

  class Diesis4 extends BaseMark {
    constructor() {
      super(glyphname$1c);
    }
  }

  const glyphname$1b = 'diesis6';

  class Diesis6 extends BaseMark {
    constructor() {
      super(glyphname$1b);
    }
  }

  const glyphname$1a = 'diesis8';

  class Diesis8 extends BaseMark {
    constructor() {
      super(glyphname$1a);
    }
  }

  const glyphname$19 = 'diesisGenikiAbove';

  class DiesisGenikiAbove extends BaseMark {
    constructor() {
      super(glyphname$19);
    }
  }

  const glyphname$18 = 'diesisGenikiBelow';

  class DiesisGenikiBelow extends BaseMark {
    constructor() {
      super(glyphname$18);
    }
  }

  const glyphname$17 = 'yfesis2';

  class Yfesis2 extends BaseMark {
    constructor() {
      super(glyphname$17);
    }
  }

  const glyphname$16 = 'yfesis4';

  class Yfesis4 extends BaseMark {
    constructor() {
      super(glyphname$16);
    }
  }

  const glyphname$15 = 'yfesis6';

  class Yfesis6 extends BaseMark {
    constructor() {
      super(glyphname$15);
    }
  }

  const glyphname$14 = 'yfesis8';

  class Yfesis8 extends BaseMark {
    constructor() {
      super(glyphname$14);
    }
  }

  const glyphname$13 = 'yfesisGenikiAbove';

  class YfesisGenikiAbove extends BaseMark {
    constructor() {
      super(glyphname$13);
    }
  }

  const glyphname$12 = 'yfesisGenikiBelow';

  class YfesisGenikiBelow extends BaseMark {
    constructor() {
      super(glyphname$12);
    }
  }

  const glyphname$11 = 'barlineSingle';

  class BarlineSingle extends BaseBody {
    constructor() {
      super(glyphname$11);
    }
  }

  const glyphname$10 = 'barlineDouble';

  class BarlineDouble extends BaseBody {
    constructor() {
      super(glyphname$10);
    }
  }

  const glyphname$$ = 'barlineTheseos';

  class BarlineTheseos extends BaseBody {
    constructor() {
      super(glyphname$$);
    }
  }

  const glyphname$_ = 'barlineShortSingle';

  class BarlineShortSingle extends BaseBody {
    constructor() {
      super(glyphname$_);
    }
  }

  const glyphname$Z = 'barlineShortDouble';

  class BarlineShortDouble extends BaseBody {
    constructor() {
      super(glyphname$Z);
    }
  }

  const glyphname$Y = 'barlineShortTheseos';

  class BarlineShortTheseos extends BaseBody {
    constructor() {
      super(glyphname$Y);
    }
  }

  const glyphname$X = 'measureNumber2';

  class MeasureNumber2 extends BaseMark {
    constructor() {
      super(glyphname$X);
    }
  }

  const glyphname$W = 'measureNumber3';

  class MeasureNumber3 extends BaseMark {
    constructor() {
      super(glyphname$W);
    }
  }

  const glyphname$V = 'measureNumber4';

  class MeasureNumber4 extends BaseMark {
    constructor() {
      super(glyphname$V);
    }
  }

  const glyphname$U = 'measureNumber5';

  class MeasureNumber5 extends BaseMark {
    constructor() {
      super(glyphname$U);
    }
  }

  const glyphname$T = 'measureNumber6';

  class MeasureNumber6 extends BaseMark {
    constructor() {
      super(glyphname$T);
    }
  }

  const glyphname$S = 'measureNumber7';

  class MeasureNumber7 extends BaseMark {
    constructor() {
      super(glyphname$S);
    }
  }

  const glyphname$R = 'measureNumber8';

  class MeasureNumber8 extends BaseMark {
    constructor() {
      super(glyphname$R);
    }
  }

  const glyphname$Q = 'noteIndicatorNi';

  class NoteIndicatorNi extends BaseMark {
    constructor() {
      super(glyphname$Q);
    }
  }

  const glyphname$P = 'noteIndicatorPa';

  class NoteIndicatorPa extends BaseMark {
    constructor() {
      super(glyphname$P);
    }
  }

  const glyphname$O = 'noteIndicatorVou';

  class NoteIndicatorVou extends BaseMark {
    constructor() {
      super(glyphname$O);
    }
  }

  const glyphname$N = 'noteIndicatorGa';

  class NoteIndicatorGa extends BaseMark {
    constructor() {
      super(glyphname$N);
    }
  }

  const glyphname$M = 'noteIndicatorDi';

  class NoteIndicatorDi extends BaseMark {
    constructor() {
      super(glyphname$M);
    }
  }

  const glyphname$L = 'noteIndicatorKe';

  class NoteIndicatorKe extends BaseMark {
    constructor() {
      super(glyphname$L);
    }
  }

  const glyphname$K = 'noteIndicatorZo';

  class NoteIndicatorZo extends BaseMark {
    constructor() {
      super(glyphname$K);
    }
  }

  const glyphname$J = 'isonIndicatorUnison';

  class IsonIndicatorUnison extends BaseMark {
    constructor() {
      super(glyphname$J);
    }
  }

  const glyphname$I = 'isonIndicatorDiLow';

  class IsonIndicatorDiLow extends BaseMark {
    constructor() {
      super(glyphname$I);
    }
  }

  const glyphname$H = 'isonIndicatorKeLow';

  class IsonIndicatorKeLow extends BaseMark {
    constructor() {
      super(glyphname$H);
    }
  }

  const glyphname$G = 'isonIndicatorZo';

  class IsonIndicatorZo extends BaseMark {
    constructor() {
      super(glyphname$G);
    }
  }

  const glyphname$F = 'isonIndicatorNi';

  class IsonIndicatorNi extends BaseMark {
    constructor() {
      super(glyphname$F);
    }
  }

  const glyphname$E = 'isonIndicatorPa';

  class IsonIndicatorPa extends BaseMark {
    constructor() {
      super(glyphname$E);
    }
  }

  const glyphname$D = 'isonIndicatorVou';

  class IsonIndicatorVou extends BaseMark {
    constructor() {
      super(glyphname$D);
    }
  }

  const glyphname$C = 'isonIndicatorGa';

  class IsonIndicatorGa extends BaseMark {
    constructor() {
      super(glyphname$C);
    }
  }

  const glyphname$B = 'isonIndicatorDi';

  class IsonIndicatorDi extends BaseMark {
    constructor() {
      super(glyphname$B);
    }
  }

  const glyphname$A = 'isonIndicatorKe';

  class IsonIndicatorKe extends BaseMark {
    constructor() {
      super(glyphname$A);
    }
  }

  const glyphname$z = 'isonIndicatorZoHigh';

  class IsonIndicatorZoHigh extends BaseMark {
    constructor() {
      super(glyphname$z);
    }
  }

  const glyphname$y = 'gorthmikon';

  class Gorthmikon extends BaseMark {
    constructor() {
      super(glyphname$y);
    }
  }

  const glyphname$x = 'pelastikon';

  class Pelastikon extends BaseMark {
    constructor() {
      super(glyphname$x);
    }
  }

  const glyphname$w = 'modeFirst';

  class ModeFirst extends BaseMark {
    constructor() {
      super(glyphname$w);
    }
  }

  const glyphname$v = 'modeSecond';

  class ModeSecond extends BaseMark {
    constructor() {
      super(glyphname$v);
    }
  }

  const glyphname$u = 'modeThird';

  class ModeThird extends BaseMark {
    constructor() {
      super(glyphname$u);
    }
  }

  const glyphname$t = 'modeThirdNana';

  class ModeThirdNana extends BaseMark {
    constructor() {
      super(glyphname$t);
    }
  }

  const glyphname$s = 'modeFourth';

  class ModeFourth extends BaseMark {
    constructor() {
      super(glyphname$s);
    }
  }

  const glyphname$r = 'modeLegetos';

  class ModeLegetos extends BaseMark {
    constructor() {
      super(glyphname$r);
    }
  }

  const glyphname$q = 'modePlagalFirst';

  class ModePlagalFirst extends BaseMark {
    constructor() {
      super(glyphname$q);
    }
  }

  const glyphname$p = 'modePlagalSecond';

  class ModePlagalSecond extends BaseMark {
    constructor() {
      super(glyphname$p);
    }
  }

  const glyphname$o = 'modeVarys';

  class ModeVarys extends BaseMark {
    constructor() {
      super(glyphname$o);
    }
  }

  const glyphname$n = 'modeVarys2';

  class ModeVarys2 extends BaseMark {
    constructor() {
      super(glyphname$n);
    }
  }

  const glyphname$m = 'modePlagalFourth';

  class ModePlagalFourth extends BaseMark {
    constructor() {
      super(glyphname$m);
    }
  }

  const glyphname$l = 'modeNi';

  class ModeNi extends BaseMark {
    constructor() {
      super(glyphname$l);
    }
  }

  const glyphname$k = 'modePa';

  class ModePa extends BaseMark {
    constructor() {
      super(glyphname$k);
    }
  }

  const glyphname$j = 'modeVou';

  class ModeVou extends BaseMark {
    constructor() {
      super(glyphname$j);
    }
  }

  const glyphname$i = 'modeGa';

  class ModeGa extends BaseMark {
    constructor() {
      super(glyphname$i);
    }
  }

  const glyphname$h = 'modeDi';

  class ModeDi extends BaseMark {
    constructor() {
      super(glyphname$h);
    }
  }

  const glyphname$g = 'modeKe';

  class ModeKe extends BaseMark {
    constructor() {
      super(glyphname$g);
    }
  }

  const glyphname$f = 'modeZo';

  class ModeZo extends BaseMark {
    constructor() {
      super(glyphname$f);
    }
  }

  const glyphname$e = 'modeOligonKentimaAbove';

  class ModeOligonKentimaAbove extends BaseMark {
    constructor() {
      super(glyphname$e);
    }
  }

  const glyphname$d = 'modeOligonYpsili';

  class ModeOligonYpsili extends BaseMark {
    constructor() {
      super(glyphname$d);
    }
  }

  const glyphname$c = 'modeElafron';

  class ModeElafron extends BaseMark {
    constructor() {
      super(glyphname$c);
    }
  }

  const glyphname$b = 'modeRunningElafron';

  class ModeRunningElafron extends BaseMark {
    constructor() {
      super(glyphname$b);
    }
  }

  const glyphname$a = 'modePlagal';

  class ModePlagal extends BaseMark {
    constructor() {
      super(glyphname$a);
    }
  }

  const glyphname$9 = 'modeWordEchos';

  class ModeWordEchos extends BaseMark {
    constructor() {
      super(glyphname$9);
    }
  }

  const glyphname$8 = 'modeWordVarys';

  class ModeWordVarys extends BaseMark {
    constructor() {
      super(glyphname$8);
    }
  }

  const glyphname$7 = 'modeAlpha';

  class ModeAlpha extends BaseMark {
    constructor() {
      super(glyphname$7);
    }
  }

  const glyphname$6 = 'modeBeta';

  class ModeBeta extends BaseMark {
    constructor() {
      super(glyphname$6);
    }
  }

  const glyphname$5 = 'modeGamma';

  class ModeGamma extends BaseMark {
    constructor() {
      super(glyphname$5);
    }
  }

  const glyphname$4 = 'modeDelta';

  class ModeDelta extends BaseMark {
    constructor() {
      super(glyphname$4);
    }
  }

  const glyphname$3 = 'modeAlphaCapital';

  class ModeAlphaCapital extends BaseMark {
    constructor() {
      super(glyphname$3);
    }
  }

  const glyphname$2 = 'modeBetaCapital';

  class ModeBetaCapital extends BaseMark {
    constructor() {
      super(glyphname$2);
    }
  }

  const glyphname$1 = 'modeGammaCapital';

  class ModeGammaCapital extends BaseMark {
    constructor() {
      super(glyphname$1);
    }
  }

  const glyphname = 'modeDeltaCapital';

  class ModeDeltaCapital extends BaseMark {
    constructor() {
      super(glyphname);
    }
  }

  function defineCustomElementsCharactersCodegen() {
    customElements.define('x-ison', Ison);
    customElements.define('x-oligon', Oligon);
    customElements.define('x-oligon-kentima-middle', OligonKentimaMiddle);
    customElements.define('x-oligon-kentima-below', OligonKentimaBelow);
    customElements.define('x-oligon-kentima-above', OligonKentimaAbove);
    customElements.define('x-oligon-ypsili-right', OligonYpsiliRight);
    customElements.define('x-oligon-ypsili-left', OligonYpsiliLeft);
    customElements.define(
      'x-oligon-kentima-ypsili-right',
      OligonKentimaYpsiliRight,
    );
    customElements.define(
      'x-oligon-kentima-ypsili-middle',
      OligonKentimaYpsiliMiddle,
    );
    customElements.define('x-oligon-double-ypsili', OligonDoubleYpsili);
    customElements.define(
      'x-oligon-kentimata-double-ypsili',
      OligonKentimataDoubleYpsili,
    );
    customElements.define(
      'x-oligon-kentima-double-ypsili-right',
      OligonKentimaDoubleYpsiliRight,
    );
    customElements.define(
      'x-oligon-kentima-double-ypsili-left',
      OligonKentimaDoubleYpsiliLeft,
    );
    customElements.define('x-oligon-triple-ypsili', OligonTripleYpsili);
    customElements.define(
      'x-oligon-kentimata-triple-ypsili',
      OligonKentimataTripleYpsili,
    );
    customElements.define(
      'x-oligon-kentima-triple-ypsili',
      OligonKentimaTripleYpsili,
    );
    customElements.define('x-oligon-ison', OligonIson);
    customElements.define('x-oligon-apostrofos', OligonApostrofos);
    customElements.define('x-oligon-yporroi', OligonYporroi);
    customElements.define('x-oligon-elafron', OligonElafron);
    customElements.define('x-oligon-elafron-apostrofos', OligonElafronApostrofos);
    customElements.define('x-oligon-chamili', OligonChamili);
    customElements.define('x-ison-apostrofos', IsonApostrofos);
    customElements.define('x-apostrofos', Apostrofos);
    customElements.define('x-apostrofos-syndesmos', ApostrofosSyndesmos);
    customElements.define('x-yporroi', Yporroi);
    customElements.define('x-elafron', Elafron);
    customElements.define('x-running-elafron', RunningElafron);
    customElements.define('x-elafron-apostrofos', ElafronApostrofos);
    customElements.define('x-chamili', Chamili);
    customElements.define('x-chamili-apostrofos', ChamiliApostrofos);
    customElements.define('x-chamili-elafron', ChamiliElafron);
    customElements.define(
      'x-chamili-elafron-apostrofos',
      ChamiliElafronApostrofos,
    );
    customElements.define('x-double-chamili', DoubleChamili);
    customElements.define('x-double-chamili-apostrofos', DoubleChamiliApostrofos);
    customElements.define('x-double-chamili-elafron', DoubleChamiliElafron);
    customElements.define(
      'x-double-chamili-elafron-apostrofos',
      DoubleChamiliElafronApostrofos,
    );
    customElements.define('x-triple-chamili', TripleChamili);
    customElements.define('x-petasti-ison', PetastiIson);
    customElements.define('x-petasti', Petasti);
    customElements.define('x-petasti-oligon', PetastiOligon);
    customElements.define('x-petasti-kentima', PetastiKentima);
    customElements.define('x-petasti-ypsili-right', PetastiYpsiliRight);
    customElements.define('x-petasti-ypsili-left', PetastiYpsiliLeft);
    customElements.define(
      'x-petasti-kentima-ypsili-right',
      PetastiKentimaYpsiliRight,
    );
    customElements.define(
      'x-petasti-kentima-ypsili-middle',
      PetastiKentimaYpsiliMiddle,
    );
    customElements.define('x-petasti-double-ypsili', PetastiDoubleYpsili);
    customElements.define(
      'x-petasti-kentimata-double-ypsili',
      PetastiKentimataDoubleYpsili,
    );
    customElements.define(
      'x-petasti-kentima-double-ypsili-right',
      PetastiKentimaDoubleYpsiliRight,
    );
    customElements.define(
      'x-petasti-kentima-double-ypsili-left',
      PetastiKentimaDoubleYpsiliLeft,
    );
    customElements.define('x-petasti-triple-ypsili', PetastiTripleYpsili);
    customElements.define(
      'x-petasti-kentimata-triple-ypsili',
      PetastiKentimataTripleYpsili,
    );
    customElements.define(
      'x-petasti-kentima-triple-ypsili',
      PetastiKentimaTripleYpsili,
    );
    customElements.define('x-petasti-apostrofos', PetastiApostrofos);
    customElements.define('x-petasti-yporroi', PetastiYporroi);
    customElements.define('x-petasti-elafron', PetastiElafron);
    customElements.define('x-petasti-running-elafron', PetastiRunningElafron);
    customElements.define(
      'x-petasti-elafron-apostrofos',
      PetastiElafronApostrofos,
    );
    customElements.define('x-petasti-chamili', PetastiChamili);
    customElements.define(
      'x-petasti-chamili-apostrofos',
      PetastiChamiliApostrofos,
    );
    customElements.define('x-petasti-chamili-elafron', PetastiChamiliElafron);
    customElements.define(
      'x-petasti-chamili-elafron-apostrofos',
      PetastiChamiliElafronApostrofos,
    );
    customElements.define('x-petasti-double-chamili', PetastiDoubleChamili);
    customElements.define(
      'x-petasti-double-chamili-apostrofos',
      PetastiDoubleChamiliApostrofos,
    );
    customElements.define('x-kentima', Kentima);
    customElements.define('x-kentimata', Kentimata);
    customElements.define('x-oligon-kentimata-below', OligonKentimataBelow);
    customElements.define('x-oligon-kentimata-above', OligonKentimataAbove);
    customElements.define('x-oligon-ison-kentimata', OligonIsonKentimata);
    customElements.define(
      'x-oligon-kentima-middle-kentimata',
      OligonKentimaMiddleKentimata,
    );
    customElements.define(
      'x-oligon-ypsili-right-kentimata',
      OligonYpsiliRightKentimata,
    );
    customElements.define(
      'x-oligon-ypsili-left-kentimata',
      OligonYpsiliLeftKentimata,
    );
    customElements.define(
      'x-oligon-apostrofos-kentimata',
      OligonApostrofosKentimata,
    );
    customElements.define('x-oligon-yporroi-kentimata', OligonYporroiKentimata);
    customElements.define('x-oligon-elafron-kentimata', OligonElafronKentimata);
    customElements.define(
      'x-oligon-running-elafron-kentimata',
      OligonRunningElafronKentimata,
    );
    customElements.define(
      'x-oligon-elafron-apostrofos-kentimata',
      OligonElafronApostrofosKentimata,
    );
    customElements.define('x-oligon-chamili-kentimata', OligonChamiliKentimata);
    customElements.define('x-vareia', Vareia);
    customElements.define('x-psifiston', Psifiston);
    customElements.define('x-antikenoma', Antikenoma);
    customElements.define('x-omalon', Omalon);
    customElements.define('x-omalon-connecting', OmalonConnecting);
    customElements.define('x-heteron', Heteron);
    customElements.define('x-heteron-connecting', HeteronConnecting);
    customElements.define('x-endofonon', Endofonon);
    customElements.define('x-yfen-above', YfenAbove);
    customElements.define('x-yfen-below', YfenBelow);
    customElements.define('x-stavros', Stavros);
    customElements.define('x-breath', Breath);
    customElements.define('x-klasma-above', KlasmaAbove);
    customElements.define('x-klasma-below', KlasmaBelow);
    customElements.define('x-apli', Apli);
    customElements.define('x-dipli', Dipli);
    customElements.define('x-tripli', Tripli);
    customElements.define('x-tetrapli', Tetrapli);
    customElements.define('x-koronis', Koronis);
    customElements.define('x-leimma1', Leimma1);
    customElements.define('x-leimma2', Leimma2);
    customElements.define('x-leimma3', Leimma3);
    customElements.define('x-leimma4', Leimma4);
    customElements.define('x-leimma-dot', LeimmaDot);
    customElements.define('x-gorgon-above', GorgonAbove);
    customElements.define('x-gorgon-below', GorgonBelow);
    customElements.define('x-gorgon-dotted-left', GorgonDottedLeft);
    customElements.define('x-gorgon-dotted-right', GorgonDottedRight);
    customElements.define('x-digorgon', Digorgon);
    customElements.define(
      'x-digorgon-dotted-left-below',
      DigorgonDottedLeftBelow,
    );
    customElements.define(
      'x-digorgon-dotted-left-above',
      DigorgonDottedLeftAbove,
    );
    customElements.define('x-digorgon-dotted-right', DigorgonDottedRight);
    customElements.define('x-trigorgon', Trigorgon);
    customElements.define(
      'x-trigorgon-dotted-left-below',
      TrigorgonDottedLeftBelow,
    );
    customElements.define(
      'x-trigorgon-dotted-left-above',
      TrigorgonDottedLeftAbove,
    );
    customElements.define('x-trigorgon-dotted-right', TrigorgonDottedRight);
    customElements.define('x-argon', Argon);
    customElements.define('x-diargon', Diargon);
    customElements.define('x-triargon', Triargon);
    customElements.define('x-gorgon-secondary', GorgonSecondary);
    customElements.define(
      'x-gorgon-dotted-left-secondary',
      GorgonDottedLeftSecondary,
    );
    customElements.define(
      'x-gorgon-dotted-right-secondary',
      GorgonDottedRightSecondary,
    );
    customElements.define('x-digorgon-secondary', DigorgonSecondary);
    customElements.define(
      'x-digorgon-dotted-left-below-secondary',
      DigorgonDottedLeftBelowSecondary,
    );
    customElements.define(
      'x-digorgon-dotted-right-secondary',
      DigorgonDottedRightSecondary,
    );
    customElements.define('x-trigorgon-secondary', TrigorgonSecondary);
    customElements.define(
      'x-trigorgon-dotted-left-below-secondary',
      TrigorgonDottedLeftBelowSecondary,
    );
    customElements.define(
      'x-trigorgon-dotted-right-secondary',
      TrigorgonDottedRightSecondary,
    );
    customElements.define('x-agogi-poli-argi', AgogiPoliArgi);
    customElements.define('x-agogi-argoteri', AgogiArgoteri);
    customElements.define('x-agogi-argi', AgogiArgi);
    customElements.define('x-agogi-metria', AgogiMetria);
    customElements.define('x-agogi-mesi', AgogiMesi);
    customElements.define('x-agogi-gorgi', AgogiGorgi);
    customElements.define('x-agogi-gorgoteri', AgogiGorgoteri);
    customElements.define('x-agogi-poli-gorgi', AgogiPoliGorgi);
    customElements.define('x-agogi-poli-argi-above', AgogiPoliArgiAbove);
    customElements.define('x-agogi-argoteri-above', AgogiArgoteriAbove);
    customElements.define('x-agogi-argi-above', AgogiArgiAbove);
    customElements.define('x-agogi-metria-above', AgogiMetriaAbove);
    customElements.define('x-agogi-mesi-above', AgogiMesiAbove);
    customElements.define('x-agogi-gorgi-above', AgogiGorgiAbove);
    customElements.define('x-agogi-gorgoteri-above', AgogiGorgoteriAbove);
    customElements.define('x-agogi-poli-gorgi-above', AgogiPoliGorgiAbove);
    customElements.define('x-martyria-note-zo-low', MartyriaNoteZoLow);
    customElements.define('x-martyria-note-ni-low', MartyriaNoteNiLow);
    customElements.define('x-martyria-note-pa-low', MartyriaNotePaLow);
    customElements.define('x-martyria-note-vou-low', MartyriaNoteVouLow);
    customElements.define('x-martyria-note-ga-low', MartyriaNoteGaLow);
    customElements.define('x-martyria-note-di-low', MartyriaNoteDiLow);
    customElements.define('x-martyria-note-ke-low', MartyriaNoteKeLow);
    customElements.define('x-martyria-note-zo', MartyriaNoteZo);
    customElements.define('x-martyria-note-ni', MartyriaNoteNi);
    customElements.define('x-martyria-note-pa', MartyriaNotePa);
    customElements.define('x-martyria-note-vou', MartyriaNoteVou);
    customElements.define('x-martyria-note-ga', MartyriaNoteGa);
    customElements.define('x-martyria-note-di', MartyriaNoteDi);
    customElements.define('x-martyria-note-ke', MartyriaNoteKe);
    customElements.define('x-martyria-note-zo-high', MartyriaNoteZoHigh);
    customElements.define('x-martyria-note-ni-high', MartyriaNoteNiHigh);
    customElements.define('x-martyria-note-pa-high', MartyriaNotePaHigh);
    customElements.define('x-martyria-note-vou-high', MartyriaNoteVouHigh);
    customElements.define('x-martyria-note-ga-high', MartyriaNoteGaHigh);
    customElements.define('x-martyria-note-di-high', MartyriaNoteDiHigh);
    customElements.define('x-martyria-note-ke-high', MartyriaNoteKeHigh);
    customElements.define('x-martyria-tick', MartyriaTick);
    customElements.define('x-martyria-zo-below', MartyriaZoBelow);
    customElements.define('x-martyria-delta-below', MartyriaDeltaBelow);
    customElements.define('x-martyria-alpha-below', MartyriaAlphaBelow);
    customElements.define('x-martyria-legetos-below', MartyriaLegetosBelow);
    customElements.define('x-martyria-nana-below', MartyriaNanaBelow);
    customElements.define(
      'x-martyria-delta-dotted-below',
      MartyriaDeltaDottedBelow,
    );
    customElements.define(
      'x-martyria-alpha-dotted-below',
      MartyriaAlphaDottedBelow,
    );
    customElements.define(
      'x-martyria-hard-chromatic-pa-below',
      MartyriaHardChromaticPaBelow,
    );
    customElements.define(
      'x-martyria-hard-chromatic-di-below',
      MartyriaHardChromaticDiBelow,
    );
    customElements.define(
      'x-martyria-soft-chromatic-di-below',
      MartyriaSoftChromaticDiBelow,
    );
    customElements.define(
      'x-martyria-soft-chromatic-ke-below',
      MartyriaSoftChromaticKeBelow,
    );
    customElements.define('x-martyria-zygos-below', MartyriaZygosBelow);
    customElements.define('x-martyria-zo-above', MartyriaZoAbove);
    customElements.define('x-martyria-delta-above', MartyriaDeltaAbove);
    customElements.define('x-martyria-alpha-above', MartyriaAlphaAbove);
    customElements.define('x-martyria-legetos-above', MartyriaLegetosAbove);
    customElements.define('x-martyria-nana-above', MartyriaNanaAbove);
    customElements.define(
      'x-martyria-delta-dotted-above',
      MartyriaDeltaDottedAbove,
    );
    customElements.define(
      'x-martyria-alpha-dotted-above',
      MartyriaAlphaDottedAbove,
    );
    customElements.define(
      'x-martyria-hard-chromatic-pa-above',
      MartyriaHardChromaticPaAbove,
    );
    customElements.define(
      'x-martyria-hard-chromatic-di-above',
      MartyriaHardChromaticDiAbove,
    );
    customElements.define(
      'x-martyria-soft-chromatic-di-above',
      MartyriaSoftChromaticDiAbove,
    );
    customElements.define(
      'x-martyria-soft-chromatic-ke-above',
      MartyriaSoftChromaticKeAbove,
    );
    customElements.define('x-martyria-zygos-above', MartyriaZygosAbove);
    customElements.define(
      'x-fthora-diatonic-ni-low-above',
      FthoraDiatonicNiLowAbove,
    );
    customElements.define('x-fthora-diatonic-pa-above', FthoraDiatonicPaAbove);
    customElements.define('x-fthora-diatonic-vou-above', FthoraDiatonicVouAbove);
    customElements.define('x-fthora-diatonic-ga-above', FthoraDiatonicGaAbove);
    customElements.define('x-fthora-diatonic-di-above', FthoraDiatonicDiAbove);
    customElements.define('x-fthora-diatonic-ke-above', FthoraDiatonicKeAbove);
    customElements.define('x-fthora-diatonic-zo-above', FthoraDiatonicZoAbove);
    customElements.define(
      'x-fthora-diatonic-ni-high-above',
      FthoraDiatonicNiHighAbove,
    );
    customElements.define(
      'x-fthora-hard-chromatic-pa-above',
      FthoraHardChromaticPaAbove,
    );
    customElements.define(
      'x-fthora-hard-chromatic-di-above',
      FthoraHardChromaticDiAbove,
    );
    customElements.define(
      'x-fthora-soft-chromatic-di-above',
      FthoraSoftChromaticDiAbove,
    );
    customElements.define(
      'x-fthora-soft-chromatic-ke-above',
      FthoraSoftChromaticKeAbove,
    );
    customElements.define('x-fthora-enharmonic-above', FthoraEnharmonicAbove);
    customElements.define('x-chroa-zygos-above', ChroaZygosAbove);
    customElements.define('x-chroa-kliton-above', ChroaKlitonAbove);
    customElements.define('x-chroa-spathi-above', ChroaSpathiAbove);
    customElements.define(
      'x-fthora-diatonic-ni-low-below',
      FthoraDiatonicNiLowBelow,
    );
    customElements.define('x-fthora-diatonic-pa-below', FthoraDiatonicPaBelow);
    customElements.define('x-fthora-diatonic-vou-below', FthoraDiatonicVouBelow);
    customElements.define('x-fthora-diatonic-ga-below', FthoraDiatonicGaBelow);
    customElements.define('x-fthora-diatonic-di-below', FthoraDiatonicDiBelow);
    customElements.define('x-fthora-diatonic-ke-below', FthoraDiatonicKeBelow);
    customElements.define('x-fthora-diatonic-zo-below', FthoraDiatonicZoBelow);
    customElements.define(
      'x-fthora-diatonic-ni-high-below',
      FthoraDiatonicNiHighBelow,
    );
    customElements.define(
      'x-fthora-hard-chromatic-pa-below',
      FthoraHardChromaticPaBelow,
    );
    customElements.define(
      'x-fthora-hard-chromatic-di-below',
      FthoraHardChromaticDiBelow,
    );
    customElements.define(
      'x-fthora-soft-chromatic-di-below',
      FthoraSoftChromaticDiBelow,
    );
    customElements.define(
      'x-fthora-soft-chromatic-ke-below',
      FthoraSoftChromaticKeBelow,
    );
    customElements.define('x-fthora-enharmonic-below', FthoraEnharmonicBelow);
    customElements.define('x-chroa-zygos-below', ChroaZygosBelow);
    customElements.define('x-chroa-kliton-below', ChroaKlitonBelow);
    customElements.define('x-chroa-spathi-below', ChroaSpathiBelow);
    customElements.define('x-diesis2', Diesis2);
    customElements.define('x-diesis4', Diesis4);
    customElements.define('x-diesis6', Diesis6);
    customElements.define('x-diesis8', Diesis8);
    customElements.define('x-diesis-geniki-above', DiesisGenikiAbove);
    customElements.define('x-diesis-geniki-below', DiesisGenikiBelow);
    customElements.define('x-yfesis2', Yfesis2);
    customElements.define('x-yfesis4', Yfesis4);
    customElements.define('x-yfesis6', Yfesis6);
    customElements.define('x-yfesis8', Yfesis8);
    customElements.define('x-yfesis-geniki-above', YfesisGenikiAbove);
    customElements.define('x-yfesis-geniki-below', YfesisGenikiBelow);
    customElements.define('x-barline-single', BarlineSingle);
    customElements.define('x-barline-double', BarlineDouble);
    customElements.define('x-barline-theseos', BarlineTheseos);
    customElements.define('x-barline-short-single', BarlineShortSingle);
    customElements.define('x-barline-short-double', BarlineShortDouble);
    customElements.define('x-barline-short-theseos', BarlineShortTheseos);
    customElements.define('x-measure-number2', MeasureNumber2);
    customElements.define('x-measure-number3', MeasureNumber3);
    customElements.define('x-measure-number4', MeasureNumber4);
    customElements.define('x-measure-number5', MeasureNumber5);
    customElements.define('x-measure-number6', MeasureNumber6);
    customElements.define('x-measure-number7', MeasureNumber7);
    customElements.define('x-measure-number8', MeasureNumber8);
    customElements.define('x-note-indicator-ni', NoteIndicatorNi);
    customElements.define('x-note-indicator-pa', NoteIndicatorPa);
    customElements.define('x-note-indicator-vou', NoteIndicatorVou);
    customElements.define('x-note-indicator-ga', NoteIndicatorGa);
    customElements.define('x-note-indicator-di', NoteIndicatorDi);
    customElements.define('x-note-indicator-ke', NoteIndicatorKe);
    customElements.define('x-note-indicator-zo', NoteIndicatorZo);
    customElements.define('x-ison-indicator-unison', IsonIndicatorUnison);
    customElements.define('x-ison-indicator-di-low', IsonIndicatorDiLow);
    customElements.define('x-ison-indicator-ke-low', IsonIndicatorKeLow);
    customElements.define('x-ison-indicator-zo', IsonIndicatorZo);
    customElements.define('x-ison-indicator-ni', IsonIndicatorNi);
    customElements.define('x-ison-indicator-pa', IsonIndicatorPa);
    customElements.define('x-ison-indicator-vou', IsonIndicatorVou);
    customElements.define('x-ison-indicator-ga', IsonIndicatorGa);
    customElements.define('x-ison-indicator-di', IsonIndicatorDi);
    customElements.define('x-ison-indicator-ke', IsonIndicatorKe);
    customElements.define('x-ison-indicator-zo-high', IsonIndicatorZoHigh);
    customElements.define('x-gorthmikon', Gorthmikon);
    customElements.define('x-pelastikon', Pelastikon);
    customElements.define('x-mode-first', ModeFirst);
    customElements.define('x-mode-second', ModeSecond);
    customElements.define('x-mode-third', ModeThird);
    customElements.define('x-mode-third-nana', ModeThirdNana);
    customElements.define('x-mode-fourth', ModeFourth);
    customElements.define('x-mode-legetos', ModeLegetos);
    customElements.define('x-mode-plagal-first', ModePlagalFirst);
    customElements.define('x-mode-plagal-second', ModePlagalSecond);
    customElements.define('x-mode-varys', ModeVarys);
    customElements.define('x-mode-varys2', ModeVarys2);
    customElements.define('x-mode-plagal-fourth', ModePlagalFourth);
    customElements.define('x-mode-ni', ModeNi);
    customElements.define('x-mode-pa', ModePa);
    customElements.define('x-mode-vou', ModeVou);
    customElements.define('x-mode-ga', ModeGa);
    customElements.define('x-mode-di', ModeDi);
    customElements.define('x-mode-ke', ModeKe);
    customElements.define('x-mode-zo', ModeZo);
    customElements.define('x-mode-oligon-kentima-above', ModeOligonKentimaAbove);
    customElements.define('x-mode-oligon-ypsili', ModeOligonYpsili);
    customElements.define('x-mode-elafron', ModeElafron);
    customElements.define('x-mode-running-elafron', ModeRunningElafron);
    customElements.define('x-mode-plagal', ModePlagal);
    customElements.define('x-mode-word-echos', ModeWordEchos);
    customElements.define('x-mode-word-varys', ModeWordVarys);
    customElements.define('x-mode-alpha', ModeAlpha);
    customElements.define('x-mode-beta', ModeBeta);
    customElements.define('x-mode-gamma', ModeGamma);
    customElements.define('x-mode-delta', ModeDelta);
    customElements.define('x-mode-alpha-capital', ModeAlphaCapital);
    customElements.define('x-mode-beta-capital', ModeBetaCapital);
    customElements.define('x-mode-gamma-capital', ModeGammaCapital);
    customElements.define('x-mode-delta-capital', ModeDeltaCapital);
  }

  function defineCustomElements() {
    customElements.define('x-lyric', Lyric);
    customElements.define('x-martyria', Martyria);
    customElements.define('x-neume', Neume);
    customElements.define('x-note', Note);

    defineCustomElementsCharactersCodegen();
  }

  defineCustomElements();

  return byzhtml;

})();
//# sourceMappingURL=byzhtml.js.map
