# SynTrace

SynTrace är en gratis app med öppen källkod där man kan utforska om man har synestesi. Appen börjar med en kort enkät och går sedan vidare till konsistenstest för olika typer av synestesi. Resultatet visas som en personlig synestesiprofil.

SynTrace är ett screeningverktyg och ställer ingen diagnos.

## Innehåll

| Sökväg | Vad det är |
|---|---|
| `app/index.html` | Prototypen. Det är en enda HTML-fil, så öppna den direkt i en webbläsare. |
| `app/manifest.webmanifest`, `app/sw.js`, `app/icons/` | Det som gör appen installerbar (PWA) när den ligger på GitHub Pages. |
| `app/integritet.html` | Integritetspolicyn. |
| `docs/projektbeskrivning.txt` | Den samlade projektbeskrivningen med idé, funktioner, testupplägg, design och nästa steg. |
| `docs/koncept_sju_skarmar.png` | Konceptbild med de sju skärmarna i den första prototypen. |
| `docs/inspirationsbilder_oversikt.jpg` | Översikt över inspirationsbilder. |

## Prototypen just nu

Grafem–färg-testet visar bokstäver A–Ö och siffror 0–9 tre gånger var i slumpmässig ordning. För varje tecken räknas summan av avstånden i CIELUV mellan de tre färgvalen, och sedan medelvärdet över alla tecken. Gränsen 135,3 kommer från Rothen m.fl. (2013). Svaren sparas bara i användarens egen webbläsare.

## Poängsättning och gränsvärden (för forskare)

Hur resultaten räknas finns i koden (`app/index.html`) och i `BESLUT.md`. Appen visar inga gränsvärden för den som gör testerna, men de gäller i beräkningen. De viktigaste:

| Test | Hur det räknas | Källa |
|---|---|---|
| Grafem–färg, siffror och bokstäver | Summan av avstånden i CIELUV mellan tre färgval per tecken, medel över alla tecken. Gräns 135,3. | Rothen m.fl. (2013) |
| Uppföljning efter 7 dagar | Korsvis: medel av alla avstånd mellan första och senaste omgången, gånger 3, mot samma gräns 135,3. | **Vår egen tillämpning** av Rothen m.fl. (2013) |
| Snabbtest | 80 % rätt. Ingen tidsgräns per fråga, tecknet visas en sekund. | **Vår egen gräns** |
| Spegelberöring | 7 av 14, bara som grov jämförelse. Egna tecknade klipp. | Ward m.fl. (2018), men inte originalfilmerna |
| Ord → smak | Fem grundsmaker och gräns 26 %. Ordlistan är vår egen. | MULTISENSE (Ipser, Ward och Simner 2019) |
| Personlighet | Minst 4 träffar och minst 70 % lika svar mellan två omgångar. Kan inte bedömas om över 60 % av svaren är samma kombination. | **Vår egen gräns, inte validerad** |

Gränserna som är markerade som våra egna är inte validerade och visas som preliminära. Uppföljningens poängsättning, snabbtestet och Personlighet bör granskas av en forskare innan resultaten används i en studie. Resultaten är mönster och sannolikheter, aldrig en diagnos.

## Arbeta med Claude

Koppla det här repot till ditt eget Claude-projekt. Claude följer reglerna i `CLAUDE.md`: båda pushar direkt till `main` efter att ha hämtat det senaste, varje ändring skrivs upp i `CHANGELOG.md`, pågående arbete i `ARBETE.md` och viktiga beslut i `BESLUT.md`.
