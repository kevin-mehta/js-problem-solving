/**
 * Finding Nemo
 *
 * https://edabit.com/challenge/c23dFfNiKbnguSQtq
 *
 * Problem Statement:
 * You're given a string of words.
 * You need to find the word "Nemo", and return a
 * string like this:
 * "I found Nemo at [the order of the word you find nemo]!".
 *
 * If you can't find Nemo, return "I can't find Nemo :(".
 *
 * Examples:
 * findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
 * findNemo("Nemo is me") ➞ "I found Nemo at 1!"
 * findNemo("I Nemo am") ➞ "I found Nemo at 2!"
 *
 * Notes:
 * ! , ? . are always separated from the last word.
 *
 * Nemo will always look like Nemo, and not NeMo or
 * other capital variations.
 *
 * Nemo's, or anything that says Nemo with something
 * behind it, doesn't count as Finding Nemo.
 *
 * If there are multiple Nemo's in the sentence,
 * only return for the first one.
 *
 * Level: Easy
 */

/**
 * Final Approach - Kevin Mehta
 *
 * @param card String to find the word "Nemo".
 */
const findNemoK = sentence => {
  const strNemo = 'Nemo';
  let arrSentence = sentence.split(' ');
  let strFinalOutput = "I can't find Nemo :(";
  if (arrSentence.includes(strNemo)) {
    for (var i = 0; i < arrSentence.length; i++) {
      if (arrSentence[i] === strNemo) {
        strFinalOutput = 'I found Nemo at ' + (i + 1) + '!';
        break;
      }
    }
  }
  return strFinalOutput;
};

/**
 * Recommended Approach.
 *
 * @param card String to find the word "Nemo".
 */
const findNemo = sentence => {
  const index = sentence.split(' ').findIndex(e => e === 'Nemo');
  return index >= 0 ? `I found Nemo at ${index + 1}!` : "I can't find Nemo :(";
};
