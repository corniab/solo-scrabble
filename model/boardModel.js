/**
 * Main Game Board for Scrabble.
 */
export class BoardModel {
	constructor() {
		this._grid = [
			["9", " ", " ", "2", " ", " ", " ", "9", " ", " ", " ", "2", " ", " ", "9"],
			[" ", "8", " ", " ", " ", "3", " ", " ", " ", "3", " ", " ", " ", "8", " "],
			[" ", " ", "8", " ", " ", " ", "2", " ", "2", " ", " ", " ", "8", " ", " "],
			["2", " ", " ", "8", " ", " ", " ", "2", " ", " ", " ", "8", " ", " ", "2"],
			[" ", " ", " ", " ", "8", " ", " ", " ", " ", " ", "8", " ", " ", " ", " "],
			[" ", "3", " ", " ", " ", "3", " ", " ", " ", "3", " ", " ", " ", "3", " "],
			[" ", " ", "2", " ", " ", " ", "2", " ", "2", " ", " ", " ", "2", " ", " "],
			["9", " ", " ", "2", " ", " ", " ", "X", " ", " ", " ", "2", " ", " ", "9"],
			[" ", " ", "2", " ", " ", " ", "2", " ", "2", " ", " ", " ", "2", " ", " "],
			[" ", "3", " ", " ", " ", "3", " ", " ", " ", "3", " ", " ", " ", "3", " "],
			[" ", " ", " ", " ", "8", " ", " ", " ", " ", " ", "8", " ", " ", " ", " "],
			["2", " ", " ", "8", " ", " ", " ", "2", " ", " ", " ", "8", " ", " ", "2"],
			[" ", " ", "8", " ", " ", " ", "2", " ", "2", " ", " ", " ", "8", " ", " "],
			[" ", "8", " ", " ", " ", "3", " ", " ", " ", "3", " ", " ", " ", "8", " "],
			["9", " ", " ", "2", " ", " ", " ", "9", " ", " ", " ", "2", " ", " ", "9"],
		];

		this._coordsPlayed = [];
	}

	get grid() {
		return this._grid;
	}

	get coordsPlayed() {
		return this._coordsPlayed;
	}

	set coordsPlayed(coord) {
		this._coordsPlayed.push(coord);
	}

	isVertical(coordsArray) {}

	/**
	 * Checks if the current play is contiguous
	 * vertically and horizontally.
	 * @param {[][]} coordsArray
	 */
	isPlayContiguous(coordsArray) {
		// Check if they all share the same x coordinate (i.e., vertical)
		if (coordsArray.every((coord) => coordsArray[0][0] == coord[0])) {
			// Get starting coordinate.
			let [x, y] = coordsArray[0];
			for (let i = 1; i < coordsArray.length; i++) {
				// Check if the next coordinate is in the coords array.
				y++;
				if (y == coordsArray[i][1]) {
					continue;
				}
				// Search the coordsPlayed array for a match.
				else {
					const match = this.coordsPlayed.some((coord) => coord[0] == x && coord[1] == y);
					if (!match) {
						return false;
					}
				}
			}
			return true;
		}
		// Check if they all share the same y coordinate (i.e., horizontal)
		else if (coordsArray.every((coord) => coordsArray[0][1] == coord[1])) {
			// Get starting coordinate
			let [x, y] = coordsArray[0];
			for (let i = 1; i < coordsArray.length; i++) {
				// Check if the next coordinate is in the coords array.
				x++;
				if (x == coordsArray[i][0]) {
					continue;
				} else {
					// Search the coordsPlayed array for a match.
					const match = this.coordsPlayed.some((coord) => coord[0] == x && coord[1] == y);
					if (!match) {
						return false;
					}
				}
			}
			return true;
		}
		// Coords are not on same path.
		return false;
	}

	/**
	 * Get the coords of the played tiles.
	 * @param {HTMLElement[]} playedTiles
	 */
	getCoords(playedTiles) {
		const coords = playedTiles.map((tile) => {
			return JSON.parse(tile.parentNode.getAttribute("coords"));
		});
		return coords;
	}

	/**
	 * Checks if the play is the first move.
	 * @param {[][]} coordsArray
	 */
	isValidFirstMove(coordsArray) {
		// Ensure that at least one of the tiles crosses the center grid.
		const result = coordsArray.some((coord) => coord[0] == 7 && coord[1] == 7);
		return result;
	}
}
