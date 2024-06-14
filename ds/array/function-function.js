/**
 * Function Function
 * Published by BijogFc24 in JavaScript.
 * 
 * URL:
 * https://edabit.com/challenge/FEiLd6HgHcwkgHTWP
 * 
 * Tags:
 * arrays, closures, functional_programming
 * 
 * Problem Statement:
 * Create a function that takes a number as its parameter and returns another function. 
 * The returned function must take an array of numbers as its parameter, and return an 
 * array of the numbers divided by the number that was passed into the first function.
 * 
 * Example I:
 * const first = factory(15)  // returns a function first.
 * const arr = [30, 45, 60]   // 30 / 15 = 2, 45 / 15 = 3, 60 / 15 = 4
 * first(arr) ➞ [2, 3, 4]
 * 
 * Example II:
 * const second = factory(2)  // returns a function second.
 * const arr = [2, 4, 6]      // 2 / 2 = 1, 4 / 2 = 2, 6 / 2 = 3
 * second(arr) ➞ [1, 2, 3]
 * 
 * Notes:
 * Rounding not required.
 */
function factory1(num) {
  return function (arrDividends) {
    return arrDividends.map(function (value, index, array) {
      return value / num;
    });
  };
}

const factory2 = (n) => (arr) => arr.map((v) => v / n);

const factory = n => arr => arr.map(v => v / n);
