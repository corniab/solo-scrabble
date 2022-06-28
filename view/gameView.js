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
				gridItem.textContent = item;

				// Append Each item to grid.
				this.boardDiv.appendChild(gridItem);
			});
		});
	}
}
