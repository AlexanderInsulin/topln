const emptyFraction = { numerator: '', denominator: '' }

const initialState = {
  fractions: [
    {...emptyFraction},
    {...emptyFraction}
  ],
  operators: [''],
  value: {...emptyFraction},
  errors: []
}

const getters = {
  filled: state => !(!!state.fractions.filter(fraction => fraction.numerator === '' || fraction.denominator === '').length ||
                    !!state.operators.filter(operator => operator === '').length),
  toString: (state, getters) =>
    (getters.filled
      ? (state.fractions.map((fraction, index) => (
        `${fraction.numerator}/${fraction.denominator}${state.operators[index] ? ' ' + state.operators[index] : ''}`
      )))
      : [])
      .join(' ')
}

const actions = {
  addFraction: (context) => context.commit('addFraction'),
  updateFraction: (context, {index, data}) => context.commit('updateFraction', {index, data})
}

const mutations = {
  addFraction: (state) => {
    state.fractions.unshift({ ...emptyFraction })
    state.operators.unshift('')
  },
  updateFraction: (state, { index, data }) => {
    let fraction = state.fractions.find((fraction, findex) => index === findex)
    fraction.denominator = data.denominator
    fraction.numerator = data.numerator
  }
}

export default {
  namespaced: true,
  state: initialState,
  actions,
  mutations,
  getters
}
