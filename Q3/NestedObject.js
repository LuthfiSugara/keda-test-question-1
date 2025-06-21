function NestedObject(obj) {
  let sum = 0;
 
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      sum += NestedObject(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
 
  return sum;
}

module.exports = NestedObject;