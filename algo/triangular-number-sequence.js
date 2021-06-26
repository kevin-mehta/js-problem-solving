const triangleK = num => {
  console.log("triangleK: num: ", num);
  if(num <= 1) {
    return num;
  } else {
    // num = num + num--;
    let temp = num + triangleK(num--);
    console.log("temp: ", temp);
    return temp;
  }
};

const fact = num => {
  return
};