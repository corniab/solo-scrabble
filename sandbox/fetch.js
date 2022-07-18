const board = [
	//                   X - AXIS
	//0    1    2    3    4    5    6    7    8    9
	[" ", " ", " ", "F", " ", " ", " ", " ", " ", " "], // 0
	[" ", " ", " ", "A", " ", " ", " ", " ", " ", " "], // 1
	[" ", " ", "G", "R", "A", "P", "E", " ", " ", " "], // 2
	[" ", " ", "I", " ", "X", "I", " ", " ", " ", " "], // 3
	[" ", " ", "V", " ", "O", " ", " ", " ", " ", " "], // 4    Y - AXIS
	[" ", "P", "E", "E", "L", " ", " ", " ", " ", " "], // 5
	[" ", " ", "R", "I", "O", "T", " ", " ", " ", " "], // 6
	[" ", " ", " ", "G", "T", " ", " ", " ", " ", " "], // 7
	[" ", " ", " ", "H", "L", " ", " ", " ", " ", " "], // 8
	[" ", " ", " ", "T", " ", " ", " ", " ", " ", " "], // 9
];

/**
 * Combines the board array vertically and horizontally.
 * @param {Array} board
 * @returns {Array} A list of all the words on the board.
 */
function getWords(board) {
	// Get all the words horizontally.
	let horizWords = [];
	for (const row of board) {
		horizWords = horizWords.concat(row, [" "]);
	}

	let vertWords = [];
	// Add nth value of row to its own array.
	for (let i = 0; i < board.length; i++) {
		vertWords = vertWords.concat(
			board.map((row) => row[i]),
			[" "]
		);
	}

	// Combine the two arrays.
	const words = horizWords
		.concat(vertWords)
		.join("") // Join into a single string.
		.trim() // Trim whitespace.
		.split(/\s+/); // Split into array of words.

	return words;
}

console.log(getWords(board));

/**
 * Returns an anonymous function that memoizes fetch responses.
 */
function memoizeFetch() {
	// Create a cache.
	let cache = new Map();
	// Return a closure.
	return (word) => {
		// Check if the word is cached.
		if (cache.has(word)) {
			return cache.get(word);
		}
		// Make a request for the word.
		else {
			fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
				.then((response) => {
					if (response.ok) {
						// The word is valid!
						return response;
					}
					throw Error(response.status);
				})
				.then((response) => response.json())
				.then((data) => {
					// Store the response in the cache.
					cache.set(word, data);
					console.log(data);
				})
				.catch((error) => {
					if (error.message == "404") {
						alert(word + " is not a real word. Sorry...");
					}
				});
		}
	};
}

const fetchWord = memoizeFetch();

const form = document.forms.fetchForm;
form.addEventListener("submit", (e) => {
	e.preventDefault();
	// Get word
	fetchWord(form.fetchWord.value);
});
