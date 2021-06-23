const getMiddleK = str => {
  let slen = str.length;
  let midd = slen / 2;
  let pluckedChars = [];
  if (slen % 2 === 0) {
    pluckedChars.push(str.charAt(midd - 1));
    pluckedChars.push(str.charAt(midd));
  } else {
    pluckedChars.push(str.charAt(midd));
  }
  return pluckedChars.join('');
};

const getMiddle = str => {
  let start = Math.ceil(str.length / 2) - 1;
  let end = Math.floor(str.length / 2) + 1;
  return str.substring(start, end);
};
