// A collection of commonly used functions.

/**
 * @description custom type check
 * @param data
 * @return {String} type （返回具体的类型名称lowercase）
 * Symbol.toStringTag property on prototype
 */
function $typeOf(data) {
  return Object.prototype.toString.call(data).replace(/\[object (\w+)\]/, '$1').toLowerCase()
}



module.exports = {
  $typeOf,
}
