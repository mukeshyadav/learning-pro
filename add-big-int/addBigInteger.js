function getLargestStringLength(lists) {
  let length = 0;
  for (let i = 0; i < lists.length; i++) {
    if (length < lists[i].length) {
      length = lists[i].length;
    }
  }
  return length;
}

function maskedNumberWithZero(lists, pad) {
  return lists.map(val => val.padStart(pad, "0"));
}

function addBigIntegers(strNumbers) {
  let [totalNumbers, ...totalNumberForAddition] = strNumbers.split(/\s+/);
  let largestStringLength = getLargestStringLength(totalNumberForAddition);
  let arrListOfSameSizeNumbers = maskedNumberWithZero(
    totalNumberForAddition,
    largestStringLength
  );
  let totalSum = [];
  let remainder = 0;
  for (
    let currentNumberIndex = largestStringLength;
    currentNumberIndex > 0;
    currentNumberIndex--
  ) {
    let currSum = 0;
    for (
      let currentListIndex = 0;
      currentListIndex < totalNumbers;
      currentListIndex++
    ) {
      currSum += parseInt(
        ...arrListOfSameSizeNumbers[currentListIndex][currentNumberIndex - 1],
        10
      );
    }
    currSum += parseInt(remainder, 10);
    remainder =
      currentNumberIndex !== 1
        ? currSum.toString().length > 1
          ? currSum.toString().slice(0, currSum.toString().length - 1)
          : 0
        : 0;
    totalSum.unshift(
      currentNumberIndex !== 1
        ? currSum.toString().slice(-1)
        : currSum.toString()
    );
  }
  return totalSum.join("");
}

module.exports = addBigIntegers;
