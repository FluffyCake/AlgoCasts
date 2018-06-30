// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    //Solution1
    // return str.split('').reverse().join('');

    // let arr = str.split('');
    // arr.reverse();
    // return arr.join('')

    //Solution2
    let reversed = '';

    for (let character of str) {
        reversed = character + reversed;
        debugger;
    }

    return reversed;

    //Solution3
    // return str.split('').reduce((rev, char) => char + rev, '');

}


reverse('asdf');

module.exports = reverse;
