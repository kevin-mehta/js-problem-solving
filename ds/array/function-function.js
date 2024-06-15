function factory1(num) {
  return function (arrDividends) {
    return arrDividends.map(function (value, index, array) {
      return value / num;
    });
  };
}

const factory2 = (n) => (arr) => arr.map((v) => v / n);

const factory = n => arr => arr.map(v => v / n);
