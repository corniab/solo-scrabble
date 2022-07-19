export class DictionaryModel {
	constructor() {
		this.fetchWord = this.memoizeFetch();
	}
	/**
	 * Returns an anonymous function that memoizes fetch responses.
	 */
	memoizeFetch() {
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
						return true;
					})
					.catch((error) => {
						if (error.message == "404") {
							alert(word + " is not a real word. Sorry...");
							return false;
						}
					});
			}
		};
	}
}
