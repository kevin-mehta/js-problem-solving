/**
 * Letters Only
 *
 * https://edabit.com/challenge/GPKkNbytRpsAnHcrX
 *
 * Problem Statement:
 * Write a function that removes any non-letters from a string,
 * returning a well-known film title.
 *
 * Examples:
 * lettersOnly("R!=:~0o0./c&}9k`60=y") ➞ "Rocky"
 * lettersOnly("^,]%4B|@56a![0{2m>b1&4i4") ➞ "Bambi"
 * lettersOnly("^U)6$22>8p).") ➞ "Up"
 *
 * Level: Easy
 */

/**
 * Final Approach - Kevin Mehta
 *
 * @param str String whose letters needs to be fetched.
 */
const lettersOnlyK = str => str.replace(/[^A-Za-z]/g, '');

/**
 * Recommended Approach
 *
 * @param str String whose letters needs to be fetched.
 */
const lettersOnly = str => str.replace(/[^a-z]/gi, '');
