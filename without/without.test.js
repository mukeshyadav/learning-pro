const arrayWithoutDuplicateAndWithoutValues = require("./without.js");

test("[1, 2], [1, 2, 1, 4,5] should return [4,5]", () => {
  expect(
    arrayWithoutDuplicateAndWithoutValues([1, 2], [1, 2, 1, 4, 5])
  ).toStrictEqual([4, 5]);
});
