const gcd = (a, b) => (
  b ? gcd(b, a % b) : a
)

const lcm = (a, b) => (
  a / gcd(a, b) * b
)

const operators = {
  '+': (a, b) => {
    let common = lcm(a.denominator, b.denominator)
    a.numerator = a.numerator * (common / a.denominator)
    b.numerator = b.numerator * (common / b.denominator)
    let c = { numerator: a.numerator + b.numerator, denominator: common }
    return c
  },
  '-': (a, b) => {
    let common = lcm(a.denominator, b.denominator)
    a.numerator = a.numerator * (common / a.denominator)
    b.numerator = b.numerator * (common / b.denominator)
    let c = { numerator: a.numerator - b.numerator, denominator: common }
    return c
  },
  '*': (a, b) => ({
    numerator: a.numerator * b.numerator,
    denominator: a.denominator * b.denominator
  }),
  '/': (a, b) => ({
    numerator: a.numerator * b.denominator,
    denominator: a.denominator * b.numerator
  })
}

const reduce = (fraction) => {
  let common = gcd(fraction.numerator, fraction.denominator)
  return {numerator: fraction.numerator / common, denominator: fraction.denominator / common}
}

/**
 * Считает выражение в ОПЗ
 * @param {String} exp выражение в ОПЗ
 * @returns {String} максимально сокращенную дробь, полученную после всех вычислений
 */
const evalPostfix = (exp) => {
  let out = []
  exp.split(' ').forEach(token => {
    if (operators[token]) {
      let a = out.pop()
      let b = out.pop()
      out.push(operators[token](b, a))
    } else {
      let fractionArr = token.split('/')
      if (!fractionArr[1]) fractionArr[1] = 1
      let fraction = {numerator: fractionArr[0], denominator: fractionArr[1]}
      out.push(fraction)
    }
  })
  let fraction = reduce(out.pop())
  return `${fraction.numerator}/${fraction.denominator}`
}

export default evalPostfix
