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
		// Make sure all there are no w
	}

	/**
	 * Creates a list of words on the board.
	 */
	getWords() {}
}
