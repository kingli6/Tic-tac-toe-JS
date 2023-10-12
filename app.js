const gameBoard = document.querySelector('#gameboard');
const infoDisplay = document.querySelector('#info');
const startCells = ['', '', '', '', '', '', '', '', ''];

function createBoard() {
  // adding _ to a variable means we won't be using it...
  startCells.forEach((_cell, index) => {
    const cellElement = document.createElement('div');
    cellElement.classList.add('square');
    gameBoard.append(cellElement);
  });
}

createBoard();
