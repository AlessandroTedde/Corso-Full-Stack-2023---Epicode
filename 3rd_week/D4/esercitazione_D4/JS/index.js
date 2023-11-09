// 1. funzione che genera la tabella con tutti i numeri
// 2. funzione che scrive i numeri (push in un array)
// 3. funzione (associata al bottone) che genera dei numeri random
// 4. funzione che aggiunge una class classList.add('highlight')
// 5. funzione che generale delle tabelline da 24
// funzioni vanno dichiarate e invocate

const numeri = []

function randomNumber() {
    const creaBottoneRandom = document.createElement('button');
    creaBottoneRandom.innerText = 'Fai uscire un numero';
    const findDivBottone = document.getElementById('bottone');
    findDivBottone.appendChild(creaBottoneRandom);
    const findDivRisultato = document.getElementById('risultato');
    const inputRandom = document.createElement('input');
    findDivRisultato.appendChild(inputRandom);
    creaBottoneRandom.addEventListener('click', function () {
        const numeroRandom = Math.ceil(Math.random() * 78)
        inputRandom.value = numeroRandom 
    })
} randomNumber();

function generaDiv() { 
    for (let i = 0; i <= 79; i++) {
        numeri.push(i)
    }
    for (let i = 0; i < numeri.length; i++) {
    const creaDivTabellone = document.createElement('div');
    creaDivTabellone.innerText = numeri[i];
    const findDivTabellone = document.getElementById('tabellone');
    findDivTabellone.appendChild(creaDivTabellone);
    }
} generaDiv()
