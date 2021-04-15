/**
 * Find the square root of a number.
 *
 * Approach:
 * 1) Start with ‘start’ = 0, end = ‘x’.
 * 2) Do following while ‘start’ is smaller than or equal to ‘end’.
 *  a) Compute ‘mid’ as (start + end)/2
 *  b) compare mid*mid with x.
 *  c) If x is equal to mid*mid, return mid.
 *  d) If x is greater, do binary search between mid+1 and end.
 *  In this case, we also update ans (Note that we need floor).
 *  e) If x is smaller, do binary search between start and mid.
 */
const floorSqrt = x => {
  console.log("x: ", x);
  let i;
  // for (i = 0; Math.floor(i * i) <= x; i = i + 0.01) {
  //   if (Math.floor(i * i) === x) {
  //     return Math.floor(i);
  //   }
  // }
  return Math.floor(i);
};
