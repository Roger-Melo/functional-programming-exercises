'use strict'

import { expect } from 'chai'
import getNaturalNumbers from './natural-numbers'

it('getNaturalNumbers should be a function', () => {
  expect(getNaturalNumbers).to.be.a('function')
})

it('getNaturalNumbers(3) should return [1, 2, 3]', () => {
  const before = getNaturalNumbers(3)
  const after = [1, 2, 3]
  expect(before).to.be.deep.equal(after)
})

it('getNaturalNumbers(4) should return [1, 2, 3, 4]', () => {
  const before = getNaturalNumbers(4)
  const after = [1, 2, 3, 4]
  expect(before).to.be.deep.equal(after)
})

it('getNaturalNumbers() should return []', () => {
  const before = getNaturalNumbers()
  const after = []
  expect(before).to.be.deep.equal(after)
})

it('getNaturalNumbers("3") should throw a TypeError', () => {
  let error
  
  try {
    getNaturalNumbers("3")
  } catch (e) {
    error = e
  }

  expect(error.name).to.be.equal('TypeError')
})

it('getNaturalNumbers("3") should throw a TypeError with message "The parameter must be a number"', () => {
  let error

  try {
    getNaturalNumbers("3")
  } catch (e) {
    error = e
  }

  expect(error.message).to.be.equal('The parameter must be a number')
})
