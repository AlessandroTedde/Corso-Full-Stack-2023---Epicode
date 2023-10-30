/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I datatype primitivi in Javascript sono 5: numeri, stringhe, booleani, null e undefined. 
Esiste anche un altro tipo di dati complessi, ovvero gli oggetti.

- Per i numeri esiste solo un tipo di dato che li racchiude tutti (che siano numeri negativi, decimali, interi) e non si scrivono tra apici.
il punto fa da separatore per i numeri decimali.
Esempio: var x = 10.5; 
         oppure se fosse negativo var x = -10.5;
         
- le stringhe sono una serie di caratteri contenuti in un apice o doppio apice. 
In quale dei due intendiamo racchiuderli non cambia, basta che siano uguali all'inizio e alla fine.
esempio: var x = 'cassa';
oppure   var x = "cassa";
vanno bene entrambe.

- i booleani sono quei dati che possono avere solo due valori, che sono true (vero) o false (falso)
Esempio: var jsFacile = false;

- i dati null possono solo avere valore null, che non e' ne' 0, ne' niente, ne' riga vuota. E' un tipo di valore che esiste ma e' come se fosse fine a se stesso.
Esempio var y = null;

i dati undefined non hanno alcun valore assegnato, il loro valore non esiste.
Esempio: var cervello;
*/



/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

var name = 'Alessandro'

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

console.log(12 + 20)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

var x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

var name = 'Tedde'
/*const surname = 'Tedde'
const surname = 'Berlusconi'*/
/*in basso a sinistra avremo un messaggio di errore con scritto
	"message": "Cannot redeclare block-scoped variable 'surname'."
  e se ispezioniamo il codice nel browser nella sezione della console avremo il messaggio:
  Uncaught SyntaxError: Identifier 'surname' has already been declared
  Percio' il codice sara' invalido
*/


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(4 - x) // la console risponde -8

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

var name1 = 'john';
var name2 = 'John';
console.log(name1 === name2); // la console risponde false
var name1 = 'john'.toLowerCase;
var name2 = 'John'.toLowerCase;
console.log(name1 === name2) // la console risponde true