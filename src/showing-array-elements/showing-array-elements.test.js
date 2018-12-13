'use strict'

import { expect } from 'chai'
import showElements from './showing-array-elements'

it('showElements should be a function', () => {
  expect(showElements).to.be.a('function')
})

it(
  'showElements([1, 2, 3]) should return "The elements in array are 1, 2, 3"', 
  () => {
    const before = showElements([1, 2, 3])
    const after = 'The elements in array are 1, 2, 3'
    expect(before).to.be.equal(after)
  }
)

it('showElements([1, 2]) should return "The elements in array are 1, 2"', () => {
  const before = showElements([1, 2])
  const after = 'The elements in array are 1, 2'
  expect(before).to.be.equal(after)
})

it('showElements() shoud return a TypeError', () => {
  let error

  try {
    showElements()
  } catch (e) {
    error = e
  }

  expect(error.name).to.be.equal('TypeError')
})

it('showElements() shoud return a TypeError with message "The parameter must be an array"', () => {
  let error

  try {
    showElements()
  } catch (e) {
    error = e
  }

  expect(error.message).to.be.equal('The parameter must be an array')
})

it('showElements([]) should thrown a SyntaxError', () => {
  let error

  try {
    showElements([])
  } catch (e) {
    error = e
  }

  expect(error.name).to.be.equal('SyntaxError')
})

it('showElements([]) should thrown a SyntaxError with message "The array must not be empty', () => {
  let error

  try {
    showElements([])
  } catch (e) {
    error = e
  }

  expect(error.message).to.be.equal('The array must not be empty')
})

it('showElements(1, 2) should throw a TypeError', () => {
  let error

  try {
    showElements(1, 2)
  } catch (e) {
    error = e
  }

  expect(error.name).to.be.equal('TypeError')
})

it('showElements(1, 2) should throw a TypeError with message "The parameter must be an array"', () => {
  let error

  try {
    showElements(1, 2)
  } catch (e) {
    error = e
  }

  expect(error.message).to.be.equal('The parameter must be an array')
})
