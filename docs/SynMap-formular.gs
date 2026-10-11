/**
 * SynMap – formulär för testanvändare.
 * Så här gör du:
 *   1. Gå till script.google.com och välj "Nytt projekt".
 *   2. Ta bort koden som står där och klistra in hela den här filen.
 *   3. Välj funktionen skapaFormular i listan överst och tryck på Kör.
 *   4. Godkänn behörigheten när Google frågar (det är ditt eget konto som skapar formuläret).
 *   5. Öppna Körningslogg: där står länken för att redigera formuläret och länken som testarna ska få.
 * Formuläret samlar inga e-postadresser automatiskt. Frågorna är samma som i SynMaps egna formulär.
 */
var FRAGOR = [
 {
  "sec": "Vad du gjorde"
 },
 {
  "id": "tests",
  "type": "check",
  "req": 1,
  "title": "Vilka test gjorde du?",
  "opts": [
   "Inledande frågor",
   "Ljud → färg",
   "Siffra → färg",
   "Bokstav → färg",
   "Veckodag och månad → färg",
   "Tid i rummet",
   "Spegelberöring",
   "Personlighet",
   "Ord → smak",
   "Enkäten Ute i världen eller i huvudet?",
   "Enkäten Så upplever du färgerna",
   "Jag har inte gjort något test än"
  ]
 },
 {
  "id": "device",
  "type": "radio",
  "req": 1,
  "title": "Vilken enhet använde du?",
  "opts": [
   "Mobil",
   "Surfplatta",
   "Dator"
  ],
  "other": 1
 },
 {
  "id": "browser",
  "type": "radio",
  "title": "Vilken webbläsare använde du?",
  "opts": [
   "Chrome",
   "Safari",
   "Firefox",
   "Edge",
   "Vet inte"
  ],
  "other": 1
 },
 {
  "id": "lang",
  "type": "radio",
  "title": "Vilket språk använde du i appen?",
  "opts": [
   "Svenska",
   "Engelska",
   "Franska",
   "Tyska",
   "Spanska"
  ]
 },
 {
  "id": "time",
  "type": "radio",
  "title": "Hur lång tid tog testerna sammanlagt?",
  "opts": [
   "Mindre än 10 minuter",
   "10–20 minuter",
   "20–40 minuter",
   "Mer än 40 minuter",
   "Jag minns inte"
  ]
 },
 {
  "id": "length",
  "type": "radio",
  "title": "Kändes längden lagom?",
  "opts": [
   "För kort",
   "Lagom",
   "För lång"
  ]
 },
 {
  "sec": "Hur det fungerade"
 },
 {
  "id": "instr",
  "type": "scale",
  "req": 1,
  "title": "Hur tydliga var instruktionerna?",
  "low": "Mycket otydliga",
  "high": "Mycket tydliga"
 },
 {
  "id": "easy",
  "type": "scale",
  "req": 1,
  "title": "Hur lätt var appen att använda?",
  "low": "Mycket svår",
  "high": "Mycket lätt"
 },
 {
  "id": "colour",
  "type": "scale",
  "title": "Hur lätt var det att välja färg i färgväljaren?",
  "help": "Hoppa över om du inte gjorde något färgtest.",
  "low": "Mycket svårt",
  "high": "Mycket lätt"
 },
 {
  "id": "picker",
  "type": "check",
  "title": "Vilken färgväljare använde du?",
  "help": "Under färgväljaren fanns knappar för att byta.",
  "opts": [
   "Hjul",
   "HSV",
   "Lab",
   "En i taget",
   "Vet inte"
  ]
 },
 {
  "id": "hard",
  "type": "long",
  "title": "Vad var svårt eller förvirrande?",
  "help": "Till exempel en fråga du inte förstod, en knapp du inte hittade eller något som kändes konstigt."
 },
 {
  "id": "broke",
  "type": "radio",
  "req": 1,
  "title": "Gick något sönder eller fungerade något inte?",
  "opts": [
   "Nej, allt fungerade",
   "Ja, något fungerade inte"
  ]
 },
 {
  "id": "brokeWhat",
  "type": "long",
  "title": "Om något inte fungerade: vad hände och var i appen?",
  "help": "Skriv vilket test eller vilken sida det gällde och vad du gjorde precis innan."
 },
 {
  "sec": "Resultaten och profilen"
 },
 {
  "id": "understood",
  "type": "scale",
  "title": "Förstod du dina resultat och din profil?",
  "help": "Hoppa över om du inte kom så långt.",
  "low": "Inte alls",
  "high": "Helt"
 },
 {
  "id": "plausible",
  "type": "scale",
  "title": "Kändes resultaten rimliga för dig?",
  "help": "Hoppa över om du inte kom så långt.",
  "low": "Inte alls",
  "high": "Helt"
 },
 {
  "id": "resultsHard",
  "type": "long",
  "title": "Var något i resultaten svårt att förstå eller missvisande?"
 },
 {
  "id": "prelim",
  "type": "radio",
  "title": "Förstod du att resultaten är preliminära och ingen diagnos?",
  "opts": [
   "Ja",
   "Delvis",
   "Nej",
   "Såg inte resultaten"
  ]
 },
 {
  "sec": "Om dig",
  "sub": "Frivilligt."
 },
 {
  "id": "syn",
  "type": "radio",
  "title": "Tror du att du har synestesi?",
  "opts": [
   "Ja",
   "Kanske",
   "Nej",
   "Vet inte",
   "Vill inte svara"
  ]
 },
 {
  "id": "how",
  "type": "radio",
  "title": "Hur kom du i kontakt med SynMap?",
  "opts": [
   "Jag känner personerna bakom appen",
   "Via någon jag känner",
   "Via sociala medier"
  ],
  "other": 1
 },
 {
  "sec": "Till sist"
 },
 {
  "id": "other",
  "type": "long",
  "title": "Har du något annat att säga om appen?"
 },
 {
  "id": "contact",
  "type": "short",
  "title": "Får vi kontakta dig med frågor om dina synpunkter? Skriv i så fall din e-postadress.",
  "help": "Frivilligt. Adressen används bara för att svara på dina synpunkter."
 }
];

