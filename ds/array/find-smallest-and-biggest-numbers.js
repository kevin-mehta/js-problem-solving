/**
 * Find the Smallest and Biggest Numbers
 * https://edabit.com/challenge/Q3n42rEWanZSTmsJm
 *
 * Problem :
 * Create a function that takes an array of numbers and
 * return both the minimum and maximum numbers, in that order.
 *
 * Examples:
 * minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 * minMax([2334454, 5]) ➞ [5, 2334454]
 * minMax([1]) ➞ [1, 1]
 *
 * Notes:
 * All test arrays will have at least one element and are valid.
 *
 */

/**
 * Final Approach - Kevin Mehta
 *
 * @param arr Array from which we have to find minimum and
 * maximum values.
 */
const minMaxK = (arr) => [Math.min(...arr), Math.max(...arr)];
