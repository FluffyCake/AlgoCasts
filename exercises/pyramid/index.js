// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n, row = 0, stair = '') {
//     if (n === row) {
//         return;
//     }
//
//     if (stair.length === (2*n - 1)) {
//         console.log(stair);
//         return pyramid(n, row + 1);
//     }
//
//     const add = (stair.length >= n - 1 - row && stair.length <= n - 1 + row) ? '#' : ' ';
//     pyramid(n, row, stair + add);
// }

// function pyramid(n) {
//
//     let block = '';
//     for(let row = 0; row < n; row++) {
//         for (let col = 0; col < 2*n -1; col++) {
//             if (col >= n - 1 - row && col <= n - 1 + row)
//                 block += '#';
//             else
//                 block += ' ';
//         }
//         console.log(block);
//         block = '';
//     }
//
// }

function pyramid(n) {

    const space = ' ';
    const step = '#';

    for (let i = 0; i < n; i++) {
        let totalBlocks = step.repeat(2*i + 1);
        let totalSpace = space.repeat(n - i - 1);
        console.log(totalSpace + totalBlocks + totalSpace);
    }

}

pyramid(5);

module.exports = pyramid;
