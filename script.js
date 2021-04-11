/**
 * Reverse the Case of all String characters
 *
 * https://edabit.com/challenge/PTvYKkvf7oytHmJFm
 *
 * Problem Statement:
 * Given a string, create a function to reverse the case.
 * All lower-cased letters should be upper-cased, and vice versa.
 *
 * Examples:
 * reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"
 * reverseCase("MANY THANKS") ➞ "many thanks"
 * reverseCase("sPoNtAnEoUs") ➞ "SpOnTaNeOuS"
 *
 * Notes:
 * NA
 *
 * Level: Easy
 */
/**
 * Reverse the Case of all String characters
 * 
 * Final Approach - Kevin Mehta
 *
 * @param str String whose characters cases needs to be
 * reversed.
 */
const reverseCaseK = str => {
  return str
    .split("")
    .map(value => {
      if (/[A-Z]/.test(value)) {
        return value.toLowerCase();
      } else if (/[a-z]/.test(value)) {
        return value.toUpperCase();
      } else {
        return value;
      }
    })
    .join("");
};
/**
 * Reverse the Case of all String characters
 * 
 * Recommended Approach
 *
 * @param str String whose characters cases needs to be
 * reversed.
 */
const reverseCase = str =>
  [...str]
    .map(c => (c.toLowerCase() == c ? c.toUpperCase() : c.toLowerCase()))
    .join("");
/**
 * Find Value in a Binary Tree
 * 
 * https://edabit.com/challenge/GGDMJ33wg8y3EHQfP
 * 
 * Problem Statement:
 * An array that represents a Binary Tree is in the
 * following form.
 * binaryTree = [val, arrLeft, arrRight]
 * 
 * When arrLeft is the left side of the tree and arrRight
 * is the right side of the tree.
 * 
 * To illustrate:
 * const arr1 = [3, [ 8, [ 5, null, null], null], [ 7, null, null]];
 * arr1 represents the following Binary Tree.
 *       3
 *      / \
 *     8   7
 *    /\   /\
 *   5  N N  N
 *  /\
 * N  N
 * Where N represents null.
 * 
 * Create a function that takes an array that represent a
 * Binary Tree and a value and return true if the value is
 * in the tree and, false otherwise.
 * 
 * Examples:
 * valueInTree(arr1, 5) ➞ true
 * valueInTree(arr1, 9) ➞ false
 * valueInTree(arr2, 51) ➞ false
 * 
 * Notes:
 * The tree will contain integers only and will be
 * presented by an array in the specified format.
 */
/**
 * Find Value in a Binary Tree
 * 
 * Final Approach - Kevin Mehta
 *
 * @param arr Array containing Binary Tree.
 * @param val Value to search in Tree.
 */
const valueInTree = (arr, val) => {
  if (arr && Array.isArray(arr) && arr[0] === val) {
    doesValueExists = true;
  } else {
    arr[1] && valueInTree(arr[1], val);
    arr[2] && valueInTree(arr[2], val);
  }
  return doesValueExists;
};
let doesValueExists = false;
