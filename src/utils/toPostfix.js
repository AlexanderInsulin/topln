const operators = {
  '(': 1,
  ')': 1,
  '+': 2,
  '-': 2,
  '*': 3,
  '/': 3
}

// ( 2 / 2 ) - 1 * 3 / ( 24 + 4 )
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
          if (operators[ops[ops.length - 1]] >= operators[token] && operators[token] !== 1) { out.push(ops.pop()) }
          ops.push(token)
          break
      }
    } else {
      out.push(token)
    }
  })
  return out.concat(ops.reverse()).join(' ')
}

export default toPostfix
