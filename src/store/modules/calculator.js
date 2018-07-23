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
}

const actions = {
  addFraction: (context) => context.commit('addFraction'),
  updateFraction: (context, {index, data}) => context.commit('updateFraction', {index, data})
}

const mutations = {
  addFraction: (state) => {
    state.fractions.unshift(emptyFraction)
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
