/**
 * Represents a Scrabble Tile.
 * @param {string} char - character between A-Z
 * @param {number} count - distribution of characters
 * @param {number} points - point value of each character
 */
export class Tile {
	constructor(char, count, points) {
		this.char = char;
		this.count = count;
		this.points = points;
	}
}
