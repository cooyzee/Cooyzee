/**
 * @description custom type check
 * @param data
 * @return {String} type （返回具体的类型名称lowercase）
 */
function $typeOf(data) {
  return Object.prototype.toString.call(data).replace(/\[object (\w+)\]/, '$$1').toLowerCase()
}

/**
 * @description
 */

module.exports = {
  $typeOf,
}
