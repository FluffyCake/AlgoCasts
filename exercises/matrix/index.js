// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {

    let resultSet = [];
    for (let i = 0; i < n; i++)
        resultSet.push([]);

    let counter = 1;

    let startCol = 0;
    let endCol = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    while (startCol <= endCol && startRow <= endRow) {

        //You have 4 different looping actions.
        for (let i = startCol; i <= endCol; i++) {
            resultSet[startRow][i] = counter;
            counter++;
        }
        //Increment start row
        startRow++;
        for (let i = startRow; i <= endRow; i++) {
            resultSet[i][endCol] = counter;
            counter++;
        }
        //Decrement end column
        endCol--;
        for (let i = endCol; i >= startCol; i--) {
            resultSet[endRow][i] = counter;
            counter++;
        }
        //Decrement end Row
        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            resultSet[i][startCol] = counter;
            counter++;
        }
        //Increment start column
        startCol++;

    }

    console.log(resultSet);
    return resultSet;

}

module.exports = matrix;
