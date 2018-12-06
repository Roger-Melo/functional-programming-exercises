'use strict'

import { expect } from 'chai'
import reverse from './reverse'

it('reverse shoud be a function', () => {
  expect(reverse).to.be.a('function')
})

it('reverse([1]) should return [1]', () => {
  expect(reverse([1])).to.be.deep.equal([1])
})

it('reverse([1, 2]) should return [2, 1]', () => {
  expect(reverse([1, 2])).to.be.deep.equal([2, 1])
})

it('reverse(["roger", "melo"]) should return ["melo", "roger"]', () => {
  expect(reverse(['roger', 'melo'])).to.be.deep.equal(['melo', 'roger'])
})
