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
		const playedTiles = this.view.setInitialMove();

		// Get coords of tiles.
		const coordsArray = this.model.getCoords(playedTiles);

		// Check if this is the first move.
		if (this.model.coordsPlayed < 1) {
			// Check if its valid.
			if (!this.model.isValidFirstMove(coordsArray)) {
				alert("First play must cross the center grid!");
				return false;
			}
		}

		// Check if they are contiguous.
		if (!this.model.isPlayContiguous(coordsArray)) {
			alert("Play must be vertically or horizontally contiguous!");
			return false;
		}

		return true;
	}

	isEmpty() {}

	/**
	 * Creates a list of words on the board.
	 */
	getWords() {}
}
