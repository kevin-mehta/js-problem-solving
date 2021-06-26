/**
 * Triangular Number Sequence
 * https://edabit.com/challenge/RMZiERz2cbjmbXruY
 *
 * Problem Statement:
 * This Triangular Number Sequence is generated from a pattern
 * of dots that form a triangle. The first 5 numbers of the sequence
 * or dots, are: 1, 3, 6, 10, 15.
 *
 * This means that the first triangle has just one dot, the
 * second one has three dots, the third one has 6 dots and so on.
 *
 * Write a function that returns the number of dots when given
 * its corresponding triangle number of the sequence.
 *
 * Examples:
 * triangle(1) ➞ 1
 * triangle(6) ➞ 21
 * triangle(8) ➞ 36
 * triangle(215) ➞ 23220
 * triangle(2153) ➞ 2318781
 *
 * Notes:
 * Check the Resources for info on triangular number sequence.
 *
 * Level: Easy
 */

/**
 * Final Approach - Kevin Mehta
 *
 * @param num Number specifying the sequence / rows of triangle.
 */
const triangleK = num => {
  if (num <= 1) return num;
  else return num + triangleK(num - 1);
};
