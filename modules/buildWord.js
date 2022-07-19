/**
 * Combines the board array vertically and horizontally.
 * @param {Array} charList - An array of characters.
 */
export function buildWords(charList) {
	// Create nested array.
	const board = chunk(charList, 15);

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
		.split(/\s+/) // Split into array of words.
		.filter((word) => word.length > 1); // Filter out 1 letter words.

	return words;
}

/**
 * Subdivides an array into a multidimensional array.
 * @param {[]} array
 * @param {number} length
 * @returns {[][]}
 */
function chunk(array, length) {
	let result = [];
	for (let i = 0; i < array.length / length; i++) {
		result.push(array.slice(i * length, i * length + length));
	}
	return result;
}
