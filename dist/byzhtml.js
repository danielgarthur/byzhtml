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
    }
  }

  class FontService {
    constructor() {
      this.fontFamilyMetadataMap = new Map();
    }

    loadMap(fontFamily, metadata) {
      this.fontFamilyMetadataMap.set(fontFamily, metadata);
    }

    getMetadata(fontFamily) {
      return this.fontFamilyMetadataMap.get(fontFamily);
    }

    // Not needed right now, but could be useful later
    // getAdvanceWidth(fontFamily, glyph) {
    //   return metadata.glyphAdvanceWidths[glyph];
    // }

    getMarkOffset(fontFamily, base, mark) {
      const metadata = this.getMetadata(fontFamily);

      if (!metadata) {
        console.error(
          `FontService.getMarkOffset: no metadata loaded for font family "${fontFamily}"`,
        );

        return;
      }

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

    // Not needed right now, but could be useful later
    // getMarkAnchorOffset(fontFamily, base, mark) {
    //   const metadata = this.getMetadata(fontFamily);

    //   if (!metadata) {
    //     console.error(
    //       `FontService.getMarkAnchorOffset: no metadata loaded for font family "${fontFamily}"`,
    //     );
    //   }

    //   const markAnchorName = Object.keys(metadata.glyphsWithAnchors[mark]).find(
    //     (x) => metadata.glyphsWithAnchors[base][x] != null,
    //   );

    //   if (markAnchorName == null) {
    //     console.warn(`Missing anchor for base: ${base} mark: ${mark}`);
    //     return { x: 0, y: 0 };
    //   }

    //   const baseAnchor = metadata.glyphsWithAnchors[base][markAnchorName];

    //   return {
    //     x: baseAnchor[0],
    //     y: metadata.metrics.winAscent - baseAnchor[1],
    //   };
    // }
  }

  class CustomElementGlyphMappingService {
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
        return;
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
          <div class="lyrics-container"><slot name="lyric"></slot><slot name="melisma"></slot></div>
      </span>
    `;
    }
  }

  class Spacer extends HTMLElement {
    static get observedAttributes() {
      return ['width'];
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
      if (!this.hasAttribute('width')) {
        console.error('Neume: Missing attribute "width"');
      }

      this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          width: ${this.getAttribute('width')};
        }
      </style>`;
    }
  }

  class SpacerVareia extends HTMLElement {
    static get observedAttributes() {
      return ['font-family', 'font-size'];
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
      getComputedStyle(this);
      let fontFamily = byzhtml.options.defaultFontFamily;
      let fontSizeAttr = '';

      if (this.hasAttribute('font-family')) {
        fontFamily = this.getAttribute('font-family');
      }

      if (this.hasAttribute('font-size')) {
        fontSizeAttr = `font-size: ${this.getAttribute('font-size')};`;
      }

      this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          font-family: ${fontFamily};
          ${fontSizeAttr}
        }
      </style>`;
    }
  }

  class Lyric extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `<span><slot></slot></span>`;
    }
  }

  class Melisma extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
    <style>
      .melisma {
        position: absolute;
        display: inline;
        overflow: hidden!important;
        white-space: pre;
      }
    </style>
    <span class="melisma"><slot></slot></span>`;
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
        let fontFamily = byzhtml.options.defaultFontFamily;

        if (this.hasAttribute('font-family')) {
          fontFamily = this.getAttribute('font-family');
        }

        const base =
          byzhtml.customElementGlyphMappingService.getGlyphNameFromNodeName(
            this.parentNode?.querySelector('[base]')?.nodeName,
          );

        if (base) {
          const offset = byzhtml.fontService.getMarkOffset(
            fontFamily,
            base,
            this.glyphname,
          );
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
    customElements.define('x-melisma', Melisma);
    customElements.define('x-neume', Neume);
    customElements.define('x-note', Note);
    customElements.define('x-spacer', Spacer);
    customElements.define('x-spacer-vareia', SpacerVareia);

    defineCustomElementsCharactersCodegen();
  }

  defineCustomElements();

  return byzhtml;

})();
//# sourceMappingURL=byzhtml.js.map
