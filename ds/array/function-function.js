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
