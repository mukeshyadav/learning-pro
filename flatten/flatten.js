function flatArray(nestedArray, result = []) {
  if (!nestedArray) return;
  if (!nestedArray.length) return result;
  nestedArray.forEach(val => {
    if (Array.isArray(val)) {
      return flatArray(val, result);
    } else {
      result.push(val);
    }
  });
  return result;
}

module.exports = flatArray;
