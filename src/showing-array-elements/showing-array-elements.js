'use strict'

const showElements = (arr) => {
  if (!Array.isArray(arr))
    throw new TypeError('The parameter must be an array')

  if (arr.length === 0)
    throw new SyntaxError('The array must not be empty')
  
  const str = 'The elements in array are '

  return (function showElementsInternal (arrInternal, strInternal) {
    const [head, ...tail] = arrInternal

    return arrInternal.length === 0
      ? strInternal.slice(0, -2)
      : showElementsInternal(tail, strInternal.concat(`${head}, `))
  })(arr, str)
}

export default showElements
