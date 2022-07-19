import { TilesController } from "../controller/tilesController.js";
import { BoardController } from "../controller/boardController.js";
import { PlayerController } from "./playerController.js";
import { DictionaryController } from "./dictionaryController.js";

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
		this.dictionary = new DictionaryController();
		this.quitBtn = document.getElementById("quitBtn");
	}

	setup() {
		// Create the board.
		this.board.createBoard();
		this.tiles.createTiles();
		this.addMoveListener();
		this.addQuitListener();
	}

	/**
	 * Quits the game and reloads the page.
	 */
	quit() {
		let quitOk = confirm("Are you sure you want to quit?");
		if (quitOk) {
			location.reload();
		}
	}

	/**
	 * Called when the player clicks move move button.
	 * Controls the game logic.
	 * Consists of the following:
	 *
	 * Checks for invalid words
	 *
	 * Computes the score.
	 *
	 * Updates the players pool of tiles.
	 *
	 * Play continues until the player runs out of tiles.
	 * Or they choose to quit.
	 */
	move() {
		// Check if we have a valid move.
		if (!this.board.isValidMove()) {
			return;
		}

		// Get list of words on board.
		const wordList = this.board.getWords();
		console.log(wordList);

		// Check for valid words.
		// this.dictionary.areRealWords(wordList)
		// 	.then(response => response.text());
	}

	/**
	 * Adds event listener to move button.
	 */
	addMoveListener() {
		const moveBtn = document.getElementById("moveBtn");
		moveBtn.addEventListener("click", this.move.bind(this));
	}

	/**
	 * Adds event listener to quit button.
	 */
	addQuitListener() {
		const quitBtn = document.getElementById("quitBtn");
		quitBtn.addEventListener("click", this.quit);
	}
}
