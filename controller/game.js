import { Board } from "../model/board.js";
import { GameView } from "../view/gameView.js";
import { Tiles } from "../model/tiles.js";
import { Tile } from "../model/tile.js";
import { Player } from "../model/player.js";

/**
 * Game controller for directing play.
 */
export class Game {
	/**
	 * Creates a new game.
	 * @param {string} playerName
	 */
	constructor(playerName) {
		this.board = new Board();
		this.view = new GameView();
		this.tiles = new Tiles();
		this.player = new Player(playerName);
	}

	/**
	 * Sets up a new game.
	 */
	setup() {
		// Create the board.
		this.createBoard();

		// Get the player tiles.
		this.getPlayerTiles();

		// Send the tiles to the view.
		this.createTiles(this.player.tiles);
	}

	/**
	 * Sends the board grid values to the view.
	 */
	createBoard() {
		this.view.renderBoard(this.board.grid);
	}

	/**
	 * Send the player tiles.
	 */
	getPlayerTiles() {
		while (this.player.tileCount < 7) {
			const tile = this.tiles.getRandomTile();
			this.player.getTile(tile);
		}
	}

	/**
	 * Sends the tile values to the view.
	 * @param {Tile[]} tiles An array of tiles.
	 */
	createTiles(tiles) {
		this.view.renderTiles(tiles);
	}
}
