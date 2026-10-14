# SynMap

SynMap är en gratis app med öppen källkod där man kan utforska om man har synestesi. Appen börjar med en kort enkät och går sedan vidare till konsistenstest för olika typer av synestesi. Resultatet visas som en personlig synestesiprofil.

SynMap är ett screeningverktyg och ställer ingen diagnos.

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

## Arbeta med Claude

Koppla det här repot till ditt eget Claude-projekt. Claude följer reglerna i `CLAUDE.md`: båda pushar direkt till `main` efter att ha hämtat det senaste, varje ändring skrivs upp i `CHANGELOG.md`, pågående arbete i `ARBETE.md` och viktiga beslut i `BESLUT.md`.
