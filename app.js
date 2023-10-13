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
  // You just need to start a turn once, and for the rest of the game, you can use if to switch between them!
  infoDisplay.textContent = 'it is now ' + go + "'s go.";
  e.target.removeEventListener('click', addGo);
  checkScore();
}

function checkScore() {
  // .querySelectorAll looks for class of squares
  // grabbing all the elements with the class of squares // 21:20
  const allSquares = document.querySelectorAll('.square');
  console.log(allSquares);

  //can i make this smarter? [ ]
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  console.log(allSquares[0]); // 24:25
  // now logic to check if any of the indexs is a winning combo...
  // if allSquares from winningCombos || if allsquare or allcircles from winning combo, player wins
  winningCombos.forEach((array) => {
    array.every(
      (cell) => allSquares[cell].firstChild?.classList.contains('cirlce')
      // ? does it check all three indexes? does it trigger only then? or for each...? 23:40
      // yes, ans. 24:42
    );
  });
}
