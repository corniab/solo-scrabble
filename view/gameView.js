import { Tile } from "../model/tile.js";
import { addGridDrop, addTileDrag } from "./dragDrop.js";

/**
 * Class that creates the html elements for the user to interact with.
 */
export class GameView {
	/**
	 * Creates a new instance of GameView.
	 */
	constructor() {
		this.boardDiv = document.getElementById("gameBoard");
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

				// Add Drag Events.
				addGridDrop(gridItem);

				// Append Each item to grid.
				this.boardDiv.appendChild(gridItem);
			});
		});
	}

	/**
	 * Wraps the tile information in HTML and displays it on screen.
	 * @param {Tile[]} tiles Array of tiles.
	 */
	renderTiles(tiles) {
		// Get div for storing available tiles.
		const availableTiles = document.getElementById("availableTiles");

		// Create
		tiles.forEach((tile) => {
			// Create tile div.
			const tileDiv = document.createElement("div");
			tileDiv.classList.add("tileDiv");

			// Create span for tile character.
			const tileChar = document.createElement("span");
			tileChar.classList.add("tileChar");
			tileChar.textContent = tile.char;

			// Create span for tile points.
			const tilePoints = document.createElement("tilePoints");
			tilePoints.classList.add("tilePoints");
			tilePoints.textContent = tile.points;

			// Append character and points.
			tileDiv.appendChild(tileChar);
			tileDiv.appendChild(tilePoints);

			// Make tile draggable.
			tileDiv.setAttribute("draggable", true);

			// Create unique ID.
			tileDiv.setAttribute("id", tile.char + tile.count);

			// Add Drag Events to tile div.
			addTileDrag(tileDiv);

			// Append tile div to availableTiles.
			availableTiles.appendChild(tileDiv);
		});
	}
}
