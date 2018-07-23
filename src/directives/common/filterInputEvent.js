/**
 * Эвент вызываемый директивами, которые фильтруют инпуты после самой фильтрации
 * @param {Object} data
 */
const filterInputEvent = (data) =>
  new CustomEvent('filtered', { detail: data })

export default filterInputEvent
