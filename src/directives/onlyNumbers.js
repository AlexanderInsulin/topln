import { filterInputEvent, onInput } from './common'

/**
 * Регулярка проверяющая валидность инпута с числом
 * 1, -1, 1.0. -1.0, ...
 */
const reNumber = /^(-$|-[1-9]\d*\.?\d*|[1-9]\d*\.?\d*|-?0\.\d*|-?0)$/

const onUnfocus = (el, vnode) => {
  if (el.value[el.value.length - 1] === '.') {
    el.value = el.value.slice(0, el.value.length - 1)
    vnode.elm.dispatchEvent(filterInputEvent(el.value))
  }
}

/**
 * Маска для инпута, которая пропускает только операторы
 */
const onlyNumbers = {
  bind: (el, binding, vnode) => {
    el.dataset.prevValue = el.value
    el.addEventListener('input', () => onInput(reNumber, el, vnode))
    el.addEventListener('blur', () => onUnfocus(el, vnode))
  }
}

export default onlyNumbers
