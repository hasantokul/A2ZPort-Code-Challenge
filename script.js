var inputText = "“Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers” (Socrates)"

/**
 * The function that parses the input text and finds the longest word with highest number of vowels.
 * @param {string} text - Variable that the longest word to be found inside.
 * @returns {string} The longest word inside of the text input.
 */
function findLongestWord (text) {
    text = text.replace(/[^a-zA-Z\s]/g, '');
    const wordsArray = text.split(' ');
    const longestWord = wordsArray.reduce((acc, curr) => { 

        if (curr.length > acc.length) {
            return curr;
        } else if (curr.length == acc.length) {
            return compareVowelCount(curr, acc);
        }
        return acc;
    });
    return longestWord;
}

/**
 * The helper function that compares the number of vowels inside of the given parameters.
 * @param {string} str1 - Variable that its number of vowels to be found.
 * @param {string} str2 - Variable that its number of vowels to be found.
 * @returns {string} The word that has more vowels inside.
 */
function compareVowelCount(str1, str2) {
    return str1.match(/[aeiou]/gi).length > str2.match(/[aeiou]/gi).length ? str1 : str2;
}

console.log(findLongestWord(inputText));