import { BoardModel } from "../model/boardModel.js";
import { BoardView } from "../view/boardView.js";

export class BoardController {
	constructor() {
		this.view = new BoardView();
		this.model = new BoardModel();
	}

	/**
	 * Create the board.
	 */
	createBoard() {
		const grid = this.model.grid;
		this.view.renderBoard(grid);
	}

	/**
	 * Validate the players move.
	 */
	isValidMove() {
		// Set tiles as played.
		const playedTiles = this.view.setAsPlayed();

		// Get coords of tiles.
		const coordsArray = this.model.getCoords(playedTiles);

		// Check if they are contiguous.
		const result = this.model.isPlayContiguous(coordsArray);
		console.log(result);
		return;
	}

	isEmpty() {}

	/**
	 * Creates a list of words on the board.
	 */
	getWords() {}
}