function skapaFormular() {
  var form = FormApp.create('SynMap: din upplevelse av testet');
  form.setDescription(
    'Tack för att du testar SynMap! Det tar ungefär 5 minuter. Det är appen och testerna vi vill få synpunkter på, inte dig. ' +
    'Det finns inga rätta eller felaktiga svar.\n\n' +
    'Skriv inga av dina egna testsvar eller resultat här. Formuläret är anonymt, utom den frivilliga frågan om kontakt.'
  );
  form.setCollectEmail(false);
  form.setProgressBar(true);
  form.setAllowResponseEdits(false);
  form.setShowLinkToRespondAgain(false);
  form.setConfirmationMessage('Tack! Dina synpunkter hjälper oss att göra SynMap bättre.');

  var forsta = true;
  FRAGOR.forEach(function (q) {
    if (q.sec) {
      // Varje del börjar på en ny sida (utom den första).
      if (!forsta) form.addPageBreakItem().setTitle(q.sec).setHelpText(q.sub || '');
      else form.addSectionHeaderItem().setTitle(q.sec).setHelpText(q.sub || '');
      forsta = false;
      return;
    }
    var item;
    if (q.type === 'radio') {
      item = form.addMultipleChoiceItem();
      item.setChoiceValues(q.opts);
      if (q.other) item.showOtherOption(true);
    } else if (q.type === 'check') {
      item = form.addCheckboxItem();
      item.setChoiceValues(q.opts);
      if (q.other) item.showOtherOption(true);
    } else if (q.type === 'scale') {
      item = form.addScaleItem().setBounds(1, 5).setLabels(q.low || '', q.high || '');
    } else if (q.type === 'long') {
      item = form.addParagraphTextItem();
    } else {
      item = form.addTextItem();
    }
    item.setTitle(q.title);
    if (q.help) item.setHelpText(q.help);
    item.setRequired(!!q.req);
  });

  Logger.log('Redigera formuläret: ' + form.getEditUrl());
  Logger.log('Länk till testarna: ' + form.getPublishedUrl());
}
