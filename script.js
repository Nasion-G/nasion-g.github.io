document.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("chessboard");

  // Define the back rank piece order
  const blackBackRank = ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"];
  const whiteBackRank = ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"];

  // 1. Generate the Chessboard
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement("div");
      square.classList.add("square");

      // Alternate colors based on row and column
      const isLight = (row + col) % 2 === 0;
      square.classList.add(isLight ? "light" : "dark");

      // --- Place the Pieces ---

      // Black Pieces (Top of board)
      if (row === 0) {
        square.textContent = blackBackRank[col];
      } else if (row === 1) {
        square.textContent = "♟"; // Black Pawns
      }

      // White Pieces (Bottom of board)
      else if (row === 6) {
        square.textContent = "♙"; // White Pawns
      } else if (row === 7) {
        square.textContent = whiteBackRank[col];
      }

      board.appendChild(square);
    }
  }

  // 2. Handle the Form (Simulated submission)
  const form = document.getElementById("regForm");
  const successBox = document.getElementById("successMessage");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Stop page refresh

    // Hide the form and show the success message
    form.style.display = "none";
    successBox.classList.remove("hidden");

    console.log("Form 'submitted' locally. No data sent to a server.");
  });
});
