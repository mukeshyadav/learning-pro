function animalSort (collection, iteratees = []) {
  if (collection === null) {
    return []
  }
  if (!iteratees.length) {
    iteratees = ['numberOfLegs', 'name']
  }
  let compareBy = getMultipleIteratees(iteratees)

  return collection.sort((val1, val2) => eval(compareBy))
}

function getMultipleIteratees (iteratess) {
  let result = []
  for (let iterator of iteratess) {
    result.push(`("" + val1.${iterator}).localeCompare(val2.${iterator})`)
  }
  return result.join(' || ').toString()
}

module.exports = animalSort
