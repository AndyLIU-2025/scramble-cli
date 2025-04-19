/**
 * Returns a new string with the characters of `word` shuffled.
 * Example: "hello" → "lohel" (any permutation except identical)
 * @param {string} word
 * @returns {string}
 */
function scrambleWord(word) {
  // TODO: implement Fisher–Yates shuffle ⚙️

  return word; // ← placeholder so tests fail
}

/**
 * Checks if `guess` matches the original `word` (case‑insensitive).
 * @param {string} word
 * @param {string} guess
 * @returns {boolean}
 */
function isCorrect(word, guess) {
  // TODO: compare after normalising case & trimming 🧐
  
  word.toLowerCase() === guess.toLowerCase(); 

  return false; // ← placeholder so tests fail
}

module.exports = { scrambleWord, isCorrect };
