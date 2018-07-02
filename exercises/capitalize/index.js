// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

    let array = str.split(" ");
    let capitalArray = [];
    for (var str of array) {

        let capital = str.slice(0, 1).toUpperCase();
        let lower = str.slice(1);

        capitalArray.push(capital + lower);

    }

    return capitalArray.join(" ");
}

module.exports = capitalize;
