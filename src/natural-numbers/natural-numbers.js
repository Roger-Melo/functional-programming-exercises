// Escreva um programa que retorne um array com os números naturais de 0 até o número passado por parâmetro

'use strict'

const getNaturalNumbers = (num = 0) => {
  if (typeof num !== 'number')
    throw new TypeError('The parameter must be a number')

  return (function getNaturalNumbersInternal (numInternal, counter) {
    return numInternal === 0
      ? []
      : [counter, ...getNaturalNumbersInternal(numInternal - 1, counter + 1)]
  })(num, 1)
}

export default getNaturalNumbers
