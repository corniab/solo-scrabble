import { TilesController } from "../controller/tilesController.js";
import { BoardController } from "../controller/boardController.js";
import { PlayerController } from "./playerController.js";

/**
 * Game controller for directing play.
 */
export class GameController {
	/**
	 * Creates a new game.
	 */
	constructor() {
		this.player = new PlayerController();
		this.tiles = new TilesController();
		this.board = new BoardController();
	}

	setup() {
		// Create the board.
		this.board.createBoard();
		this.tiles.createTiles();
	}
}
