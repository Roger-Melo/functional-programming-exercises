'use strict'

const showElements = (arr) => {
  if (!Array.isArray(arr))
    throw new TypeError('The parameter must be an array')
  
  if (arr.length === 0)
    throw new SyntaxError('The array must not be empty')

  return `The elements in array are ${arr.join(', ')}`
}

export default showElements
