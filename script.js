// Funzione per creare una cella
function createCell(number){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.append(number);
    return cell;
}



// Prendo gli elementi dal DOM
const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const sectionBackground = document.getElementById('section-background');
const grid = document.getElementById('grid'); 
const scoreDisplay = document.getElementById('score-display')

// struttura della griglia
const rows = 10;
const cols = 10;
const totalCells = rows * cols;

// Aggancio il bottone reset
resetButton.addEventListener('click', function(){
    sectionBackground.classList.add('d-none');
})

// Aggancio il bottone play
playButton.addEventListener('click', function (){

    // Svuoto la griglia
    grid.innerHTML = '';

    // levo il display none 
    sectionBackground.classList.remove('d-none');


    let score = 0;

    // si riportano le celle in pagina
    for(let i = 1; i < totalCells + 1; i++){

        // creo una cella
        const cell = createCell(i);


        // Event listener alla cella
        cell.addEventListener('click' , function (){
            // Controllo se è stata gia cliccata
            if(cell.classList.contains('clicked')) {
            return;
            }
            
            // quando viene cliccato cambia colore
            cell.classList.add('clicked');

            scoreDisplay.innerText = ++score ;            
        })

        // appendo in pagina
        grid.appendChild(cell);
    }


  



})