import filterInputEvent from './filterInputEvent'

const onInput = (regexp, el, vnode) => {
  let a = regexp.test(el.value) || el.value.length === 0
  if (a) {
    el.dataset.prevValue = el.value
    el.style.borderColor = '#666'
  } else {
    el.value = el.dataset.prevValue
    el.style.borderColor = '#f00'
    setTimeout(() => { el.style.borderColor = '#666' }, 300)
  }
  vnode.elm.dispatchEvent(filterInputEvent(el.value))
}

export default onInput
