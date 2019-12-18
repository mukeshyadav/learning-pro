const flatArray = require("./flatten.js");

test("[1,2,3,[4,5,[6,7]]] should return [1,2,3,4,5,6,7]", () => {
  expect(flatArray([1, 2, 3, [4, 5, [6, 7]]])).toStrictEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ]);
});
