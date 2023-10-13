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
    const circleWins = array.every(
      (cell) => allSquares[cell].firstChild?.classList.contains('cirlce')
      // ? does it check all three indexes? does it trigger only then? or for each...? 23:40
      // yes, ans. 24:42

      // .firstChild? []
    );
    //25:25
    if (circleWins) {
      infoDisplay.textContent = 'Circle Wins!';
      allSquares.forEach(
        (square) => square.replaceWith(square.cloneNode(true)) //You cant remove event listeners, you need to do this.
      );
      return;
    }
  });

  //? to return out of the loop? last step? 26:40
  winningCombos.forEach((array) => {
    const crossWins = array.every((cell) =>
      allSquares[cell].firstChild?.classList.contains('cross')
    );
    if (crossWins) {
      infoDisplay.textContent = 'Cross Wins!';
      allSquares.forEach(
        // a// error? she didnt change the squares to cross
        (square) => square.replaceWith(square.cloneNode(ture)) //You cant remove event listeners, you need to do this.
        // (square) => cross.replaceWith(cross.closeNode(true)) //You cant remove event listeners, you need to do this.
        // a// ans no. cause we just have square as if logic triggers...? Line 62       (cell) => allSquares[cell].firstChild?.classList.contains('cirlce')
      );
      return;
    }
  });
}

//OTHER
// https://unstoppabledomains.com/
// tutorial https://www.youtube.com/watch?v=DRaWr0Dcbl0

/*
Found this hard? Learn the fundamentals of JavaScript from my course: https://www.codewithania.com

🚀 Sign up to https://www.codewithania.com to receive access for the final code.
____
⭐ Check out my IDE here and get 1 month free: https://jb.gg/get_webstorm

⭐ New to code and none of this is making sense? Watch my '12hr+ YouTube Coding Bootcamp' in which you will learn HTML, CSS and JavaScript Fundamentals completely from scratch. It's on my channel and its 100% free.

⭐ In most videos I use Tabnine as my A.I autocompletion tool. You can download it for free here (I get no commission from this link, but am in a partnership): http://bit.ly/tabnine-top-tool

⭐ You can get a blockchain domain with my affiliate link here: http://bit.ly/get-a-crypto-domain

⭐ If you would like to buy me a coffee, well thank you very much that is mega kind! : https://www.buymeacoffee.com/aniakubow

⭐ Sign up for weekly coding tips from my newsletter partnership: https://bit.ly/JS-tips

You can also find me on:
Twitter: https://twitter.com/ania_kubow
Instagram: https://instagram.com/aniakubow
*/
