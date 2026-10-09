# SynMap – regler för Claude

Två personer arbetar i det här repot, var och en med sin egen Claude. De här reglerna gör att ni inte skriver över varandra och att den andra alltid kan se vad som händer. Läs dem i början av varje uppgift.

## Innan du börjar
1. Hämta det senaste: `git pull --rebase origin main`. Gör det varje gång, även mitt i en session om det har gått en stund.
2. Läs `ARBETE.md`. Där syns vad den andra håller på med just nu.
3. Läs `BESLUT.md` innan du ändrar något som redan är bestämt.

## Under arbetet
- Ni arbetar båda direkt i `main`, utan pull requests.
- Skriv in uppgiften i `ARBETE.md` under "Pågår", med namn, och pusha det direkt innan du börjar med själva jobbet. Rör inte filer eller delar som någon annan har skrivit upp där.
- Gör små commits som var och en gör en sak, och pusha ofta. Skriv commit-meddelanden på svenska som säger vad som ändrats och varför.
- Om en uppgift kräver ändringar i något som den andra håller på med: stanna och fråga din människa i stället för att gå vidare.

## När du pushar
1. Kör alltid `git pull --rebase origin main` precis innan `git push origin main`.
2. Om pushen nekas för att den andra har pushat: kör `git pull --rebase origin main` igen, lös konflikterna så att bådas ändringar finns kvar, testa och pusha igen.
3. Använd aldrig `git push --force` och skriv aldrig om historiken på `main`. Det raderar den andras arbete.
4. Om en konflikt gäller något du inte förstår eller inte äger: stanna och fråga din människa.
5. Flytta uppgiften i `ARBETE.md` från "Pågår" till "Klart" när den är färdig.
6. Har ni tagit ett beslut som påverkar framtida arbete (design, poängsättning, ordval, struktur)? Lägg till en rad i `BESLUT.md`.

## Om appen
- `app/index.html` är prototypen: en enda självbärande HTML-fil som ska fungera direkt i webbläsaren. Lägg inte till något byggsteg eller ramverk utan ett beslut i `BESLUT.md`.
- Skriv all text i appen på svenska.
- Formulera aldrig resultat som en diagnos. Använd ord som "sannolikhet", "konsistens" och "mönster", och visa resultat som preliminära tills uppföljningarna är gjorda.
- Svar sparas bara i användarens egen webbläsare. Skicka inga data någonstans utan ett beslut i `BESLUT.md`.
- Testa ändringar genom att öppna filen i webbläsaren, både i mobilbredd och datorbredd, innan du pushar.
- Bakgrunden till hela projektet finns i `docs/projektbeskrivning.txt` och `docs/koncept_sju_skarmar.png`.
