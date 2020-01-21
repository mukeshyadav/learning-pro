function addSpaceAroundString (str, breakLength) {
  if (str.length <= breakLength) {
    let padSize = Math.ceil((breakLength - str.length) / 2)
    str = str.padStart(breakLength - padSize, ' ')
    str = str.padEnd(breakLength, ' ')
    return str
  } else {
    return str
  }
}

function centerText (str, breakLength) {
  let arrStr = str.split(' ')
  let result = []
  let currStr = []

  for (let i = 0; i < arrStr.length; i++) {
    if ([currStr, arrStr[i]].join(' ').length <= breakLength) {
      currStr.push(arrStr[i])
    } else {
      result.push(addSpaceAroundString(currStr.join(' '), breakLength))
      currStr.length = 0
      currStr.push(arrStr[i])
    }
  }
  if (currStr.length) {
    result.push(addSpaceAroundString(currStr.join(' '), breakLength))
    currStr.length = 0
  }

  return result
}

module.exports = centerText
