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

function numberToLocaleString(input) {
  if (Number.isInteger(input)) {
    return intToLocaleString(input)
  }
  const temp = input.toFixed(3).split('.')
  temp[0] = intToLocaleString(temp[0])
  return temp.join('.').replace(/0+$/, '')
}

function intToLocaleString(integer) {
  return integer.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}


module.exports = {
  $typeOf,
  numberToLocaleString,
  intToLocaleString,
}
