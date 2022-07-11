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
		this._tiles = [];
	}
	/**
	 * Gets a tile and adds to tiles array.
	 * @param {Tile} tile
	 */
	getTile(tile) {
		this._tiles.push(tile);
	}

	/**
	 * Returns the length of the tiles array.
	 */
	get tileCount() {
		return this._tiles.length;
	}

	/**
	 * Returns array of player tiles.
	 */
	get tiles() {
		return this._tiles;
	}
}
