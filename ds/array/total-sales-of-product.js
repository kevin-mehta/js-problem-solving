/**
 * Total Sales of Product
 *
 * https://edabit.com/challenge/ZyRoiEiegKfLued8g
 *
 * Problem Statement:
 * In this question you will be given a table as below,
 * where the first row lists the names of products, and
 * each of row after that lists the sales of the product
 * for each day (over some time range).
 * 
 * [
 *   ["A", "B", "C"],
 *   [ 2 ,  7 ,  1 ],
 *   [ 3 ,  6 ,  6 ],
 *   [ 4 ,  5 ,  5 ]
 * ]
 * 
 * Write a function that receives:
 * (i) A sales table sales as shown above.
 * (ii) The name of a product product.
 * And, returns the total sales if the product is on the array,
 * otherwise return the string "Product not found".
 *
 * Examples:
 * totalSales([
 *  ["A", "B", "C"],
 *  [ 2 ,  7 ,  1 ],
 *  [ 3 ,  6 ,  6 ],
 *  [ 4 ,  5 ,  5 ]
 * ], "A") ➞ 9
 * // 2 + 3 + 4 = 9
 * 
 * totalSales([
 *  ["A", "B", "C"],
 *  [ 2 ,  7 ,  1 ],
 *  [ 3 ,  6 ,  6 ],
 *  [ 4 ,  5 ,  5 ]
 * ], "C") ➞ 12
 * // 1 + 6 + 5 = 12
 * 
 * totalSales([
 *  ["A", "B", "C"],
 *  [ 2 ,  7 ,  1 ],
 *  [ 3 ,  6 ,  6 ],
 *  [ 4 ,  5 ,  5 ]
 * ], "D") ➞ "Product not found"
 *
 * Notes:
 * The examples above all use the same sales table,
 * but in the tests the table will vary.
 *
 * Level: Easy
 */
const totalSalesK = (sales, product) => {
  let isProductPresent = sales[0].includes(product);
  console.log("isProductPresent: ", isProductPresent);

  // if(sales[0]) {} else {
    
  // }
};