'use strict'

const filter = (arr, func) => {
  return (function filterInternal (arrInternal, counter) {
    const [head, ...tail] = arrInternal

    return arrInternal.length === 0
      ? []
      : (func(head, counter, arr)
        ? [head]
        : []).concat(filterInternal(tail, counter + 1))
  })(arr, 0)
}

export default filter
