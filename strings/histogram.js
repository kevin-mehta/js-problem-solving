const histogramK = (arr, char) => {
  let strHistogram = "";
  for (let val of arr) {
    strHistogram += char.repeat(val);
  }
  return strHistogram;
}