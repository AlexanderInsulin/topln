const operators = {
  '(': 1,
  ')': 1,
  '+': 2,
  '-': 2,
  '*': 3,
  '/': 3
}

/**
 * Конвертирует обычную запись выражение в ОПЗ
 * @param {String} exp выражение в инфиксной нотации
 * @returns {String} выражение в постфиксной нотации
 */
const toPostfix = (exp) => {
  let out = []
  let ops = []
  exp.split(' ').forEach(token => {
    if (operators[token]) {
      switch (token) {
        case ')':
          while (ops[ops.length - 1] !== '(') {
            out.push(ops.pop())
            if (ops.length === 0) throw new Error('Неправильный формат выражения')
          }
          ops.pop()
          break
        default:
          if (operators[ops[ops.length - 1]] >= operators[token] && operators[token] !== 1) {
            out.push(ops.pop())
          }
          ops.push(token)
          break
      }
    } else {
      out.push(token)
    }
  })
  if (ops.find(op => op === '(')) throw new Error('Неправильный формат выражения')
  return out.concat(ops.reverse()).join(' ')
}

export default toPostfix
