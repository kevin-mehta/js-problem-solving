/**
 * Histogram Function
 *
 * https://edabit.com/challenge/st8SZGoa3WE8Xrhf7
 *
 * Problem Statement:
 * Build a function that creates histograms.
 * Every bar needs to be on a new line and its length
 * corresponds to the numbers in the array passed as an
 * argument. The second argument of the function represents
 * the character to be used for the bar.
 * histogram(arr, char) ➞ str
 *
 * Examples:
 * histogram([1, 3, 4], "#") ➞ "#\n###\n####"
 * #
 * ###
 * ####
 *
 * histogram([6, 2, 15, 3], "=") ➞ "======\n==\n===============\n==="
 * ======
 * ==
 * ===============
 * ===
 *
 * histogram([1, 10], "+") ➞ "+\n++++++++++"
 * +
 * ++++++++++
 *
 * Level: Medium
 */

/**
 * Final Approach - Kevin Mehta
 *
 * @param arr
 * @param char
 */
const histogramK = (arr, char) => {
  let strHistogram = '';
  for (let val of arr) {
    strHistogram += char.repeat(val) + '\n';
  }
  return strHistogram;
};
