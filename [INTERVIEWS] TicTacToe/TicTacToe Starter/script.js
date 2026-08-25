const squares = document.querySelector(".board__wrapper");
const boardTitle = document.querySelector(".board__title");

//player 1 is x, player 2 is o
let currentPlayer = "X";
let gameOver = false;
let board = new Array(9);

const winningPlays = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function placeTurn(square) {
  if (gameOver) {
    return;
  }

  currentPlayer === "X"
    ? !board[square] &&
      ((squares.children[square].innerHTML = "X"),
      (board[square] = "X"),
      (currentPlayer = "O"))
    : !board[square] &&
      ((squares.children[square].innerHTML = "O"),
      (board[square] = "O"),
      (currentPlayer = "X"));
  console.log(board);
  boardTitle.innerHTML = `${currentPlayer}'s turn`;

  if (checkWin()) {
    return (gameOver = true);
  }

  if (checkDraw()) {
    boardTitle.innerHTML = "Draw!";
    gameOver = true;
  }
}

function checkWin() {
  for (i = 0; i < 8; i++) {
    let symbol1 = board[winningPlays[i][0]];
    let symbol2 = board[winningPlays[i][1]];
    let symbol3 = board[winningPlays[i][2]];

    if (!symbol1 || !symbol2 || !symbol3) {
      continue;
    }

    if (symbol1 === symbol2 && symbol2 === symbol3) {
      console.log(`${symbol1} wins at`, winningPlays[i]);
      boardTitle.innerHTML = `${symbol1} wins!`;
      return true;
    }
  }
  return false;
}

function checkDraw() {
  for (i = 0; i < board.length; i++) {
    if (!board[i]) {
      return false;
    }
  }
  return true;
}

function resetGame() {
  board = new Array(9);
  for (i = 0; i < board.length; i++) {
    squares.children[i].innerHTML = "";
  }
  boardTitle.innerHTML = "X's turn";
  gameOver = false;
  currentPlayer = "X";
}
