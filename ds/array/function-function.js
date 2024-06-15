function factory1(num) {
  return function (arrDividends) {
    return arrDividends.map(function (value, index, array) {
      return value / num;
    });
  };
}

const factory = (n) => (arr) => arr.map((v) => v / n);
