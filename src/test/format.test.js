/* eslint-disable no-undef */
const formula = require('../js/main')

const format = formula.Format
const maths = formula.Maths

describe('format test suite.', () => {
  test('testing... format function.', () => {
    expect(format.addComma(13000)).toBe('13,000')
    expect(format.addComma(1000)).toBe('1,000')
    expect(format.addComma(100)).toBe('100')
  })

  test('testing... stringBy00', () => {
    expect(format.stringBy00(0)).toBe('00')

    expect(format.stringBy00(10)).toBe('10')
    expect(format.stringBy00(99)).toBe('99')
    expect(format.stringBy00(100)).toBe('100')

    expect(format.stringBy00(-1000)).toBe('00')
    expect(format.stringBy00(-100)).toBe('00')
    expect(format.stringBy00(-10)).toBe('00')
  })

  test('testing... stringBy000', () => {
    expect(format.stringBy000(0)).toBe('000')

    expect(format.stringBy000(10)).toBe('010')
    expect(format.stringBy000(99)).toBe('099')

    expect(format.stringBy000(100)).toBe('100')
    expect(format.stringBy000(999)).toBe('999')
    expect(format.stringBy000(1999)).toBe('1999')

    expect(format.stringBy000(-1000)).toBe('000')
    expect(format.stringBy000(-100)).toBe('000')
    expect(format.stringBy000(-10)).toBe('000')
  })
})

describe('maths test suite.', () => {
  test('testing... remap', () => {
    expect(maths.remap(50, 0, 100, 0, 1000)).toBe(500)
    expect(maths.remap(5, 0, 10, 20, 1000)).toBe(510)
  })

  test('testing... clamp', () => {
    expect(maths.clamp(-1, 50, 100)).toBe(50)
    expect(maths.clamp(77, 50, 100)).toBe(77)
    expect(maths.clamp(102, 50, 100)).toBe(100)
  })
})
