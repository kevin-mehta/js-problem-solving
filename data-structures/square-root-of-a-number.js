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
 *
 * https://stackoverflow.com/questions/12815651/binary-search-for-square-root-falls-into-infinite-loop-in-javascript
 *
 * https://www.tutorialspoint.com/find-square-root-of-number-upto-given-precision-using-binary-search-in-cplusplus
 */
const floorSqrt1 = x => {
  console.log("x: ", x);
  let i;
  // for (i = 0; Math.floor(i * i) <= x; i = i + 0.01) {
  //   if (Math.floor(i * i) === x) {
  //     return Math.floor(i);
  //   }
  // }
  return Math.floor(i);
};
const floorSqrtK = x => {
  let start = 0;
  let end = x;
  let numSqrt = getSqrtOfNumber(start, end);
  return numSqrt;
};
const getSqrtOfNumber = (start, end) => {
  if (start <= end) {
    let mid = (start + end) / 2;
    let midSquare = mid * mid;
    if (end === midSquare) {
      return end;
    } else if (midSquare < end) {
      getSqrtOfNumber(mid + 1, end);
    } else {
      getSqrtOfNumber(start, mid);
    }
  }
};
const performSearch = (start, end) => {
  for (let i = start; i <= end; i++) {
    let mid = (start + end) / 2;
    if (x === mid * mid) {
      return x;
    } else if (x > mid * mid) {
      performSearch(mid + 1, end);
    } else {
      performSearch(start, mid + 1);
    }
  }
};

const sqrtBinarySearchK = (num, precision) => {
  let left = 0,
    right = num;
  let mid, res;
};
