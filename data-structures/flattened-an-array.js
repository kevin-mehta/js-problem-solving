/**
 * Flattened an Array (w/o using inbuilt Array.prototype.flat()
 * method)
 * 
 * Reference: Array.prototype.flat() - JavaScript | MDN
 * 
 * @param arr Array need to be flattened.
 * @param depth The depth level specifying how deep a nested
 * array structure should be flattened. Defaults to 1.
 */
const flatDeep = (arr, depth = 1) => {
  return depth > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flatDeep(val, depth - 1) : val),
        []
      )
    : arr.slice();
};