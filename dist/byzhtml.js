// byzhtml v1.0.4
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

    // getAdvanceWidth(fontFamily, glyph) {
    //   return this.getMetadata(fontFamily).glyphAdvanceWidths[glyph];
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

  const neumeMappingService = new NeumeMappingService();
  const fontService = new FontService();
  const options = {
    defaultFontFamily: 'Neanes',
    useWebkitPositioning: false,
  };

  var byzhtml = {
    neumeMappingService,
    fontService,
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

  const CssVars = {
    LyricFontFamily: '--byz-lyric-font-family',
    LyricFontSize: '--byz-lyric-font-size',
    LyricOffsetHorizontal: '--byz-lyric-offset-h',
    LyricOffsetVertical: '--byz-lyric-offset-v',

    NeumeFontSize: '--byz-neume-font-size',

    DropCapFontFamily: '--byz-drop-cap-font-family',
    DropCapFontSize: '--byz-drop-cap-font-size',
    DropCapColor: '--byz-drop-cap-color',
    DropCapOffsetVertical: '--byz-drop-cap-offset-v',

    SpacerWidthVareia: '--byz-spacer-width-vareia',
    SpacerWidthApostrofos: '--byz-spacer-width-apostrofos',

    ColorAccidental: '--byz-color-accidental',
    ColorAgogi: '--byz-color-agogi',
    ColorBarline: '--byz-color-barline',
    ColorFthora: '--byz-color-fthora',
    ColorGorgon: '--byz-color-gorgon',
    ColorHeteron: '--byz-color-heteron',
    ColorIsonIndicator: '--byz-color-ison-indicator',
    ColorKoronis: '--byz-color-koronis',
    ColorMartyria: '--byz-color-martyria',
    ColorMeasureNumber: '--byz-color-measure-number',
    ColorNoteIndicator: '--byz-color-note-indicator',
  };

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

      this.shadowRoot.innerHTML = `<span style="font-family: ${fontFamily}; font-size: var(${CssVars.NeumeFontSize}); ${saltStyle}">${content}</span>`;
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

        .neume-group {
          position: relative;
          text-align: left;
        }

        .lyrics-container {
          display: flex;
          margin-top: var(${CssVars.LyricOffsetVertical}) 
        }
      </style>
      <span class="group">
          <div class="neume-group">
            <slot></slot>
          </div>
          <div class="lyrics-container">
            <slot name="lyric"></slot>
            <slot name="melisma"></slot>
          </div>
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
          line-height: 0;
          width: ${this.getAttribute('width')};
        }
      </style>`;
    }
  }

  class SpacerApostrofos extends HTMLElement {
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
      let fontFamily = byzhtml.options.defaultFontFamily;
      let fontSizeAttr = `font-size: var(${CssVars.NeumeFontSize})`;

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
          width: var(${CssVars.SpacerWidthApostrofos});
          font-family: ${fontFamily};
          ${fontSizeAttr}
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
      let fontFamily = byzhtml.options.defaultFontFamily;
      let fontSizeAttr = `font-size: var(${CssVars.NeumeFontSize})`;

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
          width: var(${CssVars.SpacerWidthVareia});
          font-family: ${fontFamily};
          ${fontSizeAttr}
        }
      </style>`;
    }
  }

  class DropCap extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: relative;
          line-height: 0;
          top: var(${CssVars.DropCapOffsetVertical});
          color: var(${CssVars.DropCapColor});
          font-size: var(${CssVars.DropCapFontSize});
          font-family: var(${CssVars.DropCapFontFamily});
        }
      </style>
      <span><slot></slot></span>`;
    }
  }

  class Lyric extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `<span style="font-family: var(${CssVars.LyricFontFamily}); font-size: var(${CssVars.LyricFontSize}); margin: 0 var(${CssVars.LyricOffsetHorizontal});"><slot></slot></span>`;
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
        display: inline-flex;
        overflow: hidden!important;
        white-space: pre;
        font-family: var(${CssVars.LyricFontFamily});
        font-size: var(${CssVars.LyricFontSize});
        margin-left: calc(-1* var(${CssVars.LyricOffsetHorizontal})); 
      }
    </style>
    <span class="melisma"><slot></slot></span>`;
    }
  }

  class BaseBody extends HTMLElement {
    static get observedAttributes() {
      return ['font-family'];
    }

    constructor(glyphname, args) {
      super();

      this.glyphname = glyphname;
      this.args = args;

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

      let otherStyles = '';

      if (this.args) {
        if (this.args.color) {
          otherStyles += ` color: var(${this.args.color});`;
        }
      }

      this.shadowRoot.innerHTML = `<style>:host { font-size: var(${CssVars.NeumeFontSize} );${otherStyles}}</style><x-neume name="${this.glyphname}" ${fontFamilyAttr} ${saltAttr}></x-neume>`;
    }
  }

  const glyphname$4F = 'ison';
  const args$4F = {};

  class Ison extends BaseBody {
    constructor() {
      super(glyphname$4F, args$4F);
    }
  }

  const glyphname$4E = 'oligon';
  const args$4E = {};

  class Oligon extends BaseBody {
    constructor() {
      super(glyphname$4E, args$4E);
    }
  }

  const glyphname$4D = 'oligonKentimaMiddle';
  const args$4D = {};

  class OligonKentimaMiddle extends BaseBody {
    constructor() {
      super(glyphname$4D, args$4D);
    }
  }

  const glyphname$4C = 'oligonKentimaBelow';
  const args$4C = {};

  class OligonKentimaBelow extends BaseBody {
    constructor() {
      super(glyphname$4C, args$4C);
    }
  }

  const glyphname$4B = 'oligonKentimaAbove';
  const args$4B = {};

  class OligonKentimaAbove extends BaseBody {
    constructor() {
      super(glyphname$4B, args$4B);
    }
  }

  const glyphname$4A = 'oligonYpsiliRight';
  const args$4A = {};

  class OligonYpsiliRight extends BaseBody {
    constructor() {
      super(glyphname$4A, args$4A);
    }
  }

  const glyphname$4z = 'oligonYpsiliLeft';
  const args$4z = {};

  class OligonYpsiliLeft extends BaseBody {
    constructor() {
      super(glyphname$4z, args$4z);
    }
  }

  const glyphname$4y = 'oligonKentimaYpsiliRight';
  const args$4y = {};

  class OligonKentimaYpsiliRight extends BaseBody {
    constructor() {
      super(glyphname$4y, args$4y);
    }
  }

  const glyphname$4x = 'oligonKentimaYpsiliMiddle';
  const args$4x = {};

  class OligonKentimaYpsiliMiddle extends BaseBody {
    constructor() {
      super(glyphname$4x, args$4x);
    }
  }

  const glyphname$4w = 'oligonDoubleYpsili';
  const args$4w = {};

  class OligonDoubleYpsili extends BaseBody {
    constructor() {
      super(glyphname$4w, args$4w);
    }
  }

  const glyphname$4v = 'oligonKentimataDoubleYpsili';
  const args$4v = {};

  class OligonKentimataDoubleYpsili extends BaseBody {
    constructor() {
      super(glyphname$4v, args$4v);
    }
  }

  const glyphname$4u = 'oligonKentimaDoubleYpsiliRight';
  const args$4u = {};

  class OligonKentimaDoubleYpsiliRight extends BaseBody {
    constructor() {
      super(glyphname$4u, args$4u);
    }
  }

  const glyphname$4t = 'oligonKentimaDoubleYpsiliLeft';
  const args$4t = {};

  class OligonKentimaDoubleYpsiliLeft extends BaseBody {
    constructor() {
      super(glyphname$4t, args$4t);
    }
  }

  const glyphname$4s = 'oligonTripleYpsili';
  const args$4s = {};

  class OligonTripleYpsili extends BaseBody {
    constructor() {
      super(glyphname$4s, args$4s);
    }
  }

  const glyphname$4r = 'oligonKentimataTripleYpsili';
  const args$4r = {};

  class OligonKentimataTripleYpsili extends BaseBody {
    constructor() {
      super(glyphname$4r, args$4r);
    }
  }

  const glyphname$4q = 'oligonKentimaTripleYpsili';
  const args$4q = {};

  class OligonKentimaTripleYpsili extends BaseBody {
    constructor() {
      super(glyphname$4q, args$4q);
    }
  }

  const glyphname$4p = 'oligonIson';
  const args$4p = {};

  class OligonIson extends BaseBody {
    constructor() {
      super(glyphname$4p, args$4p);
    }
  }

  const glyphname$4o = 'oligonApostrofos';
  const args$4o = {};

  class OligonApostrofos extends BaseBody {
    constructor() {
      super(glyphname$4o, args$4o);
    }
  }

  const glyphname$4n = 'oligonYporroi';
  const args$4n = {};

  class OligonYporroi extends BaseBody {
    constructor() {
      super(glyphname$4n, args$4n);
    }
  }

  const glyphname$4m = 'oligonElafron';
  const args$4m = {};

  class OligonElafron extends BaseBody {
    constructor() {
      super(glyphname$4m, args$4m);
    }
  }

  const glyphname$4l = 'oligonElafronApostrofos';
  const args$4l = {};

  class OligonElafronApostrofos extends BaseBody {
    constructor() {
      super(glyphname$4l, args$4l);
    }
  }

  const glyphname$4k = 'oligonChamili';
  const args$4k = {};

  class OligonChamili extends BaseBody {
    constructor() {
      super(glyphname$4k, args$4k);
    }
  }

  const glyphname$4j = 'isonApostrofos';
  const args$4j = {};

  class IsonApostrofos extends BaseBody {
    constructor() {
      super(glyphname$4j, args$4j);
    }
  }

  const glyphname$4i = 'apostrofos';
  const args$4i = {};

  class Apostrofos extends BaseBody {
    constructor() {
      super(glyphname$4i, args$4i);
    }
  }

  const glyphname$4h = 'apostrofosSyndesmos';
  const args$4h = {};

  class ApostrofosSyndesmos extends BaseBody {
    constructor() {
      super(glyphname$4h, args$4h);
    }
  }

  const glyphname$4g = 'yporroi';
  const args$4g = {};

  class Yporroi extends BaseBody {
    constructor() {
      super(glyphname$4g, args$4g);
    }
  }

  const glyphname$4f = 'elafron';
  const args$4f = {};

  class Elafron extends BaseBody {
    constructor() {
      super(glyphname$4f, args$4f);
    }
  }

  const glyphname$4e = 'runningElafron';
  const args$4e = {};

  class RunningElafron extends BaseBody {
    constructor() {
      super(glyphname$4e, args$4e);
    }
  }

  const glyphname$4d = 'elafronApostrofos';
  const args$4d = {};

  class ElafronApostrofos extends BaseBody {
    constructor() {
      super(glyphname$4d, args$4d);
    }
  }

  const glyphname$4c = 'chamili';
  const args$4c = {};

  class Chamili extends BaseBody {
    constructor() {
      super(glyphname$4c, args$4c);
    }
  }

  const glyphname$4b = 'chamiliApostrofos';
  const args$4b = {};

  class ChamiliApostrofos extends BaseBody {
    constructor() {
      super(glyphname$4b, args$4b);
    }
  }

  const glyphname$4a = 'chamiliElafron';
  const args$4a = {};

  class ChamiliElafron extends BaseBody {
    constructor() {
      super(glyphname$4a, args$4a);
    }
  }

  const glyphname$49 = 'chamiliElafronApostrofos';
  const args$49 = {};

  class ChamiliElafronApostrofos extends BaseBody {
    constructor() {
      super(glyphname$49, args$49);
    }
  }

  const glyphname$48 = 'doubleChamili';
  const args$48 = {};

  class DoubleChamili extends BaseBody {
    constructor() {
      super(glyphname$48, args$48);
    }
  }

  const glyphname$47 = 'doubleChamiliApostrofos';
  const args$47 = {};

  class DoubleChamiliApostrofos extends BaseBody {
    constructor() {
      super(glyphname$47, args$47);
    }
  }

  const glyphname$46 = 'doubleChamiliElafron';
  const args$46 = {};

  class DoubleChamiliElafron extends BaseBody {
    constructor() {
      super(glyphname$46, args$46);
    }
  }

  const glyphname$45 = 'doubleChamiliElafronApostrofos';
  const args$45 = {};

  class DoubleChamiliElafronApostrofos extends BaseBody {
    constructor() {
      super(glyphname$45, args$45);
    }
  }

  const glyphname$44 = 'tripleChamili';
  const args$44 = {};

  class TripleChamili extends BaseBody {
    constructor() {
      super(glyphname$44, args$44);
    }
  }

  const glyphname$43 = 'petastiIson';
  const args$43 = {};

  class PetastiIson extends BaseBody {
    constructor() {
      super(glyphname$43, args$43);
    }
  }

  const glyphname$42 = 'petasti';
  const args$42 = {};

  class Petasti extends BaseBody {
    constructor() {
      super(glyphname$42, args$42);
    }
  }

  const glyphname$41 = 'petastiOligon';
  const args$41 = {};

  class PetastiOligon extends BaseBody {
    constructor() {
      super(glyphname$41, args$41);
    }
  }

  const glyphname$40 = 'petastiKentima';
  const args$40 = {};

  class PetastiKentima extends BaseBody {
    constructor() {
      super(glyphname$40, args$40);
    }
  }

  const glyphname$3$ = 'petastiYpsiliRight';
  const args$3$ = {};

  class PetastiYpsiliRight extends BaseBody {
    constructor() {
      super(glyphname$3$, args$3$);
    }
  }

  const glyphname$3_ = 'petastiYpsiliLeft';
  const args$3_ = {};

  class PetastiYpsiliLeft extends BaseBody {
    constructor() {
      super(glyphname$3_, args$3_);
    }
  }

  const glyphname$3Z = 'petastiKentimaYpsiliRight';
  const args$3Z = {};

  class PetastiKentimaYpsiliRight extends BaseBody {
    constructor() {
      super(glyphname$3Z, args$3Z);
    }
  }

  const glyphname$3Y = 'petastiKentimaYpsiliMiddle';
  const args$3Y = {};

  class PetastiKentimaYpsiliMiddle extends BaseBody {
    constructor() {
      super(glyphname$3Y, args$3Y);
    }
  }

  const glyphname$3X = 'petastiDoubleYpsili';
  const args$3X = {};

  class PetastiDoubleYpsili extends BaseBody {
    constructor() {
      super(glyphname$3X, args$3X);
    }
  }

  const glyphname$3W = 'petastiKentimataDoubleYpsili';
  const args$3W = {};

  class PetastiKentimataDoubleYpsili extends BaseBody {
    constructor() {
      super(glyphname$3W, args$3W);
    }
  }

  const glyphname$3V = 'petastiKentimaDoubleYpsiliRight';
  const args$3V = {};

  class PetastiKentimaDoubleYpsiliRight extends BaseBody {
    constructor() {
      super(glyphname$3V, args$3V);
    }
  }

  const glyphname$3U = 'petastiKentimaDoubleYpsiliLeft';
  const args$3U = {};

  class PetastiKentimaDoubleYpsiliLeft extends BaseBody {
    constructor() {
      super(glyphname$3U, args$3U);
    }
  }

  const glyphname$3T = 'petastiTripleYpsili';
  const args$3T = {};

  class PetastiTripleYpsili extends BaseBody {
    constructor() {
      super(glyphname$3T, args$3T);
    }
  }

  const glyphname$3S = 'petastiKentimataTripleYpsili';
  const args$3S = {};

  class PetastiKentimataTripleYpsili extends BaseBody {
    constructor() {
      super(glyphname$3S, args$3S);
    }
  }

  const glyphname$3R = 'petastiKentimaTripleYpsili';
  const args$3R = {};

  class PetastiKentimaTripleYpsili extends BaseBody {
    constructor() {
      super(glyphname$3R, args$3R);
    }
  }

  const glyphname$3Q = 'petastiApostrofos';
  const args$3Q = {};

  class PetastiApostrofos extends BaseBody {
    constructor() {
      super(glyphname$3Q, args$3Q);
    }
  }

  const glyphname$3P = 'petastiYporroi';
  const args$3P = {};

  class PetastiYporroi extends BaseBody {
    constructor() {
      super(glyphname$3P, args$3P);
    }
  }

  const glyphname$3O = 'petastiElafron';
  const args$3O = {};

  class PetastiElafron extends BaseBody {
    constructor() {
      super(glyphname$3O, args$3O);
    }
  }

  const glyphname$3N = 'petastiRunningElafron';
  const args$3N = {};

  class PetastiRunningElafron extends BaseBody {
    constructor() {
      super(glyphname$3N, args$3N);
    }
  }

  const glyphname$3M = 'petastiElafronApostrofos';
  const args$3M = {};

  class PetastiElafronApostrofos extends BaseBody {
    constructor() {
      super(glyphname$3M, args$3M);
    }
  }

  const glyphname$3L = 'petastiChamili';
  const args$3L = {};

  class PetastiChamili extends BaseBody {
    constructor() {
      super(glyphname$3L, args$3L);
    }
  }

  const glyphname$3K = 'petastiChamiliApostrofos';
  const args$3K = {};

  class PetastiChamiliApostrofos extends BaseBody {
    constructor() {
      super(glyphname$3K, args$3K);
    }
  }

  const glyphname$3J = 'petastiChamiliElafron';
  const args$3J = {};

  class PetastiChamiliElafron extends BaseBody {
    constructor() {
      super(glyphname$3J, args$3J);
    }
  }

  const glyphname$3I = 'petastiChamiliElafronApostrofos';
  const args$3I = {};

  class PetastiChamiliElafronApostrofos extends BaseBody {
    constructor() {
      super(glyphname$3I, args$3I);
    }
  }

  const glyphname$3H = 'petastiDoubleChamili';
  const args$3H = {};

  class PetastiDoubleChamili extends BaseBody {
    constructor() {
      super(glyphname$3H, args$3H);
    }
  }

  const glyphname$3G = 'petastiDoubleChamiliApostrofos';
  const args$3G = {};

  class PetastiDoubleChamiliApostrofos extends BaseBody {
    constructor() {
      super(glyphname$3G, args$3G);
    }
  }

  const glyphname$3F = 'kentima';
  const args$3F = {};

  class Kentima extends BaseBody {
    constructor() {
      super(glyphname$3F, args$3F);
    }
  }

  const glyphname$3E = 'kentimata';
  const args$3E = {};

  class Kentimata extends BaseBody {
    constructor() {
      super(glyphname$3E, args$3E);
    }
  }

  const glyphname$3D = 'oligonKentimataBelow';
  const args$3D = {};

  class OligonKentimataBelow extends BaseBody {
    constructor() {
      super(glyphname$3D, args$3D);
    }
  }

  const glyphname$3C = 'oligonKentimataAbove';
  const args$3C = {};

  class OligonKentimataAbove extends BaseBody {
    constructor() {
      super(glyphname$3C, args$3C);
    }
  }

  const glyphname$3B = 'oligonIsonKentimata';
  const args$3B = {};

  class OligonIsonKentimata extends BaseBody {
    constructor() {
      super(glyphname$3B, args$3B);
    }
  }

  const glyphname$3A = 'oligonKentimaMiddleKentimata';
  const args$3A = {};

  class OligonKentimaMiddleKentimata extends BaseBody {
    constructor() {
      super(glyphname$3A, args$3A);
    }
  }

  const glyphname$3z = 'oligonYpsiliRightKentimata';
  const args$3z = {};

  class OligonYpsiliRightKentimata extends BaseBody {
    constructor() {
      super(glyphname$3z, args$3z);
    }
  }

  const glyphname$3y = 'oligonYpsiliLeftKentimata';
  const args$3y = {};

  class OligonYpsiliLeftKentimata extends BaseBody {
    constructor() {
      super(glyphname$3y, args$3y);
    }
  }

  const glyphname$3x = 'oligonApostrofosKentimata';
  const args$3x = {};

  class OligonApostrofosKentimata extends BaseBody {
    constructor() {
      super(glyphname$3x, args$3x);
    }
  }

  const glyphname$3w = 'oligonYporroiKentimata';
  const args$3w = {};

  class OligonYporroiKentimata extends BaseBody {
    constructor() {
      super(glyphname$3w, args$3w);
    }
  }

  const glyphname$3v = 'oligonElafronKentimata';
  const args$3v = {};

  class OligonElafronKentimata extends BaseBody {
    constructor() {
      super(glyphname$3v, args$3v);
    }
  }

  const glyphname$3u = 'oligonRunningElafronKentimata';
  const args$3u = {};

  class OligonRunningElafronKentimata extends BaseBody {
    constructor() {
      super(glyphname$3u, args$3u);
    }
  }

  const glyphname$3t = 'oligonElafronApostrofosKentimata';
  const args$3t = {};

  class OligonElafronApostrofosKentimata extends BaseBody {
    constructor() {
      super(glyphname$3t, args$3t);
    }
  }

  const glyphname$3s = 'oligonChamiliKentimata';
  const args$3s = {};

  class OligonChamiliKentimata extends BaseBody {
    constructor() {
      super(glyphname$3s, args$3s);
    }
  }

  const glyphname$3r = 'vareia';
  const args$3r = {};

  class Vareia extends BaseBody {
    constructor() {
      super(glyphname$3r, args$3r);
    }
  }

  const MAX_SEARCH_DEPTH = 100;

  class BaseMark extends HTMLElement {
    static get observedAttributes() {
      return ['font-family'];
    }

    constructor(glyphname, args) {
      super();

      this.glyphname = glyphname;
      this.args = args;

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

      if (byzhtml.options.useWebkitPositioning) {
        let fontFamily = byzhtml.options.defaultFontFamily;

        if (this.hasAttribute('font-family')) {
          fontFamily = this.getAttribute('font-family');
        }

        let base = null;

        var previousSibling = this.previousElementSibling;

        let depth = 0;

        while (previousSibling && depth <= MAX_SEARCH_DEPTH) {
          if (!previousSibling.nodeName.toLowerCase().startsWith('x-')) {
            break;
          }

          if (previousSibling instanceof BaseBody) {
            base = previousSibling.glyphname;
            break;
          }

          previousSibling = previousSibling.previousElementSibling;

          // Paranoia. Don't want an infinite loop;
          depth++;
        }

        if (base) {
          const offset = byzhtml.fontService.getMarkOffset(
            fontFamily,
            base,
            this.glyphname,
          );

          styleAttr = `style="position: absolute; left: ${offset.x}em; top: ${offset.y}em; width: 100%"`;
        } else {
          console.warn('missing base for mark: ' + this.glyphname);
        }
      }

      let otherStyles = '';

      if (this.args) {
        if (this.args.color) {
          otherStyles += ` color: var(${this.args.color});`;
        }
      }

      this.shadowRoot.innerHTML = `<style> :host { font-size: var(${CssVars.NeumeFontSize});${otherStyles} } </style><x-neume name="${this.glyphname}" ${styleAttr} ${fontFamilyAttr} ${saltAttr}></x-neume>`;
    }
  }

  const glyphname$3q = 'psifiston';
  const args$3q = {};

  class Psifiston extends BaseMark {
    constructor() {
      super(glyphname$3q, args$3q);
    }
  }

  const glyphname$3p = 'antikenoma';
  const args$3p = {};

  class Antikenoma extends BaseMark {
    constructor() {
      super(glyphname$3p, args$3p);
    }
  }

  const glyphname$3o = 'omalon';
  const args$3o = {};

  class Omalon extends BaseMark {
    constructor() {
      super(glyphname$3o, args$3o);
    }
  }

  const glyphname$3n = 'omalonConnecting';
  const args$3n = {};

  class OmalonConnecting extends BaseMark {
    constructor() {
      super(glyphname$3n, args$3n);
    }
  }

  const glyphname$3m = 'heteron';
  const args$3m = { color: CssVars.ColorHeteron };

  class Heteron extends BaseMark {
    constructor() {
      super(glyphname$3m, args$3m);
    }
  }

  const glyphname$3l = 'heteronConnecting';
  const args$3l = { color: CssVars.ColorHeteron };

  class HeteronConnecting extends BaseMark {
    constructor() {
      super(glyphname$3l, args$3l);
    }
  }

  const glyphname$3k = 'endofonon';
  const args$3k = { color: CssVars.ColorHeteron };

  class Endofonon extends BaseMark {
    constructor() {
      super(glyphname$3k, args$3k);
    }
  }

  const glyphname$3j = 'yfenAbove';
  const args$3j = {};

  class YfenAbove extends BaseMark {
    constructor() {
      super(glyphname$3j, args$3j);
    }
  }

  const glyphname$3i = 'yfenBelow';
  const args$3i = {};

  class YfenBelow extends BaseMark {
    constructor() {
      super(glyphname$3i, args$3i);
    }
  }

  const glyphname$3h = 'stavros';
  const args$3h = {};

  class Stavros extends BaseBody {
    constructor() {
      super(glyphname$3h, args$3h);
    }
  }

  const glyphname$3g = 'breath';
  const args$3g = {};

  class Breath extends BaseBody {
    constructor() {
      super(glyphname$3g, args$3g);
    }
  }

  const glyphname$3f = 'klasmaAbove';
  const args$3f = {};

  class KlasmaAbove extends BaseMark {
    constructor() {
      super(glyphname$3f, args$3f);
    }
  }

  const glyphname$3e = 'klasmaBelow';
  const args$3e = {};

  class KlasmaBelow extends BaseMark {
    constructor() {
      super(glyphname$3e, args$3e);
    }
  }

  const glyphname$3d = 'apli';
  const args$3d = {};

  class Apli extends BaseMark {
    constructor() {
      super(glyphname$3d, args$3d);
    }
  }

  const glyphname$3c = 'dipli';
  const args$3c = {};

  class Dipli extends BaseMark {
    constructor() {
      super(glyphname$3c, args$3c);
    }
  }

  const glyphname$3b = 'tripli';
  const args$3b = {};

  class Tripli extends BaseMark {
    constructor() {
      super(glyphname$3b, args$3b);
    }
  }

  const glyphname$3a = 'tetrapli';
  const args$3a = {};

  class Tetrapli extends BaseMark {
    constructor() {
      super(glyphname$3a, args$3a);
    }
  }

  const glyphname$39 = 'koronis';
  const args$39 = { color: CssVars.ColorKoronis };

  class Koronis extends BaseMark {
    constructor() {
      super(glyphname$39, args$39);
    }
  }

  const glyphname$38 = 'leimma1';
  const args$38 = {};

  class Leimma1 extends BaseBody {
    constructor() {
      super(glyphname$38, args$38);
    }
  }

  const glyphname$37 = 'leimma2';
  const args$37 = {};

  class Leimma2 extends BaseBody {
    constructor() {
      super(glyphname$37, args$37);
    }
  }

  const glyphname$36 = 'leimma3';
  const args$36 = {};

  class Leimma3 extends BaseBody {
    constructor() {
      super(glyphname$36, args$36);
    }
  }

  const glyphname$35 = 'leimma4';
  const args$35 = {};

  class Leimma4 extends BaseBody {
    constructor() {
      super(glyphname$35, args$35);
    }
  }

  const glyphname$34 = 'leimmaDot';
  const args$34 = {};

  class LeimmaDot extends BaseMark {
    constructor() {
      super(glyphname$34, args$34);
    }
  }

  const glyphname$33 = 'gorgonAbove';
  const args$33 = { color: CssVars.ColorGorgon };

  class GorgonAbove extends BaseMark {
    constructor() {
      super(glyphname$33, args$33);
    }
  }

  const glyphname$32 = 'gorgonBelow';
  const args$32 = { color: CssVars.ColorGorgon };

  class GorgonBelow extends BaseMark {
    constructor() {
      super(glyphname$32, args$32);
    }
  }

  const glyphname$31 = 'gorgonDottedLeft';
  const args$31 = { color: CssVars.ColorGorgon };

  class GorgonDottedLeft extends BaseMark {
    constructor() {
      super(glyphname$31, args$31);
    }
  }

  const glyphname$30 = 'gorgonDottedRight';
  const args$30 = { color: CssVars.ColorGorgon };

  class GorgonDottedRight extends BaseMark {
    constructor() {
      super(glyphname$30, args$30);
    }
  }

  const glyphname$2$ = 'digorgon';
  const args$2$ = { color: CssVars.ColorGorgon };

  class Digorgon extends BaseMark {
    constructor() {
      super(glyphname$2$, args$2$);
    }
  }

  const glyphname$2_ = 'digorgonDottedLeftBelow';
  const args$2_ = { color: CssVars.ColorGorgon };

  class DigorgonDottedLeftBelow extends BaseMark {
    constructor() {
      super(glyphname$2_, args$2_);
    }
  }

  const glyphname$2Z = 'digorgonDottedLeftAbove';
  const args$2Z = { color: CssVars.ColorGorgon };

  class DigorgonDottedLeftAbove extends BaseMark {
    constructor() {
      super(glyphname$2Z, args$2Z);
    }
  }

  const glyphname$2Y = 'digorgonDottedRight';
  const args$2Y = { color: CssVars.ColorGorgon };

  class DigorgonDottedRight extends BaseMark {
    constructor() {
      super(glyphname$2Y, args$2Y);
    }
  }

  const glyphname$2X = 'trigorgon';
  const args$2X = { color: CssVars.ColorGorgon };

  class Trigorgon extends BaseMark {
    constructor() {
      super(glyphname$2X, args$2X);
    }
  }

  const glyphname$2W = 'trigorgonDottedLeftBelow';
  const args$2W = { color: CssVars.ColorGorgon };

  class TrigorgonDottedLeftBelow extends BaseMark {
    constructor() {
      super(glyphname$2W, args$2W);
    }
  }

  const glyphname$2V = 'trigorgonDottedLeftAbove';
  const args$2V = { color: CssVars.ColorGorgon };

  class TrigorgonDottedLeftAbove extends BaseMark {
    constructor() {
      super(glyphname$2V, args$2V);
    }
  }

  const glyphname$2U = 'trigorgonDottedRight';
  const args$2U = { color: CssVars.ColorGorgon };

  class TrigorgonDottedRight extends BaseMark {
    constructor() {
      super(glyphname$2U, args$2U);
    }
  }

  const glyphname$2T = 'argon';
  const args$2T = { color: CssVars.ColorGorgon };

  class Argon extends BaseMark {
    constructor() {
      super(glyphname$2T, args$2T);
    }
  }

  const glyphname$2S = 'diargon';
  const args$2S = { color: CssVars.ColorGorgon };

  class Diargon extends BaseMark {
    constructor() {
      super(glyphname$2S, args$2S);
    }
  }

  const glyphname$2R = 'triargon';
  const args$2R = { color: CssVars.ColorGorgon };

  class Triargon extends BaseMark {
    constructor() {
      super(glyphname$2R, args$2R);
    }
  }

  const glyphname$2Q = 'gorgonSecondary';
  const args$2Q = { color: CssVars.ColorGorgon };

  class GorgonSecondary extends BaseMark {
    constructor() {
      super(glyphname$2Q, args$2Q);
    }
  }

  const glyphname$2P = 'gorgonDottedLeftSecondary';
  const args$2P = { color: CssVars.ColorGorgon };

  class GorgonDottedLeftSecondary extends BaseMark {
    constructor() {
      super(glyphname$2P, args$2P);
    }
  }

  const glyphname$2O = 'gorgonDottedRightSecondary';
  const args$2O = { color: CssVars.ColorGorgon };

  class GorgonDottedRightSecondary extends BaseMark {
    constructor() {
      super(glyphname$2O, args$2O);
    }
  }

  const glyphname$2N = 'digorgonSecondary';
  const args$2N = { color: CssVars.ColorGorgon };

  class DigorgonSecondary extends BaseMark {
    constructor() {
      super(glyphname$2N, args$2N);
    }
  }

  const glyphname$2M = 'digorgonDottedLeftBelowSecondary';
  const args$2M = { color: CssVars.ColorGorgon };

  class DigorgonDottedLeftBelowSecondary extends BaseMark {
    constructor() {
      super(glyphname$2M, args$2M);
    }
  }

  const glyphname$2L = 'digorgonDottedRightSecondary';
  const args$2L = { color: CssVars.ColorGorgon };

  class DigorgonDottedRightSecondary extends BaseMark {
    constructor() {
      super(glyphname$2L, args$2L);
    }
  }

  const glyphname$2K = 'trigorgonSecondary';
  const args$2K = { color: CssVars.ColorGorgon };

  class TrigorgonSecondary extends BaseMark {
    constructor() {
      super(glyphname$2K, args$2K);
    }
  }

  const glyphname$2J = 'trigorgonDottedLeftBelowSecondary';
  const args$2J = { color: CssVars.ColorGorgon };

  class TrigorgonDottedLeftBelowSecondary extends BaseMark {
    constructor() {
      super(glyphname$2J, args$2J);
    }
  }

  const glyphname$2I = 'trigorgonDottedRightSecondary';
  const args$2I = { color: CssVars.ColorGorgon };

  class TrigorgonDottedRightSecondary extends BaseMark {
    constructor() {
      super(glyphname$2I, args$2I);
    }
  }

  const glyphname$2H = 'agogiPoliArgi';
  const args$2H = { color: CssVars.ColorAgogi };

  class AgogiPoliArgi extends BaseBody {
    constructor() {
      super(glyphname$2H, args$2H);
    }
  }

  const glyphname$2G = 'agogiArgoteri';
  const args$2G = { color: CssVars.ColorAgogi };

  class AgogiArgoteri extends BaseBody {
    constructor() {
      super(glyphname$2G, args$2G);
    }
  }

  const glyphname$2F = 'agogiArgi';
  const args$2F = { color: CssVars.ColorAgogi };

  class AgogiArgi extends BaseBody {
    constructor() {
      super(glyphname$2F, args$2F);
    }
  }

  const glyphname$2E = 'agogiMetria';
  const args$2E = { color: CssVars.ColorAgogi };

  class AgogiMetria extends BaseBody {
    constructor() {
      super(glyphname$2E, args$2E);
    }
  }

  const glyphname$2D = 'agogiMesi';
  const args$2D = { color: CssVars.ColorAgogi };

  class AgogiMesi extends BaseBody {
    constructor() {
      super(glyphname$2D, args$2D);
    }
  }

  const glyphname$2C = 'agogiGorgi';
  const args$2C = { color: CssVars.ColorAgogi };

  class AgogiGorgi extends BaseBody {
    constructor() {
      super(glyphname$2C, args$2C);
    }
  }

  const glyphname$2B = 'agogiGorgoteri';
  const args$2B = { color: CssVars.ColorAgogi };

  class AgogiGorgoteri extends BaseBody {
    constructor() {
      super(glyphname$2B, args$2B);
    }
  }

  const glyphname$2A = 'agogiPoliGorgi';
  const args$2A = { color: CssVars.ColorAgogi };

  class AgogiPoliGorgi extends BaseBody {
    constructor() {
      super(glyphname$2A, args$2A);
    }
  }

  const glyphname$2z = 'agogiPoliArgiAbove';
  const args$2z = { color: CssVars.ColorAgogi };

  class AgogiPoliArgiAbove extends BaseMark {
    constructor() {
      super(glyphname$2z, args$2z);
    }
  }

  const glyphname$2y = 'agogiArgoteriAbove';
  const args$2y = { color: CssVars.ColorAgogi };

  class AgogiArgoteriAbove extends BaseMark {
    constructor() {
      super(glyphname$2y, args$2y);
    }
  }

  const glyphname$2x = 'agogiArgiAbove';
  const args$2x = { color: CssVars.ColorAgogi };

  class AgogiArgiAbove extends BaseMark {
    constructor() {
      super(glyphname$2x, args$2x);
    }
  }

  const glyphname$2w = 'agogiMetriaAbove';
  const args$2w = { color: CssVars.ColorAgogi };

  class AgogiMetriaAbove extends BaseMark {
    constructor() {
      super(glyphname$2w, args$2w);
    }
  }

  const glyphname$2v = 'agogiMesiAbove';
  const args$2v = { color: CssVars.ColorAgogi };

  class AgogiMesiAbove extends BaseMark {
    constructor() {
      super(glyphname$2v, args$2v);
    }
  }

  const glyphname$2u = 'agogiGorgiAbove';
  const args$2u = { color: CssVars.ColorAgogi };

  class AgogiGorgiAbove extends BaseMark {
    constructor() {
      super(glyphname$2u, args$2u);
    }
  }

  const glyphname$2t = 'agogiGorgoteriAbove';
  const args$2t = { color: CssVars.ColorAgogi };

  class AgogiGorgoteriAbove extends BaseMark {
    constructor() {
      super(glyphname$2t, args$2t);
    }
  }

  const glyphname$2s = 'agogiPoliGorgiAbove';
  const args$2s = { color: CssVars.ColorAgogi };

  class AgogiPoliGorgiAbove extends BaseMark {
    constructor() {
      super(glyphname$2s, args$2s);
    }
  }

  const glyphname$2r = 'martyriaNoteZoLow';
  const args$2r = { color: CssVars.ColorMartyria };

  class MartyriaNoteZoLow extends BaseBody {
    constructor() {
      super(glyphname$2r, args$2r);
    }
  }

  const glyphname$2q = 'martyriaNoteNiLow';
  const args$2q = { color: CssVars.ColorMartyria };

  class MartyriaNoteNiLow extends BaseBody {
    constructor() {
      super(glyphname$2q, args$2q);
    }
  }

  const glyphname$2p = 'martyriaNotePaLow';
  const args$2p = { color: CssVars.ColorMartyria };

  class MartyriaNotePaLow extends BaseBody {
    constructor() {
      super(glyphname$2p, args$2p);
    }
  }

  const glyphname$2o = 'martyriaNoteVouLow';
  const args$2o = { color: CssVars.ColorMartyria };

  class MartyriaNoteVouLow extends BaseBody {
    constructor() {
      super(glyphname$2o, args$2o);
    }
  }

  const glyphname$2n = 'martyriaNoteGaLow';
  const args$2n = { color: CssVars.ColorMartyria };

  class MartyriaNoteGaLow extends BaseBody {
    constructor() {
      super(glyphname$2n, args$2n);
    }
  }

  const glyphname$2m = 'martyriaNoteDiLow';
  const args$2m = { color: CssVars.ColorMartyria };

  class MartyriaNoteDiLow extends BaseBody {
    constructor() {
      super(glyphname$2m, args$2m);
    }
  }

  const glyphname$2l = 'martyriaNoteKeLow';
  const args$2l = { color: CssVars.ColorMartyria };

  class MartyriaNoteKeLow extends BaseBody {
    constructor() {
      super(glyphname$2l, args$2l);
    }
  }

  const glyphname$2k = 'martyriaNoteZo';
  const args$2k = { color: CssVars.ColorMartyria };

  class MartyriaNoteZo extends BaseBody {
    constructor() {
      super(glyphname$2k, args$2k);
    }
  }

  const glyphname$2j = 'martyriaNoteNi';
  const args$2j = { color: CssVars.ColorMartyria };

  class MartyriaNoteNi extends BaseBody {
    constructor() {
      super(glyphname$2j, args$2j);
    }
  }

  const glyphname$2i = 'martyriaNotePa';
  const args$2i = { color: CssVars.ColorMartyria };

  class MartyriaNotePa extends BaseBody {
    constructor() {
      super(glyphname$2i, args$2i);
    }
  }

  const glyphname$2h = 'martyriaNoteVou';
  const args$2h = { color: CssVars.ColorMartyria };

  class MartyriaNoteVou extends BaseBody {
    constructor() {
      super(glyphname$2h, args$2h);
    }
  }

  const glyphname$2g = 'martyriaNoteGa';
  const args$2g = { color: CssVars.ColorMartyria };

  class MartyriaNoteGa extends BaseBody {
    constructor() {
      super(glyphname$2g, args$2g);
    }
  }

  const glyphname$2f = 'martyriaNoteDi';
  const args$2f = { color: CssVars.ColorMartyria };

  class MartyriaNoteDi extends BaseBody {
    constructor() {
      super(glyphname$2f, args$2f);
    }
  }

  const glyphname$2e = 'martyriaNoteKe';
  const args$2e = { color: CssVars.ColorMartyria };

  class MartyriaNoteKe extends BaseBody {
    constructor() {
      super(glyphname$2e, args$2e);
    }
  }

  const glyphname$2d = 'martyriaNoteZoHigh';
  const args$2d = { color: CssVars.ColorMartyria };

  class MartyriaNoteZoHigh extends BaseBody {
    constructor() {
      super(glyphname$2d, args$2d);
    }
  }

  const glyphname$2c = 'martyriaNoteNiHigh';
  const args$2c = { color: CssVars.ColorMartyria };

  class MartyriaNoteNiHigh extends BaseBody {
    constructor() {
      super(glyphname$2c, args$2c);
    }
  }

  const glyphname$2b = 'martyriaNotePaHigh';
  const args$2b = { color: CssVars.ColorMartyria };

  class MartyriaNotePaHigh extends BaseBody {
    constructor() {
      super(glyphname$2b, args$2b);
    }
  }

  const glyphname$2a = 'martyriaNoteVouHigh';
  const args$2a = { color: CssVars.ColorMartyria };

  class MartyriaNoteVouHigh extends BaseBody {
    constructor() {
      super(glyphname$2a, args$2a);
    }
  }

  const glyphname$29 = 'martyriaNoteGaHigh';
  const args$29 = { color: CssVars.ColorMartyria };

  class MartyriaNoteGaHigh extends BaseBody {
    constructor() {
      super(glyphname$29, args$29);
    }
  }

  const glyphname$28 = 'martyriaNoteDiHigh';
  const args$28 = { color: CssVars.ColorMartyria };

  class MartyriaNoteDiHigh extends BaseBody {
    constructor() {
      super(glyphname$28, args$28);
    }
  }

  const glyphname$27 = 'martyriaNoteKeHigh';
  const args$27 = { color: CssVars.ColorMartyria };

  class MartyriaNoteKeHigh extends BaseBody {
    constructor() {
      super(glyphname$27, args$27);
    }
  }

  const glyphname$26 = 'martyriaTick';
  const args$26 = { color: CssVars.ColorMartyria };

  class MartyriaTick extends BaseMark {
    constructor() {
      super(glyphname$26, args$26);
    }
  }

  const glyphname$25 = 'martyriaZoBelow';
  const args$25 = { color: CssVars.ColorMartyria };

  class MartyriaZoBelow extends BaseMark {
    constructor() {
      super(glyphname$25, args$25);
    }
  }

  const glyphname$24 = 'martyriaDeltaBelow';
  const args$24 = { color: CssVars.ColorMartyria };

  class MartyriaDeltaBelow extends BaseMark {
    constructor() {
      super(glyphname$24, args$24);
    }
  }

  const glyphname$23 = 'martyriaAlphaBelow';
  const args$23 = { color: CssVars.ColorMartyria };

  class MartyriaAlphaBelow extends BaseMark {
    constructor() {
      super(glyphname$23, args$23);
    }
  }

  const glyphname$22 = 'martyriaLegetosBelow';
  const args$22 = { color: CssVars.ColorMartyria };

  class MartyriaLegetosBelow extends BaseMark {
    constructor() {
      super(glyphname$22, args$22);
    }
  }

  const glyphname$21 = 'martyriaNanaBelow';
  const args$21 = { color: CssVars.ColorMartyria };

  class MartyriaNanaBelow extends BaseMark {
    constructor() {
      super(glyphname$21, args$21);
    }
  }

  const glyphname$20 = 'martyriaDeltaDottedBelow';
  const args$20 = { color: CssVars.ColorMartyria };

  class MartyriaDeltaDottedBelow extends BaseMark {
    constructor() {
      super(glyphname$20, args$20);
    }
  }

  const glyphname$1$ = 'martyriaAlphaDottedBelow';
  const args$1$ = { color: CssVars.ColorMartyria };

  class MartyriaAlphaDottedBelow extends BaseMark {
    constructor() {
      super(glyphname$1$, args$1$);
    }
  }

  const glyphname$1_ = 'martyriaHardChromaticPaBelow';
  const args$1_ = { color: CssVars.ColorMartyria };

  class MartyriaHardChromaticPaBelow extends BaseMark {
    constructor() {
      super(glyphname$1_, args$1_);
    }
  }

  const glyphname$1Z = 'martyriaHardChromaticDiBelow';
  const args$1Z = { color: CssVars.ColorMartyria };

  class MartyriaHardChromaticDiBelow extends BaseMark {
    constructor() {
      super(glyphname$1Z, args$1Z);
    }
  }

  const glyphname$1Y = 'martyriaSoftChromaticDiBelow';
  const args$1Y = { color: CssVars.ColorMartyria };

  class MartyriaSoftChromaticDiBelow extends BaseMark {
    constructor() {
      super(glyphname$1Y, args$1Y);
    }
  }

  const glyphname$1X = 'martyriaSoftChromaticKeBelow';
  const args$1X = { color: CssVars.ColorMartyria };

  class MartyriaSoftChromaticKeBelow extends BaseMark {
    constructor() {
      super(glyphname$1X, args$1X);
    }
  }

  const glyphname$1W = 'martyriaZygosBelow';
  const args$1W = { color: CssVars.ColorMartyria };

  class MartyriaZygosBelow extends BaseMark {
    constructor() {
      super(glyphname$1W, args$1W);
    }
  }

  const glyphname$1V = 'martyriaZoAbove';
  const args$1V = { color: CssVars.ColorMartyria };

  class MartyriaZoAbove extends BaseMark {
    constructor() {
      super(glyphname$1V, args$1V);
    }
  }

  const glyphname$1U = 'martyriaDeltaAbove';
  const args$1U = { color: CssVars.ColorMartyria };

  class MartyriaDeltaAbove extends BaseMark {
    constructor() {
      super(glyphname$1U, args$1U);
    }
  }

  const glyphname$1T = 'martyriaAlphaAbove';
  const args$1T = { color: CssVars.ColorMartyria };

  class MartyriaAlphaAbove extends BaseMark {
    constructor() {
      super(glyphname$1T, args$1T);
    }
  }

  const glyphname$1S = 'martyriaLegetosAbove';
  const args$1S = { color: CssVars.ColorMartyria };

  class MartyriaLegetosAbove extends BaseMark {
    constructor() {
      super(glyphname$1S, args$1S);
    }
  }

  const glyphname$1R = 'martyriaNanaAbove';
  const args$1R = { color: CssVars.ColorMartyria };

  class MartyriaNanaAbove extends BaseMark {
    constructor() {
      super(glyphname$1R, args$1R);
    }
  }

  const glyphname$1Q = 'martyriaDeltaDottedAbove';
  const args$1Q = { color: CssVars.ColorMartyria };

  class MartyriaDeltaDottedAbove extends BaseMark {
    constructor() {
      super(glyphname$1Q, args$1Q);
    }
  }

  const glyphname$1P = 'martyriaAlphaDottedAbove';
  const args$1P = { color: CssVars.ColorMartyria };

  class MartyriaAlphaDottedAbove extends BaseMark {
    constructor() {
      super(glyphname$1P, args$1P);
    }
  }

  const glyphname$1O = 'martyriaHardChromaticPaAbove';
  const args$1O = { color: CssVars.ColorMartyria };

  class MartyriaHardChromaticPaAbove extends BaseMark {
    constructor() {
      super(glyphname$1O, args$1O);
    }
  }

  const glyphname$1N = 'martyriaHardChromaticDiAbove';
  const args$1N = { color: CssVars.ColorMartyria };

  class MartyriaHardChromaticDiAbove extends BaseMark {
    constructor() {
      super(glyphname$1N, args$1N);
    }
  }

  const glyphname$1M = 'martyriaSoftChromaticDiAbove';
  const args$1M = { color: CssVars.ColorMartyria };

  class MartyriaSoftChromaticDiAbove extends BaseMark {
    constructor() {
      super(glyphname$1M, args$1M);
    }
  }

  const glyphname$1L = 'martyriaSoftChromaticKeAbove';
  const args$1L = { color: CssVars.ColorMartyria };

  class MartyriaSoftChromaticKeAbove extends BaseMark {
    constructor() {
      super(glyphname$1L, args$1L);
    }
  }

  const glyphname$1K = 'martyriaZygosAbove';
  const args$1K = { color: CssVars.ColorMartyria };

  class MartyriaZygosAbove extends BaseMark {
    constructor() {
      super(glyphname$1K, args$1K);
    }
  }

  const glyphname$1J = 'fthoraDiatonicNiLowAbove';
  const args$1J = { color: CssVars.ColorFthora };

  class FthoraDiatonicNiLowAbove extends BaseMark {
    constructor() {
      super(glyphname$1J, args$1J);
    }
  }

  const glyphname$1I = 'fthoraDiatonicPaAbove';
  const args$1I = { color: CssVars.ColorFthora };

  class FthoraDiatonicPaAbove extends BaseMark {
    constructor() {
      super(glyphname$1I, args$1I);
    }
  }

  const glyphname$1H = 'fthoraDiatonicVouAbove';
  const args$1H = { color: CssVars.ColorFthora };

  class FthoraDiatonicVouAbove extends BaseMark {
    constructor() {
      super(glyphname$1H, args$1H);
    }
  }

  const glyphname$1G = 'fthoraDiatonicGaAbove';
  const args$1G = { color: CssVars.ColorFthora };

  class FthoraDiatonicGaAbove extends BaseMark {
    constructor() {
      super(glyphname$1G, args$1G);
    }
  }

  const glyphname$1F = 'fthoraDiatonicDiAbove';
  const args$1F = { color: CssVars.ColorFthora };

  class FthoraDiatonicDiAbove extends BaseMark {
    constructor() {
      super(glyphname$1F, args$1F);
    }
  }

  const glyphname$1E = 'fthoraDiatonicKeAbove';
  const args$1E = { color: CssVars.ColorFthora };

  class FthoraDiatonicKeAbove extends BaseMark {
    constructor() {
      super(glyphname$1E, args$1E);
    }
  }

  const glyphname$1D = 'fthoraDiatonicZoAbove';
  const args$1D = { color: CssVars.ColorFthora };

  class FthoraDiatonicZoAbove extends BaseMark {
    constructor() {
      super(glyphname$1D, args$1D);
    }
  }

  const glyphname$1C = 'fthoraDiatonicNiHighAbove';
  const args$1C = { color: CssVars.ColorFthora };

  class FthoraDiatonicNiHighAbove extends BaseMark {
    constructor() {
      super(glyphname$1C, args$1C);
    }
  }

  const glyphname$1B = 'fthoraHardChromaticPaAbove';
  const args$1B = { color: CssVars.ColorFthora };

  class FthoraHardChromaticPaAbove extends BaseMark {
    constructor() {
      super(glyphname$1B, args$1B);
    }
  }

  const glyphname$1A = 'fthoraHardChromaticDiAbove';
  const args$1A = { color: CssVars.ColorFthora };

  class FthoraHardChromaticDiAbove extends BaseMark {
    constructor() {
      super(glyphname$1A, args$1A);
    }
  }

  const glyphname$1z = 'fthoraSoftChromaticDiAbove';
  const args$1z = { color: CssVars.ColorFthora };

  class FthoraSoftChromaticDiAbove extends BaseMark {
    constructor() {
      super(glyphname$1z, args$1z);
    }
  }

  const glyphname$1y = 'fthoraSoftChromaticKeAbove';
  const args$1y = { color: CssVars.ColorFthora };

  class FthoraSoftChromaticKeAbove extends BaseMark {
    constructor() {
      super(glyphname$1y, args$1y);
    }
  }

  const glyphname$1x = 'fthoraEnharmonicAbove';
  const args$1x = { color: CssVars.ColorFthora };

  class FthoraEnharmonicAbove extends BaseMark {
    constructor() {
      super(glyphname$1x, args$1x);
    }
  }

  const glyphname$1w = 'chroaZygosAbove';
      const args$1w = {color: CssVars.ColorFthora};

      class ChroaZygosAbove extends BaseMark {
      constructor() {
          super(glyphname$1w, args$1w);
      }
      }

  const glyphname$1v = 'chroaKlitonAbove';
      const args$1v = {color: CssVars.ColorFthora};

      class ChroaKlitonAbove extends BaseMark {
      constructor() {
          super(glyphname$1v, args$1v);
      }
      }

  const glyphname$1u = 'chroaSpathiAbove';
      const args$1u = {color: CssVars.ColorFthora};

      class ChroaSpathiAbove extends BaseMark {
      constructor() {
          super(glyphname$1u, args$1u);
      }
      }

  const glyphname$1t = 'fthoraDiatonicNiLowBelow';
  const args$1t = { color: CssVars.ColorFthora };

  class FthoraDiatonicNiLowBelow extends BaseMark {
    constructor() {
      super(glyphname$1t, args$1t);
    }
  }

  const glyphname$1s = 'fthoraDiatonicPaBelow';
  const args$1s = { color: CssVars.ColorFthora };

  class FthoraDiatonicPaBelow extends BaseMark {
    constructor() {
      super(glyphname$1s, args$1s);
    }
  }

  const glyphname$1r = 'fthoraDiatonicVouBelow';
  const args$1r = { color: CssVars.ColorFthora };

  class FthoraDiatonicVouBelow extends BaseMark {
    constructor() {
      super(glyphname$1r, args$1r);
    }
  }

  const glyphname$1q = 'fthoraDiatonicGaBelow';
  const args$1q = { color: CssVars.ColorFthora };

  class FthoraDiatonicGaBelow extends BaseMark {
    constructor() {
      super(glyphname$1q, args$1q);
    }
  }

  const glyphname$1p = 'fthoraDiatonicDiBelow';
  const args$1p = { color: CssVars.ColorFthora };

  class FthoraDiatonicDiBelow extends BaseMark {
    constructor() {
      super(glyphname$1p, args$1p);
    }
  }

  const glyphname$1o = 'fthoraDiatonicKeBelow';
  const args$1o = { color: CssVars.ColorFthora };

  class FthoraDiatonicKeBelow extends BaseMark {
    constructor() {
      super(glyphname$1o, args$1o);
    }
  }

  const glyphname$1n = 'fthoraDiatonicZoBelow';
  const args$1n = { color: CssVars.ColorFthora };

  class FthoraDiatonicZoBelow extends BaseMark {
    constructor() {
      super(glyphname$1n, args$1n);
    }
  }

  const glyphname$1m = 'fthoraDiatonicNiHighBelow';
  const args$1m = { color: CssVars.ColorFthora };

  class FthoraDiatonicNiHighBelow extends BaseMark {
    constructor() {
      super(glyphname$1m, args$1m);
    }
  }

  const glyphname$1l = 'fthoraHardChromaticPaBelow';
  const args$1l = { color: CssVars.ColorFthora };

  class FthoraHardChromaticPaBelow extends BaseMark {
    constructor() {
      super(glyphname$1l, args$1l);
    }
  }

  const glyphname$1k = 'fthoraHardChromaticDiBelow';
  const args$1k = { color: CssVars.ColorFthora };

  class FthoraHardChromaticDiBelow extends BaseMark {
    constructor() {
      super(glyphname$1k, args$1k);
    }
  }

  const glyphname$1j = 'fthoraSoftChromaticDiBelow';
  const args$1j = { color: CssVars.ColorFthora };

  class FthoraSoftChromaticDiBelow extends BaseMark {
    constructor() {
      super(glyphname$1j, args$1j);
    }
  }

  const glyphname$1i = 'fthoraSoftChromaticKeBelow';
  const args$1i = { color: CssVars.ColorFthora };

  class FthoraSoftChromaticKeBelow extends BaseMark {
    constructor() {
      super(glyphname$1i, args$1i);
    }
  }

  const glyphname$1h = 'fthoraEnharmonicBelow';
  const args$1h = { color: CssVars.ColorFthora };

  class FthoraEnharmonicBelow extends BaseMark {
    constructor() {
      super(glyphname$1h, args$1h);
    }
  }

  const glyphname$1g = 'chroaZygosBelow';
      const args$1g = {color: CssVars.ColorFthora};

      class ChroaZygosBelow extends BaseMark {
      constructor() {
          super(glyphname$1g, args$1g);
      }
      }

  const glyphname$1f = 'chroaKlitonBelow';
      const args$1f = {color: CssVars.ColorFthora};

      class ChroaKlitonBelow extends BaseMark {
      constructor() {
          super(glyphname$1f, args$1f);
      }
      }

  const glyphname$1e = 'chroaSpathiBelow';
      const args$1e = {color: CssVars.ColorFthora};

      class ChroaSpathiBelow extends BaseMark {
      constructor() {
          super(glyphname$1e, args$1e);
      }
      }

  const glyphname$1d = 'diesis2';
  const args$1d = { color: CssVars.ColorAccidental };

  class Diesis2 extends BaseMark {
    constructor() {
      super(glyphname$1d, args$1d);
    }
  }

  const glyphname$1c = 'diesis4';
  const args$1c = { color: CssVars.ColorAccidental };

  class Diesis4 extends BaseMark {
    constructor() {
      super(glyphname$1c, args$1c);
    }
  }

  const glyphname$1b = 'diesis6';
  const args$1b = { color: CssVars.ColorAccidental };

  class Diesis6 extends BaseMark {
    constructor() {
      super(glyphname$1b, args$1b);
    }
  }

  const glyphname$1a = 'diesis8';
  const args$1a = { color: CssVars.ColorAccidental };

  class Diesis8 extends BaseMark {
    constructor() {
      super(glyphname$1a, args$1a);
    }
  }

  const glyphname$19 = 'diesisGenikiAbove';
  const args$19 = { color: CssVars.ColorAccidental };

  class DiesisGenikiAbove extends BaseMark {
    constructor() {
      super(glyphname$19, args$19);
    }
  }

  const glyphname$18 = 'diesisGenikiBelow';
  const args$18 = { color: CssVars.ColorAccidental };

  class DiesisGenikiBelow extends BaseMark {
    constructor() {
      super(glyphname$18, args$18);
    }
  }

  const glyphname$17 = 'yfesis2';
  const args$17 = { color: CssVars.ColorAccidental };

  class Yfesis2 extends BaseMark {
    constructor() {
      super(glyphname$17, args$17);
    }
  }

  const glyphname$16 = 'yfesis4';
  const args$16 = { color: CssVars.ColorAccidental };

  class Yfesis4 extends BaseMark {
    constructor() {
      super(glyphname$16, args$16);
    }
  }

  const glyphname$15 = 'yfesis6';
  const args$15 = { color: CssVars.ColorAccidental };

  class Yfesis6 extends BaseMark {
    constructor() {
      super(glyphname$15, args$15);
    }
  }

  const glyphname$14 = 'yfesis8';
  const args$14 = { color: CssVars.ColorAccidental };

  class Yfesis8 extends BaseMark {
    constructor() {
      super(glyphname$14, args$14);
    }
  }

  const glyphname$13 = 'yfesisGenikiAbove';
  const args$13 = { color: CssVars.ColorAccidental };

  class YfesisGenikiAbove extends BaseMark {
    constructor() {
      super(glyphname$13, args$13);
    }
  }

  const glyphname$12 = 'yfesisGenikiBelow';
  const args$12 = { color: CssVars.ColorAccidental };

  class YfesisGenikiBelow extends BaseMark {
    constructor() {
      super(glyphname$12, args$12);
    }
  }

  const glyphname$11 = 'barlineSingle';
  const args$11 = { color: CssVars.ColorBarline };

  class BarlineSingle extends BaseBody {
    constructor() {
      super(glyphname$11, args$11);
    }
  }

  const glyphname$10 = 'barlineDouble';
  const args$10 = { color: CssVars.ColorBarline };

  class BarlineDouble extends BaseBody {
    constructor() {
      super(glyphname$10, args$10);
    }
  }

  const glyphname$$ = 'barlineTheseos';
  const args$$ = { color: CssVars.ColorBarline };

  class BarlineTheseos extends BaseBody {
    constructor() {
      super(glyphname$$, args$$);
    }
  }

  const glyphname$_ = 'barlineShortSingle';
  const args$_ = { color: CssVars.ColorBarline };

  class BarlineShortSingle extends BaseBody {
    constructor() {
      super(glyphname$_, args$_);
    }
  }

  const glyphname$Z = 'barlineShortDouble';
  const args$Z = { color: CssVars.ColorBarline };

  class BarlineShortDouble extends BaseBody {
    constructor() {
      super(glyphname$Z, args$Z);
    }
  }

  const glyphname$Y = 'barlineShortTheseos';
  const args$Y = { color: CssVars.ColorBarline };

  class BarlineShortTheseos extends BaseBody {
    constructor() {
      super(glyphname$Y, args$Y);
    }
  }

  const glyphname$X = 'measureNumber2';
  const args$X = { color: CssVars.ColorMeasureNumber };

  class MeasureNumber2 extends BaseMark {
    constructor() {
      super(glyphname$X, args$X);
    }
  }

  const glyphname$W = 'measureNumber3';
  const args$W = { color: CssVars.ColorMeasureNumber };

  class MeasureNumber3 extends BaseMark {
    constructor() {
      super(glyphname$W, args$W);
    }
  }

  const glyphname$V = 'measureNumber4';
  const args$V = { color: CssVars.ColorMeasureNumber };

  class MeasureNumber4 extends BaseMark {
    constructor() {
      super(glyphname$V, args$V);
    }
  }

  const glyphname$U = 'measureNumber5';
  const args$U = { color: CssVars.ColorMeasureNumber };

  class MeasureNumber5 extends BaseMark {
    constructor() {
      super(glyphname$U, args$U);
    }
  }

  const glyphname$T = 'measureNumber6';
  const args$T = { color: CssVars.ColorMeasureNumber };

  class MeasureNumber6 extends BaseMark {
    constructor() {
      super(glyphname$T, args$T);
    }
  }

  const glyphname$S = 'measureNumber7';
  const args$S = { color: CssVars.ColorMeasureNumber };

  class MeasureNumber7 extends BaseMark {
    constructor() {
      super(glyphname$S, args$S);
    }
  }

  const glyphname$R = 'measureNumber8';
  const args$R = { color: CssVars.ColorMeasureNumber };

  class MeasureNumber8 extends BaseMark {
    constructor() {
      super(glyphname$R, args$R);
    }
  }

  const glyphname$Q = 'noteIndicatorNi';
  const args$Q = { color: CssVars.ColorNoteIndicator };

  class NoteIndicatorNi extends BaseMark {
    constructor() {
      super(glyphname$Q, args$Q);
    }
  }

  const glyphname$P = 'noteIndicatorPa';
  const args$P = { color: CssVars.ColorNoteIndicator };

  class NoteIndicatorPa extends BaseMark {
    constructor() {
      super(glyphname$P, args$P);
    }
  }

  const glyphname$O = 'noteIndicatorVou';
  const args$O = { color: CssVars.ColorNoteIndicator };

  class NoteIndicatorVou extends BaseMark {
    constructor() {
      super(glyphname$O, args$O);
    }
  }

  const glyphname$N = 'noteIndicatorGa';
  const args$N = { color: CssVars.ColorNoteIndicator };

  class NoteIndicatorGa extends BaseMark {
    constructor() {
      super(glyphname$N, args$N);
    }
  }

  const glyphname$M = 'noteIndicatorDi';
  const args$M = { color: CssVars.ColorNoteIndicator };

  class NoteIndicatorDi extends BaseMark {
    constructor() {
      super(glyphname$M, args$M);
    }
  }

  const glyphname$L = 'noteIndicatorKe';
  const args$L = { color: CssVars.ColorNoteIndicator };

  class NoteIndicatorKe extends BaseMark {
    constructor() {
      super(glyphname$L, args$L);
    }
  }

  const glyphname$K = 'noteIndicatorZo';
  const args$K = { color: CssVars.ColorNoteIndicator };

  class NoteIndicatorZo extends BaseMark {
    constructor() {
      super(glyphname$K, args$K);
    }
  }

  const glyphname$J = 'isonIndicatorUnison';
  const args$J = { color: CssVars.ColorIsonIndicator };

  class IsonIndicatorUnison extends BaseMark {
    constructor() {
      super(glyphname$J, args$J);
    }
  }

  const glyphname$I = 'isonIndicatorDiLow';
  const args$I = { color: CssVars.ColorIsonIndicator };

  class IsonIndicatorDiLow extends BaseMark {
    constructor() {
      super(glyphname$I, args$I);
    }
  }

  const glyphname$H = 'isonIndicatorKeLow';
  const args$H = { color: CssVars.ColorIsonIndicator };

  class IsonIndicatorKeLow extends BaseMark {
    constructor() {
      super(glyphname$H, args$H);
    }
  }

  const glyphname$G = 'isonIndicatorZo';
  const args$G = { color: CssVars.ColorIsonIndicator };

  class IsonIndicatorZo extends BaseMark {
    constructor() {
      super(glyphname$G, args$G);
    }
  }

  const glyphname$F = 'isonIndicatorNi';
  const args$F = { color: CssVars.ColorIsonIndicator };

  class IsonIndicatorNi extends BaseMark {
    constructor() {
      super(glyphname$F, args$F);
    }
  }

  const glyphname$E = 'isonIndicatorPa';
  const args$E = { color: CssVars.ColorIsonIndicator };

  class IsonIndicatorPa extends BaseMark {
    constructor() {
      super(glyphname$E, args$E);
    }
  }

  const glyphname$D = 'isonIndicatorVou';
  const args$D = { color: CssVars.ColorIsonIndicator };

  class IsonIndicatorVou extends BaseMark {
    constructor() {
      super(glyphname$D, args$D);
    }
  }

  const glyphname$C = 'isonIndicatorGa';
  const args$C = { color: CssVars.ColorIsonIndicator };

  class IsonIndicatorGa extends BaseMark {
    constructor() {
      super(glyphname$C, args$C);
    }
  }

  const glyphname$B = 'isonIndicatorDi';
  const args$B = { color: CssVars.ColorIsonIndicator };

  class IsonIndicatorDi extends BaseMark {
    constructor() {
      super(glyphname$B, args$B);
    }
  }

  const glyphname$A = 'isonIndicatorKe';
  const args$A = { color: CssVars.ColorIsonIndicator };

  class IsonIndicatorKe extends BaseMark {
    constructor() {
      super(glyphname$A, args$A);
    }
  }

  const glyphname$z = 'isonIndicatorZoHigh';
  const args$z = { color: CssVars.ColorIsonIndicator };

  class IsonIndicatorZoHigh extends BaseMark {
    constructor() {
      super(glyphname$z, args$z);
    }
  }

  const glyphname$y = 'gorthmikon';
  const args$y = {};

  class Gorthmikon extends BaseMark {
    constructor() {
      super(glyphname$y, args$y);
    }
  }

  const glyphname$x = 'pelastikon';
  const args$x = {};

  class Pelastikon extends BaseMark {
    constructor() {
      super(glyphname$x, args$x);
    }
  }

  const glyphname$w = 'modeFirst';
  const args$w = {};

  class ModeFirst extends BaseMark {
    constructor() {
      super(glyphname$w, args$w);
    }
  }

  const glyphname$v = 'modeSecond';
  const args$v = {};

  class ModeSecond extends BaseMark {
    constructor() {
      super(glyphname$v, args$v);
    }
  }

  const glyphname$u = 'modeThird';
  const args$u = {};

  class ModeThird extends BaseMark {
    constructor() {
      super(glyphname$u, args$u);
    }
  }

  const glyphname$t = 'modeThirdNana';
  const args$t = {};

  class ModeThirdNana extends BaseMark {
    constructor() {
      super(glyphname$t, args$t);
    }
  }

  const glyphname$s = 'modeFourth';
  const args$s = {};

  class ModeFourth extends BaseMark {
    constructor() {
      super(glyphname$s, args$s);
    }
  }

  const glyphname$r = 'modeLegetos';
  const args$r = {};

  class ModeLegetos extends BaseMark {
    constructor() {
      super(glyphname$r, args$r);
    }
  }

  const glyphname$q = 'modePlagalFirst';
  const args$q = {};

  class ModePlagalFirst extends BaseMark {
    constructor() {
      super(glyphname$q, args$q);
    }
  }

  const glyphname$p = 'modePlagalSecond';
  const args$p = {};

  class ModePlagalSecond extends BaseMark {
    constructor() {
      super(glyphname$p, args$p);
    }
  }

  const glyphname$o = 'modeVarys';
  const args$o = {};

  class ModeVarys extends BaseMark {
    constructor() {
      super(glyphname$o, args$o);
    }
  }

  const glyphname$n = 'modeVarys2';
  const args$n = {};

  class ModeVarys2 extends BaseMark {
    constructor() {
      super(glyphname$n, args$n);
    }
  }

  const glyphname$m = 'modePlagalFourth';
  const args$m = {};

  class ModePlagalFourth extends BaseMark {
    constructor() {
      super(glyphname$m, args$m);
    }
  }

  const glyphname$l = 'modeNi';
  const args$l = {};

  class ModeNi extends BaseMark {
    constructor() {
      super(glyphname$l, args$l);
    }
  }

  const glyphname$k = 'modePa';
  const args$k = {};

  class ModePa extends BaseMark {
    constructor() {
      super(glyphname$k, args$k);
    }
  }

  const glyphname$j = 'modeVou';
  const args$j = {};

  class ModeVou extends BaseMark {
    constructor() {
      super(glyphname$j, args$j);
    }
  }

  const glyphname$i = 'modeGa';
  const args$i = {};

  class ModeGa extends BaseMark {
    constructor() {
      super(glyphname$i, args$i);
    }
  }

  const glyphname$h = 'modeDi';
  const args$h = {};

  class ModeDi extends BaseMark {
    constructor() {
      super(glyphname$h, args$h);
    }
  }

  const glyphname$g = 'modeKe';
  const args$g = {};

  class ModeKe extends BaseMark {
    constructor() {
      super(glyphname$g, args$g);
    }
  }

  const glyphname$f = 'modeZo';
  const args$f = {};

  class ModeZo extends BaseMark {
    constructor() {
      super(glyphname$f, args$f);
    }
  }

  const glyphname$e = 'modeOligonKentimaAbove';
  const args$e = {};

  class ModeOligonKentimaAbove extends BaseMark {
    constructor() {
      super(glyphname$e, args$e);
    }
  }

  const glyphname$d = 'modeOligonYpsili';
  const args$d = {};

  class ModeOligonYpsili extends BaseMark {
    constructor() {
      super(glyphname$d, args$d);
    }
  }

  const glyphname$c = 'modeElafron';
  const args$c = {};

  class ModeElafron extends BaseMark {
    constructor() {
      super(glyphname$c, args$c);
    }
  }

  const glyphname$b = 'modeRunningElafron';
  const args$b = {};

  class ModeRunningElafron extends BaseMark {
    constructor() {
      super(glyphname$b, args$b);
    }
  }

  const glyphname$a = 'modePlagal';
  const args$a = {};

  class ModePlagal extends BaseMark {
    constructor() {
      super(glyphname$a, args$a);
    }
  }

  const glyphname$9 = 'modeWordEchos';
  const args$9 = {};

  class ModeWordEchos extends BaseMark {
    constructor() {
      super(glyphname$9, args$9);
    }
  }

  const glyphname$8 = 'modeWordVarys';
  const args$8 = {};

  class ModeWordVarys extends BaseMark {
    constructor() {
      super(glyphname$8, args$8);
    }
  }

  const glyphname$7 = 'modeAlpha';
  const args$7 = {};

  class ModeAlpha extends BaseMark {
    constructor() {
      super(glyphname$7, args$7);
    }
  }

  const glyphname$6 = 'modeBeta';
  const args$6 = {};

  class ModeBeta extends BaseMark {
    constructor() {
      super(glyphname$6, args$6);
    }
  }

  const glyphname$5 = 'modeGamma';
  const args$5 = {};

  class ModeGamma extends BaseMark {
    constructor() {
      super(glyphname$5, args$5);
    }
  }

  const glyphname$4 = 'modeDelta';
  const args$4 = {};

  class ModeDelta extends BaseMark {
    constructor() {
      super(glyphname$4, args$4);
    }
  }

  const glyphname$3 = 'modeAlphaCapital';
  const args$3 = {};

  class ModeAlphaCapital extends BaseMark {
    constructor() {
      super(glyphname$3, args$3);
    }
  }

  const glyphname$2 = 'modeBetaCapital';
  const args$2 = {};

  class ModeBetaCapital extends BaseMark {
    constructor() {
      super(glyphname$2, args$2);
    }
  }

  const glyphname$1 = 'modeGammaCapital';
  const args$1 = {};

  class ModeGammaCapital extends BaseMark {
    constructor() {
      super(glyphname$1, args$1);
    }
  }

  const glyphname = 'modeDeltaCapital';
  const args = {};

  class ModeDeltaCapital extends BaseMark {
    constructor() {
      super(glyphname, args);
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
    customElements.define('x-drop-cap', DropCap);
    customElements.define('x-lyric', Lyric);
    customElements.define('x-martyria', Martyria);
    customElements.define('x-melisma', Melisma);
    customElements.define('x-neume', Neume);
    customElements.define('x-note', Note);
    customElements.define('x-spacer', Spacer);
    customElements.define('x-spacer-apostrofos', SpacerApostrofos);
    customElements.define('x-spacer-vareia', SpacerVareia);

    defineCustomElementsCharactersCodegen();
  }

  function isWebkit() {
    const userAgent = navigator.userAgent.toLowerCase();

    // This should detect whether the user is using the Safari desktop browser
    if (
      userAgent.indexOf('safari') &&
      userAgent.indexOf('chrome') === -1 &&
      userAgent.indexOf('chromium') === -1 &&
      userAgent.indexOf('android') === -1
    ) {
      return true;
    }

    // This should detect whether the user is using the Safari iOS browser
    if (
      userAgent.indexOf('ipad') !== -1 ||
      userAgent.indexOf('iphone') !== -1 ||
      userAgent.indexOf('ipod') !== -1
    ) {
      return true;
    }

    return false;
  }

  if (isWebkit()) {
    console.log('byzhtml: webkit browser detected. Using webkit positioning.');

    fetch(
      'https://cdn.jsdelivr.net/gh/danielgarthur/byzhtml@1.0.4/dist/neanes.metadata.json',
    )
      .then((response) => {
        response
          .json()
          .then((data) => {
            byzhtml.fontService.loadMap(byzhtml.options.defaultFontFamily, data);
            byzhtml.options.useWebkitPositioning = true;
          })
          .catch((err) => {
            console.error('could not load font metadata: ' + err);
          })
          .finally(defineCustomElements);
      })
      .catch((err) => {
        console.error('could not load font metadata: ' + err);

        // Load the page anyway, even though the styling will be bad
        defineCustomElements();
      });
  } else {
    defineCustomElements();
  }

  return byzhtml;

})();
//# sourceMappingURL=byzhtml.js.map
