/**
 * String Slice-athon
 * Published by Mubashir Hassan in JavaScript
 *
 * URL:
 * https://edabit.com/challenge/CFswwYtpKgSvMuYcS
 *
 * Tags:
 * language_fundamentals, strings
 *
 * Problem Statement:
 * This challenge has five miniature exercises to help practice proficiency in string slicing.
 * Check the examples below for a visual indicator of how to slice the strings. Good luck!
 */

/* Solution-1 by Kevin Mehta. */
function first5CharsK1(s) {
  return s.slice(0, 5);
}
function last5CharsK1(s) {
  return s.slice(-5);
}
function allCharsFromBackK1(s) {
  return s.split('').reverse().join('');
}
function first6CharsInReverseK1(s) {
  return s
    .split('')
    .reverse()
    .join('')
    .slice(s.length - 6);
}
function last7CharsOddPosK1(s) {
  return s
    .split('')
    .reverse()
    .join('')
    .slice(0, 7)
    .split('')
    .map((v, i, arr) => (i % 2 === 0 ? v : undefined))
    .reverse()
    .join('');
}

/* Solution-2 by Kevin Mehta. */
const first5CharsK2 = (s) => s.slice(0, 5);
const last5CharsK2 = (s) => s.slice(-5);
const allCharsFromBackK2 = (s) => s.split('').reverse().join('');
const first6CharsInReverseK2 = (s) =>
  s
    .split('')
    .reverse()
    .join('')
    .slice(s.length - 6);
const last7CharsOddPosK2 = (s) =>
  s
    .split('')
    .reverse()
    .join('')
    .slice(0, 7)
    .split('')
    .map((v, i, arr) => (i % 2 === 0 ? v : undefined))
    .reverse()
    .join('');

/* Solution recommended. */
const first5Chars = (s) => s.slice(0, 5);
const last5Chars = (s) => s.slice(-5);
const allCharsFromBack = (s) => [...s].reverse().join('');
const first6CharsInReverse = (s) => [...s.slice(0, 6)].reverse().join('');
const last7CharsOddPos = (s) =>
  [...s.slice(-8)].filter((a, b) => b % 2).join('');
