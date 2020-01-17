function simpleIterable () {
  return {
    start: 1,
    end: 5,
    [Symbol.iterator]() {
      return this
    },
    next() {
      if (this.start <= this.end) {
        return {value: this.start++, done: false}
      } else {
        return {value: undefined, done: true}
      }
    }
  }
}

module.exports = simpleIterable
