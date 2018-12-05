'use strict'

const isAccInitialUndefined = accInitial => accInitial === undefined

const reduce = (arr, func, accInitial) => {
  const acc = isAccInitialUndefined(accInitial) ? arr[0] : accInitial
  const arrCopy = isAccInitialUndefined(accInitial) ? arr.slice(1) : arr

  return (function reduceInternal (accInternal, arrInternal, counter) {
    const [head, ...tail] = arrInternal
    const accNext = () => func(accInternal, head, counter, arrCopy)

    return arrInternal.length === 0
      ? accInternal
      : reduceInternal(accNext(), tail, counter + 1)
  })(acc, arrCopy, 0)
}

export default reduce
