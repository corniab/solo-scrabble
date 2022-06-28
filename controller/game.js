import { Board } from "../model/board.js";
import { GameView } from "../view/gameView.js";

/**
 * Game controller for handling user input.
 */
export class Game {
	constructor() {
		this.board = new Board();
		this.view = new GameView("gameBoard");
	}

	createBoard() {
		this.view.renderBoard(this.board.grid);
	}
}
