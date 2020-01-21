const counter = require('./counter')

describe('counter', () => {
  it('should return a function', () => {
    expect(typeof counter()).toBe('function')
  })
  it('should return a value 1 after first call', () => {
    const newCounter = counter()
    expect(newCounter()).toBe(1)
  })
  it('should return a value 2 after second call', () => {
    const newCounter = counter()
    newCounter()
    expect(newCounter()).toBe(2)
  })
})
