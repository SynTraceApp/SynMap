# SynMap – regler för Claude

Två personer arbetar i det här repot, var och en med sin egen Claude. De här reglerna gör att ni inte skriver över varandra och att den andra alltid kan se vad som händer. Läs dem i början av varje uppgift.

## Innan du börjar
1. Hämta det senaste: `git pull --rebase origin main`. Gör det varje gång, även mitt i en session om det har gått en stund.
2. Läs de översta posterna i `CHANGELOG.md`. Där står vad som har hänt sedan sist.
3. Läs `ARBETE.md`. Där syns vad den andra håller på med just nu.
4. Läs `BESLUT.md` innan du ändrar något som redan är bestämt.
5. Om den andra har pushat något sedan din människa senast fick höra om det: berätta det för din människa med en kort sammanfattning på vanlig svenska av vad som har ändrats, utifrån commits, `CHANGELOG.md` och `BESLUT.md`. Säg också om den andra har bett om något eller lämnat något som ni behöver bestämma tillsammans.

## När ni har sagt olika saker
Det här är extra viktigt. Om något som din människa ber om går emot något som den andra har bestämt, bett om eller byggt (i `BESLUT.md`, `CHANGELOG.md`, `ARBETE.md` eller koden):
1. Säg det till din människa innan du gör ändringen: vad var och en har sagt, när och var det står.
2. Görs ändringen ändå, gör den i en egen commit som bara innehåller den ändringen. Börja commit-meddelandet med `Ändrar <namn>s beslut:` så att den går att hitta med `git log --grep="beslut:"` och ångra med `git revert <commit>`.
3. Stryk inte den gamla raden i `BESLUT.md`. Lägg till ` (ersatt ÅÅÅÅ-MM-DD av <namn>, se nedan)` sist på den och skriv en ny rad som säger vad som gäller nu och vad den ersätter.
4. Skriv i changelog-posten att den ersätter den andras beslut och hur man går tillbaka.
5. Märker du att den andra har ändrat något som din människa har bestämt: säg det direkt till din människa, med vad som ändrades och i vilken commit.

## Under arbetet
- Ni arbetar båda direkt i `main`, utan pull requests.
- Skriv in uppgiften i `ARBETE.md` under "Pågår", med namn, och pusha det direkt innan du börjar med själva jobbet. Rör inte filer eller delar som någon annan har skrivit upp där.
- Gör små commits som var och en gör en sak, och pusha ofta. Skriv commit-meddelanden på svenska som säger vad som ändrats och varför.
- Om en uppgift kräver ändringar i något som den andra håller på med: stanna och fråga din människa i stället för att gå vidare.

## När du pushar
1. Skriv en post i `CHANGELOG.md` för det du har ändrat, enligt instruktionen överst i filen. Ingen push utan changelog-post.
2. Kör alltid `git pull --rebase origin main` precis innan `git push origin main`.
3. Om pushen nekas för att den andra har pushat: kör `git pull --rebase origin main` igen, lös konflikterna så att bådas ändringar finns kvar, testa och pusha igen.
4. Använd aldrig `git push --force` och skriv aldrig om historiken på `main`. Det raderar den andras arbete.
5. Om en konflikt gäller något du inte förstår eller inte äger: stanna och fråga din människa.
6. Flytta uppgiften i `ARBETE.md` från "Pågår" till "Klart" när den är färdig.
7. Har ni tagit ett beslut som påverkar framtida arbete (design, poängsättning, ordval, struktur)? Lägg till en rad i `BESLUT.md`.

## Om appen
- `app/index.html` är prototypen: en enda självbärande HTML-fil som ska fungera direkt i webbläsaren. Lägg inte till något byggsteg eller ramverk utan ett beslut i `BESLUT.md`.
- Skriv all text i appen på svenska. Appen finns också på engelska: lägg till varje ny eller ändrad svensk text i ordlistan `EN` i `app/index.html` (svensk text → engelsk text) och använd `t("...")` för text som skrivs ut från JavaScript. Längre texter i HTML kan i stället ha en svensk och en engelsk version med `data-lang="sv"` och `data-lang="en"`. Testa på båda språken.
- Formulera aldrig resultat som en diagnos. Använd ord som "sannolikhet", "konsistens" och "mönster", och visa resultat som preliminära tills uppföljningarna är gjorda.
- Svar sparas bara i användarens egen webbläsare. Skicka inga data någonstans utan ett beslut i `BESLUT.md`.
- Testa ändringar genom att öppna filen i webbläsaren, både i mobilbredd och datorbredd, innan du pushar.
- Bakgrunden till hela projektet finns i `docs/projektbeskrivning.txt` och `docs/koncept_sju_skarmar.png`.
