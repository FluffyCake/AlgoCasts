// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// //Recursive solution
function steps(n, row = 0, stair = '') {
    if (n === row)
        return;

    if (n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
    }

    const add = stair.length <= row ? '#' : ' ';
    steps(n, row, stair + add);
}


//Standard solution
// function steps(n) {
//
//     const step = '#';
//     const space = ' ';
//     let stairs = '';
//
//     for (let row = 0; row < n; row++) {
//         for (let col = 0; col < n; col++) {
//             if (row >= col)
//                 stairs = stairs.concat(step);
//             else
//                 stairs = stairs.concat(space);
//         }
//         console.log(stairs);
//         stairs = '';
//     }
//
// }

//JS Library solution
// function steps(n) {
//
//     const step = '#';
//     const space = ' ';
//
//     for (let i = 0; i < n; i++) {
//         let spaces = space.repeat(n - (i + 1));
//         let steps = step.repeat(i + 1);
//         console.log(steps + spaces);
//     }
//
// }

module.exports = steps;
