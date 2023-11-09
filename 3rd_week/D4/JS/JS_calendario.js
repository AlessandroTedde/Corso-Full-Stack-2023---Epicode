// :)

const now = new Date()
console.log('now,', now);

// fase iniziale: dobbiamo cercare di capire in che mese siamo, per riempire l'h1, e anche quanti giorni ha il mese corrente
// perche` dobbiamo generare un numero di celle corrispondente
// ogni volta che apriremo il calendario vogliamo una fedele rappresentazione del mese corrente

// dove salvo gli appuntamenti? ogni appuntamento e` una stringa, ogni giorno puo` contenere infiniti appuntamenti.
// e ogni mese ha un numero variabile di giorni (28 - 31)

// il nostro scopo e` creare un array di array, dove l'array "padre" e` il mese, e ogni array "figlio" rappresenta un giorno
// [
//      [], [], [], [], [], [], []
//      [], [], [], [], [], [], []
//      [], [], [], [], [], [], []
//      [], [], []
//]

// esempio di giorno: 9 novembre 
// "14:30 - Q&A"
// "17:00 - Debrief"
// "20:00 - Cena FS0623B"
// il 9 novembre e` un array di stringhe --> ["14:30 Q&A", "17:00 - Debrief", "20:00 - Cena FS0623B"]

// all'inizio pero` io NON SO quanti giorni ci sono ancora in questo mese! Quindi creo solo il "guscio" del mese 
const appointments = []
// ora dovrei pushare dentro appointments tanti "sotto-array" quanti sono i giorni del mese corrente

const monthNames = [
    'Gennaio',
    'Febbraio',
    'Marzo',
    'Aprile',
    'Maggio',
    'Giugno',
    'Luglio',
    'Agosto',
    'Settembre',
    'Ottobre',
    'Novembre',
    'Dicembre',
]

const printCurrentMonthInH1 = function () {
   const title = document.querySelector('h1'); // prendo l'<h1> dalla pagina
   const monthIndex = now.getMonth();    // 10 perche` siamo in novembre
   const currentMonth = monthNames[monthIndex]; // 'Novembre'
   console.log('mese corrente', currentMonth);
   title.innerText = currentMonth       // riporto la stringa del mese nell'h1
   // lancio la funzione
}

// ora che sappiamo in che mese siamo, dobbiamo calcolarne il numero dei giorni...
// per riempire correttamente la sezione delle celle

const daysInThisMonth = function () {
    const getYear = now.getFullYear()     // 2023

    const getMonth = now.getMonth()       // 10

    // quello di cui ho bisogno e` l'ULTIMO giorno valido del mese in corso
    // perche` tale numero corrisponde anche al NUMERO DEI GIORNI del mese corrente!

    // per ottenere l'ultimo giorno valido del mese in corso, creo una data 
    // relativa al primo giorno del mese successivo rispetto a quello corrente e tolgo (-1) un giorno

    const lastDayInTheMonth = new Date(getYear, getMonth + 1, 0)        // 0 dicembre === 30 novembre 2023 perche` il programma conta da 0 ma per noi lo 0 dicembre non esiste, quindi scala al mese precedente
    console.log('lastDayInTheMonth', lastDayInTheMonth);
    const numberOfTheDay = lastDayInTheMonth.getDate()      // prende il giorno del mese da una specifica data
    console.log('number of the day', numberOfTheDay);
    // numberOfTheDay e` il numero di giorno del mese corrente, ovvero il numero di volte per cui devo ripetere
    // la creazione JS di una cella "giorno"
    return numberOfTheDay
}

const unSelectAllDays = function () {
    // qui il mio compito e` rimuovere altre classi "selected" precedentemente applicate
    // in modo da lasciare il campo "libero" per la successiva applicazione della nuova class "selected"
    // sull'elemento che ho cliccato

    // APPROCCIO BULLDOZER
    // prendo TUTTE le celle e a tappeto rimuovo un'eventuale classe "selected"
    //const allThecells = document.getElementsByClassName('day');
    //const allTheCellsAsArray = Array.from(allThecells) // ho convertito allTheCells in un vero e proprio array, perche` altrimenti
    // una semplice HTMLCollection NON e` ciclabile attraverso forEach
    //allTheCellsAsArray.forEach((cell) => {
    //    cell.classList.remove('selected')
    // })


    // APPROCCIO CHIRURGICO
    // const previousSelected = document.getElementsByClassName('selected')[0]
    const previousSelected = document.querySelector('.selected');
        if(previousSelected) {
            previousSelected.classList.remove('selected');
        }
    }

const changeMeetingDaySection = function (indexOfTheDay) {
    // questa funzione si occupa di riempire la porzione "newMeetingDay" al click su di una cella
    const rightSpan = document.getElementById('newMeetingDay');
    rightSpan.classList.add('hasday');
    rightSpan.innerText = indexOfTheDay + 1;
}

