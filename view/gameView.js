export class GameView {
	constructor(boardId) {
		this.boardDiv = document.getElementById(boardId);
	}
	/**
	 * Renders the game board on the page.
	 * @param {array} grid - Array of game board values.
	 */
	renderBoard(grid) {
		grid.forEach((row) => {
			// Create div for each cell.
			row.forEach((item) => {
				const gridItem = document.createElement("div");
				gridItem.classList.add("gridItem");
				const gridText = document.createElement("span");
				gridText.classList.add("gridText");

				// Add different background and textcontent for score tiles
				switch (item) {
					case "9":
						gridText.textContent = "TRIPLE WORD SCORE";
						gridItem.classList.add("tripleWord");
						break;
					case "8":
						gridText.textContent = "DOUBLE WORD SCORE";
						gridItem.classList.add("doubleWord");
						break;
					case "3":
						gridText.textContent = "TRIPLE LETTER SCORE";
						gridItem.classList.add("tripleLetter");
						break;
					case "2":
						gridText.textContent = "DOUBLE LETTER SCORE";
						gridItem.classList.add("doubleLetter");
						break;
					case "X":
						const img = document.createElement("img");
						img.setAttribute("src", "images/star.png");
						gridItem.appendChild(img);
						break;
					default:
						break;
				}
				// Append gridText to gridItem
				gridItem.appendChild(gridText);

				// Append Each item to grid.
				this.boardDiv.appendChild(gridItem);
			});
		});
	}
}
