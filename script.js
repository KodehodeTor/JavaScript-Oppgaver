/******************************************************************************
OPPGAVE 1

Din første oppgave er å koble denne JavaScript-filen til index.html-filen
ved å bruke en av metodene vi viste i første forelesning.

<-- Finn index.html-filen i filutforskeren og koble den til denne filen,
javascript.js
******************************************************************************/

// Løs denne oppgaven i index.html

/******************************************************************************
OPPGAVE 2

I forrige undervisning lærte vi hvordan man lager variabler som kan holde ulike
typer verdier. Lag noen variabler med følgende datatyper:
- String (tekst)
- Number (tall)
- Boolean (sann/usann)
- Array (liste)

Du kan velge hva innholdet i variablene skal være. Prøv å bruke både let og 
const når du definerer variablene.
******************************************************************************/

//OPPGAVE 2:
//- String (tekst)
const firstName = "Tor Jarand";
const lastName = "Jullum";

//Her legger vi til variabel firstName + mellomrom + lastName som gir Tor Jarand Jullum
console.log(firstName + " " + lastName);

//Number (tall)
const nummer1 = 20;
const nummer2 = 10;
const nummer3 = 5;

//Her minuser vi 20 med 10 og legger til 5 som gir oss 15 i konsollen.
console.log(nummer1 - nummer2 + nummer3);

//Boolean (sann/usann)
const tyngdekraft = true;
let alverOgOrker = false;

//Her har vi konstantert at tyngdekraft er sann og alver og orker er usanne.
console.log(tyngdekraft);
console.log(alverOgOrker);

//Array (Liste)
const oddeTall = [1, 3, 5, 7, 9];
let tilfeldigNummer = [1337, 8085];

//Her har vi konstantert at oddetall er 1,3,5,7 og 9.
console.log(oddeTall);

//Her henviser vi til tallene 1337 og 80085, som kan endres på men nå skrives som dem står ovenfor i konsollen.
console.log(tilfeldigNummer);

//Her plukker vi spesifikt ut oddetallene 3 og 7.
console.log(oddeTall[1]);
console.log(oddeTall[3]);

tilfeldigNummer = [1336, 8084];

//Over har vi endret verdien på tilfeldigNummer med 1 mindre som gir oss 1336 og 8084 i konsollen.
console.log(tilfeldigNummer);

/******************************************************************************
OPPGAVE 3

Prøv ut noen av operatorene vi så på i forrige forelesning:
- Matematiske operatorer: +, -, /, *
- Forkortede operatorer: ++, --, +=, -=

Skriv noen eksempler der du tester disse operatorene.
******************************************************************************/

//Her lar vi counter starte på 0;
let counter = 0;

console.log(counter);

//Her legger vi til 2 ved å bruke ++ 2 ganger
counter++;
counter++;

console.log(counter);

//Her miuser vi tilbake til 0 ved å bruke -- 2 ganger.
counter--;
counter--;

console.log(counter);

//Her legger vi til 10 ved å bruke addition compund assignment.
counter += 10;

console.log(counter);

//Her endrer vi counter fra 10 til 5
counter = 5;
console.log(counter);

//Her ganger vi 5 med 4 som gir oss 20
counter *= 4;
console.log(counter);

//Til slutt deler vi 20 med 3 som gir oss  6.666666666666667
counter /= 3;
console.log(counter);
/******************************************************************************/
