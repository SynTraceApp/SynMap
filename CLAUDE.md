# SynMap – regler för Claude

Två personer arbetar i det här repot, var och en med sin egen Claude. De här reglerna gör att ni inte skriver över varandra och att den andra alltid kan se vad som händer. Läs dem i början av varje uppgift.

## Innan du börjar
1. Hämta det senaste från `main` (`git fetch origin main`) och utgå från det.
2. Läs `ARBETE.md`. Där syns vad den andra håller på med just nu.
3. Läs `BESLUT.md` innan du ändrar något som redan är bestämt.

## Under arbetet
- Arbeta aldrig direkt i `main`. Skapa en egen gren som heter `<namn>/<kort-beskrivning>`, till exempel `rickard/ljud-farg-test`.
- Skriv in uppgiften i `ARBETE.md` under "Pågår", med namn och gren, och pusha det tidigt. Rör inte filer eller delar som någon annan har skrivit upp där.
- Håll varje gren liten och avgränsad till en sak. Hellre flera små pull requests än en stor.
- Om en uppgift kräver ändringar i något som den andra håller på med: stanna och fråga din människa i stället för att gå vidare.

## När du är klar
1. Hämta `main` igen och lös eventuella konflikter i din gren.
2. Öppna en pull request till `main`. Skriv beskrivningen på svenska: vad som ändrats, varför och hur man testar det.
3. Flytta uppgiften i `ARBETE.md` från "Pågår" till "Klart".
4. Låt en människa slå ihop pull requesten. Slå aldrig ihop den själv och skriv aldrig om historiken på `main` eller i någon annans gren.
5. Har ni tagit ett beslut som påverkar framtida arbete (design, poängsättning, ordval, struktur)? Lägg till en rad i `BESLUT.md`.

## Om appen
- `app/index.html` är prototypen: en enda självbärande HTML-fil som ska fungera direkt i webbläsaren. Lägg inte till något byggsteg eller ramverk utan ett beslut i `BESLUT.md`.
- Skriv all text i appen på svenska.
- Formulera aldrig resultat som en diagnos. Använd ord som "sannolikhet", "konsistens" och "mönster", och visa resultat som preliminära tills uppföljningarna är gjorda.
- Svar sparas bara i användarens egen webbläsare. Skicka inga data någonstans utan ett beslut i `BESLUT.md`.
- Testa ändringar genom att öppna filen i webbläsaren, både i mobilbredd och datorbredd, innan du öppnar en pull request.
- Bakgrunden till hela projektet finns i `docs/projektbeskrivning.txt` och `docs/koncept_sju_skarmar.png`.
