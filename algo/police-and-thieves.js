let itr = 0;
let count = 0;
const catchThievesK1 = (arr, n, k) => {
  traverseArray(arr, n, k, itr);
  return count;
};
const traverseArray = (arr, n, k) => {
  if (itr <= n - 1) {
    if (arr[itr] === 'P' && itr - k >= 0 && itr - k <= n) {
      let tempSlicedArr = arr.slice(itr - k, itr);
      tempSlicedArr.includes('T') && count++;
    } else if (arr[itr] === 'P' && itr + k >= 0 && itr - k <= n) {
      let tempSlicedArr = arr.slice(k, itr + k + 1);
      tempSlicedArr.includes('T') && count++;
    }
    itr++;
    traverseArray(arr, n, k, itr);
  }
};

const catchThievesK = (arr, n, k) => {
  let itr = 0;
  let count = 0;
  while (itr <= n - 1) {
    if (arr[itr] === 'P' && itr - k >= 0 && itr - k <= n) {
      let tempSlicedArr = arr.slice(itr - k, itr);
      tempSlicedArr.includes('T') && count++;
    } else if (arr[itr] === 'P' && itr + k >= 0 && itr - k <= n) {
      let tempSlicedArr = arr.slice(k, itr + k + 1);
      tempSlicedArr.includes('T') && count++;
    }
    itr++;
  }
  return count;
};

function catchThievesKGFG(arr, N, K) {
  let itr = 0;
  let count = 0;
  while (itr <= N - 1) {
    if (arr[itr] === 'P' && itr - K >= 0 && itr - K <= N) {
      let tempSlicedArr = arr.slice(itr - K, itr);
      tempSlicedArr.includes('T') && count++;
    } else if (arr[itr] === 'P' && itr + K >= 0 && itr - K <= N) {
      let tempSlicedArr = arr.slice(K, itr + K + 1);
      tempSlicedArr.includes('T') && count++;
    }
    itr++;
  }
  return count;
}

const catchThieves = (arr, N, K) => {
  let res = 0;
  let thi = [];
  let pol = [];
  for (let i = 0; i < N; i++) {
    if (arr[i] === 'P') {
      pol.push(i);
    } else if (arr[i] === 'T') {
      thi.push(i);
    }
  }
  let l = 0,
    r = 0;
  while (l < thi.length && r < pol.length) {
    if (Math.abs(thi[l] - pol[r]) <= K) {
      res++;
      l++;
      r++;
    } else if (thi[l] < pol[r]) {
      l++;
    } else {
      r++;
    }
  }
  return res;
};

function catchThievesGFG(arr, N, K) {
  let res = 0;
  let thi = [];
  let pol = [];
  for (let i = 0; i < N; i++) {
    if (arr[i] == 'P') {
      pol.push(i);
    } else if (arr[i] == 'T') {
      thi.push(i);
    }
  }
  let l = 0,
    r = 0;
  while (l < thi.length && r < pol.length) {
    if (Math.abs(thi[l] - pol[r]) <= K) {
      res++;
      l++;
      r++;
    } else if (thi[l] < pol[r]) {
      l++;
    } else {
      r++;
    }
  }
  return res;
}
