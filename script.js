const board = []; // Array to represent the game board
let currentPlayer = 'X'; // Player's choice
let score = 0;

function drawBoard() {
    board.forEach(row => row.innerHTML = `<tr><td>${currentPlayer}</td></tr>`);
}

function updateBoard() {
    // Simple board update - you can expand this with more sophisticated logic
    board.forEach(row => row.innerHTML = `<tr><td>${currentPlayer}</td></tr>`);
}


function handleMove(row, col) {
  if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) {
      alert("Invalid move!"); //Prevent invalid moves
      return;
  }

  score++;
  updateBoard();
  drawBoard();

  // Display score on the board
  board.innerHTML = `<tr><td>${score}</td></tr>`;

}


function checkWin() {
    for (let i = 0; i < board.length; i++) {
        if (board[i][0] === board[i][1] && board[i][2] === board[i][3]) { // Check for a win condition
            return true;
        }
    }
    return false;
}


// Initial draw
drawBoard();

// Handle player input
function play() {
    if (currentPlayer === 'X') {
        handleMove(0, 0);
    } else if (currentPlayer === 'O') {
        handleMove(0, 1);
    } else {
       alert("Invalid input");
       return;  //Exit on invalid input
    }

    if (checkWin()) {
        console.log("Player Wins!");
        return; // Exit function once a win is achieved
    }

    updateBoard();
    drawBoard();
    play();  //Loop back to play again
}


// Initial game setup
play();