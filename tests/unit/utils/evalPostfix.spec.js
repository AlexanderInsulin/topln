import evalPostfix from '@/utils/evalPostfix'

describe('Обратная польская запись', () => {
  it('Считает простые выражения в ОПЗ', () => {
    expect(evalPostfix('1/2 1/2 +')).toBe('1/1')
    expect(evalPostfix('2/3 2/3 -')).toBe('0/1')
    expect(evalPostfix('2/4 2/4 *')).toBe('1/4')
    expect(evalPostfix('2/5 2/5 /')).toBe('1/1')
  })
  it('Считает сложные выражения в ОПЗ', () => {
    expect(evalPostfix('2 2 / 1 3 * 24 4 + / - 37 + 23 13 12 - * 24 / +')).toBe('6527/168')
  })
})
