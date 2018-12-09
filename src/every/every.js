'use strict'

const every = (arr, func) => {
  return (function everyInternal (arrInternal, counter) {
    const [head, ...tail] = arrInternal
    
    return arrInternal.length === 0
      ? true
      : !func(head, counter, arr)
        ? false
        : everyInternal(tail, counter + 1)
  })(arr, 0)
}

export default every
