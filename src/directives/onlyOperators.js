const reOperator = /^\)?[\/\*\+\-]?\(?$/

const filerInputEvent = (data) => new CustomEvent('filtered', { detail: data })

const onInput = (el, vnode) => {
  let a = reOperator.test(el.value) || el.value.length === 0
  if (a) {
    el.dataset.prevValue = el.value
    el.style.borderColor = '#666'
  } else {
    el.value = el.dataset.prevValue
    el.style.borderColor = '#f00'
    setTimeout(() => { el.style.borderColor = '#666' }, 300)
  }
  vnode.elm.dispatchEvent(filerInputEvent(el.value))
}

const onlyOperators = {
  bind: (el, binding, vnode) => {
    el.dataset.prevValue = el.value
    el.addEventListener('input', () => onInput(el, vnode))
  },
  componentUpdated: (el, vnode) => {
    el.value = vnode.data
  }
}

export default onlyOperators
