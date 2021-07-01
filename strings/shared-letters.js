const sharedLettersK = (str1, str2) => {
  // let arr1 = [...str1];
  // console.log(arr1);
  let arr2 = [...str2];
  let count = 0;
  for(let a of str1) {
    // console.log(a);
    // console.log(arr2);

    if(arr2.includes(a)) {
      count++;
    }
  }
  return count;
}