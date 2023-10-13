const gameBoard = document.querySelector('#gameboard');
const infoDisplay = document.querySelector('#info');
const startCells = ['', '', '', '', '', '', '', '', ''];

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
  console.log(e.target);
}
