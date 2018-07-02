// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//
//     let father = 0;
//     let fibbonacci = 1;
//     if (n === 0) return 0;
//
//     for (let i = 1; i < n; i++) {
//
//         let temp = father;
//         father = fibbonacci;
//         fibbonacci = fibbonacci + temp;
//
//     }
//
//     console.log(fibbonacci);
//     return fibbonacci;
// }

function memoize(fn) {
    const cache = {};

    //...args doesn't know how many arguments, just add them all.
    return function(...args) {
        //Check the cache and if it's in there return the function.
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    }
}

fib = memoize(fib);

function fib(n) {

    if (n < 2)
        return n;

    return fib(n - 1) + fib(n - 2);
}

module.exports = fib;
