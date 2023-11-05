/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish'];
for (let i = 0; i < pets.length; i++) {
console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets". (cerca sort)
*/
pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
var petsReverse = pets.reverse();
for (let i = 0; i < petsReverse.length; i++) {
console.log(petsReverse[i]);
}


/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
pets.push(pets[0]);
pets.shift();
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

for (let i = 0; i < cars.length; i++) {
  const carsContent = cars[i];
  carsContent.licensePlate = 'SS' + Math.floor(Math.random() * 100)*999;
} console.log(cars);


    
  
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
cars.push(
  {
  brand: 'Acura',
  model: 'NSX',
  color: 'white',
  trims: ['limited', 'Twin-Turbo']
  }
)
for (let i = 0; i < cars.length; i++) {
  const carsContent = cars[i];
  carsContent.trims.pop();
} console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for (let i = 0; i < cars.length; i++) {
  const carsContent = cars[i];
  justTrims.push(carsContent.trims[0])
} console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  const carsContent = cars[i];
if (carsContent.color.substring(0, 1) === 'b') {
  console.log('Fizz');
} else {
  console.log('Buzz');
}
  }
  
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

var i = 0;
  while(numericArray[i] !== 32) {
    console.log(numericArray[i]);
    i++;
} 
  


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
const alphabet = []
for (let i = 0; i < charactersArray.length; i++) {
  const charIndex = charactersArray[i];

switch (true) {
  case charIndex == 'a':
  alphabet.push(1);
  break;
  case charIndex == 'b':
  alphabet.push(2);
  break;
  case charIndex == 'c':
  alphabet.push(3);
  break;
  case charIndex == 'd':
  alphabet.push(4);
  break;
  case charIndex == 'e':
  alphabet.push(5);
  break;
  case charIndex =='f':
  alphabet.push(6);
  break;
  case charIndex == 'g':
  alphabet.push(7);
  break;
  case charIndex == 'h':
  alphabet.push(8);
  break;
  case charIndex == 'i':
  alphabet.push(9);
  break;
  case charIndex == 'l':
  alphabet.push(10);
  break;
  case charIndex == 'm':
  alphabet.push(11);
  break;
  case charIndex == 'n':
  alphabet.push(12);
  break;
  case charIndex == 'o':
  alphabet.push(13);
  break;
  case charIndex == 'p':
  alphabet.push(14);
  break;
  case charIndex == 'q':
  alphabet.push(15);
  break;
  case charIndex == 'r':
  alphabet.push(16);
  break;
  case charIndex == 's':
  alphabet.push(17);
  break;
  case charIndex == 't':
  alphabet.push(18);
  break;
  case charIndex == 'u':
  alphabet.push(19);
  break;
  case charIndex == 'v':
  alphabet.push(20);
  break;
  case charIndex == 'z':
  alphabet.push(21);
  break;
  default:'no value'
  break;
  } 
}
console.log(alphabet); 