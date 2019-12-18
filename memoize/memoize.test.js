const memoize = require("./memoize.js");

function add(a, b) {
  return a + b;
}

test("add 2 and 3 to equal 5", () => {
  let memo = memoize(add);
  expect(memo(2, 3)).toBe(5);
  expect(memo(2, 3)).toBe(5);
});