const createDays = function (numberOfDays) {
    // numberOfDays adesso e` 30 (in novembre)
    const calendarDiv = document.getElementById('calendar');
    for (let i = 0; i < numberOfDays; i++) {
        // per ogni giorno del mese corrente creo una cella
        const dayCellDiv = document.createElement('div');
        // <div></div>
        dayCellDiv.classList.add('day');
        // <div class="day"></div>
    
        // ora, questa cella singola del giorno che ho appena creato la rendo cliccabile!
        dayCellDiv.addEventListener('click', function(e) {
            // devo toglierla da altre precedenti
            unSelectAllDays()
            // ora che non ho piu` altri 'selected' nel calendario, lo aggiungo alla cella che ho cliccato
            dayCellDiv.classList.add('selected');

            // l'ultima cosa che manca e` trasportare il valore della cella che ho cliccato 
            // in basso a sx, nella sezione "newMeetingDay" (ovvero il div con id = "newMeetingDay")
            changeMeetingDaySection(i);

            // sempre al click della giornata, nel caso CI SIANO eventi da mostrare
            // dobbiamo far comparire una lista
            if (appointments[i].length > 0) {
                // ci sono degli eventi da mostrare
                showAppointments(i);
            } else {
                // se non ci sono eventi sul giorno selezionato, la lista deve sparire
                const appointmentsDiv = document.getElementById('appointments');
                appointmentsDiv.style.display = "none";
            }
        })

    const cellValue = document.createElement('h3');
    // <h3></h3>
    cellValue.innerText = i + 1;

    // appendiamo cellValue dentro dayCellDiv
    dayCellDiv.appendChild(cellValue);       // <div class="day"><h3>1</h3></div>, appendo il value alla cella del giorno
    calendarDiv.appendChild(dayCellDiv);      // appendo la cella del giorno al calendario

    // ora che ho creato la parte "fisica" della pagina, inserisco anche l'array appointments
    // per il giorno che sto ciclando in quel momento
        appointments.push([]);
    }
}
// lancio la funzione

const showAppointments = function () {
    // questa funzione servira` a popolare la <ul> con gli eventi del giorno, nel caso ce ne siano,
    // ed eventualmente mostrare la sezione "appointments"

    // passaggi per pushare
    // 1) prelevare gli eventi dal cassetto giusto, ovvero indexOfTheDay
    const appointmentsForThisDay = appointments[indexOfTheDay];      // ["14:30 - Q&A", "17:00 - Debrief"]
    // 2) seleziono la <ul> dalla prima pagina, quella da riempire con gli appuntamenti
    const appointmentsList = document.querySelector('#appointments ul'); // <ul></ul>
    // 3) ciclare appointmentsForThisDay e creare un <li> per ciascuno di essi, e appenderlo alla lista

    // prima di riempire la <ul> con gli <li> necessari, SVUOTO LA UL
    appointmentsList.innerHTML = ''
    appointmentsForThisDay.array.forEach((appointment) => {
        const newLi = document.createElement('li');
        newLi.innerText = appointment       // "14:30 - Q&A"
        appointmentsList.appendChild(newLi);
    });

    // la lista ora e` piena ma e` ancora nascosta! togliamole il display: none
    const appointmentsDiv = document.getElementById('appointments');
    appointmentsDiv.style.display = 'block';
}


const handleFormSubmit = function(e) {
    e.preventDefault();
    console.log('il form sta venendo inviato!');
    // cosa facciamo adesso?
    // 1. raccogliamo il giorno selezionato 
    const selectedDay = document.getElementById('newMeetingDay').innerText  // 9
    // 2. raccolgo il meeting time dal form
    const meetingTime = document.getElementById('newMeetingTime').value   // 20:30
    // 3. raccolgo il meeting name dal form
    const meetingName = document.getElementById('newMeetingName').value     // "cena di lavoro"
    // 4. combino time e name in una stringa tipo "17:00 - Debrief"
    const meetingString = meetingTime + "-" + meetingName     // `${meetingTime} - ${meetingName}` --> "20:30 - Cena di lavoro"
    // 5. inserisco questa stringa in uno degli array dentro ad appointments, in quello corrispondente al giorno selezionato
    // trovo l'indice corretto del giorno selezionato dentro ad appointments
    const rightIndexForAppointments = parseInt(selectedDay) - 1     // 19
    // pusho il mio evento nel cassettino corretto 
    console.log('APPOINTMENTS PRIMA DEL SALVATAGGIO', appointments);
    appointments[rightIndexForAppointments].push(meetingString);
    console.log('APPOINTMENTS DOPO IL SALVATAGGIO', appointments);

    // creiamo il pallino e aggiungiamolo al giorno in cui abbiamo fatto il push dell'evento
    const dot = document.createElement('span');
    dot.classList.add('dot');
    // trovo la cella che ho selezionato
    const selectedCell = document.querySelector('.selected')
    if (!selectedCell.querySelector('.dot')) {
        // se c'e` gia` un dot dentro a .selected, non riaggiungerlo!
        selectedCell.appendChild(dot);
    }

    showAppointments(rightIndexForAppointments);
}

printCurrentMonthInH1 ();
const numberOfDaysInTheCurrentMonth = daysInThisMonth (); // 30

createDays(numberOfDaysInTheCurrentMonth);                // sto creando i giorni per quanti giorni ci sono nel mese corrente

const meetingForm = document.querySelector('form');
meetingForm.addEventListener('submit', handleFormSubmit)