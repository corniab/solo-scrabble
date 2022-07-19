import { addGridDrop } from "../modules/dragDrop.js";

export class BoardView {
	/**
	 * Creates a new instance of BoardView.
	 */
	constructor() {
		this.boardDiv = document.getElementById("gameBoard");
	}
	/**
	 * Renders the game board on the page.
	 * @param {array} grid - Array of game board values.
	 */
	renderBoard(grid) {
		for (const [y, row] of grid.entries()) {
			for (const [x, item] of row.entries()) {
				const gridItem = document.createElement("div");
				gridItem.classList.add("gridItem");
				gridItem.setAttribute("coords", JSON.stringify([x, y]));

				// Add different background and textcontent for score tiles
				switch (item) {
					case "9":
						gridItem.classList.add("tripleWord");
						break;
					case "8":
						gridItem.classList.add("doubleWord");
						break;
					case "3":
						gridItem.classList.add("tripleLetter");
						break;
					case "2":
						gridItem.classList.add("doubleLetter");
						break;
					case "X":
						gridItem.classList.add("star");
						break;
					default:
						break;
				}

				// Add Drag Events.
				addGridDrop(gridItem);

				// Append Each item to grid.
				this.boardDiv.appendChild(gridItem);
			}
		}
	}
}
