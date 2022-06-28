/**
 * Represents a Scrabble Tile.
 * @param {string} char - character between A-Z
 * @param {number} count - distribution of characters
 * @param {number} points - point value of each character
 */
class Tile {
	constructor(char, count, points) {
		this.char = char;
		this.count = count;
		this.points = points;
	}
}

/**
 * Main Game Board for Scrabble.
 */
export class Board {
	constructor() {
		this.grid = [
			["9", " ", " ", "2", " ", " ", " ", "3", " ", " ", " ", "2", " ", " ", "9"],
			[" ", "2", " ", " ", " ", "3", " ", " ", " ", "3", " ", " ", " ", "2", " "],
			[" ", " ", "2", " ", " ", " ", "2", " ", "2", " ", " ", " ", "2", " ", " "],
			["2", " ", " ", "2", " ", " ", " ", "2", " ", " ", " ", "2", " ", " ", "2"],
			[" ", " ", " ", " ", "2", " ", " ", " ", " ", " ", "2", " ", " ", " ", " "],
			[" ", "3", " ", " ", " ", "3", " ", " ", " ", "3", " ", " ", " ", "3", " "],
			[" ", " ", "2", " ", " ", " ", "2", " ", "2", " ", " ", " ", "2", " ", " "],
			["9", " ", " ", "2", " ", " ", " ", "X", " ", " ", " ", "2", " ", " ", "9"],
			[" ", " ", "2", " ", " ", " ", "2", " ", "2", " ", " ", " ", "2", " ", " "],
			[" ", "3", " ", " ", " ", "3", " ", " ", " ", "3", " ", " ", " ", "3", " "],
			[" ", " ", " ", " ", "2", " ", " ", " ", " ", " ", "2", " ", " ", " ", " "],
			["2", " ", " ", "2", " ", " ", " ", "2", " ", " ", " ", "2", " ", " ", "2"],
			[" ", " ", "2", " ", " ", " ", "2", " ", "2", " ", " ", " ", "2", " ", " "],
			[" ", "2", " ", " ", " ", "3", " ", " ", " ", "3", " ", " ", " ", "2", " "],
			["9", " ", " ", "2", " ", " ", " ", "3", " ", " ", " ", "2", " ", " ", "9"],
		];
		this.tiles = [
			new Tile("E", 12, 1),
			new Tile("A", 9, 1),
			new Tile("I", 9, 1),
			new Tile("O", 8, 1),
			new Tile("N", 6, 1),
			new Tile("R", 6, 1),
			new Tile("T", 6, 1),
			new Tile("L", 4, 1),
			new Tile("S", 4, 1),
			new Tile("U", 4, 1),
			new Tile("D", 4, 2),
			new Tile("G", 3, 2),
			new Tile("B", 2, 3),
			new Tile("C", 2, 3),
			new Tile("M", 2, 3),
			new Tile("P", 2, 3),
			new Tile("F", 2, 4),
			new Tile("H", 2, 4),
			new Tile("V", 2, 4),
			new Tile("W", 2, 4),
			new Tile("Y", 2, 4),
			new Tile("K", 1, 5),
			new Tile("J", 1, 8),
			new Tile("X", 1, 8),
			new Tile("Q", 1, 10),
			new Tile("Z", 1, 10),
		];
		this.score = 0;
	}
}
