let itr = 0;
let count = 0;
const catchThievesK1 = (arr, n, k) => {
  traverseArray(arr, n, k, itr);
  return count;
};
const traverseArray = (arr, n, k, itr) => {
  if (itr <= n - 1) {
    if (arr[itr] === "P" && itr - k >= 0 && itr - k <= n) {
      let tempSlicedArr = arr.slice(itr - k, itr);
      tempSlicedArr.includes("T") && count++;
    } else if (arr[itr] === "P" && itr + k >= 0 && itr - k <= n) {
      let tempSlicedArr = arr.slice(k, itr + k + 1);
      tempSlicedArr.includes("T") && count++;
    }
    itr++;
    traverseArray(arr, n, k, itr);
  }
};

const catchThievesK = (arr, n, k) => {
  let itr = 0;
  let count = 0;
  while (itr <= n - 1) {
    if (arr[itr] === "P" && itr - k >= 0 && itr - k <= n) {
      let tempSlicedArr = arr.slice(itr - k, itr);
      tempSlicedArr.includes("T") && count++;
    } else if (arr[itr] === "P" && itr + k >= 0 && itr - k <= n) {
      let tempSlicedArr = arr.slice(k, itr + k + 1);
      tempSlicedArr.includes("T") && count++;
    }
    itr++;
  }
  return count;
};
