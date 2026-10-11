# Beslut

Kort logg över beslut som påverkar framtida arbete. Nyast överst. Format: `- ÅÅÅÅ-MM-DD – beslut – vem`.

- 2026-10-09 – Spärr mot falska träffar: minst 4 tecken med färg alla tre gånger, minst 3 olika färger, ingen färg över 60 % av svaren och högst 80 % svart/vitt/grått. Annars visas "Kan inte bedömas". – Rickard
- 2026-10-09 – Båda pushar direkt till `main` utan pull requests. Alltid `git pull --rebase` före push, aldrig force push. – Rickard
- 2026-10-09 – Resultat visas aldrig som diagnos, bara som sannolikhet och konsistens, och är preliminära tills uppföljningarna är gjorda. – Rickard
- 2026-10-09 – Första prototypen följer konceptbildens sju skärmar: Välkommen, Inledande frågor, Välj test, Ljud→färg, Siffra→färg, Resultat, Uppföljning. – Rickard
- 2026-10-09 – Grafem–färg-test: tre visningar per tecken, poäng är summan av avstånden i CIELUV, gräns 135,3 enligt Rothen m.fl. (2013). – Rickard
- 2026-10-09 – Färger: marinblå #28365B (text), violett #7657D5 (knappar), turkos #47BDB1, varm orange #FFB56B, ljus neutral bakgrund. Mobil först, svenska först. – Rickard
- 2026-10-09 – Appen är en enda HTML-fil utan byggsteg. Svar sparas bara lokalt i webbläsaren. – Rickard
- 2026-10-09 – Inga betalda utvecklingskostnader eller åtaganden innan forskare eller ett universitet är med. – Rickard
- 2026-10-09 – Samlad bedömning per test i fyra nivåer (Starkt/Måttligt/Svagt stöd, Kan inte bedömas). Starkt stöd kräver godkänd uppföljning. Gränser: konsistens 135,3, uppföljning 45 (135,3/3), snabbtest 80 % rätt, Tid i rummet 0,2029 % och flytt under 10 %. Ordet diagnos används aldrig. – Rickard
- 2026-10-09 – Testytan är alltid neutral grå #8a8a8a, oberoende av ljust eller mörkt läge. – Rickard
- 2026-10-09 – Appen är tvåspråkig (svenska och engelska). Stimuli sparas alltid på svenska; engelska bokstavstestet är A–Z. – Rickard
- 2026-10-09 – Tester och frågor ska bygga på etablerad forskning där det går, med källan angiven i appen. – Rickard
- 2026-10-09 – CLaN-enkäten (Rothen m.fl. 2013) används med den engelska originaltexten och en egen svensk översättning. Fråga Sussex-gruppen om lov och om en validerad översättning innan appen sprids brett. – Rickard
- 2026-10-09 – Ljudtestet följer Ward m.fl. (2006): pianotoner en kvint isär och samma ton på olika instrument, syntetiserade i webbläsaren. – Rickard
- 2026-10-09 – Data delas med forskare genom att deltagaren sparar en fil och mejlar den själv. Ingen automatisk insamling förrän en forskargrupp med etikprövning och GDPR-ansvar är med. – Rickard
- 2026-10-09 – Deltagaren anger ingen e-post i appen. Delning sker med en studiekod (SYN- och fyra tecken) som forskargruppen delar ut, och forskargruppen beskriver själv hur filen skickas. Ersätter mejl-knappen. – Rickard
- 2026-10-09 – Projektor–associator mäts med Rouw och Scholtes frågor (reviderad version, 9 påståenden) i stället för Skelton m.fl. (2009), vars illustrerade frågor inte gick att få tag på. – Rickard
- 2026-10-09 – Spegelberöringstestet följer Ward m.fl. (2018) men med egna tecknade klipp. Gränsen 7 av 14 visas bara som en grov jämförelse tills vi får originalfilmerna eller lov att använda dem. – Rickard
- 2026-10-11 – Samtyckesfrågan och den delade databasen för Forskningsunderlag (från cajsag73) är dolda (RESEARCH_ON = false) och artefakten deklarerar inte db. De slås på först när det finns ett nytt beslut här om delad insamling. – Rickard
- 2026-10-11 – Välj test visar alla tester i en lista. Inledande frågor är ett eget kort som rekommenderar vidare tester; rekommenderade tester får en etikett "Rekommenderas" i stället för en egen rubrik. Självskattning är för eget bruk och påverkar inga rekommendationer. – Cajsa (ersatt 2026-10-11 av Rickard, se nedan)
- 2026-10-11 – Personifiering och Ord → smak poängsätts som konsekvens mellan två omgångar i samma session: minst 4 träffar och minst 70 % lika svar. Gränsen är vår egen och visas som preliminär, inte som forskningens gräns. – Cajsa
- 2026-10-11 – Ord → smak följer MULTISENSE (Ipser, Ward och Simner 2019) med fem grundsmaker och gränsen 26 %, i stället för vår egen gräns på 70 %. Ordlistan är vår egen tills vi får originalets. Personifiering har ingen validerad poängsättning och behåller vår egen gräns. – Cajsa
- 2026-10-11 – "Dela med en forskare" (studiekod, filexport och CSV) är borttaget ur appen tills ni har bestämt hur data ska delas. Ersätter beslutet från 9 oktober om studiekod. Svaren sparas fortfarande bara i användarens webbläsare. – Cajsa
- 2026-10-11 – Alla tester kan göras om efter 7 dagar (uppföljning). Självskattning är avstängd tills vidare. – Cajsa
- 2026-10-11 – Upphovsrader i appen: Koncept (Cajsa), Utveckling (Cajsa och Rickard), Programmering (Rickard), © 2026 Cajsa Gustafsson och Rickard Lundgren samt en rad om att appen byggts med hjälp av AI (Claude, Anthropic). Licens för repot är inte vald än. – Cajsa
- 2026-10-11 – Testare når oss via synmap@proton.me, som en mailto-länk längst ned i Så fungerar SynMap. Inget kontaktformulär och inget skickas från appen. – Cajsa
- 2026-10-11 – Upphovsraderna i appen använder pseudonymerna Fiona och Fingal. Ersätter raden om namn i upphovsraderna från tidigare idag. Kontaktadressen och övriga rader är oförändrade. – Cajsa
- 2026-10-11 – Snabbtestet har ingen tidsgräns per fråga: nästa kommer när man har svarat, men tecknet visas bara en gång i en sekund. Ska granskas av en forskare. – Cajsa
- 2026-10-11 – Profilen visar sinnena som överlappande cirklar överst. Överlappet motsvarar testets stödnivå (starkt 45 %, måttligt 30 %, svagt 15 % av den mindre cirkeln, Ord → smak 30 % om konsistensen når 26 %). Det är en grov bild och inget exakt mått. Primära och sekundära sinnen är vår indelning. – Cajsa
- 2026-10-11 – Välj test visar rekommenderade tester först, sorterade efter svaret (Ja, tydligt > Ibland > Vet inte) och sedan efter tid, kortast först, och övriga under "Fler tester". Påbörjade tester syns alltid; de som väntar på uppföljning ligger under dem som går att göra nu. Ersätter Cajsas rad om att alla tester visas i en lista. Gå tillbaka med `git revert` på commits "Sortera Välj test efter relevans…" och "Sortera rekommenderade tester efter tid…". Etiketten Rekommenderas finns kvar. – Rickard
- 2026-10-11 – Appen visar inte deltagarna hur testerna poängsätts: inga gränsvärden i resultaten och inga tips före testet om att svaren jämförs. Gränserna gäller fortfarande i beräkningen och dokumenteras här och i koden. Ändrar Cajsas texter i Personlighet och Ord → smak (hennes beslut om gränserna gäller fortfarande). – Rickard
- 2026-10-11 – Länkraden är Välj test / Mina resultat / Min profil. Ändra mina svar är borttagen eftersom kortet Inledande frågor gör samma sak och namnet var otydligt. Ändrar Cajsas länkrad (CHANGELOG 2026-10-11). – Rickard
- 2026-10-11 – Piltangenterna för Föregående/Nästa (ARROW_NAV) är bara en testhjälp och ska tas bort före release. – Rickard
