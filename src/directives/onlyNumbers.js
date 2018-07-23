import Vue from 'vue'

const reNumber = /^(-$|-[1-9]\d*\.?\d*|[1-9]\d*\.?\d*|-?0\.\d*|-?0)$/

const filerInputEvent = (data) => new CustomEvent('filtered', { detail: data })

const onInput = (el, vnode) => {
  let a = reNumber.test(el.value) || el.value.length === 0
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

const onUnfocus = (el, vnode) => {
  if (el.value[el.value.length - 1] === '.') {
    el.value = el.value.slice(0, el.value.length - 1)
    vnode.elm.dispatchEvent(filerInputEvent(el.value))
  }
}

const onlyNumbers = {
  bind: (el, binding, vnode) => {
    el.dataset.prevValue = el.value
    el.addEventListener('input', () => onInput(el, vnode))
    el.addEventListener('blur', () => onUnfocus(el, vnode))
  }
}

export default onlyNumbers
