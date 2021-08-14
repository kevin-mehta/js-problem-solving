const sort = arr => {
  let len = arr.length;
  bubbleSort(arr, len);
  return arr;
};
const bubbleSort = (arr, n) => {
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
};
const swap = (arr, xp, yp) => {
  let temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
};
