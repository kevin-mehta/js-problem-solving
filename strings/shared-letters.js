const sharedLettersK = (str1, str2) => {
  let arr2 = [...str2];
  let count = 0;
  for (let a of str1) {
    if (arr2.includes(a)) {
      count++;
    }
  }
  return ;
};