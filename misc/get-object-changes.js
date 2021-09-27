/**
 * Alphabet Soup
 *
 * https://edabit.com/challenge/bHDbMWpdeNaw23jqT
 *
 * Problem Statement:
 * Create a function that takes a string and returns a string
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
let objOriginal = [
  { name: 'test01', age: 10 },
  { name: 'test02', age: 20 },
  { name: 'test03', age: 30 },
];
let objChanged = [
  { name: 'test01', age: 10 },
  { name: 'test02', age: 20 },
  { name: 'test03', age: 20 },
];
/**
 * Identify whether a JS object has changed.
 */
getObjChanges = () => {
  let changes, i, j, len, item;
  if (JSON.stringify(objOriginal) === JSON.stringify(objChanged)) {
    changes = false;
  }
  changes = [];
  for (i = 0, j = 0, len = objOriginal.length; j < len; i = ++j) {
    item = objChanged[i];
    if (JSON.stringify(item) !== JSON.stringify(objOriginal[i])) {
      changes.push(item);
    }
  }
  return changes;
};
