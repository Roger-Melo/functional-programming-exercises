'use strict'

const isParameterAnArray = param => Array.isArray(param)
const isParameterAFunction = param => typeof param === 'function'

const map = (arr = [], func = item => item) => {
  if (!isParameterAnArray(arr))
    throw new TypeError('The first parameter must be an array')

  if (!isParameterAFunction(func))
    throw new TypeError('The second parameter must be a function')

  return (function mapInternal (arrInternal, counter) {
    const [head, ...tail] = arrInternal

    return arrInternal.length === 0
      ? []
      : [func(head, counter, arr), ...mapInternal(tail, counter + 1)]
  })(arr, 0)
}

export default map
