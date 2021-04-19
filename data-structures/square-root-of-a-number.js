/**
 * Find the square root of a number.
 *
 * Approach:
 * 1) Start with ‘start’ = 0, end = ‘x’.
 * 2) Do following while ‘start’ is smaller than or equal to ‘end’.
 *    a) Compute ‘mid’ as (start + end)/2
 *    b) compare mid*mid with x.
 *    c) If x is equal to mid*mid, return mid.
 *    d) If x is greater, do binary search between mid+1 and end.
 *    In this case, we also update ans (Note that we need floor).
 *    e) If x is smaller, do binary search between start and mid.
 * 
 * Problem Statement:
 * Given an integer x, find the square root of x. 
 * If x is not a perfect square, then return floor(√x).
 * 
 * Examples:
 * floorSqrtK(4) ➞ 2
 * Since, 4 is a perfect square, so its square root is 2.
 * floorSqrtK(5) ➞ 2
 * Since, 5 is not a perfect square, floor of square root of 5 is 2.
 * floorSqrtK(24648) ➞ 156
 * 
 * Notes:
 * Try Solving the question without using sqrt Function.
 * 
 * Expected Time Complexity: O(log N)
 * Expected Auxiliary Space: O(1)
 *
 * References:
https://stackoverflow.com/questions/12815651/binary-search-for-square-root-falls-into-infinite-loop-in-javascript
 *
https://www.tutorialspoint.com/find-square-root-of-number-upto-given-precision-using-binary-search-in-cplusplus
 *
 */
/**
 * Find the square root of a number.
 *
 * Recommended Approach
 *
 * @param x Number whose square root needs to be calculated.
 */
const floorSqrtK = x => {
  var lo = 0,
    hi = x;
  while (lo <= hi) {
    var mid = Math.floor((lo + hi) / 2);
    if (mid * mid > x) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return hi;
};
