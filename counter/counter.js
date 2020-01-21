function counter () {
  let count = 0
  return function () {
    return ++count
  }
}

module.exports = counter
