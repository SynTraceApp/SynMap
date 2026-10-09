# Changelog

Allt som ändras i SynMap skrivs upp här, nyast överst. Läs den överst i början av varje session så vet du vad den andra har gjort sedan sist.

## Så skriver du en post
- En rubrik per dag: `## ÅÅÅÅ-MM-DD`. Finns dagens rubrik redan lägger du till under den.
- En punkt per ändring: `- **Område** – vad som ändrats och varför. (namn)`
- Områden: **App**, **Test**, **Resultat**, **Design**, **Text**, **Underlag**, **Repo**.
- Skriv för en människa, inte för en dator. Säg vad användaren märker eller vad den andra behöver veta, inte vilka rader som ändrats.
- Nämn det som är ofärdigt eller trasigt, så att den andra inte tror att det fungerar.

## 2026-10-09
- **Test** – Nytt test Bokstav → färg med bokstäverna A–Ö, tre gånger var (87 frågor). Det fungerar som siffertestet: bokstaven får den färg man väljer. (Rickard)
- **Resultat** – Efter en uppföljning visas första och senaste sessionen tecken för tecken: två färgprickar bredvid varandra och avståndet mellan dem (lägre = mer lika). Detaljerna fälls ut automatiskt när det finns en uppföljning. (Rickard)
- **Profil** – Ny skärm "Din synestesiprofil" som samlar alla tester i en karta runt "Du". Testade typer visas som färgringar med andel tecken som gav färg. Typer man bara svarat på i de inledande frågorna (tid och rum, ord → smak, personlighet) visas streckade. Nås från Välj test och från resultatet. (Rickard)
- **Test** – I Siffra → färg får nu själva siffran den färg man väljer, i stället för en liten färgruta nere till höger som högerhänta täckte med handen. I Ljud → färg visas vald färg bredvid frågan "Vilken färg upplevde du?". (Rickard)
- **Design** – Gav appen utseendet från konceptbilderna: vit skärm med färgband på välkomstsidan, Välj test och Uppföljning, prickstege överst, radioknappar utan ramar och violetta knappar. Ljudtestet har en lila spela-knapp med ljudvåg och frågorna som numrerade val. Resultatet visar färgprickar per test, detaljer bakom "Visa detaljer" och en egen ruta för Konsistens. Typsnittet är nu Plus Jakarta Sans. Poängsättning och sparade svar är oförändrade. (Rickard)
- **Test** – Färgväljaren är fortfarande ett fritt färgfält i stället för konceptets tio fasta färgrutor, eftersom fasta rutor gör att svaren ser mer konsekventa ut än de är. Inte ändrat ännu, väntar på beslut. (Rickard)
- **Repo** – Bytte till att båda pushar direkt till `main` utan pull requests. Lade till den här changeloggen och regeln att varje push ska ha en post här. (Rickard)
- **Repo** – Lade till samarbetsregler för två Claude i `CLAUDE.md`, en lista över pågående arbete i `ARBETE.md` och en beslutslogg i `BESLUT.md`. (Rickard)
- **App** – Lade in prototypen med sju skärmar i `app/index.html`: Välkommen, Inledande frågor, Välj test, Ljud→färg, Siffra→färg, Resultat och Uppföljning. Det är samma version som den publicerade länken just nu. (Rickard)
- **Underlag** – Lade in projektbeskrivningen och konceptbilderna i `docs/`. (Rickard)
