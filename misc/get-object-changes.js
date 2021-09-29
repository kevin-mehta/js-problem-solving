let objOriginal = [
  { name: 'test01', age: 10 },
  { name: 'test02', age: 20 },
  { name: 'test03', age: 30 },
];
let objChanged = [
  { name: 'test01', age: 10 },
  { name: 'test02', age: 20 },
  { name: 'test03', age: 20 },
];
getObjChanges = () => {
  let changes, i, j;
  if (JSON.stringify(objOriginal) === JSON.stringify(objChanged)) {
    changes = false;
  }
  for (i = 0, j = 0, len = objOriginal.length; j < len; i = ++j) {
    console.log('********** Inside for');
    console.log('i: ', i);
    console.log('j: ', j);
  }
  return changes;
};
