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
 * Final Approach - 
 *
 * @param str String whose characters cases needs to be
 * reversed.
 */
const reverseCaseK = str => {
  return str
    .split('')
    .map(value => {
      if (/[A-Z]/.test(value)) {
        return value.toLowerCase();
      } else if (/[a-z]/.test(value)) {
        return value.toUpperCase();
      } else {
        return value;
      }
    })
    .join('');
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
    .join('');
