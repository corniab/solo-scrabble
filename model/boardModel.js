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

	/**
	 * Checks if the current play is contiguous
	 * vertically and horizontally.
	 * @param {[][]} coordsArray
	 */
	isPlayContiguous(coordsArray) {}

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
}
