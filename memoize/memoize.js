function memoize (func) {
  let resultCache = {}
  return function () {
    let key = JSON.stringify(arguments)
    if (resultCache[key]) {
      return resultCache[key]
    } else {
      let result = func.apply(this, arguments)
      resultCache[key] = result
      return result
    }
  }
}

module.exports = memoize
