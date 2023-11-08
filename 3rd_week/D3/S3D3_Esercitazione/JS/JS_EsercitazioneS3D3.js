// tre cose
// 1. funzione che fa addtask
// 2. funzione che gestisce attachcomplete (riga sbarrata)
// 3. una funzione che attachDelete (cancella)
const handleSubmit = function(e) {
    e.preventDefault()          // evita il comportamento di default
    addTask()
    attachComplete()
    attachDelete()
}


const addTask = function() {
// agganciare gli elementi html come fatto stamattina
// stampare l'html necessario per aggiungere il value del mio campo input inputField.value
// ogni task che agiungo aggiunge html -> +=
const findForm = document.querySelector('form');
const findInput = document.querySelector('input');
const createDiv = document.createElement('div');
const createP = document.createElement('p');
const createButton = document.createElement('button');
createP.innerHTML = findInput.value
createButton.innerHTML = '<i class="far fa-trash-alt"></i>'
findForm.appendChild(createDiv);
createDiv.appendChild(createP);
createP.appendChild(createButton);
}

const attachComplete = function() {
    // aggancia gli elementi html 
    // li ciclo ad esempio con for
    // all'elemento che seleziono aggiunge o toglie una classe (toggle)
    // attributo this per leggere il contenuto (W3C)
const findDiv = document.querySelectorAll('div');
const findP = document.querySelectorAll('p');
for (let i = 0; i < findDiv.length; i++) {
    const element = findDiv[i];
    element.addEventListener('click', function () {
        findP[i].classList.toggle('linethrough')
    });
}
}

const attachDelete = function() {
    // aggancia  gli elementi html
    // ciclo for
    // metodo per rimuovere qualcosa .remove
    const findFormP = document.querySelectorAll('form p');
    for (let i = 0; i < findFormP.length; i++) {
        const element = findFormP[i];
        element.remove()
    }
}
window.onload = function () {
    let form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
}