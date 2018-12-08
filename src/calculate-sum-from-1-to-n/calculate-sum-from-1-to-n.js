'use strict'

const calculateSum = (num) => {
  if (num === undefined)
    throw new TypeError('The parameter must be a number')
  return (function calculateSumInternal (numInternal) {
    return numInternal === num
      ? numInternal
      : numInternal + calculateSumInternal(numInternal + 1)
  })(0)
}

export default calculateSum
