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
let tasks = document.querySelector('#tasks');
let inputField = document.querySelector('#newTask input');
let newTask = `
    <div class="task">
        <span id="taskname">
            ${inputField.value}
        </span>
        <button class="delete">
            <i class="far fa-trash-alt"></i>       
        </button>
    </div>
`
// qui sono stati utilizzati dei template literals, vedi appunti S2
tasks.innerHTML += newTask;
inputField.value = ''
}

const attachComplete = function() {
    // aggancia gli elementi html 
    let allTasks = document.querySelectorAll('.task');
    // li ciclo ad esempio con for
    for (let i = 0; i < allTasks.length; i++) {
        const element = allTasks[i];
        element.addEventListener('click', function() {
            this.classList.toggle('completed');     // metto il toggle
        })
    }
}

const attachDelete = function() {
    // aggancia  gli elementi html
    let allDeleteButtons = document.querySelectorAll('.delete');
    // ciclo for
    for (let i = 0; i < allDeleteButtons.length; i++) {
        const element2 = allDeleteButtons[i];
        element2.addEventListener('click', function() {
            this.parentNode.remove()    // metodo per rimuovere qualcosa .remove
        })
    }
    
  
}
window.onload = function () {
    let form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
}