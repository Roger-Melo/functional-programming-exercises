'use strict'

const isValueUndefined = value => value === undefined

const reduce = (arr, func, initialValue) => {
  const acc = isValueUndefined(initialValue) ? arr[0] : initialValue
  const arrCopy = isValueUndefined(initialValue) ? arr.slice(1) : arr

  return (function reduceInternal (accInternal, arrInternal, counter) {
    const [head, ...tail] = arrInternal

    return arrInternal.length === 0
      ? accInternal
      : reduceInternal(func(accInternal, head, counter, arrCopy), tail, counter + 1)
  })(acc, arrCopy, 0)
}

export default reduce
