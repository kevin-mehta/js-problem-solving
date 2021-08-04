/**
 * Alphabet Soup
 *
 * https://edabit.com/challenge/bHDbMWpdeNaw23jqT
 *
 * Problem Statement:
 * Create a  that takes a string and returns a string
 * with its letters in alphabetical order.
 *
 * Examples:
 * alphabetSoup("hello") ➞ "ehllo"
 * alphabetSoup("edabit") ➞ "abdeit"
 * alphabetSoup("hacker") ➞ "acehkr"
 * alphabetSoup("geek") ➞ "eegk"
 * alphabetSoup("javascript") ➞ "aacijprstv"
 *
 * Notes:
 * You can assume numbers and punctuation symbols won't
 * be included in test cases. You'll only have to deal
 * with single word, alphabetic characters.
 *
 * Level: Easy
 */

/**
 * Final Approach - Kevin Mehta
 *
 * @param str String whose letters needs to be arranged
 * in an alphabetical order.
 */
const alphabetSoupK = str =>
  str
    .split('')
    .sort()
    .join('');

/**
 * Recommended Approach.
 *
 * @param str String whose letters needs to be arranged
 * in an alphabetical order.
 */
const alphabetSoup = str => [...str].sort().join('');
