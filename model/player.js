import { Tile } from "./tile.js";

/**
 * Represents player who interacts with game.
 */
export class Player {
	/**
	 * Creates a new player.
	 * @param {string} playerName Name of the player.
	 */
	constructor(playerName) {
		this.playerName = playerName;
		this.tiles = [];
	}
	/**
	 * Gets a tile and adds to tiles array.
	 * @param {Tile} tile
	 */
	getTile(tile) {
		this.tiles.push(tile);
	}
}
