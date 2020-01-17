function testArrayIsValid(input) {
  if (!Array.isArray(input)) {
    throw "Not an Array";
  } else {
    if (!input.length) {
      throw "Array should have some value";
    }
  }
}

function testIinputIsValid(input) {
  return typeof input !== "number" ? false : true;
}

function twoArrayAdditon(firstArr, secondArr) {
  if (!testArrayIsValid(firstArr) || !testArrayIsValid(secondArr)) {
    return;
  }
}

module.exports = twoArrayAdditon;
