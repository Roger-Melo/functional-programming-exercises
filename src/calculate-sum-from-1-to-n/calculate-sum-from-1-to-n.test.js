'use strict'

import { expect } from 'chai'
import calculateSum from './calculate-sum-from-1-to-n'

it('calculateSum should be a function', () => {
  expect(calculateSum).to.be.a('function')
})

it('calculateSum(3) should return 6', () => {
  expect(calculateSum(3)).to.be.equal(6)
})

it('calculateSum(4) should return 10', () => {
  expect(calculateSum(4)).to.be.equal(10)
})

it('calculateSum() should return a TypeError', () => {
  let error

  try {
    calculateSum()
  } catch (e) {
    error = e
  }

  expect(error.name).to.be.equal('TypeError')
})

it('calculateSum() should throw a TypeError with message "The parameter must be a number"', () => {
  let error

  try {
    calculateSum()
  } catch (e) {
    error = e
  }

  expect(error.message).to.be.equal('The parameter must be a number')
})
