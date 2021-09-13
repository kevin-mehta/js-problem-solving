/**
 * Return the Middle Character(s) of a String
 *
 * https://edabit.com/challenge/R3649PDvoFf6wGxyg
 *
 * Problem Statement:
 * Create a function that takes a string and returns the
 * middle character(s). If the word's length is odd,
 * return the middle character.
 * If the word's length is even, return the middle two
 * characters.
 *
 * Examples:
 * getMiddle("test") ➞ "es"
 * getMiddle("testing") ➞ "t"
 * getMiddle("middle") ➞ "dd"
 * getMiddle("A") ➞ "A"
 *
 * Notes:
 * All test cases contain a single word (as a string).
 *
 * Level: Easy
 */

/**
 * Final Approach - Kevin Mehta
 *
 * @param str String whose middle characters needs to be
 * found.
 */
const getMiddleK = str => {
  let slen = str.length;
  let midd = slen / 2;
  let pluckedChars = [];
  if (slen % 2 === 0) {
    pluckedChars.push(str.charAt(midd - 1));
    pluckedChars.push(str.charAt(midd));
  } else {
    pluckedChars.push(str.charAt(midd));
  }
  return pluckedChars.join('');
};

/**
 * Recommended Approach
 *
 * @param str String whose middle characters needs to be
 * found.
 */
const getMiddle = str => {
  let start = Math.ceil(str.length / 2) - 1;
  let end = Math.floor(str.length / 2) + 1;
  return str.substring(start, end);
};
