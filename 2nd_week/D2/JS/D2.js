/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
 // due variabili da confrontare (if else if else) console
*/

/*let num1 = 11
let num2 = 10
if (num1 < num2) {
  console.log("num1 e` piu` piccolo di num2");
} else {
  console.log("num1 e` piu` grande di num2");
}*/


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
  // una variabile not equal -> !==
*/

/*let num1 = 5
if (num1 !== 5) {
  console.log("not equal");
}*/

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
// divisbile -> resto % 
  */

/*let num1 = 15
if (num1%5 == 0 ) {
  console.log("divisibile per 5");
}*/


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
// if (serie di condizioni if -> la verifica === )
  */

/*let num1 = 18
let num2 = 10
let addiction = num1 + num2
let subtraction  = num1 - num2
let subtraction2 = num2 - num1
if ((num1 === 8) || (num2 === 8)) {
  console.log("uno dei due valori e` 8");
} if (addiction === 8) {
  console.log("l'addizione tra i due numeri e` 8");
} if (subtraction === 8) {
  console.log("la sottrazione tra i due numeri e` 8");
} if (subtraction2 === 8) {
  console.log("la sottrazione tra i due numeri e` 8");
}*/


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
  // dichiaro 3 variabili: totale, costo, pagamento=totale -> if -> se un valore è inferiore una soglia aggiungo le spese
*/

/*let totalShoppingCart = 49
let costoSpedizione = 10
let pagamento = totalShoppingCart
if (totalShoppingCart > 50) {
  console.log(totalShoppingCart);
} else {
  console.log(totalShoppingCart + costoSpedizione);
}*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
// simile a quello sopra (sconto * 0.8)
  */

/*let totalShoppingCart = 88
let costoSpedizione = 10
let pagamento = totalShoppingCart
let scontoBlackFriday = totalShoppingCart * 0.8
if (totalShoppingCart > 50) {
  console.log(scontoBlackFriday);
} else {
  console.log(scontoBlackFriday + costoSpedizione);
}*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
  // annido una serie di if -> controllo tutte le varie condizioni e con la console stampo la condizione (quando true)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
  // typeof -> if else
  */




/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
  // modulo di 2 (%2) -> if else
  */

 /*let x = 11
 if (x%2 === 0) {
  console.log("il numero fornito e` pari")
 } else {
  console.log("il numero fornito e` dispari")
 }*/

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
  
  /*let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }*/


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
// ricordatevi che siamo dentro a un oggetto -> aggiungo qualcosa (una proprietà) all'oggetto
  */

/*const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
} 
me.city = "Toronto";
console.log(me)*/


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
  // posso cancellare da un oggetto
*/

/*const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}  
delete me.lastName
console.log(me)*/

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
  // metodi array -> rimuovere l'ultimo elemento
  */

/*const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}   
me.skills.pop()
console.log(me)*/

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
  // metodi array -> inserire qualcosa nell'array
*/

/*let array = []
array.push (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(array)*/

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
  // selezionare il nono elemento e assegnare un nuovo valore
*/

/*let array = []
array.push (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
array [9] = 100
console.log(array)*/
