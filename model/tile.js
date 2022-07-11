/**
 * Represents a Scrabble Tile.
 */
export class Tile {
	/**
	 * Creates a Tile.
	 * @param {string} char
	 * @param {number} count
	 * @param {number} points
	 */
	constructor(char, count, points) {
		this._char = char;
		this._count = count;
		this._points = points;
	}

	/**
	 * Returns the character.
	 */
	get char() {
		return this._char;
	}

	/**
	 * Returns the count.
	 */
	get count() {
		return this._count;
	}

	/**
	 * Returns the points.
	 */
	get points() {
		return this._points;
	}

	/**
	 * Decrements the count of characters.
	 */
	decrementCount() {
		if (this._count > 0) {
			this._count--;
		}
	}
}
