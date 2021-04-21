/**
 * Hiding the Card Number
 *
 * https://edabit.com/challenge/rtpvAqFT3koqMoFCJ
 *
 * Problem Statement:
 * Write a function that takes a credit card number and only displays the
 * last four characters. The rest of the card number must be replaced by
 * "************"
 *
 * Examples:
 * cardHide("1234123456785678") ➞ "************5678"
 * cardHide("8754456321113213") ➞ "************3213"
 * cardHide("35123413355523") ➞ "**********5523"
 *
 * Examples:
 * Ensure you return a string.
 * The length of the string must remain the same as the input.
 *
 * Level: Easy
 */

/**
 * Final Approach - Kevin Mehta
 *
 * @param card String containing card number whose last four digits
 * need to be masked.
 */
const cardHideK = card => "*".repeat(card.length - 4).concat(card.slice(-4));

/**
 * Another Approach
 *
 * @param card String containing card number whose last four digits
 * need to be masked.
 */
const cardHide = card => card.slice(-4).padStart(card.length, "*");
