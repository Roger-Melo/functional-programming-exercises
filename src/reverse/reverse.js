'use strict'

const reverse = (arr) => {
  return arr.length === 0
    ? []
    : [...arr.slice(-1), ...reverse(arr.slice(0, -1))]
}

export default reverse
