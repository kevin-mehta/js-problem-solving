function factory(num) {
  return function (arrDividends) {
    return arrDividends.map(function (value, index, array) {
      return value / num;
    });
  };
}
