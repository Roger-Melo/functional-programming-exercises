'use strict'

import { expect } from 'chai'
import reduce from './reduce'
// import reduceRight from './reduce-right-recursive'

it('reduce should be a function', () => {
  expect(reduce).to.be.a('function')
})

it('reduce([1, 2, 3], (acc, curr) => acc + curr, 0) should return 6', () => {
  const before = reduce([1, 2, 3], (acc, curr) => acc + curr, 0)
  const after = 6
  expect(before).to.be.equal(after)
})

it('reduce([2, 3, 4], (acc, curr) => acc + curr, 0) should return 9', () => {
  const before = reduce([2, 3, 4], (acc, curr) => acc + curr, 0)
  const after = 9
  expect(before).to.be.equal(after)
})

it('reduce([2, 3, 4], (acc, curr) => acc + curr) should return 9', () => {
  const before = reduce([2, 3, 4], (acc, curr) => acc + curr)
  const after = 9
  expect(before).to.be.equal(after)
})

it('reduce([1, 2], (acc, curr) => {acc["number-" + curr] = curr; return acc}, {}) should return {"number-1": 1, "number-2": 2}', () => {
  const before = reduce([1, 2], (acc, curr) => {
    acc["number-" + curr] = curr
    return acc
  }, {})
  const after = {"number-1": 1, "number-2": 2}
  expect(before).to.be.deep.equal(after)
})

it('reduce([1, 2], (acc, curr, index) => acc + index, 0) shoud return 1', () => {
  const before = reduce([1, 2], (acc, curr, index) => acc + index, 0)
  const after = 1
  expect(before).to.be.equal(after)
})

it('reduce([1, 2], (acc, curr, index, array) => acc + array[index], 0) should return 3', () => {
  const before = reduce([1, 2], (acc, curr, index, array) =>
    acc + array[index], 0)
  const after = 3
  expect(before).to.be.equal(after)
})

// it('reduceRight(["ger", "ro"], (acc, curr) => acc + curr, "") should return "roger"', () => {
//   const before = reduceRight(['ger', 'ro'], (acc, curr) => acc + curr, '')
//   const after = 'roger'
//   expect(before).to.be.equal(after)
// })
