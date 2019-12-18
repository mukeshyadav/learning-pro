function arrayWithoutDuplicateAndWithoutValues(checker, duplicateValues) {
  let arrWithoutDupicateValues = Array.from(new Set(duplicateValues));
  if (checker.length) {
    if (arrWithoutDupicateValues.includes(checker[0])) {
      arrWithoutDupicateValues.splice(
        arrWithoutDupicateValues.indexOf(checker[0]),
        1
      );
    }
    checker.splice(0, 1);
    return arrayWithoutDuplicateAndWithoutValues(
      checker,
      arrWithoutDupicateValues
    );
  } else {
    return arrWithoutDupicateValues;
  }
}
