import { onInput } from './common'

/**
 * Регулярка проверяющая валидность инпута с операторами
 * +, -, *, /, (), )-( ...
 */
const reOperator = /^\)?[/*+-]?\(?$/

/**
 * Маска для инпута, которая пропускает только число
 */
const onlyOperators = {
  bind: (el, binding, vnode) => {
    el.dataset.prevValue = el.value
    vnode.elm.addEventListener('input', () => onInput(reOperator, el, vnode))
  }
}

export default onlyOperators
