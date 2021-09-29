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
  let changes, i, j, len, item;
  if (JSON.stringify(objOriginal) === JSON.stringify(objChanged)) {
    changes = false;
  }
  changes = [];
  for (i = 0, len = objOriginal.length; j < len; i++) {
    console.log('********** Inside for');
    console.log('i: ', i);
    // console.log('j: ', j);
    item = objChanged[i];
    if(JSON.stringify(objChanged[i]) === JSON.stringify(objOriginal[i])) {
      changes.push(objChanged[i]);
    }
  }
  return changes;
};
