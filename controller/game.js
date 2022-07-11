import { Board } from "../model/board.js";
import { GameView } from "../view/gameView.js";
import { Tiles } from "../model/tiles.js";
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
		this.view = new GameView("gameBoard");
		this.tiles = new Tiles();
		this.player = new Player(playerName);
	}

	/**
	 * Sets up a new game.
	 */
	setup() {
		this.createBoard();
	}

	/**
	 * Sends the board grid values to the view.
	 */
	createBoard() {
		this.view.renderBoard(this.board.grid);
	}
}
