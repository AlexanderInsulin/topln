import toPostfix from '@/utils/toPostfix'

describe('Обратная польская запись', () => {
  it('Переводит простые выражения в ОПЗ', () => {
    expect(toPostfix('1/2 + 1/2')).toBe('1/2 1/2 +')
    expect(toPostfix('2/3 - 2/3')).toBe('2/3 2/3 -')
    expect(toPostfix('2/4 * 2/4')).toBe('2/4 2/4 *')
    expect(toPostfix('2/5 / 2/5')).toBe('2/5 2/5 /')
  })

  it('Переводит выражения с 3 переменными в ОПЗ', () => {
    expect(toPostfix('2 + 2 * 3')).toBe('2 2 3 * +')
    expect(toPostfix('2 - 2 / 4')).toBe('2 2 4 / -')
    expect(toPostfix('2 * 2 + 1')).toBe('2 2 * 1 +')
    expect(toPostfix('2 / 2 - 3')).toBe('2 2 / 3 -')
  })

  it('Переводит выражения со скобками в ОПЗ', () => {
    expect(toPostfix('(2 / 2) - 1 * 3 / (24 + 4)')).toBe('2 2 / 1 3 * 24 4 + / -')
    expect(toPostfix('((2 / 2) - 1 * 3 / (24 + 4)) + 37 + (23 * (13 - 12) / 24)'))
      .toBe('2 2 / 1 3 * 24 4 + / - 37 + 23 13 12 - * 24 / +')
  })
})
