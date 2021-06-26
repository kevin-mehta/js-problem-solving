const triangleK = num => {
  if (num <= 1) return num;
  else return num + triangleK(num - 1);
};
