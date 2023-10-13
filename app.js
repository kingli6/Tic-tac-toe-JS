const gameBoard = document.querySelector('#gameboard');
const infoDisplay = document.querySelector('#info');
const startCells = ['', '', '', '', '', '', '', '', ''];

let go = 'circle';
infoDisplay.textContent = 'Circle goes first'; // ?? how come this falls under the gameboard?

function createBoard() {
  // !! adding _ to cell ("_cell") variable means we won't be using it...
  startCells.forEach((_cell, index) => {
    const cellElement = document.createElement('div');
    cellElement.classList.add('square');
    // .classList adds a class to the element: class="square"
    cellElement.id = index;
    // .id adds an id to the element: id="0"
    cellElement.addEventListener('click', addGo);
    gameBoard.append(cellElement);
  });
}

createBoard();

function addGo(e) {
  // console.log(e.target);
  const goDisplay = document.createElement('div');
  // ! you create an object with css and add it to the| html element | the page
  goDisplay.classList.add(go); //17:50 ? adding go variable ('cross' -classname)
  // .append -to place it in
  e.target.append(goDisplay); //addGo function is triggered [ ]
  // 18:11 === 'deeply equals'
  go = go === 'circle' ? 'cross' : 'circle';
  infoDisplay.textContent = 'it is now ' + go + "'s go.";
  e.target.removeEventListener('click', addGo);
}
