// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    let charMap = {};
    let max = 0;
    let maxChar = '';

    //Split string into a character map
    for (let char of str) {
        if(!charMap[char]) {
            charMap[char] = 1;
        } else {
            charMap[char]++;
        }
    }
    //Iterate through the map and find max.
    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;

}

module.exports = maxChar;
