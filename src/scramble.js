/**
 * Returns a new string with the characters of `word` shuffled.
 * Example: "hello" → "lohel" (any permutation except identical)
 * @param {string} word
 * @returns {string}
 */
function scrambleWord(a) {
  // TODO: implement Fisher–Yates shuffle 

  a=a.split("");
  for(var b=a.length-1;0<b;b--){
    var c=Math.floor(Math.random()*(b+1));
    d=a[b];a[b]=a[c];
    a[c]=d}
    return a.join("") 
}



/**
 * Checks if `guess` matches the original `word` (case‑insensitive).
 * @param {string} word
 * @param {string} guess
 * @returns {boolean}
 */


function isCorrect(original, guess) {
  return original.toLowerCase() === guess.toLowerCase();
}

module.exports = { scrambleWord, isCorrect };
