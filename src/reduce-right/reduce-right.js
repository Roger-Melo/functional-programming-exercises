'use strict'

import mainReduce from '../reduce/reduce'
import reverse from '../reverse/reverse'

const reduceRight = (arr, ...tail) => mainReduce(reverse(arr), ...tail)

export default reduceRight
