/**
 * Identify whether a JavaScript object has changed
 *
 * https://stackoverflow.com/questions/
 * 38277385/design-pattern-to-check-if-a-javascript-object-has-changed
 *
 * Problem Statement:
 * Create a function that takes 2 arrays containing original and 
 * changed objects and return an array containing list of object that
 * are changed.
 *
 * Examples:
 * getObjChanges()
 *
 * Notes:
 * You can take static arrays for the .
 */

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

/**
 * Final Approach - Kevin Mehta
 */
getObjChanges = () => {
  let changes, i, j, len, item;
  if (JSON.stringify(objOriginal) === JSON.stringify(objChanged)) {
    changes = false;
  }
  changes = [];
  for (i = 0, j = 0, len = objOriginal.length; j < len; i = ++j) {
    item = objChanged[i];
    if (JSON.stringify(item) !== JSON.stringify(objOriginal[i])) {
      changes.push(item);
    }
  }
  return changes;
};
