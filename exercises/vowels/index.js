// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {

    str = str.toLowerCase();
    let total = 0;
    let vowel = ['a', 'e', 'i', 'o', 'u'];

    for (let char of str) {
        // if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        //     total++;
        // }
        if (vowel.includes(char)) {
            total++;
        }
    }

    return total;

}

module.exports = vowels;
