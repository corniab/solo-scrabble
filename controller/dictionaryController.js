import { DictionaryModel } from "../model/dictionaryModel.js";

export class DictionaryController {
	constructor() {
		this.model = new DictionaryModel();
	}

	/**
	 * Checks if words are valid.
	 * @param {string[]} wordList
	 */
	areRealWords(wordList) {
		wordList.forEach((word) => {
			const response = this.model.fetchWord(word);
		});
	}
}
