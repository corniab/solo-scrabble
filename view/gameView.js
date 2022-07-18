import { Tile } from "../model/tile.js";
import { addGridDrop, addTileDrag } from "./dragDrop.js";

/**
 * Class that creates the html elements for the user to interact with.
 */
export class GameView {
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
